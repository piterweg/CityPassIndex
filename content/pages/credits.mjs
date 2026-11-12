import { pageHero, sectionHead, table, img, metaItems } from "../components.mjs";

export default {
  path: "credits.html",
  navSection: "about",
  bodyClass: "page-inner",
  title: "Photo Credits",
  description: "Photo credits, authors and Creative Commons licences for every photograph used on City Pass Index, with links to the original sources.",
  priority: "0.4",
  changefreq: "yearly",
  ogImage: "assets/img/skyline-window-view.webp",
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "",
  crumbs: [{ href: "/", label: "Home" }, { href: "credits.html", label: "Credits" }],
  eyebrowText: "Credits",
  title: "Photo credits",
  lead: "Photographs are used under Creative Commons licences. Derivative versions are cropped and resized for the web.",
  meta: metaItems("Creative Commons", "Attribution", "2026"),
})}
<section class="section">
  <div class="container">
    ${table({ caption: "Photo credits", head: ["File", "Subject", "Author", "Licence", "Source"], rows: [
      ["manhattan-skyline.webp", "Brooklyn Bridge, Downtown Manhattan and Freedom Tower at golden hour", "John Cunniff", "CC BY 2.0", "<a href=\"https://commons.wikimedia.org/wiki/File:Brooklyn_Bridge,_Downtown_Manhattan,_and_Freedom_Tower,_golden_hour_(20137848066).jpg\" rel=\"nofollow noopener\" target=\"_blank\">source</a>"]
    ] })}
  </div>
</section>
`,
};
