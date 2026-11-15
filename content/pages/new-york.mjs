import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "new-york.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "New York CityPASS Index — Prices and Break-Even",
  description: "New York attraction gate prices, CityPASS inclusions and the break-even maths, checked against official sellers in November 2026.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline-night.webp",
  render: () => `
${pageHero({
  image: img("manhattan-skyline-night.webp"),
  alt: "The Manhattan skyline at night",
  crumbs: [{ href: "/", label: "Home" }, { href: "cities.html", label: "Cities" }, { href: "new-york.html", label: "New York" }],
  eyebrowText: "New York",
  title: "CityPASS New York, checked",
  lead: "Five attractions from ten, $149 plus a $2 fee, nine-day validity. Here are the gate prices that decide whether it is worth it.",
  meta: metaItems("10 attractions", "$151 total", "9-day validity", "Checked November 2026"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Pass price</span><span class="fact__value">$149 + $2</span></div>
      <div class="fact"><span class="fact__label">Attractions covered</span><span class="fact__value">5 of 10</span></div>
      <div class="fact"><span class="fact__label">Validity</span><span class="fact__value">9 days</span></div>
      <div class="fact"><span class="fact__label">Break-even</span><span class="fact__value">~$30.20 per visit</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Gate prices", title: "What the ten attractions cost", lead: "Adult 'from' prices checked against the operator's booking page in November 2026." })}
    ${table({ caption: "New York attraction gate prices", head: ["Attraction", "Adult from", "Notes"], rows: [
      ["Empire State Building", "$46", "Peak dates higher; 102nd floor is an add-on"],
      ["Top of the Rock", "$42", "Skip-the-line from $82"],
      ["American Museum of Natural History", "$28", "$43 with one exhibition"],
      ["9/11 Memorial & Museum", "$24–36", "Plaza free"],
      ["Statue of Liberty ferry", "$25.50", "Child $16.50; crown extra"],
      ["Edge", "$44–69", "Dynamic pricing"],
      ["MoMA", "$30", "Under-16s free"],
      ["Circle Line cruise", "~$33", "Check the operator's site"],
      ["Intrepid Museum", "~$38", "Check current admission"],
      ["Guggenheim", "~$30", "Check current admission"],
    ] })}
    <p class="small muted" style="margin-top:1rem">The Met and Central Park are not CityPASS options. Prices marked "~" are approximate and should be checked at booking.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "The maths", title: "When does it pay off?", lead: "" })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "Above the line", text: "Empire State + Top of the Rock + 9/11 + Statue ferry + AMNH = around $165 at the gate, so the $151 pass saves money." })}
      ${callout({ icon: "◆", title: "Below the line", text: "If your five are mostly cheaper sights, or you would skip two of them, buying direct is cheaper. Do the calculator with your real list." })}
    </div>
    <p style="margin-top:1.6rem"><a class="btn" href="calculator.html">Run your five attractions</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "New York pass questions", lead: "" })}
    ${faq([
      { q: "Is CityPASS New York worth it?", a: "<p>It depends on your five. At about $30.20 per attraction, the pass wins when you would visit five expensive sights such as the Empire State, Top of the Rock, the 9/11 Museum and the Statue ferry.</p>" },
      { q: "Are the Met and MoMA included?", a: "<p>MoMA is one of the ten options; the Met is not. Check the current list before you buy.</p>" },
      { q: "How long is the pass valid?", a: "<p>Nine days from first use, with a $2 processing fee at checkout.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    <p class="small muted" style="max-width:760px;margin:0 auto 1.6rem;text-align:center">Need the full attraction guides? <a href="https://nyctrove.com/nyc-attraction-price-index.html" rel="noopener">NYCTrove's New York price index</a> has the same checked prices with opening hours and booking advice.</p>
    ${relatedGuides({ links: [{ kicker: "Compare", title: "Pass comparison", href: "passes.html", text: "CityPASS, Go City and New York Pass side by side." }, { kicker: "Comparison", title: "Go City vs CityPASS", href: "go-city-vs-citypass.html", text: "Which pass wins for your list of sights." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Run the numbers for your own five attractions." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "new-york" })}
  </div>
</section>
`,
};
