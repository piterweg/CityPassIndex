import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "new-york-attractions.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "New York Attraction Ticket Prices and Pass Coverage",
  description:
    "Gate prices for ten New York attractions, which ones New York CityPASS covers and how much each visit is worth. Checked against official sellers in November 2026.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline.webp",
  render: () => `
${pageHero({
  image: img("manhattan-skyline.webp"),
  alt: "The Manhattan skyline at golden hour",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "new-york.html", label: "New York" },
    { href: "new-york-attractions.html", label: "Attractions" },
  ],
  eyebrowText: "New York",
  title: "What the attractions actually cost",
  lead: "Ten paid sights, their adult gate prices and whether New York CityPASS covers them. Use this as the shopping list before you compare passes.",
  meta: metaItems("10 attractions", "Gate prices", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The table", title: "Gate prices and pass coverage", lead: "All ten are included in New York CityPASS; you choose five." })}
    ${table({
      caption: "New York attraction gate prices, November 2026",
      head: ["Attraction", "Adult gate", "Type", "CityPASS"],
      rows: [
        ["Empire State Building", "from $46", "Observation deck", "Included"],
        ["Top of the Rock", "from $42", "Observation deck", "Included"],
        ["Edge at Hudson Yards", "from $44", "Observation deck", "Included"],
        ["9/11 Memorial & Museum", "from $24", "Museum", "Included"],
        ["Statue of Liberty ferry", "$25.50", "Ferry", "Included"],
        ["American Museum of Natural History", "$28", "Museum", "Included"],
        ["MoMA", "$30", "Museum", "Included"],
        ["Intrepid Museum", "~$38", "Museum and ship", "Included"],
        ["Circle Line cruise", "~$33", "Harbour cruise", "Included"],
        ["Guggenheim", "~$30", "Museum", "Included"],
      ],
    })}
    <p class="small muted" style="margin-top:1rem">“From” prices can rise with dynamic pricing at weekends and sunset slots. Add-ons such as the 102nd floor, City Climb or Statue of Liberty crown are not included in the pass.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "How to use it", title: "Build the five before you buy", lead: "" })}
    <p>Sort the table by what you would actually pay, not by what sounds essential. Three observation decks are similar experiences; one deck, one museum, one ferry, one neighbourhood walk and one cruise is usually a better trip — and often a cheaper list.</p>
    ${callout({ icon: "◆", title: "The break-even", text: "CityPASS costs about $151 for five attractions, so the average visit needs to be worth about $30. If your five average below that, buying direct wins." })}
    <p style="margin-top:1.2rem"><a class="btn" href="calculator.html">Test your five</a> <a class="btn btn--outline" href="data.html" style="margin-left:.6rem">Download the CSV</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Attraction questions", lead: "" })}
    ${faq([
      { q: "Are these the final prices?", a: "<p>They are the adult “from” prices checked in November 2026. Dynamic pricing can make the checkout price higher, especially at popular sunset slots.</p>" },
      { q: "Which attraction is the best value?", a: "<p>The observation decks ($42–46) and the 9/11 Museum are the strongest value for pass maths; the free sights are free either way.</p>" },
      { q: "Does CityPASS include the Empire State 102nd floor?", a: "<p>No, only the main observation deck. The 102nd floor is a paid add-on.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "Review", title: "CityPASS review", href: "new-york-citypass.html", text: "The five-attraction bundle explained." }, { kicker: "Compare", title: "Go City vs CityPASS", href: "go-city-vs-citypass.html", text: "Credit packs vs a fixed bundle." }, { kicker: "City", title: "New York overview", href: "new-york.html", text: "All pass options for New York." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "new-york-attractions" })}
  </div>
</section>
`,
};
