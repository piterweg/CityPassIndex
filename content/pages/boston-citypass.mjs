import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "boston-citypass.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Boston CityPASS Review: Prices and Attractions",
  description: "Boston CityPASS reviewed: 4 of 7 attractions, $84 adult, nine-day validity, the break-even and what the pass does not cover.",
  priority: "0.85",
  changefreq: "monthly",
  ogImage: "assets/img/boston-skyline.webp",
  render: () => `
${pageHero({
  image: img("boston-skyline.webp"),
  alt: "The Boston skyline",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "boston.html", label: "Boston" },
    { href: "boston-citypass.html", label: "CityPASS review" },
  ],
  eyebrowText: "Boston",
  title: "Boston CityPASS, reviewed",
  lead: "Boston CityPASS is a fixed four-attraction bundle, so the maths is simply: do the four attractions you actually want cost more than $84 at the gate?",
  meta: metaItems("4 of 7", "$84", "9 days", "Checked November 2026"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Price</span><span class="fact__value">$84</span></div>
      <div class="fact"><span class="fact__label">Attractions</span><span class="fact__value">4 of 7</span></div>
      <div class="fact"><span class="fact__label">Validity</span><span class="fact__value">9 days</span></div>
      <div class="fact"><span class="fact__label">Break-even</span><span class="fact__value">$21</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "What you get", title: "One purchase, a fixed list", lead: "Four attractions from seven, one fixed price, valid nine days." })}
    <p>Boston CityPASS is a fixed four-attraction bundle, so the maths is simply: do the four attractions you actually want cost more than $84 at the gate?</p>
    ${table({
      caption: "Boston CityPASS: attractions and prices",
      head: ["Attraction", "Adult gate price", "Status"],
      rows: [
        ["New England Aquarium", "from $34.95", "Verified"],
        ["Museum of Science", "in research", "In research"],
        ["Boston Harbor City Cruises", "in research", "In research"],
        ["View Boston", "in research", "In research"],
        ["Franklin Park Zoo", "in research", "In research"],
        ["Harvard Museum of Natural History", "in research", "In research"],
        ["Museum of Fine Arts", "in research", "In research"]
      ],
    })}
    <p class="small muted" style="margin-top:1rem">Pass prices verified November 2026. Gate prices marked “in research” are not published until checked; the calculator lets you enter them.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "The maths", title: "When the pass wins", lead: "" })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "Expensive sights", text: "A typical first trip pairs the aquarium with the Museum of Science, the harbour cruise and View Boston. If those three average $25–$32 at the gate, the pass wins by a clear margin." })}
      ${callout({ icon: "◆", title: "Cheap lists", text: "A museum-only trip (Harvard Museum of Natural History, MFA, a small museum and one more) can fall below $84; check the gate prices before committing." })}
    </div>
    <p style="margin-top:1.2rem"><a class="btn" href="calculator.html">Run your own list</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Practical", title: "What to know before buying", lead: "" })}
    <ul class="feature-list">
      <li><span class="feature-list__num">01</span><div><h4>The aquarium and harbour cruise need timed reservations</h4><p>The aquarium and harbour cruise need timed reservations.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>View Boston and the Museum of Science are the strongest value for the pass</h4><p>View Boston and the Museum of Science are the strongest value for the pass.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>Child passes are $72; the adult break-even does not transfer directly</h4><p>Child passes are $72; the adult break-even does not transfer directly.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>The pass is valid nine days, which suits a long weekend</h4><p>The pass is valid nine days, which suits a long weekend.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Boston CityPASS questions", lead: "" })}
    ${faq([
      { q: "Is Boston CityPASS worth it?", a: "<p>Usually for a first trip with the aquarium, a museum, the harbour cruise and an observation deck. For three cheap museums, buying direct can win.</p>" },
      { q: "How many attractions does it include?", a: "<p>Four from a list of seven; you choose which four.</p>" },
      { q: "Are reservations needed?", a: "<p>Some attractions require timed entry, especially the aquarium and cruises.</p>" }
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "Decision", title: "Is the pass worth it?", href: "boston-pass-worth-it.html", text: "Three scenarios with real prices." }, { kicker: "Guide", title: "Attraction prices", href: "boston-attractions.html", text: "What each sight costs and what the pass covers." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Add your own list and compare." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "boston-citypass" })}
  </div>
</section>
`,
};
