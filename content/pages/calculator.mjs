import { pageHero, sectionHead, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";
import { assetVersion } from "../version.mjs";

const nycAttractions = [
  ["Empire State Building", 46, "from $46"],
  ["Top of the Rock", 42, "from $42"],
  ["American Museum of Natural History", 28, "$28"],
  ["9/11 Memorial & Museum", 24, "from $24"],
  ["Statue of Liberty ferry", 25.5, "$25.50"],
  ["Edge at Hudson Yards", 44, "from $44"],
  ["MoMA", 30, "$30"],
  ["Circle Line cruise", 33, "~$33"],
  ["Intrepid Museum", 38, "~$38"],
  ["Guggenheim", 30, "~$30"],
];

const cityBlocks = [
  {
    id: "new-york",
    label: "New York",
    pass: "CityPASS New York",
    price: 151,
    min: 5,
    max: 5,
    note: "5 attractions from 10, valid 9 days. $149 + $2 processing fee.",
    attractions: nycAttractions.map(([name, value, priceLabel]) => ({ name, value, priceLabel })),
  },
  {
    id: "philadelphia",
    label: "Philadelphia",
    pass: "CityPASS Philadelphia",
    tiers: { 3: 66, 4: 84, 5: 98 },
    min: 3,
    max: 5,
    note: "Choose 3, 4 or 5 attractions; the price changes with the number you pick.",
    attractions: [
      "The Franklin Institute",
      "Adventure Aquarium",
      "Philadelphia Zoo",
      "Big Bus / Trolley Works",
      "Eastern State Penitentiary",
      "Battleship New Jersey",
      "Museum of the American Revolution",
      "National Constitution Center",
      "Barnes Foundation",
    ].map((name) => ({ name, priceLabel: "gate price in research" })),
  },
  {
    id: "boston",
    label: "Boston",
    pass: "CityPASS Boston",
    price: 84,
    min: 4,
    max: 4,
    note: "4 attractions from 7, valid 9 days.",
    attractions: [
      "New England Aquarium",
      "Museum of Science",
      "Boston Harbor City Cruises",
      "View Boston",
      "Franklin Park Zoo",
      "Harvard Museum of Natural History",
      "Museum of Fine Arts",
    ].map((name) => ({ name, priceLabel: "gate price in research" })),
  },
  {
    id: "chicago",
    label: "Chicago",
    pass: "CityPASS Chicago",
    price: 144,
    min: 5,
    max: 5,
    note: "5 attractions including Shedd Aquarium and Skydeck, valid 9 days.",
    attractions: [
      "Shedd Aquarium",
      "Skydeck Chicago",
      "Shoreline Sightseeing",
      "Field Museum",
      "360 Chicago",
      "Griffin Museum of Science and Industry",
      "Art Institute of Chicago",
      "Adler Planetarium",
    ].map((name) => ({ name, priceLabel: "gate price in research" })),
  },
];

const optionFor = (city) => {
  const passPrice = city.tiers ? `$${city.tiers[city.min]}–$${city.tiers[city.max]}` : `$${city.price}`;
  return `<option value="${city.id}">${city.label} — ${city.pass} (${passPrice})</option>`;
};

export default {
  path: "calculator.html",
  navSection: "calculator",
  bodyClass: "page-inner",
  title: "City Pass Calculator: Is the Pass Worth It?",
  description:
    "Compare pass prices with gate prices in New York, Philadelphia, Boston and Chicago. See the break-even and when buying direct is cheaper.",
  priority: "0.95",
  changefreq: "monthly",
  ogImage: "assets/img/og-citypassindex.jpg",
  scripts: `<script src="assets/js/calculator.js?v=${assetVersion}" defer></script>`,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "City Pass Savings Calculator",
      applicationCategory: "TravelApplication",
      operatingSystem: "Any",
      url: "https://citypassindex.com/calculator.html",
      description:
        "Compare city tourist pass prices with attraction gate prices and see the break-even in dollars and percent.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Organization", name: "City Pass Index", url: "https://citypassindex.com" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is a city pass worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only if the attractions you would actually visit cost more at the gate than the pass price. The calculator adds your list and shows the difference.",
          },
        },
        {
          "@type": "Question",
          name: "Why do only New York prices show a full saving?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New York has checked gate prices. For Philadelphia, Boston and Chicago the pass prices are verified but individual gate prices are still being checked, so the calculator shows the break-even per attraction instead of a made-up total.",
          },
        },
      ],
    },
  ],
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen through a tall window",
  crumbs: [{ href: "/", label: "Home" }, { href: "calculator.html", label: "Calculator" }],
  eyebrowText: "Calculator",
  title: "Would the pass actually save you money?",
  lead: "Pick a city, the number of adults and the attractions you would visit. New York has verified gate prices; the other cities show the break-even per attraction until their gate prices are checked.",
  meta: metaItems("4 cities", "Adults + total", "Savings in $ and %", "No email required"),
})}

