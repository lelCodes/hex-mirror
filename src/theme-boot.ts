import type { ThemeId } from "@lelcodes/ui";

export const SITE_THEME: ThemeId = "lelcodes";

// Pin this site to the lelCodes theme regardless of the visitor's stored choice.
// The storage key is shared across every site on this origin, so the theme is
// set on <html> only and never written back to storage.
export function applySiteTheme(): void {
  document.documentElement.dataset.theme = SITE_THEME;
}
