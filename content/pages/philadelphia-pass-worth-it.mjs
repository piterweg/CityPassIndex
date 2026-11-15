import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "philadelphia-pass-worth-it.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Is Philadelphia CityPASS Worth It? Three Scenarios",
  description: "Three realistic Philadelphia trips compared: when the CityPASS beats gate prices, when it is close and when buying direct is cheaper.",
  priority: "0.85",
  changefreq: "monthly",
  ogImage: "assets/img/philadelphia-skyline.webp",
  render: () => `
${pageHero({
  image: img("philadelphia-skyline.webp"),
  alt: "The Philadelphia skyline",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "philadelphia.html", label: "Philadelphia" },
    { href: "philadelphia-pass-worth-it.html", label: "Is it worth it?" },
  ],
  eyebrowText: "Philadelphia",
  title: "Is Philadelphia CityPASS worth it?",
  lead: "Three realistic lists, the gate prices we have verified and the break-even line. The pass is not automatically the answer.",
  meta: metaItems("3 scenarios", "$66 / $84 / $98", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 1", title: "A short list", lead: "" })}
    <p>Franklin Institute ($23) + Museum of the American Revolution ($25) + Eastern State ($19) = $67 against the $66 three-attraction pass — a near break-even of about $1.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 2", title: "A fuller trip", lead: "" })}
    <p>Add the National Constitution Center at $24.95 and a four-attraction list reaches $91.95 against the $84 pass: about $7.95 saved.</p>
    ${callout({ icon: "◆", title: "The threshold", text: "At $66 / $84 / $98 for 3, 4 or 5 of 9, each attraction needs to be worth about $22 / $21 / $19.60 at the gate." })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Scenario 3", title: "When buying direct wins", lead: "" })}
    <p>At the five-attraction tier ($98), the pass needs five paid sights averaging about $19.60. Four verified sights average $22.99, so a fifth comparable sight pushes the pass ahead.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Worth-it questions", lead: "" })}
    ${faq([
      { q: "Is Philadelphia CityPASS worth it?", a: "<p>It depends on the list. For the fuller trip above, usually yes; for a short museum-only visit, buying direct can be cheaper.</p>" },
      { q: "How many attractions do I need?", a: "<p>The pass covers 3, 4 or 5 of 9; you cannot buy fewer. Compare the pass price with the gate prices of the attractions you would actually visit.</p>" },
      { q: "Are the prices current?", a: "<p>Pass prices and verified gate prices were checked in November 2026; dynamic pricing can change the checkout price.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "Review", title: "CityPASS review", href: "philadelphia-citypass.html", text: "What the pass includes and how it works." }, { kicker: "Guide", title: "Attraction prices", href: "philadelphia-attractions.html", text: "Gate prices and coverage." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Put in your own list." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "philadelphia-worth-it" })}
  </div>
</section>
`,
};