<section class="section">
  <div class="container">
    <div class="calc" data-calc>
      <div class="calc__head">
        <h2>Build your list</h2>
        <p class="muted">Pass prices are adult prices checked November 2026. Gate prices are adult “from” prices and can rise with dynamic pricing.</p>
      </div>

      <div class="calc__controls">
        <label class="calc__field">
          <span>City</span>
          <select data-calc-city>
            ${cityBlocks.map(optionFor).join("")}
          </select>
        </label>
        <label class="calc__field">
          <span>Adults</span>
          <input type="number" data-calc-people value="1" min="1" max="8" step="1" inputmode="numeric" />
        </label>
      </div>

      <div class="calc__cities">
        ${cityBlocks
          .map(
            (city) => `<div class="calc__city" data-city="${city.id}" data-label="${city.label}" data-pass="${city.price || ""}" data-tiers='${city.tiers ? JSON.stringify(city.tiers) : ""}' data-min="${city.min}" data-max="${city.max}" hidden>
          <div class="calc__city-head">
            <h3>${city.pass}</h3>
            <p class="muted">${city.note}</p>
          </div>
          <fieldset class="calc__grid">
            <legend class="sr-only">${city.label} attractions</legend>
            ${city.attractions
              .map(
                (attraction) =>
                  `<label class="calc__option"><input type="checkbox" data-name="${attraction.name}"${
                    attraction.value ? ` value="${attraction.value}"` : ""
                  } /> <span>${attraction.name} <strong>${attraction.priceLabel}</strong></span></label>`
              )
              .join("")}
          </fieldset>
        </div>`
          )
          .join("")}
      </div>

      <div class="calc__result" data-calc-result aria-live="polite">
        <p class="muted">Choose a city and select attractions to see the comparison.</p>
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "How to read it", title: "The pass wins when your list is expensive", lead: "" })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "Check the gate prices first", text: "Write down the paid sights you would genuinely visit. If their gate total is below the pass price, buying direct wins — and the calculator says so." })}
      ${callout({ icon: "◆", title: "What it does not include", text: "Transport, food and paid add-ons such as the 102nd floor, crown access or City Climb. Prices are gate rates, not package prices." })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Calculator questions", lead: "" })}
    ${faq([
      { q: "Why only New York shows a full saving?", a: "<p>Because New York is the only city where every attraction gate price has been checked. For Philadelphia, Boston and Chicago the pass price and inclusions are verified; the size of the saving depends on gate prices we are still checking.</p>" },
      { q: "Does the calculator include children?", a: "<p>No. It uses adult prices and a number of adults. Child passes are cheaper and the break-even is usually lower, so do not reuse the adult result for a family with children.</p>" },
      { q: "What if I want more attractions than the pass covers?", a: "<p>Then the pass covers its limit and you pay the gate price for the extras. Add those extras separately to compare honestly.</p>" },
      { q: "When are the prices checked?", a: "<p>Pass prices and inclusions were checked in November 2026. Gate prices can change with dynamic pricing, especially at weekends and sunset slots.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "City", title: "New York CityPASS", href: "new-york.html", text: "What the pass covers and what it costs." }, { kicker: "Compare", title: "Pass comparison", href: "passes.html", text: "All pass options in one table." }, { kicker: "Data", title: "Price data", href: "data.html", text: "The gate prices behind the maths." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "calculator" })}
  </div>
</section>
`,
};
