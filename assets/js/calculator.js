(() => {
  const root = document.querySelector("[data-calc]");
  if (!root) return;

  const citySelect = root.querySelector("[data-calc-city]");
  const peopleInput = root.querySelector("[data-calc-people]");
  const out = root.querySelector("[data-calc-result]");
  const blocks = [...root.querySelectorAll(".calc__city")];

  const money = (value) =>
    "$" + value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const currentBlock = () => blocks.find((block) => block.dataset.city === citySelect.value) || blocks[0];

  const passPrice = (block, count) => {
    const tiers = block.dataset.tiers ? JSON.parse(block.dataset.tiers) : null;
    if (tiers) return tiers[String(count)] || tiers[String(block.dataset.max)] || 0;
    return parseFloat(block.dataset.pass) || 0;
  };

  const resetBlock = (block) => {
    block.querySelectorAll("input[type=checkbox]").forEach((box) => {
      box.checked = false;
    });
  };

  const showCity = () => {
    blocks.forEach((block) => {
      block.hidden = block !== currentBlock();
    });
    resetBlock(currentBlock());
    update();
  };

  const update = () => {
    const block = currentBlock();
    const people = Math.max(1, Math.min(8, parseInt(peopleInput.value || "1", 10) || 1));
    const min = parseInt(block.dataset.min, 10);
    const max = parseInt(block.dataset.max, 10);
    const boxes = [...block.querySelectorAll("input[type=checkbox]")];
    const picked = boxes.filter((box) => box.checked);

    if (picked.length > max) {
      picked[picked.length - 1].checked = false;
      update();
      return;
    }

    if (picked.length < min) {
      const cityName = block.dataset.label || block.dataset.city;
      const needed = min - picked.length;
      out.innerHTML = `<p class="muted">Select ${needed} more attraction${needed === 1 ? "" : "s"} for ${cityName} (${min} needed). ${picked.length} selected.</p>`;
      return;
    }

    const count = picked.length;
    const perPersonPass = passPrice(block, count);
    const totalPass = perPersonPass * people;
    const names = picked.map((box) => box.getAttribute("data-name"));

    if (block.dataset.city === "new-york") {
      const gate = picked.reduce((sum, box) => sum + parseFloat(box.value || "0"), 0);
      const totalGate = gate * people;
      const diff = totalGate - totalPass;
      const percent = totalGate > 0 ? (diff / totalGate) * 100 : 0;
      const verdict =
        diff > 0
          ? `<p class="calc__verdict calc__verdict--win">The pass saves ${money(diff)}${people > 1 ? " for " + people + " adults" : ""} (${percent.toFixed(0)}%)</p>`
          : diff < 0
            ? `<p class="calc__verdict calc__verdict--lose">Buying direct is cheaper by ${money(Math.abs(diff))}${people > 1 ? " for " + people + " adults" : ""} (${Math.abs(percent).toFixed(0)}%)</p>`
            : `<p class="calc__verdict">Break-even: the pass and gate prices are the same.</p>`;

      out.innerHTML =
        verdict +
        `<p class="muted">Your ${count}: ${names.join(", ")}. Gate total ${money(totalGate)} vs CityPASS ${money(totalPass)}${people > 1 ? " for " + people + " adults" : ""}.</p>` +
        `<p class="muted">Gate price per adult ${money(gate)}. The pass costs ${money(perPersonPass)} per adult, so the pass wins when your list is above that line.</p>`;
      return;
    }

    const cityName = block.dataset.city === "philadelphia" ? "Philadelphia" : block.dataset.city === "boston" ? "Boston" : "Chicago";
    const perAttraction = perPersonPass / count;
    const cityPage = block.dataset.city + ".html";
    out.innerHTML =
      `<p class="calc__verdict">Your ${count} attractions cost ${money(totalPass)} in the pass${people > 1 ? " for " + people + " adults" : ""}</p>` +
      `<p class="muted">That is about ${money(perAttraction)} per attraction. Because individual gate prices for ${cityName} are still being checked, we do not show a made-up saving: compare that figure with what you would pay at the gate.</p>` +
      `<p class="muted">Your list: ${names.join(", ")}. <a href="${cityPage}">See what the pass includes in ${cityName}</a> — or read the <a href="methodology.html">methodology</a>.</p>`;
  };

  citySelect.addEventListener("change", showCity);
  peopleInput.addEventListener("input", update);
  blocks.forEach((block) => {
    block.querySelectorAll("input[type=checkbox]").forEach((box) => {
      box.addEventListener("change", () => {
        const max = parseInt(block.dataset.max, 10);
        const checked = [...block.querySelectorAll("input[type=checkbox]")].filter((item) => item.checked);
        if (checked.length > max) box.checked = false;
        update();
      });
    });
  });

  showCity();
})();
