import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "boston-pass-worth-it.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Is Boston CityPASS Worth It? Three Scenarios",
  description: "Three realistic Boston trips compared: when the CityPASS beats gate prices, when it is close and when buying direct is cheaper.",
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
    { href: "boston-pass-worth-it.html", label: "Is it worth it?" },
  ],
  eyebrowText: "Boston",
  title: "Is Boston CityPASS worth it?",
  lead: "Three realistic lists, the gate prices we have verified and the break-even line. The pass is not automatically the answer.",
  meta: metaItems("3 scenarios", "$84", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 1", title: "A short list", lead: "" })}
    <p>New England Aquarium starts at $34.95. The other three attractions need to average more than $16.35 for the $84 pass to beat buying direct.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 2", title: "A fuller trip", lead: "" })}
    <p>A typical first trip pairs the aquarium with the Museum of Science, the harbour cruise and View Boston. If those three average $25–$32 at the gate, the pass wins by a clear margin.</p>
    ${callout({ icon: "◆", title: "The threshold", text: "At $84 for 4 of 7, each attraction needs to be worth about $21 at the gate." })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 3", title: "When buying direct wins", lead: "" })}
    <p>A museum-only trip (Harvard Museum of Natural History, MFA, a small museum and one more) can fall below $84; check the gate prices before committing.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Worth-it questions", lead: "" })}
    ${faq([
      { q: "Is Boston CityPASS worth it?", a: "<p>It depends on the list. For the fuller trip above, usually yes; for a short museum-only visit, buying direct can be cheaper.</p>" },
      { q: "How many attractions do I need?", a: "<p>The pass covers 4 of 7; you cannot buy fewer. Compare the pass price with the gate prices of the attractions you would actually visit.</p>" },
      { q: "Are the prices current?", a: "<p>Pass prices and verified gate prices were checked in November 2026; dynamic pricing can change the checkout price.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "Review", title: "CityPASS review", href: "boston-citypass.html", text: "What the pass includes and how it works." }, { kicker: "Guide", title: "Attraction prices", href: "boston-attractions.html", text: "Gate prices and coverage." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Put in your own list." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "boston-worth-it" })}
  </div>
</section>
`,
};
