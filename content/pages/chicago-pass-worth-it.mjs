import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "chicago-pass-worth-it.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Is Chicago CityPASS Worth It? Three Scenarios",
  description: "Three realistic Chicago trips compared: when the CityPASS beats gate prices, when it is close and when buying direct is cheaper.",
  priority: "0.85",
  changefreq: "monthly",
  ogImage: "assets/img/chicago-skyline.webp",
  render: () => `
${pageHero({
  image: img("chicago-skyline.webp"),
  alt: "The Chicago skyline",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "chicago.html", label: "Chicago" },
    { href: "chicago-pass-worth-it.html", label: "Is it worth it?" },
  ],
  eyebrowText: "Chicago",
  title: "Is Chicago CityPASS worth it?",
  lead: "Three realistic lists, the gate prices we have verified and the break-even line. The pass is not automatically the answer.",
  meta: metaItems("3 scenarios", "$144", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 1", title: "A short list", lead: "" })}
    <p>360 Chicago ($35) and Adler Planetarium ($25) total $60. The other three attractions need to average more than $28 for the $144 pass to beat buying direct.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 2", title: "A fuller trip", lead: "" })}
    <p>A first trip with Shedd, Skydeck, the architecture cruise, the Field Museum and 360 Chicago is exactly the shape the pass is built for; the gate total usually clears $144.</p>
    ${callout({ icon: "◆", title: "The threshold", text: "At $144 for 5 of 8, each attraction needs to be worth about $28.80 at the gate." })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 3", title: "When buying direct wins", lead: "" })}
    <p>A museum-only visit (Art Institute, Field, Adler) can fall below the pass price; those three at the gate are unlikely to reach $144.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Worth-it questions", lead: "" })}
    ${faq([
      { q: "Is Chicago CityPASS worth it?", a: "<p>It depends on the list. For the fuller trip above, usually yes; for a short museum-only visit, buying direct can be cheaper.</p>" },
      { q: "How many attractions do I need?", a: "<p>The pass covers 5 of 8; you cannot buy fewer. Compare the pass price with the gate prices of the attractions you would actually visit.</p>" },
      { q: "Are the prices current?", a: "<p>Pass prices and verified gate prices were checked in November 2026; dynamic pricing can change the checkout price.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "Review", title: "CityPASS review", href: "chicago-citypass.html", text: "What the pass includes and how it works." }, { kicker: "Guide", title: "Attraction prices", href: "chicago-attractions.html", text: "Gate prices and coverage." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Put in your own list." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "chicago-worth-it" })}
  </div>
</section>
`,
};
