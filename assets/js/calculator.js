(() => {
  const root = document.querySelector("[data-calc]");
  if (!root) return;

  const citySelect = root.querySelector("[data-calc-city]");
  const peopleInput = root.querySelector("[data-calc-people]");
  const out = root.querySelector("[data-calc-result]");
  const blocks = [...root.querySelectorAll(".calc__city")];

  // Consent Mode is configured in the layout; gtag drops events when analytics
  // storage is denied, so these calls are safe before the user accepts.
  const track = (name, params = {}) => {
    if (typeof window.gtag === "function") window.gtag("event", name, params);
  };
  let lastResultKey = "";

  const money = (value) =>
    "$" + value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const currentBlock = () => blocks.find((block) => block.dataset.city === citySelect.value) || blocks[0];

  const passPrice = (block, count) => {
    const tiers = block.dataset.tiers ? JSON.parse(block.dataset.tiers) : null;
    if (tiers) return tiers[String(count)] || tiers[String(block.dataset.max)] || 0;
    return parseFloat(block.dataset.pass) || 0;
  };

  const gateFor = (box) => {
    const attr = box.getAttribute("value");
    if (attr !== null) return parseFloat(attr) || 0;
    const label = box.closest(".calc__option");
    const input = label ? label.querySelector("[data-gate]") : null;
    return input ? parseFloat(input.value) || 0 : 0;
  };

  const resetBlock = (block) => {
    block.querySelectorAll("input[type=checkbox]").forEach((box) => {
      box.checked = false;
      const label = box.closest(".calc__option");
      const gate = label ? label.querySelector("[data-gate]") : null;
      if (gate) {
        gate.disabled = true;
        gate.value = "";
      }
    });
  };

  const showCity = () => {
    blocks.forEach((block) => {
      block.hidden = block !== currentBlock();
    });
    resetBlock(currentBlock());
    track("calculator_city_selected", { city: currentBlock().dataset.city });
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
    const gatePerPerson = picked.reduce((sum, box) => sum + gateFor(box), 0);
    const entered = picked.filter((box) => gateFor(box) > 0).length;

    if (entered === count) {
      const totalGate = gatePerPerson * people;
      const diff = totalGate - totalPass;
      const percent = totalGate > 0 ? (diff / totalGate) * 100 : 0;
      const signature = `${block.dataset.city}|${count}|${people}|${names.join(",")}|${totalGate}`;
      if (signature !== lastResultKey) {
        lastResultKey = signature;
        track("calculator_result", {
          city: block.dataset.city,
          people,
          attractions: count,
          pass_total: totalPass,
          gate_total: totalGate,
          savings: diff,
          verdict: diff > 0 ? "pass_wins" : diff < 0 ? "direct_wins" : "break_even",
        });
      }
      const verdict =
        diff > 0
          ? `<p class="calc__verdict calc__verdict--win">The pass saves ${money(diff)}${people > 1 ? " for " + people + " adults" : ""} (${percent.toFixed(0)}%)</p>`
          : diff < 0
            ? `<p class="calc__verdict calc__verdict--lose">Buying direct is cheaper by ${money(Math.abs(diff))}${people > 1 ? " for " + people + " adults" : ""} (${Math.abs(percent).toFixed(0)}%)</p>`
            : `<p class="calc__verdict">Break-even: the pass and gate prices are the same.</p>`;
      out.innerHTML =
        verdict +
        `<p class="muted">Your ${count}: ${names.join(", ")}. Gate total ${money(totalGate)} vs ${money(totalPass)}${people > 1 ? " for " + people + " adults" : ""}.</p>` +
        `<p class="muted">Gate price per adult ${money(gatePerPerson)}; pass ${money(perPersonPass)} per adult.</p>`;
      return;
    }

    const perAttraction = perPersonPass / count;
    const cityName = block.dataset.label || block.dataset.city;
    const cityPage = block.dataset.city + ".html";
    const missing = count - entered;
    out.innerHTML =
      `<p class="calc__verdict">Your ${count} attractions cost ${money(totalPass)} in the pass${people > 1 ? " for " + people + " adults" : ""}</p>` +
      `<p class="muted">That is about ${money(perAttraction)} per attraction. Enter a gate price for ${missing} more attraction${missing === 1 ? "" : "s"} to see the full saving${entered ? ` (already entered: ${money(gatePerPerson)} per adult)` : ""}, or compare that figure with what you would pay at the gate.</p>` +
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
        const label = box.closest(".calc__option");
        const gate = label ? label.querySelector("[data-gate]") : null;
        if (gate) gate.disabled = !box.checked;
        update();
      });
    });
    block.querySelectorAll("[data-gate]").forEach((gate) => {
      gate.addEventListener("input", update);
    });
  });

  showCity();
})();
