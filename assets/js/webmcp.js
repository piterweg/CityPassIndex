/* WebMCP: expose a small read-only tool to in-browser agents when supported. */
(function () {
  "use strict";
  if (!navigator.modelContext || typeof navigator.modelContext.registerTool !== "function") return;
  try {
    navigator.modelContext.registerTool({
      name: "citypass_break_even",
      description:
        "Explain how the City Pass Index break-even calculator works and where to find checked pass prices for New York, Philadelphia, Boston and Chicago.",
      inputSchema: {
        type: "object",
        properties: {
          city: {
            type: "string",
            description: "City slug: new-york, philadelphia, boston or chicago.",
          },
        },
        additionalProperties: false,
      },
      execute: function (input) {
        var city = (input && input.city ? String(input.city) : "").toLowerCase();
        var cities = {
          "new-york": "https://citypassindex.com/new-york.html",
          philadelphia: "https://citypassindex.com/philadelphia.html",
          boston: "https://citypassindex.com/boston.html",
          chicago: "https://citypassindex.com/chicago.html",
        };
        var url = cities[city] || "https://citypassindex.com/cities.html";
        return {
          content: [
            {
              type: "text",
              text:
                "City Pass Index compares tourist passes against gate prices and publishes the break-even point. " +
                "Checked city page: " +
                url +
                " — calculator: https://citypassindex.com/calculator.html — data: https://citypassindex.com/data.html",
            },
          ],
        };
      },
    });
  } catch (error) {
    /* WebMCP is optional and experimental; ignore failures. */
  }
})();
