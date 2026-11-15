import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "boston-attractions.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Boston CityPASS Attractions and Prices",
  description: "The full Boston CityPASS attraction list with verified adult gate prices, what is still in research and how to run the break-even.",
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
    { href: "boston-attractions.html", label: "Attractions" },
  ],
  eyebrowText: "Boston",
  title: "Boston attractions and prices",
  lead: "The full CityPASS list, the gate prices we have verified and where we still refuse to guess.",
  meta: metaItems("4 of 7", "Verified where checked", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The list", title: "What the pass covers", lead: "Prices are adult gate rates; “in research” means we have not verified the figure yet." })}
    ${table({
      caption: "Boston CityPASS attractions",
      head: ["Attraction", "Adult gate price", "Status"],
      rows: [
        ["New England Aquarium", "from $34.95", "Verified"],
        ["Museum of Science", "$33", "Verified"],
        ["Boston Harbor City Cruises", "in research", "In research"],
        ["View Boston", "$48", "Verified"],
        ["Franklin Park Zoo", "in research", "In research"],
        ["Harvard Museum of Natural History", "in research", "In research"],
        ["Museum of Fine Arts", "$30", "Verified"]
      ],
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "How to use it", title: "Build the list before buying", lead: "" })}
    <p>Pick the sights you would genuinely pay for, then compare their gate total with the pass. The calculator uses verified prices where we have them and lets you enter the rest.</p>
    ${callout({ icon: "◆", title: "The break-even", text: "At $84 for 4 of 7, each attraction needs to be worth about $21. Below that average, buying direct wins." })}
    <p style="margin-top:1.2rem"><a class="btn" href="calculator.html">Test your list</a> <a class="btn btn--outline" href="boston-citypass.html" style="margin-left:.6rem">CityPASS review</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Attraction questions", lead: "" })}
    ${faq([
      { q: "Why are some prices missing?", a: "<p>We only publish gate prices we have checked against the operator. Several attractions use dynamic pricing or block automated checks; those stay “in research” until verified.</p>" },
      { q: "Does the pass include add-ons?", a: "<p>No. Premium add-ons and special exhibitions are usually separate; the pass covers standard admission as described by the operator.</p>" },
      { q: "Are child prices different?", a: "<p>Yes. Child passes are cheaper; check the operator's current child price before relying on the adult break-even.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "Decision", title: "Is the pass worth it?", href: "boston-pass-worth-it.html", text: "Three scenarios with real prices." }, { kicker: "Review", title: "CityPASS review", href: "boston-citypass.html", text: "How the pass works." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Add your own prices." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "boston-attractions" })}
  </div>
</section>
`,
};
