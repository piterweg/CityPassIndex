(() => {
  const root = document.querySelector("[data-calc]");
  if (!root) return;
  const pass = parseFloat(root.getAttribute("data-pass-price") || "151");
  const boxes = [...root.querySelectorAll("input[type=checkbox]")];
  const out = root.querySelector("[data-calc-result]");
  const update = () => {
    const picked = boxes.filter((b) => b.checked);
    if (picked.length !== 5) {
      out.innerHTML = `<p class="muted">Select ${5 - picked.length > 0 ? 5 - picked.length : 0} more attraction${picked.length === 4 ? "" : "s"} (5 required).</p>`;
      return;
    }
    const total = picked.reduce((sum, b) => sum + parseFloat(b.value), 0);
    const diff = total - pass;
    const names = picked.map((b) => b.getAttribute("data-name")).join(", ");
    out.innerHTML = diff > 0
      ? `<p class="calc__verdict calc__verdict--win">The pass saves about <strong>$${diff.toFixed(2)}</strong></p><p class="muted">Your five: ${names}. Gate total $${total.toFixed(2)} vs pass $${pass.toFixed(2)}.</p>`
      : `<p class="calc__verdict calc__verdict--lose">Buying direct is cheaper by about <strong>$${Math.abs(diff).toFixed(2)}</strong></p><p class="muted">Your five: ${names}. Gate total $${total.toFixed(2)} vs pass $${pass.toFixed(2)}.</p>`;
  };
  boxes.forEach((b) => b.addEventListener("change", () => {
    const picked = boxes.filter((x) => x.checked);
    if (picked.length > 5) { b.checked = false; }
    update();
  }));
  update();
})();
