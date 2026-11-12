import { pageHero, sectionHead, newsletter, img, metaItems } from "../components.mjs";

export default {
  path: "about.html",
  navSection: "about",
  bodyClass: "page-inner",
  title: "About City Pass Index",
  description: "What City Pass Index is, how the independent price data is funded, how corrections work and how to report a wrong pass or attraction price.",
  priority: "0.6",
  changefreq: "yearly",
  ogImage: "assets/img/skyline-window-view.webp",
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen through a tall window",
  crumbs: [{ href: "/", label: "Home" }, { href: "about.html", label: "About" }],
  eyebrowText: "About",
  title: "Passes, prices, no theatre",
  lead: "City Pass Index is an independent data project: checked prices, break-even maths and a calculator that does not ask for your email.",
  meta: metaItems("Independent", "Dated data", "No pay-to-play"),
})}
<section class="section">
  <div class="container">
    <div class="prose" style="max-width:760px;margin:0 auto">
      <h2>Why this exists</h2>
      <p>Pass marketing is built to make the maths feel obvious. It usually is not: the value depends entirely on which five attractions you would visit anyway. This site exists to put the gate prices next to the pass price and let the numbers decide.</p>
      <h2>Funding</h2>
      <p>At launch the site is free to read and carries no affiliate links. If that changes, affected pages will disclose it before the link and the ranking will not be for sale.</p>
      <h2>Corrections</h2>
      <p>Prices change. If a figure is wrong, tell us the page, the operator's current price and the date you checked it; we will update the page and the checked date.</p>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    ${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "about" })}
  </div>
</section>
`,
};
