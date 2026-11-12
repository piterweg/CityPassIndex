# City Pass Index

Independent tourist-pass and attraction-price data for US cities. New York is live; other cities are marked "in research" until their prices are verified.

- Live domain: https://citypassindex.com
- Static site, no framework: `node tools/build.mjs` renders every module in `content/pages/` into the repository root.
- Calculator: `assets/js/calculator.js`, data inline in `content/pages/calculator.mjs` (checked November 2026).
- QA: `node tools/qa.mjs` (static) and `node tools/qa-browser.mjs` (browser, needs a local server).
- Deploy: Hostinger Git deployment from `main`, or upload `_deploy/CityPassIndex-hostinger.zip`.

## Structure

```
content/
  site.mjs          brand, domain, navigation, footer
  layout.mjs        head, header, footer shell
  components.mjs    shared UI components
  pages/            one module per page
assets/
  css/main.css      brand palette + components
  js/               main.js, search.js, calculator.js
  img/              local WebP images
tools/              build, QA, screenshot helpers
```

## Adding a city

Publish only after gate prices and pass terms are checked against official sellers. Add a page, add the city to `cities.html`, and link it from the navigation or footer.

## Deployment (Hostinger Git)

1. hPanel → **Websites → Add website** for the domain, choose an empty PHP/HTML site.
2. hPanel → **Advanced → Git** → connect this GitHub repository, branch `main`.
3. Set the deploy directory to `public_html` and enable automatic deployment on push.
4. Install the free SSL certificate and test the domain, `/sitemap.xml`, `/robots.txt` and 404.
5. Search Console: add the domain property, submit the sitemap and request indexing for the home page.

Builds are committed with the generated HTML, so Hostinger needs no Node.js at deploy time.
