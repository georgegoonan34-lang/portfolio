# InvoxAI SEO — Comprehensive Fix & Strategy Prompt

## Current Situation (Critical)

1. **invoxai.uk has ZERO Google indexing.** `site:invoxai.uk` returns nothing. Google does not know this site exists.
2. **invoxai.vercel.app IS indexed** — it shows up for "invox ai" searches pointing to `/dashboard/practice-setup`, a deprecated onboarding page from the old project. This is actively harming the brand.
3. **"invox ai" search results are dominated** by unrelated companies: invox.jp (Japanese OCR/invoicing), invoX Pharma (UK biotech), INVOX Call Tracking (European SaaS), and Invox World. InvoxAI does not appear at all.
4. The live site at invoxai.uk has good content but is missing fundamental SEO infrastructure.

This prompt addresses all four problems. Execute everything in order.

---

## PHASE 1: Kill the Old Vercel Deployment (Do This FIRST)

The deprecated invoxai.vercel.app is actively competing with your real site and showing the wrong page to anyone who finds it.

### 1.1 Remove the Vercel Deployment

Go to your Vercel dashboard and do ONE of the following:

**Option A — Delete the project entirely (recommended if you don't need it):**
- Vercel Dashboard → Select the invoxai project → Settings → scroll to "Delete Project" → Delete it
- This will take the deployment offline and Google will eventually deindex it

**Option B — If you want to keep the Vercel project but redirect to invoxai.uk:**
- Keep the deployment but add a redirect. In the project's `vercel.json` or `next.config.js`, add a permanent redirect from all routes to invoxai.uk:

```json
// vercel.json
{
  "redirects": [
    {
      "source": "/(.*)",
      "destination": "https://invoxai.uk/$1",
      "permanent": true
    }
  ]
}
```

A 301 redirect tells Google "this has permanently moved" and transfers any existing link equity to invoxai.uk.

### 1.2 Request Removal from Google (while the old URL is still resolving or even after deletion)

- Go to Google Search Console (https://search.google.com/search-console)
- Add and verify `invoxai.vercel.app` as a property (URL prefix method — you can verify via DNS or HTML tag if you still control the Vercel project, or use the URL-level removal tool)
- Go to Removals → New Request → enter `invoxai.vercel.app` → Request removal
- This expedites Google dropping the old cached results (normally takes weeks passively)

If you can't verify the vercel.app property, the 301 redirect (Option B) or full deletion (Option A) will still cause Google to drop it — it just takes longer (2-8 weeks).

---

## PHASE 2: Get invoxai.uk Indexed by Google (Urgent)

### 2.1 Google Search Console — Verify invoxai.uk

This is the single most important step. Without this, you're flying blind.

1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Choose **Domain** method → enter `invoxai.uk`
4. Verify via DNS TXT record (your domain registrar will have instructions — add the TXT record Google provides to your DNS settings)
5. Once verified, you have access to indexing tools, performance data, and error reports

If DNS verification is complicated, use the **URL Prefix** method instead → enter `https://invoxai.uk/` → verify via HTML meta tag (add the tag Google gives you to your site's `<head>`).

### 2.2 Submit a Sitemap

Create a sitemap and submit it. For a single-page site, this is simple:

**Create `/public/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://invoxai.uk/</loc>
    <lastmod>2026-02-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Update the `<lastmod>` date every time you make meaningful content changes.

**Submit in Search Console:** Sitemaps → Add a new sitemap → enter `sitemap.xml` → Submit

### 2.3 Create `/public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://invoxai.uk/sitemap.xml
```

This explicitly tells all crawlers they can index everything and points them to the sitemap.

### 2.4 Request Indexing Manually

In Google Search Console:
1. Use the URL Inspection tool at the top
2. Enter `https://invoxai.uk/`
3. Click "Request Indexing"
4. This puts your URL into Google's priority crawl queue — typically indexed within 24-72 hours

Do this immediately after setting up Search Console.

### 2.5 Force a Crawl via Google's Ping

Hit this URL in your browser (just visit it):
```
https://www.google.com/ping?sitemap=https://invoxai.uk/sitemap.xml
```
This notifies Google that your sitemap exists and should be crawled.

---

## PHASE 3: On-Page SEO — Fix the Site's HTML

The live site has good copy but is missing critical SEO elements. Implement ALL of the following.

### 3.1 Meta Tags (in `<head>`)

```html
<!-- Primary Meta Tags -->
<title>InvoxAI — AI Phone Answering & Automation for Trade Businesses | UK</title>
<meta name="description" content="AI voice and chat agents that answer calls, qualify leads, and book jobs for plumbers, electricians, roofers and trade businesses across the UK. Never miss a call again. 24/7 automated inbound handling.">

<!-- Canonical URL (critical — tells Google this is THE definitive URL) -->
<link rel="canonical" href="https://invoxai.uk/" />

<!-- Open Graph / Social -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://invoxai.uk/" />
<meta property="og:title" content="InvoxAI — AI Phone Answering & Automation for Trade Businesses" />
<meta property="og:description" content="AI voice and chat agents that answer calls, qualify leads, and book jobs for trade businesses across the UK. Never miss a call again." />
<meta property="og:image" content="https://invoxai.uk/og-image.png" />
<meta property="og:locale" content="en_GB" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="InvoxAI — AI Phone Answering & Automation for Trade Businesses" />
<meta name="twitter:description" content="AI voice and chat agents that answer calls, qualify leads, and book jobs for trade businesses. UK-based. 24/7." />
<meta name="twitter:image" content="https://invoxai.uk/og-image.png" />

<!-- Geo targeting (tells Google this is a UK business) -->
<meta name="geo.region" content="GB" />
<meta name="geo.placename" content="United Kingdom" />

<!-- Language -->
<html lang="en-GB">
```

**IMPORTANT:** Create a proper OG image (`/public/og-image.png`) — 1200x630px, dark background, "InvoxAI" branding, tagline. This is what appears when the link is shared on social media and in some search results.

### 3.2 Title Tag Strategy

The title tag is the single most important on-page SEO element. The current title "InvoxAI — AI-Powered Lead Capture & Automation for Trade Businesses" is decent but can be stronger.

**Recommended title:**
```
InvoxAI — AI Phone Answering & Automation for Trade Businesses | UK
```

Why this works:
- "AI Phone Answering" is a concrete, searchable term (people search "AI phone answering service")
- "Trade Businesses" is the niche
- "UK" signals geographic relevance
- "InvoxAI" at the start establishes brand

### 3.3 Heading Structure (H1, H2, H3)

Make sure there is exactly ONE `<h1>` on the page — the hero headline:
```html
<h1>Every missed call is a lost job. We fix that.</h1>
```

Each section should have an `<h2>`:
```html
<h2>You're losing jobs while you're busy doing them.</h2>
<h2>An AI agent that works your phone. And everything after.</h2>
<h2>From first call to fully automated in days.</h2>
<h2>We speak trades, not tech.</h2>
<h2>Your customers are calling. Let's make sure someone answers.</h2>
```

Sub-items should use `<h3>`. This hierarchy helps Google understand page structure.

### 3.4 Structured Data (JSON-LD Schema Markup)

Add this to `<head>` — it tells Google exactly what type of business this is and enables rich results:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "InvoxAI",
  "url": "https://invoxai.uk",
  "description": "AI voice and chat agents that answer calls, qualify leads, and book jobs for trade businesses across the UK.",
  "email": "georgegoonan@invoxai.uk",
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "serviceType": [
    "AI Phone Answering Service",
    "AI Voice Agents for Businesses",
    "Business Automation for Tradespeople",
    "AI Lead Qualification",
    "AI Chatbot for Trade Businesses"
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Voice AI Agents",
    "Lead Capture Automation",
    "Trade Business Automation",
    "AI for Plumbers",
    "AI for Electricians"
  ],
  "sameAs": []
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "InvoxAI",
  "url": "https://invoxai.uk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://invoxai.uk/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "InvoxAI",
  "url": "https://invoxai.uk",
  "logo": "https://invoxai.uk/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "georgegoonan@invoxai.uk",
    "contactType": "sales",
    "areaServed": "GB",
    "availableLanguage": "English"
  },
  "description": "We build AI voice and chat agents for trade businesses across the UK. Automated inbound call handling, lead qualification, and business operations automation."
}
</script>
```

### 3.5 Image Alt Text

Every image, icon, and visual element needs descriptive alt text:
```html
<img src="/logo.png" alt="InvoxAI logo — AI phone answering for trade businesses" />
<img src="/og-image.png" alt="InvoxAI — AI voice agents for plumbers, electricians and trade businesses in the UK" />
```

If you're using decorative SVG icons in the services section, add `aria-label` attributes with descriptive text.

### 3.6 Internal Anchor Links

Your nav already uses anchor links (#services, #how-it-works, etc.). Make sure the IDs on the actual sections match exactly. Google uses these for sitelinks in search results.

### 3.7 Page Speed & Core Web Vitals

Google uses page speed as a ranking factor. For a Next.js site on Vercel:
- Use `next/font` for font loading (avoids layout shift)
- Use `next/image` for any images (automatic optimisation)
- Lazy-load below-fold sections and the Remotion animation
- Minimise JavaScript bundle — the Remotion player especially should be dynamically imported
- Run Lighthouse in Chrome DevTools → aim for 90+ on all four metrics

---

## PHASE 4: Keyword Strategy

### 4.1 Primary Keywords (target these on the main page)

These are the terms real potential customers would search for:

| Keyword | Search Intent | How to Target |
|---------|--------------|---------------|
| `ai phone answering service uk` | High intent, commercial | Title tag, H1, meta description, body copy |
| `ai receptionist for small business` | High intent, commercial | Services section copy |
| `ai call answering for tradespeople` | Exact niche match | Hero subheadline, problem section |
| `ai voice agent for plumbers` | Long-tail, very specific | Services card copy, schema markup |
| `never miss a call ai` | Problem-aware | H1 headline, CTA sections |
| `automated phone answering for trade businesses` | Commercial | How It Works section |
| `ai lead capture for electricians` | Long-tail niche | Body copy, alt text |
| `invox ai` | Brand search | Title tag (brand first), entire page |
| `invoxai` | Brand search | Title tag, canonical URL, schema |
| `ai business automation uk` | Commercial, broader | Services card 2 (freelance/integration) |

### 4.2 Secondary Keywords (use naturally in body copy)

- "missed calls plumber", "phone answering service trades", "virtual receptionist trades"
- "ai for small businesses uk", "business automation plumber electrician"
- "24/7 call answering trades", "ai lead qualification"
- "ai agent for inbound enquiries", "automated booking system trades"

### 4.3 Keyword Placement Rules

- **Title tag:** Primary brand + top keyword + location
- **Meta description:** 2-3 keywords worked naturally into a compelling sentence
- **H1:** Emotional/memorable headline (current one is great)
- **H2s:** One target keyword per H2, naturally phrased
- **Body copy:** Keywords should appear naturally — don't stuff. If it reads awkwardly, rewrite it.
- **Image alt text:** Descriptive, include keywords where natural
- **URL:** Already good — `invoxai.uk/` for the main page

---

## PHASE 5: Content Strategy (Post-Launch)

A single-page site has limited SEO surface area. To compete for multiple keywords and build authority, you need additional pages.

### 5.1 Blog / Resources Section (High Priority)

Create a `/blog` section and publish articles targeting long-tail keywords that tradespeople actually search for. Aim for 1-2 posts per week initially.

**Article ideas:**
- "Why Plumbers Are Losing Jobs to Missed Calls (And How AI Fixes It)" → targets "plumber missed calls"
- "AI Phone Answering vs Hiring a Receptionist: Cost Comparison for Trade Businesses" → targets "phone answering service cost trades"
- "How AI Voice Agents Actually Work — Explained for Tradespeople" → targets "ai voice agent explained"
- "5 Ways Electricians Are Using AI to Win More Work in 2026" → targets "ai for electricians"
- "What Happens When a Customer Calls and No One Answers?" → targets "missed call statistics business"
- "AI Automation for Roofers: From Missed Calls to Booked Jobs" → targets "ai for roofers"
- "How to Set Up Automated Lead Capture for Your Trade Business" → targets "automated lead capture trades"

Each blog post should:
- Be 800-1500 words (long enough for Google to consider it substantial)
- Target one primary keyword and 2-3 secondary keywords
- Link back to the main landing page (internal linking)
- Have a clear CTA ("Want this for your business? Get in touch")
- Include proper meta tags and schema markup (Article schema)

### 5.2 Individual Service Pages (Medium Priority)

Once traffic grows, create dedicated pages:
- `/ai-inbound-agents` — deep dive on the core product
- `/ai-automation` — the freelance/integration offering
- `/industries/plumbers` — trade-specific landing page
- `/industries/electricians` — trade-specific landing page
- `/industries/roofers` — trade-specific landing page

Trade-specific pages are powerful because they can rank for very specific long-tail searches like "ai phone answering for plumbers uk".

### 5.3 Case Studies (When Available)

- `/case-studies/plumber-manchester` — real results, real numbers
- These build trust AND rank for local + niche keywords
- Include before/after data: "Before InvoxAI: 40% of calls missed. After: 100% answered, 35% more jobs booked."

---

## PHASE 6: Google Business Profile

Even though InvoxAI is primarily an online service, setting up a Google Business Profile boosts local SEO signals and helps with brand searches.

1. Go to https://business.google.com
2. Create a profile for "InvoxAI"
3. Category: "Business management consultant" or "Computer consultant" or "AI service" (choose the closest match)
4. Service area: United Kingdom
5. Website: https://invoxai.uk
6. Add description using primary keywords
7. Add services: "AI Phone Answering", "AI Voice Agents", "Business Automation", "Lead Capture Automation"
8. Post regular updates (new blog posts, service updates) — Google rewards active profiles

This helps Google connect the brand name "InvoxAI" with the website, which is critical for winning the brand search.

---

## PHASE 7: Off-Page SEO & Link Building

Google ranks sites higher when other reputable sites link to them. For a new site, this is the hardest but most impactful part.

### 7.1 Directory Listings (Quick Wins)

Register InvoxAI on:
- **Yell.com** (UK business directory)
- **Trustpilot** (claim a profile, even before reviews)
- **Clutch.co** (for the AI/development service angle)
- **Google Business Profile** (see above)
- **LinkedIn Company Page** (create one for InvoxAI if you haven't)
- **Crunchbase** (free basic profile)
- **Product Hunt** (when the product is ready for a wider audience)

Each listing should have:
- Consistent NAP (Name, Address, Phone) — even if it's just name + website
- Link back to https://invoxai.uk
- Consistent description mentioning "AI phone answering for trade businesses"

### 7.2 Social Profiles

Create and link:
- **LinkedIn Company Page** for InvoxAI
- **X (Twitter)** profile for InvoxAI
- **Facebook Business Page** (many tradespeople are active on Facebook)

Add these URLs to the `sameAs` field in the Organization schema markup. Post regularly — even sharing blog posts counts.

### 7.3 Guest Posts & PR (Longer Term)

- Write guest articles for trade industry blogs/magazines about "how AI is changing the trades"
- Comment meaningfully in trade forums and Facebook groups (don't spam — be genuinely helpful)
- Reach out to trade business podcasts about being a guest
- Submit to UK startup directories and "AI companies" lists

### 7.4 Backlink from Personal Profiles

If you (George) have a personal website, LinkedIn, or portfolio, link to invoxai.uk from your bio. Every legitimate backlink helps.

---

## PHASE 8: Technical Checks

### 8.1 HTTPS

Ensure invoxai.uk is served over HTTPS (it appears to be, via Vercel). Confirm there's no mixed content.

### 8.2 Canonical URL

Make sure the canonical URL is consistent everywhere:
```html
<link rel="canonical" href="https://invoxai.uk/" />
```
Not `https://www.invoxai.uk/` (unless you're using www). Pick one and stick with it. If someone visits `www.invoxai.uk`, it should redirect to `invoxai.uk` (or vice versa).

### 8.3 Mobile-Friendliness

Google uses mobile-first indexing. Run the mobile-friendly test:
https://search.google.com/test/mobile-friendly?url=https://invoxai.uk

Fix any issues it flags.

### 8.4 Trailing Slash Consistency

Next.js can be inconsistent with trailing slashes. In `next.config.js`, set:
```js
module.exports = {
  trailingSlash: false, // or true — just be consistent
}
```

### 8.5 404 Page

Create a proper 404 page that links back to the homepage. This helps retain visitors who land on broken links and signals good site maintenance to Google.

---

## PHASE 9: Monitoring & Iteration

### 9.1 Google Search Console — Check Weekly

After setup, monitor:
- **Coverage report:** Are your pages being indexed? Any errors?
- **Performance report:** What queries are people finding you for? What's your average position?
- **URL Inspection:** Check specific URLs to ensure they're indexed correctly

### 9.2 Track These Metrics

| Metric | Target (3 months) | Target (6 months) |
|--------|-------------------|-------------------|
| Pages indexed | All pages | All pages + blog posts |
| Brand search position ("invox ai") | Top 10 | Top 3 |
| "ai phone answering uk" position | Top 50 | Top 20 |
| Monthly organic impressions | 500+ | 2,000+ |
| Monthly organic clicks | 50+ | 200+ |

### 9.3 Ongoing Tasks

- **Weekly:** Check Search Console for errors, publish 1 blog post
- **Monthly:** Review keyword rankings, update meta tags if needed, check Core Web Vitals
- **Quarterly:** Audit backlink profile, update schema markup, add new service pages

---

## Priority Execution Order

Do these in this exact order:

1. **TODAY:** Delete or redirect invoxai.vercel.app (Phase 1)
2. **TODAY:** Set up Google Search Console for invoxai.uk, submit sitemap, request indexing (Phase 2)
3. **TODAY:** Add robots.txt and sitemap.xml to the live site (Phase 2)
4. **THIS WEEK:** Implement all meta tags, schema markup, and on-page fixes (Phase 3)
5. **THIS WEEK:** Set up Google Business Profile (Phase 6)
6. **THIS WEEK:** Create LinkedIn Company Page, claim social profiles (Phase 7)
7. **NEXT WEEK:** Register in business directories (Phase 7)
8. **ONGOING:** Start publishing blog content (Phase 5)
9. **ONGOING:** Monitor Search Console and iterate (Phase 9)

---

## Expected Timeline

- **24-72 hours after Phase 2:** invoxai.uk should appear in Google's index
- **1-2 weeks:** Brand search "invox ai" should start showing invoxai.uk (likely not #1 yet due to competition from established domains)
- **2-4 weeks:** Old vercel.app result should disappear from search (faster if you deleted the project)
- **1-3 months:** With consistent blog content and backlinks, should be competing for page 1 on brand terms
- **3-6 months:** With sustained effort, should rank for commercial long-tail keywords

The brand name competition is real — invox.jp, invoX Pharma, and INVOX Call Tracking are established domains. Winning the brand search will take consistent effort, but the advantage is that none of them are targeting "ai phone answering for trade businesses" — that niche is yours to own.
