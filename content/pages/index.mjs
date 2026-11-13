import { heroHome, sectionHead, table, card, mediaCard, faq, newsletter, ctaBand, btn, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "index.html",
  navSection: "home",
  bodyClass: "page-home",
  title: "City Pass Index — Tourist Passes and Attraction Prices, Checked",
  fullTitle: true,
  description: "Independent comparison of city tourist passes and attraction prices: break-even maths, checked prices and a calculator for New York, with more cities in research.",
  priority: "1.0",
  changefreq: "weekly",
  ogImage: "assets/img/og-citypassindex.jpg",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is a tourist pass worth it?",
          acceptedAnswer: { "@type": "Answer", text: "Only if the attractions you would visit cost more at the gate than the pass. The calculator does the maths with checked prices." },
        },
        {
          "@type": "Question",
          name: "Why only some cities?",
          acceptedAnswer: { "@type": "Answer", text: "A price is only useful with a date and a source. New York, Philadelphia, Boston and Chicago are checked; other cities are marked in research." },
        },
        {
          "@type": "Question",
          name: "Do you earn commission?",
          acceptedAnswer: { "@type": "Answer", text: "Not at launch. If that changes, affected pages will disclose it before the link." },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Cities with checked CityPASS data",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "New York", url: "https://citypassindex.com/new-york.html" },
        { "@type": "ListItem", position: 2, name: "Philadelphia", url: "https://citypassindex.com/philadelphia.html" },
        { "@type": "ListItem", position: 3, name: "Boston", url: "https://citypassindex.com/boston.html" },
        { "@type": "ListItem", position: 4, name: "Chicago", url: "https://citypassindex.com/chicago.html" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://citypassindex.com/" },
      ],
    },
  ],
  render: () => `
${heroHome({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen through a tall window",
  eyebrowText: "City Pass Index",
  title: "Tourist passes, <em>without the sales pitch.</em>",
  lead: "Passes are sold as savings and priced to make the maths feel obvious. We check the gate prices, run the break-even and tell you when buying direct is cheaper.",
  actions: `${btn({ href: "calculator.html", label: "Open the calculator" })}${btn({ href: "cities.html", label: "See cities", variant: "ghost" })}`,
  meta: metaItems("<strong>1</strong> city live", "<strong>10</strong> attractions checked", "<strong>CSV</strong> data", "<strong>Checked</strong> November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "How it works", title: "One number decides it: the break-even", lead: "A pass is worth it only if the attractions you would actually visit cost more at the gate than the pass does." })}
    <div class="grid grid--3">
      ${card({ kicker: "01 — Gate prices", title: "Real prices, not brochure prices", text: "Every attraction price comes from the operator's own booking page, on a stated date. Dynamic pricing is noted, not hidden.", foot: `<a class="link-arrow" href="methodology.html">Read the method</a>` })}
      ${card({ kicker: "02 — Break-even", title: "The number that matters", text: "Divide the pass price by the number of attractions it covers. That average is what each visit must be worth.", foot: `<a class="link-arrow" href="new-york.html">New York example</a>` })}
      ${card({ kicker: "03 — Your trip", title: "A calculator, not a quiz", text: "Pick the attractions you would genuinely visit and see the gate total against the pass price.", foot: `<a class="link-arrow" href="calculator.html">Run your numbers</a>` })}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "New York", title: "CityPASS in one table", lead: "The 2026 example: five attractions from ten, nine-day validity, $149 plus a $2 processing fee.", action: `<a class="link-arrow" href="new-york.html">Full New York page</a>` })}
    ${table({ caption: "New York CityPASS break-even example", head: ["Attraction", "Gate price", "In CityPASS"], rows: [
      ["Empire State Building", "from $46", "Yes"], ["Top of the Rock", "from $42", "Yes"], ["American Museum of Natural History", "$28", "Yes"], ["9/11 Memorial & Museum", "$24–36", "Yes"], ["Statue of Liberty ferry", "$25.50", "Yes"], ["MoMA", "$30", "Yes"], ["The Met", "$30", "No"], ["Central Park", "Free", "No"],
    ] })}
    <p class="small muted" style="margin-top:1rem">Break-even: $151 ÷ 5 = <strong>$30.20 per attraction</strong>. Choose five attractions that would cost more than that at the gate and the pass wins.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Cities", title: "Where the index covers", lead: "New York is live. The next cities are in research — we publish when the prices are checked, not before." })}
    <div class="grid grid--3">
      ${mediaCard({ href: "new-york.html", image: img("manhattan-skyline-night.webp"), alt: "The Manhattan skyline at night", kicker: "Live", title: "New York", text: "CityPASS, gate prices and break-even for ten headline attractions.", meta: "10 attractions" })}
      ${mediaCard({ href: "philadelphia.html", image: img("manhattan-skyline.webp"), alt: "A city skyline", kicker: "Live", title: "Philadelphia", text: "3, 4 or 5 attractions from nine; from $66.", meta: "CityPASS" })}
      ${mediaCard({ href: "boston.html", image: img("manhattan-skyline-night.webp"), alt: "A city skyline at night", kicker: "Live", title: "Boston", text: "4 attractions from seven; $84", meta: "CityPASS" })}
      ${mediaCard({ href: "chicago.html", image: img("skyline-window-view.webp"), alt: "A skyline seen through a window", kicker: "Live", title: "Chicago", text: "5 attractions including Shedd and Skydeck; $144", meta: "CityPASS" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Pass questions", lead: "" })}
    ${faq([
      { q: "Is a tourist pass worth it?", a: "<p>Only if the attractions you would genuinely visit cost more at the gate than the pass. The calculator does that maths with checked prices.</p>" },
      { q: "Why only New York so far?", a: "<p>Because a price is only useful with a date and a source. New York is fully checked; other cities will be published when their prices are verified.</p>" },
      { q: "Do you earn commission?", a: "<p>Not at launch. If that changes, every affected page will say so before the link.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One pass update a month", text: "Price changes, new city coverage and the occasional break-even worth knowing.", source: "home" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Run the numbers", title: "Your trip, your five attractions", text: "Pick what you would actually visit and compare the gate total with the pass.", actions: `<a class="btn" href="calculator.html">Open the calculator</a>` })}
`,
};
