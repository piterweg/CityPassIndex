import { pageHero, sectionHead, table, card, callout, faq, newsletter, ctaBand, img, metaItems } from "../components.mjs";

export default {
  path: "go-city-vs-citypass.html",
  navSection: "passes",
  bodyClass: "page-inner",
  title: "Go City vs CityPASS: Which Pass Wins?",
  description: "Go City Explorer and All-Inclusive compared with CityPASS New York: prices, what they cover and which pass wins for different trips, checked November 2026.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen through a tall window",
  crumbs: [{ href: "/", label: "Home" }, { href: "passes.html", label: "Passes" }, { href: "go-city-vs-citypass.html", label: "Go City vs CityPASS" }],
  eyebrowText: "Comparison",
  title: "Go City or CityPASS?",
  lead: "One is a five-attraction bundle, the other is a credit pack. The right answer depends on how many paid sights you will actually visit.",
  meta: metaItems("CityPASS $149", "Go City from $89", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Side by side", title: "What each pass is", lead: "Adult prices from the operator's own site, November 2026." })}
    ${table({ caption: "CityPASS vs Go City", head: ["", "CityPASS New York", "Go City Explorer", "Go City All-Inclusive"], rows: [
      ["Price", "$149 + $2 fee", "from $89 (2 choices)", "from $169 (1 day)"],
      ["Structure", "5 attractions from 10", "2–10 choices", "Unlimited entry"],
      ["Validity", "9 days", "30 days to use choices", "Consecutive days"],
      ["Best for", "Five expensive sights", "Three or four paid sights", "Sightseeing every day"],
    ] })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "The verdict", title: "Choose by how many paid sights", lead: "" })}
    <div class="grid grid--2">
      ${card({ kicker: "CityPASS wins if", title: "You want five big sights", text: "Empire State, Top of the Rock, the 9/11 Museum, the Statue ferry and AMNH cost around $165 at the gate — the pass is about $151.", foot: `<a class="link-arrow" href="calculator.html">Run your five</a>` })}
      ${card({ kicker: "Go City wins if", title: "You want three or four", text: "The Explorer pass starts at $89 for two choices. If you only want a deck and two museums, it can beat CityPASS.", foot: `<a class="link-arrow" href="passes.html">Compare all passes</a>` })}
    </div>
    ${callout({ icon: "◆", title: "Count the gate prices first", text: "Write down the paid attractions you would actually visit, add their gate prices, then compare with the pass. Do not buy the pass first." })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Go City vs CityPASS questions", lead: "" })}
    ${faq([
      { q: "Which is cheaper?", a: "<p>CityPASS is cheaper per attraction for five expensive sights. Go City Explorer is cheaper if you only want two or three.</p>" },
      { q: "Can I combine them?", a: "<p>No — that double-pays. Pick one pass or buy the remaining sights directly.</p>" },
      { q: "Are the prices final?", a: "<p>No. Both operators change prices and inclusions; figures here are the adult prices checked in November 2026.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "go-city-vs-citypass" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Next", title: "Run the numbers for your trip", text: "Pick five attractions and compare with both passes.", actions: `<a class="btn" href="calculator.html">Open the calculator</a>` })}
`,
};
