/** Global site configuration. */
export const site = {
  name: "City Pass Index",
  tagline: "Passes and prices, checked",
  description: "City Pass Index compares tourist passes, attraction prices and break-even maths across US cities. Independent data, downloadable CSV, no pay-to-play rankings.",
  baseUrl: "https://citypassindex.com",
  email: "hello@citypassindex.com",
  year: 2026,
  brandMark: "City<span>Pass</span>",
  brandTag: "Index",
  footerBlurb: "Independent data on city tourist passes, attraction prices and break-even maths.",
  ogImage: "assets/img/skyline-window-view.webp",
  editorialHref: "about.html",
  navFoot: "Independent pass and price data for US cities.",
  nav: [
    { id: "cities", label: "Cities", href: "cities.html" },
    { id: "passes", label: "Passes", href: "passes.html" },
    { id: "calculator", label: "Calculator", href: "calculator.html" },
    { id: "methodology", label: "Methodology", href: "methodology.html" },
    { id: "about", label: "About", href: "about.html" },
  ],
  footer: [
    {
      title: "Compare",
      links: [
        { label: "Cities", href: "cities.html" },
        { label: "Passes", href: "passes.html" },
        { label: "Break-even calculator", href: "calculator.html" },
        { label: "Methodology", href: "methodology.html" },
      ],
    },
    {
      title: "City",
      links: [
        { label: "New York", href: "new-york.html" },
      ],
    },
    {
      title: "Site",
      links: [
        { label: "About", href: "about.html" },
        { label: "NYC guides (NYCTrove)", href: "https://nyctrove.com" },
      ],
    },
  ],
  social: [],
};
