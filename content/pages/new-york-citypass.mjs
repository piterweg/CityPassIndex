import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "new-york-citypass.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "New York CityPASS Review: Price and Attractions",
  description:
    "A practical New York CityPASS review: what the $149 pass covers, how the five-attraction maths works, when it saves money and when buying direct is cheaper.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is New York CityPASS worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For five expensive sights such as the Empire State Building, Top of the Rock, the 9/11 Museum, the Statue of Liberty ferry and a major museum, yes: the gate total is usually above the $151 pass price. For three cheap museums, buying direct is cheaper.",
          },
        },
        {
          "@type": "Question",
          name: "How long is New York CityPASS valid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nine consecutive days from first use, according to the operator.",
          },
        },
      ],
    },
  ],
  render: () => `
${pageHero({
  image: img("manhattan-skyline.webp"),
  alt: "The Manhattan skyline at golden hour",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "new-york.html", label: "New York" },
    { href: "new-york-citypass.html", label: "CityPASS review" },
  ],
  eyebrowText: "New York",
  title: "New York CityPASS, reviewed",
  lead: "Five attractions from ten, nine days to use them, $149 plus a $2 processing fee. The pass is simple; the only question is whether your five would cost more at the gate.",
  meta: metaItems("5 of 10", "$149 + $2", "9 days", "Checked November 2026"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Price</span><span class="fact__value">$149 + $2</span></div>
      <div class="fact"><span class="fact__label">Attractions</span><span class="fact__value">5 of 10</span></div>
      <div class="fact"><span class="fact__label">Validity</span><span class="fact__value">9 days</span></div>
      <div class="fact"><span class="fact__label">Break-even</span><span class="fact__value">~$30 per sight</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "What you get", title: "One price, five choices", lead: "You do not pick the five when you buy; you decide later in the app." })}
    <p>CityPASS New York is a bundle, not a sightseeing pass with unlimited entry. You choose five attractions from a list of ten and visit each once. The pass is valid for nine days from first use, which is long enough for a normal city break.</p>
    ${table({
      caption: "New York CityPASS: the ten attractions",
      head: ["Attraction", "Adult gate price", "Typical use"],
      rows: [
        ["Empire State Building", "from $46", "Observation deck"],
        ["Top of the Rock", "from $42", "Observation deck"],
        ["American Museum of Natural History", "$28", "Museum"],
        ["9/11 Memorial & Museum", "from $24", "Museum"],
        ["Statue of Liberty ferry", "$25.50", "Ferry and Ellis Island"],
        ["Edge at Hudson Yards", "from $44", "Observation deck"],
        ["MoMA", "$30", "Museum"],
        ["Circle Line cruise", "~$33", "Harbour cruise"],
        ["Intrepid Museum", "~$38", "Museum and ship"],
        ["Guggenheim", "~$30", "Museum"],
      ],
    })}
    <p class="small muted" style="margin-top:1rem">Gate prices are adult “from” rates checked November 2026. Dynamic pricing can make weekend and sunset slots more expensive.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "The maths", title: "When the pass wins", lead: "" })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "Five expensive sights", text: "Empire State, Top of the Rock, Edge, the 9/11 Museum and the Statue ferry add up to roughly $180 at the gate — the pass is about $151." })}
      ${callout({ icon: "◆", title: "Three museums and a walk", text: "If your list is mostly $28–30 museums, the gate total can be below the pass price. Then buy direct and keep the flexibility." })}
    </div>
    <p style="margin-top:1.2rem"><a class="btn" href="calculator.html">Run your own five</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Practical", title: "What to know before buying", lead: "" })}
    <ul class="feature-list">
      <li><span class="feature-list__num">01</span><div><h4>Reservations are separate</h4><p>The pass gets you in, but popular decks and museums still use timed entry. Book slots in the app as soon as your dates are fixed.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>One visit per attraction</h4><p>You cannot return to the same museum twice on one pass, and add-ons such as the 102nd floor or the crown are not included.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>Children are priced separately</h4><p>Child passes are cheaper, so an adult break-even does not transfer directly to a family with young children.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>Compare with Go City first</h4><p>If you want three or four paid sights rather than five, the Explorer pass can be the cheaper shape. Our comparison covers both.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "CityPASS questions", lead: "" })}
    ${faq([
      { q: "Is New York CityPASS worth it?", a: "<p>For five expensive sights, usually yes. For a museum-only list, no — check the gate prices of your actual five first.</p>" },
      { q: "Can I choose the attractions later?", a: "<p>Yes. You buy the pass first and choose the five in the app when you are ready to visit.</p>" },
      { q: "Does it include the Statue of Liberty crown?", a: "<p>No. The pass covers the ferry to Liberty Island and Ellis Island; crown access is a separate National Park Service reservation.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "Compare", title: "Go City vs CityPASS", href: "go-city-vs-citypass.html", text: "Credit packs against a fixed bundle." }, { kicker: "Guide", title: "New York attractions", href: "new-york-attractions.html", text: "Gate prices and which pass covers what." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Add your own five and see the difference." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "new-york-citypass" })}
  </div>
</section>
`,
};
