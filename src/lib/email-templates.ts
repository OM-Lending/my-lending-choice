// Brand colors from project.md
const BRAND_PRIMARY = "#2b4c7e"; // Navy blue
const BRAND_SECONDARY = "#0f172a"; // Dark slate
const BRAND_ACCENT = "#d97706"; // Amber

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

interface ValuationEmailData {
  address: string;
  propertyType: string;
  propertyStatus: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

/**
 * Generate HTML email template for contact form submissions
 */
export function contactEmailTemplate(data: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: ${BRAND_PRIMARY}; padding: 32px 40px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                New Contact Form Submission
              </h1>
              <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.8); font-size: 14px;">
                ${data.subject}
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <!-- Contact Info -->
              <table role="presentation" style="width: 100%; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid ${BRAND_ACCENT};">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">From</p>
                    <p style="margin: 0; font-size: 16px; color: ${BRAND_SECONDARY}; font-weight: 600;">${data.name}</p>
                    <p style="margin: 4px 0 0 0; font-size: 14px; color: #475569;">
                      <a href="mailto:${data.email}" style="color: ${BRAND_PRIMARY}; text-decoration: none;">${data.email}</a>
                      ${data.phone ? `<br/>${data.phone}` : ""}
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                <div style="padding: 16px; background-color: #f8fafc; border-radius: 8px;">
                  <p style="margin: 0; font-size: 15px; color: ${BRAND_SECONDARY}; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>
              
              <!-- CTA -->
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}" 
                       style="display: inline-block; padding: 14px 28px; background-color: ${BRAND_PRIMARY}; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; border-radius: 50px;">
                      Reply to ${data.name.split(" ")[0]}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #64748b; text-align: center;">
                This email was sent from the My Lending Choice website contact form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate HTML email template for property valuation requests
 */
export function valuationEmailTemplate(data: ValuationEmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Property Valuation Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: ${BRAND_PRIMARY}; padding: 32px 40px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                New Property Valuation Request
              </h1>
              <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.8); font-size: 14px;">
                Free valuation request from website
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <!-- Property Details -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 12px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Property Details</p>
                <table role="presentation" style="width: 100%; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid ${BRAND_ACCENT};">
                  <tr>
                    <td style="padding: 16px;">
                      <p style="margin: 0 0 8px 0; font-size: 16px; color: ${BRAND_SECONDARY}; font-weight: 600;">${data.address}</p>
                      <p style="margin: 0; font-size: 14px; color: #475569;">
                        <strong>Type:</strong> ${data.propertyType}<br/>
                        <strong>Status:</strong> ${data.propertyStatus}
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Contact Info -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 12px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Contact Information</p>
                <table role="presentation" style="width: 100%; background-color: #f8fafc; border-radius: 8px;">
                  <tr>
                    <td style="padding: 16px;">
                      <p style="margin: 0 0 4px 0; font-size: 16px; color: ${BRAND_SECONDARY}; font-weight: 600;">${data.firstName} ${data.lastName}</p>
                      <p style="margin: 0; font-size: 14px; color: #475569;">
                        <a href="mailto:${data.email}" style="color: ${BRAND_PRIMARY}; text-decoration: none;">${data.email}</a>
                        ${data.phone ? `<br/>${data.phone}` : ""}
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- CTA -->
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <a href="mailto:${data.email}?subject=Your Property Valuation Request - ${encodeURIComponent(data.address)}" 
                       style="display: inline-block; padding: 14px 28px; background-color: ${BRAND_PRIMARY}; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; border-radius: 50px;">
                      Contact ${data.firstName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #64748b; text-align: center;">
                This email was sent from the My Lending Choice website property valuation form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

