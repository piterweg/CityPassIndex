import { pageHero, sectionHead, callout, faq, newsletter, img, metaItems } from "../components.mjs";

export default {
  path: "calculator.html",
  navSection: "calculator",
  bodyClass: "page-inner",
  title: "Tourist Pass Break-Even Calculator",
  description: "Compare the gate price of New York attractions with the CityPASS price. Pick five attractions and see whether the pass saves money.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  scripts: '<script src="assets/js/calculator.js" defer></script>',
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen through a tall window",
  crumbs: [{ href: "/", label: "Home" }, { href: "calculator.html", label: "Calculator" }],
  eyebrowText: "Calculator",
  title: "Would the pass actually save you money?",
  lead: "Pick five New York attractions you would genuinely visit. We add the gate prices and compare them with the CityPASS price, including the processing fee.",
  meta: metaItems("5 attractions", "Checked prices", "No email required"),
})}

<section class="section">
  <div class="container">
    <div class="calc" data-calc data-pass-price="151">
      <div class="calc__head">
        <h2>Choose five attractions</h2>
        <p class="muted">Prices are adult gate prices checked November 2026. The pass is $149 plus a $2 processing fee.</p>
      </div>
      <fieldset class="calc__grid">
        <legend class="sr-only">New York attractions included in CityPASS</legend>
        <label class="calc__option"><input type="checkbox" value="46" data-name="Empire State Building"> <span>Empire State Building <strong>from $46</strong></span></label>
        <label class="calc__option"><input type="checkbox" value="42" data-name="Top of the Rock"> <span>Top of the Rock <strong>from $42</strong></span></label>
        <label class="calc__option"><input type="checkbox" value="28" data-name="AMNH"> <span>American Museum of Natural History <strong>$28</strong></span></label>
        <label class="calc__option"><input type="checkbox" value="24" data-name="9/11 Memorial & Museum"> <span>9/11 Memorial & Museum <strong>from $24</strong></span></label>
        <label class="calc__option"><input type="checkbox" value="25.5" data-name="Statue of Liberty ferry"> <span>Statue of Liberty ferry <strong>$25.50</strong></span></label>
        <label class="calc__option"><input type="checkbox" value="44" data-name="Edge"> <span>Edge at Hudson Yards <strong>from $44</strong></span></label>
        <label class="calc__option"><input type="checkbox" value="30" data-name="MoMA"> <span>MoMA <strong>$30</strong></span></label>
        <label class="calc__option"><input type="checkbox" value="33" data-name="Circle Line"> <span>Circle Line cruise <strong>~$33</strong></span></label>
        <label class="calc__option"><input type="checkbox" value="38" data-name="Intrepid Museum"> <span>Intrepid Museum <strong>~$38</strong></span></label>
        <label class="calc__option"><input type="checkbox" value="30" data-name="Guggenheim"> <span>Guggenheim <strong>~$30</strong></span></label>
      </fieldset>
      <div class="calc__result" data-calc-result aria-live="polite">
        <p class="muted">Select five attractions to see the comparison.</p>
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "How to read it", title: "The pass wins when your list is expensive", lead: "" })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "The break-even", text: "CityPASS costs about $151 for five attractions, so the average visit needs to be worth about $30 at the gate. If your five cost more than that, the pass saves money." })}
      ${callout({ icon: "◆", title: "What the calculator does not include", text: "Transport, food and add-ons such as the 102nd floor, crown access or City Climb. Prices are gate rates, not package prices." })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Calculator questions", lead: "" })}
    ${faq([
      { q: "Why five attractions?", a: "<p>New York CityPASS covers five attractions from ten. The pass is sold as one price, so the maths is about which five you would choose.</p>" },
      { q: "Are the prices exact?", a: "<p>They are the adult 'from' prices checked in November 2026. Dynamic pricing can make the gate price higher at weekends and sunset slots.</p>" },
      { q: "What if I want six attractions?", a: "<p>Then the pass covers five and you pay the gate price for the sixth. Add that separately to compare honestly.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One pass update a month", text: "Price changes and new city coverage, no spam.", source: "calculator" })}
  </div>
</section>
`,
};
