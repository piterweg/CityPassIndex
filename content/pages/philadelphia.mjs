import { pageHero, sectionHead, table, callout, faq, newsletter, ctaBand, img, metaItems } from "../components.mjs";

export default {
  path: "philadelphia.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Philadelphia CityPASS Prices and Break-Even",
  description: "Philadelphia CityPASS prices and inclusions: 3, 4 or 5 attractions, 9-day validity, adult and child prices checked November 2026.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/philadelphia-skyline.webp",
  render: () => `
${pageHero({
  image: img("philadelphia-skyline.webp"),
  alt: "The Philadelphia skyline seen across the Schuylkill River",
  crumbs: [{ href: "/", label: "Home" }, { href: "cities.html", label: "Cities" }, { href: "philadelphia.html", label: "Philadelphia" }],
  eyebrowText: "Philadelphia",
  title: "Philadelphia CityPASS, checked",
  lead: "Three, four or five attractions from nine, nine-day validity, and a lower entry price than New York's pass.",
  meta: metaItems("3/4/5 attractions", "Checked November 2026", "Break-even maths"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Pass</span><span class="fact__value">3/4/5 attractions</span></div>
      <div class="fact"><span class="fact__label">Attractions</span><span class="fact__value">3–5 of 9</span></div>
      <div class="fact"><span class="fact__label">Validity</span><span class="fact__value">9 days</span></div>
      <div class="fact"><span class="fact__label">Break-even</span><span class="fact__value">$66 ÷ 3 = $22</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The pass", title: "Three options", lead: "Adult and child prices from the operator's own page, checked November 2026." })}
    ${table({ caption: "Philadelphia CityPASS prices", head: ["Option", "Adult", "Child", "Note"], rows: [["3 attractions", "$66", "$54", "Choose any 3"], ["4 attractions", "$84", "$66", "Choose any 4"], ["5 attractions", "$98", "$78", "Choose any 5"]] })}
    <p class="small muted" style="margin-top:1rem">Prices from the official Philadelphia CityPASS page, checked 12 November 2026. A processing fee may apply at checkout.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What is included", title: "Attractions you can choose from", lead: "" })}
    <ul class="feature-list">
      <li><span class="feature-list__num">01</span><div><h4>The Franklin Institute</h4><p>Science museum and planetarium.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>Adventure Aquarium</h4><p>Aquarium in Camden; reservations required.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>Philadelphia Zoo</h4><p>Daytime general admission.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>Big Bus / Trolley Works</h4><p>One-day hop-on hop-off tour.</p></div></li>
      <li><span class="feature-list__num">05</span><div><h4>Eastern State Penitentiary</h4><p>Daytime admission and audio tour.</p></div></li>
      <li><span class="feature-list__num">06</span><div><h4>Battleship New Jersey</h4><p>Self-guided tour in Camden.</p></div></li>
      <li><span class="feature-list__num">07</span><div><h4>Museum of the American Revolution</h4><p>General admission.</p></div></li>
      <li><span class="feature-list__num">08</span><div><h4>National Constitution Center</h4><p>General admission.</p></div></li>
      <li><span class="feature-list__num">09</span><div><h4>Barnes Foundation</h4><p>General admission, valid two days; reservations required.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The maths", title: "What the break-even means", lead: "" })}
    ${callout({ icon: "◆", title: "The threshold", text: "The three-attraction pass costs $66, so each visit needs to be worth about $22 at the gate. The five-attraction pass costs $98, or about $19.60 per visit — a lower bar per attraction, but only if you would visit five." })}
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
    ${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "philadelphia" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Plan", title: "Make it a weekend", text: "East Coast Weekends has the two-day plan for this city.", actions: `<a class="btn" href="https://eastcoastweekends.com/philadelphia.html">Weekend guide</a>` })}
`,
};
