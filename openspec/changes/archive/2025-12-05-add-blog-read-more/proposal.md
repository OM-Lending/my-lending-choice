# Change: Blog listing and Read More navigation

## Why
The current `/blog` page uses placeholder content and non-functional Read More links, preventing users from reading articles and limiting SEO value and lead nurturing.

## What Changes
- Introduce structured blog post data with slugs, metadata, and full content blocks.
- Render the `/blog` listing from the shared data with working Read More links to each article.
- Add dynamic blog detail pages for each post that present rich content, metadata, and conversion CTAs.
- Provide page-level SEO metadata for the listing and individual posts.

## Impact
- Affected specs: present-blog-articles
- Affected code: `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx` (new), shared blog data module, optional shared UI components for cards and hero sections

