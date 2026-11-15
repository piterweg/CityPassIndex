import { pageHero, sectionHead, table, callout, faq, newsletter, ctaBand, img, metaItems } from "../components.mjs";

export default {
  path: "boston.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Boston CityPASS Prices and Break-Even",
  description: "Boston CityPASS price and inclusions: four attractions from seven, 9-day validity, adult and child prices checked November 2026.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/boston-skyline.webp",
  render: () => `
${pageHero({
  image: img("boston-skyline.webp"),
  alt: "The Boston skyline and waterfront",
  crumbs: [{ href: "/", label: "Home" }, { href: "cities.html", label: "Cities" }, { href: "boston.html", label: "Boston" }],
  eyebrowText: "Boston",
  title: "Boston CityPASS, checked",
  lead: "Four attractions from seven, nine-day validity — a straightforward bundle rather than a tiered pass.",
  meta: metaItems("4 attractions", "Checked November 2026", "Break-even maths"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Pass</span><span class="fact__value">4 attractions</span></div>
      <div class="fact"><span class="fact__label">Attractions</span><span class="fact__value">4 of 7</span></div>
      <div class="fact"><span class="fact__label">Validity</span><span class="fact__value">9 days</span></div>
      <div class="fact"><span class="fact__label">Break-even</span><span class="fact__value">$84 ÷ 4 = $21</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The pass", title: "One option", lead: "Adult and child prices from the operator's own page, checked November 2026." })}
    ${table({ caption: "Boston CityPASS prices", head: ["Option", "Adult", "Child", "Note"], rows: [["4 attractions", "$84", "$72", "Choose any 4 of 7"]] })}
    <p class="small muted" style="margin-top:1rem">Price from the official Boston CityPASS page, checked 12 November 2026. A processing fee may apply at checkout.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What is included", title: "Attractions you can choose from", lead: "" })}
    <ul class="feature-list">
      <li><span class="feature-list__num">01</span><div><h4>New England Aquarium</h4><p>Reservations required.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>Museum of Science</h4><p>Exhibit halls general admission.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>Boston Harbor City Cruises</h4><p>One-hour harbour cruise; reservations required.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>View Boston</h4><p>Observation deck.</p></div></li>
      <li><span class="feature-list__num">05</span><div><h4>Franklin Park Zoo</h4><p>Daytime admission.</p></div></li>
      <li><span class="feature-list__num">06</span><div><h4>Harvard Museum of Natural History</h4><p>Includes the Peabody Museum.</p></div></li>
      <li><span class="feature-list__num">07</span><div><h4>Museum of Fine Arts</h4><p>General admission and select exhibitions.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The maths", title: "What the break-even means", lead: "" })}
    ${callout({ icon: "◆", title: "The threshold", text: "The pass costs $84 for four attractions, so each visit needs to be worth about $21 at the gate. Aquarium, museum and harbour cruise together usually clear that bar." })}
    <p class="small muted" style="margin-top:1rem">Gate prices for individual attractions are still being checked for this city. The pass price and inclusions above are verified; we publish a full gate-price index only when every figure has a source and a date.</p>
    <p style="margin-top:1.2rem"><a class="link-arrow" href="cities.html">All cities</a> <a class="link-arrow" href="methodology.html" style="margin-left:1rem">Methodology</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Pass questions", lead: "" })}
    ${faq([
      { q: "Is the pass worth it?", a: "<p>Check the gate prices of the attractions you would visit; if they add up to more than the pass price, it wins. We publish gate prices only when verified.</p>" },
      { q: "How long is it valid?", a: "<p>Nine days from first use, according to the operator.</p>" },
      { q: "When was this checked?", a: "<p>The pass prices and inclusions were checked on the operator's own page in November 2026.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "boston" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Plan", title: "Make it a weekend", text: "East Coast Weekends has the two-day plan for this city.", actions: `<a class="btn" href="https://eastcoastweekends.com/boston.html">Weekend guide</a>` })}
`,
};
