# Google Search Console Setup Guide — GitHub Pages Site

> **Site:** https://tijo45.github.io/budget-smart-living/  
> **Created:** February 22, 2026  
> **Estimated time:** 15–20 minutes

---

## Why Search Console Matters

Google Search Console (GSC) is **free** and gives you:
- Which keywords bring traffic to your site
- Click-through rates for each page
- Indexing status (are your pages actually in Google?)
- Mobile usability issues
- Core Web Vitals performance
- Manual action alerts (penalties)
- Ability to submit sitemaps and request indexing

**For a new site, GSC is your #1 priority tool.** Without it, you're flying blind.

---

## Step 1: Access Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with your Google account (use the same account that manages the site if possible)
3. Click **"Add Property"** (left sidebar dropdown)

---

## Step 2: Choose Property Type

You'll see two options:

| Option | What It Covers | Recommended? |
|--------|---------------|--------------|
| **Domain** | All subdomains and protocols | ❌ Requires DNS verification (not possible with GitHub Pages subdomain) |
| **URL Prefix** | Specific URL and children | ✅ **Use this** |

### Select "URL Prefix" and enter:
```
https://tijo45.github.io/budget-smart-living/
```

> **Important:** Include the trailing slash. Use `https://` (GitHub Pages enforces HTTPS).

Click **Continue**.

---

## Step 3: Verify Ownership

Google will show several verification methods. For GitHub Pages, use **HTML Tag** verification:

### Method: HTML Meta Tag (Recommended)

1. Google will display a meta tag like:
   ```html
   <meta name="google-site-verification" content="abc123xyz..." />
   ```
2. **Copy the entire tag.**

3. Open your site's `index.html` file in the repository.

4. Paste the meta tag inside the `<head>` section:
   ```html
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
     <title>Budget Smart Living</title>
     ...
   </head>
   ```

5. **Also add it to every HTML page's `<head>`** — or at minimum, the `index.html` at the root. If your pages share a common template/header include, add it there.

6. **Commit and push to GitHub:**
   ```bash
   cd /Users/timebot/budget-smart-living
   git add -A
   git commit -m "Add Google Search Console verification meta tag"
   git push origin main
   ```

7. **Wait 1–2 minutes** for GitHub Pages to deploy.

8. Go back to Google Search Console and click **"Verify."**

9. You should see: ✅ **"Ownership verified"**

### Alternative Method: HTML File Upload

1. Download the verification HTML file Google provides (e.g., `google1234abcd.html`)
2. Place it in the repository root: `/budget-smart-living/google1234abcd.html`
3. Commit and push
4. Click Verify in GSC

> **Note:** Both methods work. The meta tag method is cleaner since it doesn't add a visible file to your repo.

---

## Step 4: Submit Your Sitemap

Your site already has a sitemap at `https://tijo45.github.io/budget-smart-living/sitemap.xml`.

1. In Search Console, go to **Sitemaps** (left sidebar)
2. In the "Add a new sitemap" field, enter:
   ```
   https://tijo45.github.io/budget-smart-living/sitemap.xml
   ```
3. Click **Submit**
4. Status should show **"Success"** (may take a few minutes)

> If you see errors, check that the sitemap is accessible by visiting the URL directly in a browser.

---

## Step 5: Request Indexing for Key Pages

Google may take days or weeks to naturally discover your pages. Speed this up:

1. Go to **URL Inspection** (top search bar in GSC)
2. Paste each important URL and click Enter:
   - `https://tijo45.github.io/budget-smart-living/`
   - `https://tijo45.github.io/budget-smart-living/blog/best-free-budgeting-apps-2026.html`
   - `https://tijo45.github.io/budget-smart-living/blog/best-high-yield-savings-accounts-2026.html`
   - `https://tijo45.github.io/budget-smart-living/blog/how-to-start-investing-with-100.html`
   - `https://tijo45.github.io/budget-smart-living/blog/side-hustles-that-actually-pay-2026.html`
   - `https://tijo45.github.io/budget-smart-living/blog/debt-payoff-strategies-for-beginners.html`
3. For each URL, click **"Request Indexing"**
4. Repeat for all 22 blog posts + homepage

> **Limit:** Google allows ~10–12 indexing requests per day. Spread over 2–3 days.

### Priority Order for Indexing Requests

| Day | Pages to Submit |
|-----|----------------|
| Day 1 | Homepage + top 6 money articles (budgeting apps, HYSA, investing, side hustles, debt payoff, credit cards) |
| Day 2 | Insurance articles, tax software, personal loans, credit score, groceries |
| Day 3 | Remaining articles (balance transfer, robo-advisors, prepaid cards, meal kits, etc.) |

---

## Step 6: Configure Settings

### Set Target Country (Optional)
1. Go to **Settings** → **International Targeting** (if available)
2. Set target country to **United States**

### Link Google Analytics (Optional but Recommended)
If you add Google Analytics (GA4) to the site:
1. In GSC, go to **Settings** → **Associations**
2. Link your GA4 property for combined reporting

---

## Step 7: Set Up robots.txt (Already Done)

Your site already has a `robots.txt` at the root. Verify it contains:

```
User-agent: *
Allow: /

Sitemap: https://tijo45.github.io/budget-smart-living/sitemap.xml
```

You can test it in GSC under **Settings** → **robots.txt Tester** (or just visit the URL directly).

---

## Step 8: Monitor & Ongoing Tasks

### Weekly (5 minutes)
- Check **Performance** report → See which queries are getting impressions
- Check **Coverage** report → Ensure no indexing errors

### Monthly (15 minutes)
- Review **Core Web Vitals** → Fix any mobile/desktop issues
- Check **Manual Actions** → Ensure no penalties
- Review **Links** report → See who's linking to you
- Submit any new pages for indexing via URL Inspection

### Key Metrics to Watch

| Metric | What It Means | Target (Month 1) | Target (Month 6) |
|--------|--------------|-------------------|-------------------|
| Total impressions | How often your pages appear in search | 100–500 | 10,000–50,000 |
| Total clicks | Actual traffic from Google | 5–20 | 500–2,500 |
| Average CTR | Click-through rate | 2–5% | 3–8% |
| Average position | Where you rank | 30–80 | 10–30 |
| Indexed pages | Pages Google has indexed | 10–15 | 22+ |

---

## Troubleshooting

### "URL is not on Google"
- Request indexing via URL Inspection
- Check that the page isn't blocked by robots.txt
- Ensure the page has a canonical tag and isn't noindex

### "Submitted URL has crawl issue"
- Verify the URL is accessible (not 404)
- Check GitHub Pages deployment status
- Ensure HTTPS is working (GitHub Pages enforces it)

### "Sitemap couldn't be read"
- Verify sitemap URL is correct and accessible
- Check XML formatting (visit the URL in browser)
- Ensure all URLs in sitemap use `https://` and are valid

### Verification Lost
- The meta tag may have been removed during a code update
- Re-add the verification tag and push to GitHub

---

## Bonus: Bing Webmaster Tools

Don't forget Bing! It's free traffic.

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Sign in with a Microsoft account
3. You can **import from Google Search Console** (easiest method)
4. Or add the site manually with the same HTML tag method
5. Submit your sitemap

Bing drives ~5–10% of search traffic in the US. Free setup, free traffic.

---

*After initial setup, Search Console data takes 2–3 days to start appearing. Full data typically takes 1–2 weeks. Be patient — the data is worth the wait.*
