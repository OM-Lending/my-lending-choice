// In-memory rate limiting for form submissions
// Stores IP -> timestamp[] mapping

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS = 5; // Max 5 submissions per hour per IP

// In-memory store (resets on server restart)
const requestLog = new Map<string, number[]>();

/**
 * Clean up expired entries from the rate limit store
 */
function cleanupExpired(): void {
  const now = Date.now();
  for (const [ip, timestamps] of requestLog.entries()) {
    const validTimestamps = timestamps.filter(
      (ts) => now - ts < RATE_LIMIT_WINDOW
    );
    if (validTimestamps.length === 0) {
      requestLog.delete(ip);
    } else {
      requestLog.set(ip, validTimestamps);
    }
  }
}

/**
 * Check if an IP is rate limited
 * @param ip - The IP address to check
 * @returns Object with isLimited boolean and retryAfter seconds (if limited)
 */
export function checkRateLimit(ip: string): {
  isLimited: boolean;
  retryAfter?: number;
} {
  cleanupExpired();

  const now = Date.now();
  const timestamps = requestLog.get(ip) || [];

  // Filter to only recent timestamps
  const recentTimestamps = timestamps.filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW
  );

  if (recentTimestamps.length >= MAX_REQUESTS) {
    // Calculate when the oldest request will expire
    const oldestTimestamp = Math.min(...recentTimestamps);
    const retryAfter = Math.ceil(
      (oldestTimestamp + RATE_LIMIT_WINDOW - now) / 1000
    );
    return { isLimited: true, retryAfter };
  }

  return { isLimited: false };
}

/**
 * Record a request from an IP
 * @param ip - The IP address to record
 */
export function recordRequest(ip: string): void {
  const now = Date.now();
  const timestamps = requestLog.get(ip) || [];
  timestamps.push(now);
  requestLog.set(ip, timestamps);
}

/**
 * Get the client IP from request headers
 */
export function getClientIp(headers: Headers): string {
  // Check common proxy headers
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  // Fallback for local development
  return "127.0.0.1";
}

