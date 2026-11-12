import { pageHero, sectionHead, callout, img, metaItems } from "../components.mjs";

export default {
  path: "methodology.html",
  navSection: "methodology",
  bodyClass: "page-inner",
  title: "City Pass Index Methodology",
  description: "How City Pass Index collects pass and attraction prices, what the break-even means and how often the data is updated.",
  priority: "0.6",
  changefreq: "yearly",
  ogImage: "assets/img/skyline-window-view.webp",
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen through a tall window",
  crumbs: [{ href: "/", label: "Home" }, { href: "methodology.html", label: "Methodology" }],
  eyebrowText: "Methodology",
  title: "How the numbers are built",
  lead: "A price without a date and a source is a rumour. Every figure on this site has both.",
  meta: metaItems("Official sources", "Dated checks", "No pay-to-play"),
})}
<section class="section">
  <div class="container container--narrow">
    <div class="prose">
      <h2>Gate prices</h2>
      <p>Attraction prices come from the operator's own booking page, not a reseller. We record the lowest adult "from" price on the checked date and note when dynamic pricing means the checkout price can be higher.</p>
      <h2>Pass prices</h2>
      <p>Pass prices and inclusions come from the pass operator's official sales page. The break-even is the pass price divided by the number of attractions it covers; that is the average gate value each visit must beat.</p>
      <h2>What is excluded</h2>
      <p>Transport, food, add-ons (crown access, the 102nd floor, City Climb and similar) and packages. Those belong in the attraction guides, not in the pass comparison.</p>
      <h2>Updates</h2>
      <p>Prices are re-checked quarterly and whenever an operator announces a change. The checked date on each page is the date of the latest sweep.</p>
    </div>
    ${callout({ icon: "◆", title: "Corrections welcome", text: "If a price has changed, tell us and we will fix it with a date. The site is independent and no operator pays for placement." })}
  </div>
</section>
`,
};
