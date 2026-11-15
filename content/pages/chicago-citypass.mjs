import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "chicago-citypass.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Chicago CityPASS Review: Prices and Attractions",
  description: "Chicago CityPASS reviewed: 5 of 8 attractions, $144 adult, nine-day validity, the break-even and what the pass does not cover.",
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
    { href: "chicago-citypass.html", label: "CityPASS review" },
  ],
  eyebrowText: "Chicago",
  title: "Chicago CityPASS, reviewed",
  lead: "Chicago CityPASS bundles five attractions at $144, so each visit needs to be worth about $28.80. The bundle works when at least two are premium experiences such as Shedd or Skydeck.",
  meta: metaItems("5 of 8", "$144", "9 days", "Checked November 2026"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Price</span><span class="fact__value">$144</span></div>
      <div class="fact"><span class="fact__label">Attractions</span><span class="fact__value">5 of 8</span></div>
      <div class="fact"><span class="fact__label">Validity</span><span class="fact__value">9 days</span></div>
      <div class="fact"><span class="fact__label">Break-even</span><span class="fact__value">$28.80</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "What you get", title: "One purchase, a fixed list", lead: "Five attractions from eight, including Shedd Aquarium and Skydeck, valid nine days." })}
    <p>Chicago CityPASS bundles five attractions at $144, so each visit needs to be worth about $28.80. The bundle works when at least two are premium experiences such as Shedd or Skydeck.</p>
    ${table({
      caption: "Chicago CityPASS: attractions and prices",
      head: ["Attraction", "Adult gate price", "Status"],
      rows: [
        ["Shedd Aquarium", "in research", "In research"],
        ["Skydeck Chicago", "in research", "In research"],
        ["Shoreline Sightseeing", "in research", "In research"],
        ["Field Museum", "in research", "In research"],
        ["360 Chicago", "from $35", "Verified"],
        ["Griffin Museum of Science and Industry", "in research", "In research"],
        ["Art Institute of Chicago", "in research", "In research"],
        ["Adler Planetarium", "from $25", "Verified"]
      ],
    })}
    <p class="small muted" style="margin-top:1rem">Pass prices verified November 2026. Gate prices marked “in research” are not published until checked; the calculator lets you enter them.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "The maths", title: "When the pass wins", lead: "" })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "Expensive sights", text: "A first trip with Shedd, Skydeck, the architecture cruise, the Field Museum and 360 Chicago is exactly the shape the pass is built for; the gate total usually clears $144." })}
      ${callout({ icon: "◆", title: "Cheap lists", text: "A museum-only visit (Art Institute, Field, Adler) can fall below the pass price; those three at the gate are unlikely to reach $144." })}
    </div>
    <p style="margin-top:1.2rem"><a class="btn" href="calculator.html">Run your own list</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Practical", title: "What to know before buying", lead: "" })}
    <ul class="feature-list">
      <li><span class="feature-list__num">01</span><div><h4>Shedd and Skydeck require reservations and are the value anchors</h4><p>Shedd and Skydeck require reservations and are the value anchors.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>The architecture river cruise is seasonal; check winter schedules</h4><p>The architecture river cruise is seasonal; check winter schedules.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>A cheaper Chicago C3 ticket exists at $109 for three attractions</h4><p>A cheaper Chicago C3 ticket exists at $109 for three attractions.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>Child passes are $114</h4><p>Child passes are $114.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Chicago CityPASS questions", lead: "" })}
    ${faq([
      { q: "Is Chicago CityPASS worth it?", a: "<p>For five sights including Shedd and Skydeck, usually yes. For three museums only, the gate total may stay under $144.</p>" },
      { q: "How many attractions does it include?", a: "<p>Five from eight; two are fixed (Shedd and Skydeck) and you choose three more.</p>" },
      { q: "Is there a smaller option?", a: "<p>Yes, Chicago C3 covers three attractions for $109.</p>" }
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "Decision", title: "Is the pass worth it?", href: "chicago-pass-worth-it.html", text: "Three scenarios with real prices." }, { kicker: "Guide", title: "Attraction prices", href: "chicago-attractions.html", text: "What each sight costs and what the pass covers." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Add your own list and compare." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "chicago-citypass" })}
  </div>
</section>
`,
};
