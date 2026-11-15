import { pageHero, sectionHead, table, card, callout, faq, newsletter, relatedGuides, ctaBand, img, metaItems } from "../components.mjs";

export default {
  path: "passes.html",
  navSection: "passes",
  bodyClass: "page-inner",
  title: "New York Tourist Passes Compared",
  description: "CityPASS, Go City Explorer, Go City All-Inclusive, Essentials and New York Pass compared: prices, what they cover and who each one suits, checked November 2026.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen through a tall window",
  crumbs: [{ href: "/", label: "Home" }, { href: "passes.html", label: "Passes" }],
  eyebrowText: "Passes",
  title: "Five passes, five different bets",
  lead: "The big New York passes are not interchangeable. One is a five-attraction bundle, one is a build-your-own credit pack, and the rest sell days. Here is what each actually costs.",
  meta: metaItems("5 passes", "Prices checked November 2026", "Break-even maths", "Calculator"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The comparison", title: "Prices and what they cover", lead: "Adult prices from the operator's own site, checked November 2026. Dynamic pricing applies to some passes." })}
    ${table({ caption: "New York tourist passes compared", head: ["Pass", "From", "What it covers", "Best for"], rows: [
      ["<strong>CityPASS New York</strong>", "$149 + $2 fee", "5 attractions from 10, 9-day validity", "A first trip with five big sights"],
      ["<strong>Go City Explorer</strong>", "from $89", "2 choices, tiers up to 10", "A short trip with three or four paid sights"],
      ["<strong>Go City All-Inclusive</strong>", "from $169", "Unlimited entry, 1–10 days", "Someone out sightseeing every day"],
      ["<strong>Go City Essentials</strong>", "from $99", "1 observation deck + 2 attractions from 15", "One deck and two museums"],
      ["<strong>New York Pass</strong>", "from $89", "100+ attractions, consecutive days", "A packed multi-day itinerary"],
    ] })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "How to choose", title: "Match the pass to the trip", lead: "The cheapest pass is the one you will actually use." })}
    <div class="grid grid--2">
      ${card({ kicker: "Short trip", title: "CityPASS", text: "Five attractions from ten, nine days. Break-even is about $30.20 per attraction, so it wins when your five are the expensive sights.", foot: `<a class="link-arrow" href="new-york.html">See the New York maths</a>` })}
      ${card({ kicker: "Build your own", title: "Go City Explorer", text: "Choose two to ten attractions and pay for the bundle. Better than CityPASS if you only want three or four paid sights.", foot: `<a class="link-arrow" href="calculator.html">Run your numbers</a>` })}
      ${card({ kicker: "Every day", title: "Go City All-Inclusive", text: "Starts at $169 for one day and rises with the number of days. Only worth it if you treat sightseeing as a full-time job.", foot: `<a class="link-arrow" href="calculator.html">Compare the maths</a>` })}
      ${card({ kicker: "Consecutive days", title: "New York Pass", text: "One to ten consecutive days and 100+ attractions. Convenient, but it rewards quantity over quality.", foot: `<a class="link-arrow" href="calculator.html">Check the total</a>` })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The warning", title: "Do not buy a pass first", lead: "" })}
    ${callout({ icon: "◆", title: "List the sights before the pass", text: "Write down the paid attractions you would actually visit, add their gate prices, then compare. A pass is a discount on volume — if you would not buy the volume, it is not a discount." })}
    <p style="margin-top:1.6rem"><a class="btn" href="calculator.html">Open the break-even calculator</a> <a class="btn btn--outline" href="go-city-vs-citypass.html" style="margin-left:.6rem">Go City vs CityPASS</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Pass questions", lead: "" })}
    ${faq([
      { q: "Which pass is cheapest?", a: "<p>None is cheapest in general. CityPASS wins for five expensive sights; Explorer wins for three or four; all-inclusive passes only win with very high daily usage.</p>" },
      { q: "Are these prices final?", a: "<p>No. Pass prices and inclusions change; they are the operator's adult prices checked in November 2026. Confirm at checkout.</p>" },
      { q: "Do you earn commission?", a: "<p>Not at launch. If that changes, the page will say so before the link.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "City", title: "New York CityPASS", href: "new-york.html", text: "The five-attraction bundle, checked." }, { kicker: "Comparison", title: "Go City vs CityPASS", href: "go-city-vs-citypass.html", text: "Explorer credits against a fixed bundle." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Break-even for your own list." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "passes" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Next", title: "Run your own numbers", text: "Pick five attractions and compare the gate total with the pass.", actions: `<a class="btn" href="calculator.html">Open the calculator</a>` })}
`,
};
