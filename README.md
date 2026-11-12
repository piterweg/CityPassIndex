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
