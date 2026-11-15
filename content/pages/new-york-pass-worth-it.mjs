import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "new-york-pass-worth-it.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Is a New York Pass Worth It? Three Trips Compared",
  description:
    "Three realistic New York trip scenarios compared: five big sights, three museums, and a family weekend. See when a city pass saves money and when buying direct wins.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline-dusk.webp",
  render: () => `
${pageHero({
  image: img("manhattan-skyline-night.webp"),
  alt: "The Manhattan skyline at night",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "new-york.html", label: "New York" },
    { href: "new-york-pass-worth-it.html", label: "Is it worth it?" },
  ],
  eyebrowText: "New York",
  title: "Is a New York pass worth it?",
  lead: "The honest answer is that it depends on five numbers: the gate prices of the attractions you would actually visit. Here are three trips that go different ways.",
  meta: metaItems("3 scenarios", "Gate prices checked", "No sales pitch"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 1", title: "Five big sights: the pass wins", lead: "" })}
    ${table({
      caption: "Five expensive attractions at the gate",
      head: ["Attraction", "Adult gate"],
      rows: [
        ["Empire State Building", "$46"],
        ["Top of the Rock", "$42"],
        ["Edge at Hudson Yards", "$44"],
        ["9/11 Memorial & Museum", "$24"],
        ["Statue of Liberty ferry", "$25.50"],
        ["Total", "$181.50"],
        ["CityPASS (5 attractions)", "$151"],
      ],
    })}
    <p style="margin-top:1rem">The pass saves about <strong>$30 per adult</strong> before any add-ons. This is the trip CityPASS is designed for.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 2", title: "Three museums: buy direct", lead: "" })}
    ${table({
      caption: "A museum-heavy short trip",
      head: ["Attraction", "Adult gate"],
      rows: [
        ["MoMA", "$30"],
        ["American Museum of Natural History", "$28"],
        ["Guggenheim", "~$30"],
        ["Total", "~$88"],
        ["CityPASS (5 attractions)", "$151"],
      ],
    })}
    <p style="margin-top:1rem">The pass forces you to choose five. If you only want three, you would pay <strong>$63 more</strong> for attractions you may not visit. Buy the three tickets directly.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 3", title: "A family weekend: check child pricing", lead: "" })}
    <p>Child CityPASS prices are lower than adult prices, so the break-even changes with the age mix. Two adults and two children visiting five expensive sights will usually still beat the gate, but a family that plans two museums and a park day should not buy a five-attraction pass just to “use it up”.</p>
    ${callout({ icon: "◆", title: "The rule", text: "Count the paid sights you would visit without the pass. If the gate total is higher than the pass price, the pass wins. If it is lower, it does not — and no marketing page should tell you otherwise." })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Worth-it questions", lead: "" })}
    ${faq([
      { q: "Is a New York pass worth it for three days?", a: "<p>Usually yes for a first trip with five big sights; no for a repeat visit focused on food and neighbourhoods.</p>" },
      { q: "What if I only have two days?", a: "<p>Five attractions in two days is rushed. Either buy a smaller pass or pay at the gate for two or three sights.</p>" },
      { q: "Does the pass include transport?", a: "<p>No. CityPASS and Go City cover attractions, not the subway or airport transfers.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Put your own list in and see the result." }, { kicker: "Review", title: "CityPASS review", href: "new-york-citypass.html", text: "What the pass includes and how it works." }, { kicker: "Compare", title: "Go City vs CityPASS", href: "go-city-vs-citypass.html", text: "Which shape fits a shorter trip." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "new-york-worth-it" })}
  </div>
</section>
`,
};
