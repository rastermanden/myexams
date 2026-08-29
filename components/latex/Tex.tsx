import katex from "katex";
import { parseInline } from "@/lib/inline";

const KATEX_OPTIONS = {
  throwOnError: false,
  strict: false as const,
  // Dansk decimalkomma: \text{} og komma sættes som i den trykte udgave.
  macros: { "\\dk": "{,}" },
};

function render(tex: string, displayMode: boolean): string {
  return katex.renderToString(tex, { ...KATEX_OPTIONS, displayMode });
}

/** En formel midt i en sætning. */
export function Tex({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: render(tex, false) }} />;
}

/** En formel på sin egen linje, centreret som i et LaTeX-dokument. */
export function DisplayTex({ tex }: { tex: string }) {
  return (
    <div
      className="latex-display"
      dangerouslySetInnerHTML={{ __html: render(tex, true) }}
    />
  );
}

/**
 * Brødtekst med inline-markup: **fed**, *kursiv* og $matematik$.
 */
export function InlineText({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((token, i) => {
        switch (token.type) {
          case "bold":
            return <strong key={i}>{token.value}</strong>;
          case "italic":
            return <em key={i}>{token.value}</em>;
          case "math":
            return <Tex key={i} tex={token.value} />;
          default:
            return <span key={i}>{token.value}</span>;
        }
      })}
    </>
  );
}
