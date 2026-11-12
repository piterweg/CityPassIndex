import { pageHero, sectionHead, table, card, img, metaItems } from "../components.mjs";

export default {
  path: "cities.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Cities Covered by City Pass Index",
  description: "Which cities have checked tourist-pass and attraction price data on City Pass Index, what is live now and which destinations are next in research.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen through a tall window",
  crumbs: [{ href: "/", label: "Home" }, { href: "cities.html", label: "Cities" }],
  eyebrowText: "Cities",
  title: "Where the data is live",
  lead: "We publish a city only when the attraction prices and pass terms are checked against official sellers. No placeholder numbers.",
  meta: metaItems("1 live", "4 in research", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${table({ caption: "Coverage by city", head: ["City", "Pass", "Status", "Page"], rows: [
      ["New York", "CityPASS New York", "Live", "<a href=\"new-york.html\">Open</a>"],
      ["Philadelphia", "CityPASS Philadelphia", "In research", "—"],
      ["Boston", "CityPASS Boston", "In research", "—"],
      ["Chicago", "CityPASS Chicago", "In research", "—"],
      ["Washington, D.C.", "CityPASS Washington", "In research", "—"],
    ] })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Live now", title: "New York", lead: "Ten attractions, CityPASS break-even and a calculator." })}
    <div class="grid grid--2">
      ${card({ kicker: "Live", title: `<a href="new-york.html">New York pass index</a>`, text: "Gate prices for ten attractions and the CityPASS break-even maths.", foot: `<a class="link-arrow" href="new-york.html">Open the index</a>` })}
      ${card({ kicker: "Tool", title: `<a href="calculator.html">Break-even calculator</a>`, text: "Pick five attractions and compare the gate total with the pass.", foot: `<a class="link-arrow" href="calculator.html">Run the numbers</a>` })}
    </div>
  </div>
</section>
`,
};
