/**
 * Lille inline-markup til brødteksten i metodesamlingen.
 *
 * Understøtter tre former, som kan blandes frit i samme afsnit:
 *
 *   **fed**        fremhævede begreber
 *   *kursiv*       lette betoninger
 *   $x + 4 = 9$    matematik, som sættes med KaTeX
 *
 * Et afsluttende tegn, der aldrig kommer, er ikke en fejl — så står
 * tegnet bare som almindelig tekst. Det gør, at et enkelt dollartegn
 * eller en stjerne i en helt normal sætning ikke ødelægger afsnittet.
 */

export type InlineToken =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "italic"; value: string }
  | { type: "math"; value: string };

type Delimiter = {
  open: string;
  close: string;
  type: InlineToken["type"];
};

/** Længste tegn først, så **fed** aldrig læses som to gange *kursiv*. */
const DELIMITERS: Delimiter[] = [
  { open: "**", close: "**", type: "bold" },
  { open: "*", close: "*", type: "italic" },
  { open: "$", close: "$", type: "math" },
];

export function parseInline(input: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  let plain = "";
  let i = 0;

  const flush = () => {
    if (plain) {
      tokens.push({ type: "text", value: plain });
      plain = "";
    }
  };

  while (i < input.length) {
    const delimiter = DELIMITERS.find((d) => input.startsWith(d.open, i));

    if (!delimiter) {
      plain += input[i];
      i += 1;
      continue;
    }

    const contentStart = i + delimiter.open.length;
    const closeAt = input.indexOf(delimiter.close, contentStart);

    // Uafsluttet — eller tomt, som i "****". Behandl tegnet som tekst.
    if (closeAt === -1 || closeAt === contentStart) {
      plain += input[i];
      i += 1;
      continue;
    }

    flush();
    tokens.push({
      type: delimiter.type,
      value: input.slice(contentStart, closeAt),
    });
    i = closeAt + delimiter.close.length;
  }

  flush();
  return tokens;
}
