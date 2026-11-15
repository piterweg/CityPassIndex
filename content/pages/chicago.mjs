import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, ctaBand, img, metaItems } from "../components.mjs";

export default {
  path: "chicago.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Chicago CityPASS Prices and Break-Even",
  description: "Chicago CityPASS price and inclusions: five attractions including Shedd Aquarium and Skydeck, 9-day validity, prices checked November 2026.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/chicago-skyline.webp",
  render: () => `
${pageHero({
  image: img("chicago-skyline.webp"),
  alt: "The Chicago River and skyline",
  crumbs: [{ href: "/", label: "Home" }, { href: "cities.html", label: "Cities" }, { href: "chicago.html", label: "Chicago" }],
  eyebrowText: "Chicago",
  title: "Chicago CityPASS, checked",
  lead: "Five attractions including Shedd Aquarium and Skydeck, with three more chosen from six options.",
  meta: metaItems("5 attractions", "Checked November 2026", "Break-even maths"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Pass</span><span class="fact__value">5 attractions</span></div>
      <div class="fact"><span class="fact__label">Attractions</span><span class="fact__value">5 of 8</span></div>
      <div class="fact"><span class="fact__label">Validity</span><span class="fact__value">9 days</span></div>
      <div class="fact"><span class="fact__label">Break-even</span><span class="fact__value">$144 ÷ 5 = $28.80</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The pass", title: "One option", lead: "Adult and child prices from the operator's own page, checked November 2026." })}
    ${table({ caption: "Chicago CityPASS prices", head: ["Option", "Adult", "Child", "Note"], rows: [["5 attractions", "$144", "$114", "Includes Shedd and Skydeck + 3 more"]] })}
    <p class="small muted" style="margin-top:1rem">Price from the official Chicago CityPASS page, checked 12 November 2026. A processing fee may apply at checkout.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What is included", title: "Attractions you can choose from", lead: "" })}
    <ul class="feature-list">
      <li><span class="feature-list__num">01</span><div><h4>Shedd Aquarium</h4><p>General admission plus 4-D; reservations required.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>Skydeck Chicago</h4><p>Expedited entry and The Ledge.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>Shoreline Sightseeing</h4><p>Architecture river tour.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>Field Museum</h4><p>General admission plus two add-ons.</p></div></li>
      <li><span class="feature-list__num">05</span><div><h4>360 Chicago</h4><p>Observation deck with fast pass.</p></div></li>
      <li><span class="feature-list__num">06</span><div><h4>Griffin Museum of Science and Industry</h4><p>Includes Anne Frank exhibition and one experience.</p></div></li>
      <li><span class="feature-list__num">07</span><div><h4>Art Institute of Chicago</h4><p>Fast pass admission.</p></div></li>
      <li><span class="feature-list__num">08</span><div><h4>Adler Planetarium</h4><p>Entry plus two dome shows.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The maths", title: "What the break-even means", lead: "" })}
    ${callout({ icon: "◆", title: "The threshold", text: "At $144 for five attractions, each visit needs to be worth about $28.80 at the gate. Shedd and Skydeck alone are typically close to that, so the pass is easier to justify than a museum-only bundle." })}
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
    ${relatedGuides({ links: [{ kicker: "Compare", title: "Pass comparison", href: "passes.html", text: "CityPASS, Go City and New York Pass compared." }, { kicker: "Tool", title: "Break-even calculator", href: "calculator.html", text: "See when a pass stops paying off." }, { kicker: "Index", title: "All cities", href: "cities.html", text: "Which cities have checked data." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "chicago" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Plan", title: "Make it a weekend", text: "East Coast Weekends has the two-day plan for this city.", actions: `<a class="btn" href="https://eastcoastweekends.com/">Weekend guide</a>` })}
`,
};
