import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "new-york-go-city.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Go City New York Review: Explorer vs All-Inclusive",
  description:
    "Go City New York reviewed: Explorer from $89 for two choices, All-Inclusive from $169 per day. What each covers, when it beats CityPASS and what to check first.",
  priority: "0.85",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline-night.webp",
  render: () => `
${pageHero({
  image: img("manhattan-skyline-night.webp"),
  alt: "The Manhattan skyline at night",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "new-york.html", label: "New York" },
    { href: "new-york-go-city.html", label: "Go City review" },
  ],
  eyebrowText: "New York",
  title: "Go City New York, reviewed",
  lead: "Two different products share the Go City name: Explorer, a pack of attraction choices, and All-Inclusive, a day pass. They solve different trips.",
  meta: metaItems("Explorer from $89", "All-Inclusive from $169", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The two passes", title: "Pick by how you sightsee", lead: "" })}
    ${table({
      caption: "Go City New York options",
      head: ["", "Explorer", "All-Inclusive"],
      rows: [
        ["Price", "from $89 for 2 choices", "from $169 for 1 day"],
        ["Structure", "2–10 attraction choices", "Unlimited entry for the days bought"],
        ["Validity", "30 days to use the choices", "Consecutive days"],
        ["Best for", "Three or four paid sights", "Two or more paid sights per day"],
      ],
    })}
    <p class="small muted" style="margin-top:1rem">Prices are adult “from” rates checked November 2026. Exact tier prices and attraction lists change; check the operator before buying.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "The maths", title: "Explorer vs CityPASS", lead: "" })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "Explorer wins for three sights", text: "CityPASS is a fixed five. If you only want a deck, a museum and a cruise, Explorer's two- or three-choice tiers can be cheaper." })}
      ${callout({ icon: "◆", title: "CityPASS wins for five", text: "For five expensive sights, the $149 CityPASS usually beats a five-choice Explorer pack. Do the arithmetic on your actual list." })}
    </div>
    <p style="margin-top:1.2rem"><a class="btn" href="calculator.html">Compare with the calculator</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Practical", title: "What to check before buying", lead: "" })}
    <ul class="feature-list">
      <li><span class="feature-list__num">01</span><div><h4>Not every attraction is included</h4><p>Go City works with a long list of partners, but premium experiences and some observation decks carry restrictions or need reservations.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>Reservations still apply</h4><p>A pass is not a queue jump. Popular attractions use timed entry and can sell out on weekends.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>Unused choices expire</h4><p>Explorer choices must be used within the validity window; do not buy a ten-choice pack for a three-sight trip.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>All-Inclusive needs a busy day</h4><p>At $169 for one day, the day pass only makes sense if you would genuinely pay for several sights in that day.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Go City questions", lead: "" })}
    ${faq([
      { q: "Is Go City better than CityPASS?", a: "<p>Neither is universally better. Explorer suits three or four sights; CityPASS suits five expensive ones. The right answer depends on your list.</p>" },
      { q: "Can I use both?", a: "<p>You can buy both, but you would be double-paying for any attraction covered twice. Pick one and buy the rest direct.</p>" },
      { q: "Are prices fixed?", a: "<p>No. Both products change prices and inclusions; the figures here are adult prices checked in November 2026.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "Compare", title: "Go City vs CityPASS", href: "go-city-vs-citypass.html", text: "Side-by-side decision guide." }, { kicker: "Guide", title: "CityPASS review", href: "new-york-citypass.html", text: "What the five-attraction bundle covers." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Run the numbers for your list." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "new-york-go-city" })}
  </div>
</section>
`,
};
