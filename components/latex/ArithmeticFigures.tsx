import type { ArrowDigit, ColumnRow, GridRow, StickStep } from "@/lib/types";

/* Fælles mål, så cifre står i samme kolonner på tværs af figurerne. */
const CELL = 42;

function ruleClass(rule: ColumnRow["rule"]): string {
  if (rule === "double") return "border-b-4 border-double border-zinc-700 dark:border-zinc-300";
  if (rule === "single") return "border-b-2 border-zinc-700 dark:border-zinc-300";
  return "border-b border-zinc-300 dark:border-zinc-700";
}

/**
 * Kolonneopstilling til skriftlig addition og subtraktion — med mente
 * som lille hævet tal og overstregede cifre, når der lånes.
 */
export function ColumnFigure({ rows }: { rows: ColumnRow[] }) {
  return (
    <div className="flex justify-center overflow-x-auto py-2">
      <div className="flex items-stretch">
        {/* Regnetegnene står uden for selve tabellen, som i den trykte udgave. */}
        <div className="flex flex-col justify-center pr-2">
          {rows.map((row, i) => (
            <div
              key={i}
              className="flex items-center justify-end text-xl"
              style={{ height: CELL }}
            >
              {row.operator}
            </div>
          ))}
        </div>

        <div className="border border-zinc-300 dark:border-zinc-700">
          {rows.map((row, i) => (
            <div key={i} className={`flex ${ruleClass(row.rule)}`}>
              {row.cells.map((cell, j) => (
                <div
                  key={j}
                  className="flex items-center justify-center border-r border-zinc-300 last:border-r-0 dark:border-zinc-700"
                  style={{ width: CELL, height: CELL }}
                >
                  {cell.carry && (
                    <sup className="mr-0.5 text-[0.65em] leading-none">{cell.carry}</sup>
                  )}
                  <span className={cell.struck ? "line-through decoration-1" : undefined}>
                    {cell.digit}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Pile-illustrationen over et gangestykke: ét ciffer ganges ind i alle
 * cifrene i det lange tal, fra højre mod venstre (I, II, III).
 */
export function ArrowsFigure({
  left,
  fromIndex,
  operator,
  right,
  italic,
}: {
  left: string[];
  fromIndex: number;
  operator: string;
  right: ArrowDigit[];
  italic?: boolean;
}) {
  const slots = [...left, operator, ...right.map((d) => d.text)];
  const x = (i: number) => i * CELL + CELL / 2;
  const width = slots.length * CELL;

  const baseline = 88; // cifrenes linje
  const top = 70; // hvor pilene forlader og rammer cifrene
  const sourceX = x(fromIndex);

  return (
    <div className="flex justify-center overflow-x-auto py-2">
      <svg
        width={width}
        height={106}
        viewBox={`0 0 ${width} 106`}
        role="img"
        aria-label={`${left.join("")} ${operator} ${right.map((d) => d.text).join("")} — pile fra cifret ${left[fromIndex]} ind i hvert ciffer`}
        className="text-zinc-700 dark:text-zinc-300"
      >
        <defs>
          <marker
            id="latex-arrowhead"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" strokeWidth="1" />
          </marker>
        </defs>

        {right.map((digit, i) => {
          if (!digit.arrow && !digit.target) return null;
          const targetX = x(left.length + 1 + i);
          // Jo længere pilen når, jo højere buer den — så buerne ligger
          // uden om hinanden i stedet for at krydse.
          const lift = 16 + (i + 1) * 13;
          const midX = (sourceX + targetX) / 2;
          return (
            <g key={i}>
              <path
                d={`M ${sourceX} ${top} C ${midX - 10} ${top - lift}, ${midX + 10} ${top - lift}, ${targetX} ${top - 4}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 3"
                markerEnd="url(#latex-arrowhead)"
              />
              {/* Romertallet får en baggrundsfarvet kant, så det kan læses,
                  selv hvor det ligger oven på en stiplet bue. */}
              {digit.arrow && (
              <text
                x={targetX}
                y={top - 13}
                textAnchor="middle"
                className="fill-current"
                stroke="var(--background)"
                strokeWidth="3"
                paintOrder="stroke"
                style={{ fontSize: 11 }}
              >
                {digit.arrow}
              </text>
              )}
            </g>
          );
        })}

        {slots.map((slot, i) => (
          <text
            key={i}
            x={x(i)}
            y={baseline}
            textAnchor="middle"
            className="fill-current"
            fontStyle={italic && /^[a-z]$/.test(slot) ? "italic" : undefined}
            style={{ fontSize: 19 }}
          >
            {slot}
          </text>
        ))}
      </svg>
    </div>
  );
}

/**
 * Gange-opstillingen med pladsværdi-gitter: en overskriftsrække med
 * selve gangestykket og derunder rækkerne, der lægges sammen.
 */
export function GridFigure({ header, rows }: { header: string[]; rows: GridRow[] }) {
  const columns = Math.max(header.length, ...rows.map((r) => r.cells.length));

  return (
    <div className="flex justify-center overflow-x-auto py-2">
      <div>
        <div className="flex">
          {Array.from({ length: columns }, (_, i) => (
            <div
              key={i}
              className="flex items-center justify-center text-lg"
              style={{ width: CELL, height: CELL }}
            >
              {header[i] ?? ""}
            </div>
          ))}
        </div>

        <div className="border-x border-t border-zinc-300 dark:border-zinc-700">
          {rows.map((row, i) => (
            <div key={i} className={`flex ${ruleClass(row.rule)}`}>
              {Array.from({ length: columns }, (_, j) => (
                <div
                  key={j}
                  className="flex items-center justify-center border-r border-dashed border-zinc-300 last:border-r-0 dark:border-zinc-700"
                  style={{ width: CELL, height: CELL }}
                >
                  <span className={row.emphasis?.includes(j) ? "font-bold" : undefined}>
                    {row.cells[j] ?? ""}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Slikkepindsmetoden: tallet deles ciffer for ciffer ned ad pinden, og
 * resten føres med over i næste trin.
 */
export function StickFigure({
  divisor,
  steps,
  remainder,
}: {
  divisor: string;
  steps: StickStep[];
  remainder?: string;
}) {
  return (
    <div className="overflow-x-auto py-2">
      <div className="mx-auto w-fit">
        <div className="flex justify-center pl-16">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-500 dark:border-zinc-400">
            ÷{divisor}
          </span>
        </div>

        <div>
          {steps.map((step, i) => {
            const carried = step.carried ?? 0;
            return (
              <div key={i} className="flex items-center" style={{ height: CELL }}>
                <div className="w-16 pr-3 text-right tabular-nums">
                  {/* Den nedførte rest sættes kursivt, som i den trykte udgave. */}
                  <i>{step.dividend.slice(0, carried)}</i>
                  {step.dividend.slice(carried)}
                </div>
                <div className="h-full w-px shrink-0 bg-zinc-500 dark:bg-zinc-400" />
                <div className="w-12 pl-3 tabular-nums">{step.quotient}</div>
                {step.note && (
                  <div className="whitespace-nowrap pl-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {step.note}
                  </div>
                )}
              </div>
            );
          })}

          {remainder !== undefined && (
            <div className="flex items-center" style={{ height: CELL }}>
              <div className="w-16" />
              <div className="h-full w-px shrink-0 bg-zinc-500 dark:bg-zinc-400" />
              <div className="whitespace-nowrap pl-3 text-sm">
                Rest <i>{remainder}</i>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
