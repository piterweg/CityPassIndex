import { pageHero, sectionHead, table, callout, faq, newsletter, ctaBand, img, metaItems } from "../components.mjs";

export default {
  path: "data.html",
  navSection: "data",
  bodyClass: "page-inner",
  title: "New York Attraction Prices — Downloadable Data",
  description: "A downloadable table of New York attraction gate prices, checked November 2026, with the CSV used by the City Pass Index calculator.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  jsonLd: [{
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "New York Attraction Gate Prices 2026",
    description: "Adult gate prices for 15 New York attractions, checked against official sellers in November 2026.",
    url: "https://citypassindex.com/data.html",
    creator: { "@type": "Organization", name: "City Pass Index", url: "https://citypassindex.com" },
    license: "https://creativecommons.org/licenses/by/4.0/",
    temporalCoverage: "2026",
    dateModified: "2026-11-12",
    isAccessibleForFree: true,
  }],
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen through a tall window",
  crumbs: [{ href: "/", label: "Home" }, { href: "data.html", label: "Data" }],
  eyebrowText: "Data",
  title: "New York attraction prices, as a table",
  lead: "The gate prices behind the New York break-even maths, checked against official sellers in November 2026. Download the CSV and reuse it with attribution.",
  meta: metaItems("15 attractions", "CSV download", "CC BY 4.0", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The table", title: "Adult gate prices", lead: "Prices are adult 'from' rates; dynamic pricing can make the checkout price higher." })}
    ${table({ caption: "New York attraction gate prices, November 2026", head: ["Attraction", "Adult from", "Notes"], rows: [
      ["Empire State Building", "$46", "Peak dates higher; 102nd floor add-on"],
      ["Top of the Rock", "$42", "Skip-the-line from $82"],
      ["American Museum of Natural History", "$28", "$43 with one exhibition"],
      ["9/11 Memorial & Museum", "$24–36", "Plaza free"],
      ["Statue of Liberty ferry", "$25.50", "Child $16.50"],
      ["Edge", "$44–69", "Dynamic pricing"],
      ["MoMA", "$30", "Under-16s free"],
      ["The Met", "$30", "Pay-what-you-wish for NY residents"],
      ["One World Observatory", "$51", "Standard adult"],
      ["SUMMIT One Vanderbilt", "$44–62", "Dynamic pricing"],
      ["Circle Line cruise", "~$33", "Check operator"],
      ["Intrepid Museum", "~$38", "Check operator"],
      ["Guggenheim", "~$30", "Check operator"],
      ["Central Park", "Free", "Zoo and rink ticketed separately"],
      ["High Line", "Free", "Seasonal hours"],
    ] })}
    <p style="margin-top:1.4rem"><a class="btn" href="assets/data/nyc-attraction-prices.csv" download>Download the CSV</a></p>
    <p class="small muted">Licence: CC BY 4.0 — credit City Pass Index and link to this page. A checked date is part of the data.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Method", title: "How the prices were checked", lead: "" })}
    ${callout({ icon: "◆", title: "Official sellers only", text: "Each price comes from the operator's own booking page, not a reseller. The checked date is November 2026; re-check before booking." })}
    <p style="margin-top:1rem"><a class="link-arrow" href="methodology.html">Read the full methodology</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "data" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Use it", title: "Compare passes with these prices", text: "The calculator uses the same checked gate prices.", actions: `<a class="btn" href="calculator.html">Open the calculator</a>` })}
`,
};
