/**
 * Oversætter de regneudtryk, der står som almindelig tekst i emnernes
 * eksempler, til KaTeX — så de sættes med samme matematiktypografi som
 * resten af matematikfaget.
 *
 * Reglen er bevidst striks: udtrykket oversættes kun, hvis *hvert
 * eneste* tegn kan genkendes. Møder den noget ukendt, giver den `null`,
 * og udtrykket bliver stående som den tekst, forfatteren skrev. På den
 * måde kan oversættelsen aldrig komme til at ændre betydningen af et
 * regnestykke — i værste fald sker der ingenting.
 */

/** Tegn, der oversættes én til én. Glyffen er den samme som i teksten. */
const SYMBOLS: Record<string, string> = {
  "+": "+",
  "-": "-",
  "−": "-",
  "×": "\\times",
  "*": "\\times",
  "·": "\\cdot",
  "÷": "\\div",
  // Kolon er division på dansk. Det beholder sit eget udseende.
  ":": "\\mathbin{:}",
  "/": "/",
  "=": "=",
  "≈": "\\approx",
  "≠": "\\neq",
  "<": "<",
  ">": ">",
  "≤": "\\le",
  "≥": "\\ge",
  "→": "\\to",
  "(": "(",
  ")": ")",
  "%": "\\%",
  "π": "\\pi",
  "°": "^\\circ",
  "…": "\\ldots",
  // Decimalkommaer bliver spist sammen med tallet, så et komma, der når
  // hertil, adskiller to udtryk og skal have almindelig luft efter sig.
  ",": ",",
};

/** Ord, der binder et regnestykke sammen og skal have almindelig luft om sig. */
const CONNECTORS = new Set(["og", "eller", "ca", "rest"]);

/**
 * De eneste flerbogstavsord, et regneudtryk må indeholde. Alt andet ord
 * betyder, at strengen er brødtekst og ikke en formel — så lader vi den
 * være. Enkelte bogstaver er undtaget, for de er variabelnavne.
 */
const UNITS = new Set([
  "mm", "cm", "dm", "km",
  "mg", "kg", "hg", "ton",
  "ml", "cl", "dl", "liter",
  "meter", "gram",
  "kr", "øre",
  "sek", "min", "time", "timer", "døgn", "år",
  "stk", "mio", "mia",
]);

/** Tal med dansk tusindtalsseparator og decimalkomma: 1.234,56 */
const NUMBER = /^\d+(?:\.\d{3})*(?:,\d+)?/;
const WORD = /^[A-Za-zÆØÅæøå]+/;

export function toTex(input: string): string | null {
  const source = input.trim();
  if (!source) return null;

  let out = "";
  let i = 0;
  let sawNumber = false;
  let sawDigitOrLetter = false;
  // Sidste token var et bogstav eller ord — ikke et tal og ikke en operator.
  let sawWord = false;

  while (i < source.length) {
    const rest = source.slice(i);

    if (/^\s/.test(rest)) {
      i += 1;
      continue;
    }

    const number = NUMBER.exec(rest);
    if (number) {
      // To tal i træk uden regnetegn imellem er ikke et regnestykke.
      if (sawNumber) return null;
      out += number[0].replace(/,/g, "{,}");
      i += number[0].length;
      sawNumber = true;
      sawWord = false;
      sawDigitOrLetter = true;
      continue;
    }

    const word = WORD.exec(rest);
    if (word) {
      const text = word[0];
      const lower = text.toLowerCase();
      if (text.length > 1 && !UNITS.has(lower) && !CONNECTORS.has(lower)) {
        // Et rigtigt ord — altså brødtekst, ikke en formel.
        return null;
      }
      // Et ord lige efter et andet ord er sprog, ikke matematik: i en
      // formel står der altid et regnetegn mellem to navne. Det er sådan
      // en label som "I liter:" adskiller sig fra en enhed som "84 liter".
      if (sawWord && !CONNECTORS.has(lower)) return null;

      if (CONNECTORS.has(lower)) {
        out += `\\ \\text{${text}}\\ `;
      } else if (sawNumber) {
        // Et ord lige efter et tal er en enhed — den sættes oprejst.
        out += `\\,\\text{${text}}`;
      } else if (text.length === 1) {
        // Et enkelt bogstav er en variabel og sættes kursivt af KaTeX.
        out += text;
      } else {
        out += `\\text{${text}}`;
      }
      i += text.length;
      sawNumber = false;
      sawWord = !CONNECTORS.has(lower);
      sawDigitOrLetter = true;
      continue;
    }

    const char = source[i];
    if (char === "²" || char === "³") {
      // Kvadrat- og kubiktegn hører til det, der står foran.
      if (!sawDigitOrLetter) return null;
      out += char === "²" ? "^2" : "^3";
      i += 1;
      continue;
    }

    const symbol = SYMBOLS[char];
    if (symbol === undefined) return null;

    out += ` ${symbol} `;
    i += 1;
    sawNumber = false;
    sawWord = false;
    sawDigitOrLetter = symbol === ")";
  }

  // Et udtryk uden tal eller bogstaver er ikke matematik.
  return /[0-9A-Za-zÆØÅæøå]/.test(source) ? out.replace(/\s+/g, " ").trim() : null;
}
