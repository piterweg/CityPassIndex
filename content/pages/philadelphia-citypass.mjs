import { pageHero, sectionHead, table, callout, faq, newsletter, relatedGuides, img, metaItems } from "../components.mjs";

export default {
  path: "philadelphia-citypass.html",
  navSection: "cities",
  bodyClass: "page-inner",
  title: "Philadelphia CityPASS Review: Prices and Attractions",
  description: "Philadelphia CityPASS reviewed: 3, 4 or 5 of 9 attractions, $66 / $84 / $98 adult, nine-day validity, the break-even and what the pass does not cover.",
  priority: "0.85",
  changefreq: "monthly",
  ogImage: "assets/img/philadelphia-skyline.webp",
  render: () => `
${pageHero({
  image: img("philadelphia-skyline.webp"),
  alt: "The Philadelphia skyline",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "philadelphia.html", label: "Philadelphia" },
    { href: "philadelphia-citypass.html", label: "CityPASS review" },
  ],
  eyebrowText: "Philadelphia",
  title: "Philadelphia CityPASS, reviewed",
  lead: "Philadelphia CityPASS is unusually flexible: you pick the number of attractions and the price changes with it. That makes the break-even question sharper than in a fixed five-attraction bundle.",
  meta: metaItems("3, 4 or 5 of 9", "$66 / $84 / $98", "9 days", "Checked November 2026"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Price</span><span class="fact__value">$66 / $84 / $98</span></div>
      <div class="fact"><span class="fact__label">Attractions</span><span class="fact__value">3, 4 or 5 of 9</span></div>
      <div class="fact"><span class="fact__label">Validity</span><span class="fact__value">9 days</span></div>
      <div class="fact"><span class="fact__label">Break-even</span><span class="fact__value">$22 / $21 / $19.60</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "What you get", title: "One purchase, a fixed list", lead: "Choose 3, 4 or 5 attractions from nine; the price changes with the number you pick." })}
    <p>Philadelphia CityPASS is unusually flexible: you pick the number of attractions and the price changes with it. That makes the break-even question sharper than in a fixed five-attraction bundle.</p>
    ${table({
      caption: "Philadelphia CityPASS: attractions and prices",
      head: ["Attraction", "Adult gate price", "Status"],
      rows: [
        ["The Franklin Institute", "from $23", "Verified"],
        ["Adventure Aquarium", "from $27.99", "Verified"],
        ["Philadelphia Zoo", "in research", "In research"],
        ["Big Bus / Trolley Works", "in research", "In research"],
        ["Eastern State Penitentiary", "$19", "Verified"],
        ["Battleship New Jersey", "in research", "In research"],
        ["Museum of the American Revolution", "$25 online", "Verified"],
        ["National Constitution Center", "$24.95", "Verified"],
        ["Barnes Foundation", "in research", "In research"]
      ],
    })}
    <p class="small muted" style="margin-top:1rem">Pass prices verified November 2026. Gate prices marked “in research” are not published until checked; the calculator lets you enter them.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "The maths", title: "When the pass wins", lead: "" })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "Expensive sights", text: "Add the National Constitution Center at $24.95 and a four-attraction list reaches $91.95 against the $84 pass: about $7.95 saved." })}
      ${callout({ icon: "◆", title: "Cheap lists", text: "At the five-attraction tier ($98), the pass needs five paid sights averaging about $19.60. Four verified sights average $22.99, so a fifth comparable sight pushes the pass ahead." })}
    </div>
    <p style="margin-top:1.2rem"><a class="btn" href="calculator.html">Run your own list</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Practical", title: "What to know before buying", lead: "" })}
    <ul class="feature-list">
      <li><span class="feature-list__num">01</span><div><h4>Tiers are fixed: 3, 4 or 5 — you cannot buy a two-attraction pass</h4><p>Tiers are fixed: 3, 4 or 5 — you cannot buy a two-attraction pass.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>Adventure Aquarium is across the river in Camden; allow travel time</h4><p>Adventure Aquarium is across the river in Camden; allow travel time.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>The Barnes Foundation needs a reservation and is valid for two days</h4><p>The Barnes Foundation needs a reservation and is valid for two days.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>Check each attraction's own ticket price before choosing the tier</h4><p>Check each attraction's own ticket price before choosing the tier.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Philadelphia CityPASS questions", lead: "" })}
    ${faq([
      { q: "Is the three-attraction pass worth it?", a: "<p>For Franklin, the American Revolution Museum and Eastern State, the gate total is about $67 against $66 — effectively break-even. Convenience may still justify it.</p>" },
      { q: "Can I choose different attractions?", a: "<p>Yes, any three, four or five from the list of nine, in any order within nine days.</p>" },
      { q: "Are child prices lower?", a: "<p>Yes: $54 for C3, $66 for C4 and $78 for C5, checked November 2026.</p>" }
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${relatedGuides({ links: [{ kicker: "Decision", title: "Is the pass worth it?", href: "philadelphia-pass-worth-it.html", text: "Three scenarios with real prices." }, { kicker: "Guide", title: "Attraction prices", href: "philadelphia-attractions.html", text: "What each sight costs and what the pass covers." }, { kicker: "Tool", title: "Savings calculator", href: "calculator.html", text: "Add your own list and compare." }] })}

${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "philadelphia-citypass" })}
  </div>
</section>
`,
};
