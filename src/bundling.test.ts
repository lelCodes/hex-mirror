import { describe, expect, it } from "vitest";
import entrySource from "./index.tsx?raw";

// Entry-import-order guard. The theme palette must be imported from the entry
// module (never tree-shaken), and the site's own stylesheet must load AFTER the
// @lelcodes/ui imports so site rules and token overrides win the cascade in the
// production bundle.
describe("entry import order", () => {
  it("imports the theme palette from the entry module", () => {
    expect(entrySource).toMatch(/import\s+["']@lelcodes\/ui\/theme\.css["']/);
  });

  it("imports the site stylesheet after the @lelcodes/ui imports", () => {
    const lastUi = entrySource.lastIndexOf("@lelcodes/ui");
    const siteCss = entrySource.indexOf("./styles.css");
    expect(lastUi).toBeGreaterThanOrEqual(0);
    expect(siteCss).toBeGreaterThan(lastUi);
  });
});
