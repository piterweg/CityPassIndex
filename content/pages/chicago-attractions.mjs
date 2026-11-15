import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "chicago-attractions.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Chicago CityPASS Attractions and Prices",
  description: "The full Chicago CityPASS attraction list with verified adult gate prices, what is still in research and how to run the break-even.",
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
    { href: "chicago-attractions.html", label: "Attractions" },
  ],
  eyebrowText: "Chicago",
  title: "Chicago attractions and prices",
  lead: "The full CityPASS list, the gate prices we have verified and where we still refuse to guess.",
  meta: metaItems("5 of 8", "Verified where checked", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The list", title: "What the pass covers", lead: "Prices are adult gate rates; “in research” means we have not verified the figure yet." })}
    ${table({
      caption: "Chicago CityPASS attractions",
      head: ["Attraction", "Adult gate price", "Status"],
      rows: [
        ["Shedd Aquarium", "in research", "In research"],
        ["Skydeck Chicago", "in research", "In research"],
        ["Shoreline Sightseeing", "in research", "In research"],
        ["Field Museum", "from $30", "Verified"],
        ["360 Chicago", "from $35", "Verified"],
        ["Griffin Museum of Science and Industry", "in research", "In research"],
        ["Art Institute of Chicago", "$32", "Verified"],
        ["Adler Planetarium", "from $25", "Verified"]
      ],
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "How to use it", title: "Build the list before buying", lead: "" })}
    <p>Pick the sights you would genuinely pay for, then compare their gate total with the pass. The calculator uses verified prices where we have them and lets you enter the rest.</p>
    ${callout({ icon: "◆", title: "The break-even", text: "At $144 for 5 of 8, each attraction needs to be worth about $28.80. Below that average, buying direct wins." })}
    <p style="margin-top:1.2rem"><a class="btn" href="calculator.html">Test your list</a> <a class="btn btn--outline" href="chicago-citypass.html" style="margin-left:.6rem">CityPASS review</a></p>
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
    ${relatedGuides({ links: [{ kicker: "Decision", title: "Is the pass worth it?", href: "chicago-pass-worth-it.html", text: "Three scenarios with real prices." }, { kicker: "Review", title: "CityPASS review", href: "chicago-citypass.html", text: "How the pass works." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Add your own prices." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "chicago-attractions" })}
  </div>
</section>
`,
};
