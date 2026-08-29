import type { PieFigure, TriangleFigure, UnitCircleFigure } from "@/lib/types";

/** Punkt på en cirkel. Vinklen regnes mod uret fra den positive x-akse. */
function polar(cx: number, cy: number, r: number, degrees: number) {
  const radians = (degrees * Math.PI) / 180;
  return { x: cx + r * Math.cos(radians), y: cy - r * Math.sin(radians) };
}

/**
 * Lagkager, hvor tælleren er den skraverede del og nævneren hele kagen.
 * Den skraverede del starter ved 3-tiden og går mod uret, som i den
 * trykte udgave.
 */
export function PieRow({ pies }: { pies: PieFigure[] }) {
  const r = 34;
  const size = 2 * r + 6;
  const c = size / 2;

  return (
    <div className="flex flex-wrap items-start justify-center gap-5 py-2 sm:gap-8">
      {pies.map((pie, i) => {
        const sweep = (pie.numerator / pie.denominator) * 360;
        const start = polar(c, c, r, 0);
        const end = polar(c, c, r, sweep);
        const largeArc = sweep > 180 ? 1 : 0;

        return (
          <figure key={i} className="m-0 flex flex-col items-center gap-2">
            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
              role="img"
              aria-label={`Lagkage, hvor ${pie.numerator} ud af ${pie.denominator} dele er skraveret`}
            >
              {sweep >= 360 ? (
                <circle cx={c} cy={c} r={r} className="fill-zinc-400/70" />
              ) : (
                <path
                  d={`M ${c} ${c} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`}
                  className="fill-zinc-400/70"
                />
              )}

              {/* Skillelinjer mellem alle kagens dele. */}
              {Array.from({ length: pie.denominator }, (_, k) => {
                const p = polar(c, c, r, (k * 360) / pie.denominator);
                return (
                  <line
                    key={k}
                    x1={c}
                    y1={c}
                    x2={p.x}
                    y2={p.y}
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />
                );
              })}

              <circle
                cx={c}
                cy={c}
                r={r}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

            {pie.caption && (
              <figcaption className="text-sm text-zinc-600 dark:text-zinc-400">
                {pie.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}

/** Retvinklet trekant med den rette vinkel nederst til højre. */
export function TriangleDiagram({ figure }: { figure: TriangleFigure }) {
  const {
    base,
    height,
    size = 190,
    angleLabel,
    adjacentLabel,
    oppositeLabel,
    hypotenuseLabel,
    caption,
    footLabels,
    showRightAngle = true,
  } = figure;

  const scale = size / Math.max(base, height);
  const w = base * scale;
  const h = height * scale;

  // Groft mål for en tekstbredde — nok til at afsætte den plads, de
  // enkelte mærkater har brug for, i stedet for altid at reservere plads
  // til den længst tænkelige.
  const textWidth = (label?: string) => (label ? label.length * 7.2 : 0);

  const pad = {
    // Hypotenusens mærkat er højrestillet og kan rage ud til venstre.
    left: Math.max(16, textWidth(hypotenuseLabel) - w * 0.55 + 8),
    right: Math.max(16, textWidth(oppositeLabel) + 12),
    top: 24,
    bottom: footLabels ? 46 : 34,
  };

  const ax = pad.left;
  const ay = pad.top + h; // spids med vinklen v
  const bx = pad.left + w;
  const by = ay; // den rette vinkel
  const cy = pad.top; // toppunkt

  return (
    <figure className="latex-scroll m-0 py-2">
      <svg
        width={pad.left + w + pad.right}
        height={pad.top + h + pad.bottom}
        viewBox={`0 0 ${pad.left + w + pad.right} ${pad.top + h + pad.bottom}`}
        role="img"
        aria-label={`Retvinklet trekant med vinklen ${angleLabel}`}
        className="mx-auto block h-auto max-w-full text-zinc-800 dark:text-zinc-200"
        style={{ fontSize: 13 }}
      >
        <polygon
          points={`${ax},${ay} ${bx},${by} ${bx},${cy}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        {showRightAngle && (
          <polyline
            points={`${bx - 12},${by} ${bx - 12},${by - 12} ${bx},${by - 12}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        )}

        {/* Vinkelbue ved v. */}
        <path
          d={`M ${ax + 26} ${ay} A 26 26 0 0 0 ${ax + 26 * Math.cos(Math.atan2(h, w))} ${ay - 26 * Math.sin(Math.atan2(h, w))}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <text x={ax + 31} y={ay - 8} className="fill-current" fontStyle="italic">
          {angleLabel}
        </text>

        {adjacentLabel && (
          <text
            x={ax + w / 2}
            y={ay + 18}
            textAnchor="middle"
            className="fill-current font-semibold"
          >
            {adjacentLabel}
          </text>
        )}

        {oppositeLabel && (
          <text
            x={bx + 8}
            y={(cy + by) / 2}
            dominantBaseline="middle"
            className="fill-current font-semibold"
          >
            {oppositeLabel}
          </text>
        )}

        {hypotenuseLabel && (
          // Teksten sættes højrestillet et stykke oppe ad hypotenusen og
          // skubbes vinkelret væk fra den, så den står i det frie felt over
          // linjen i stedet for oven i den — som i den trykte udgave.
          <text
            x={ax + w * 0.55 - (10 * h) / Math.hypot(w, h)}
            y={ay - h * 0.55 - (10 * w) / Math.hypot(w, h)}
            textAnchor="end"
            className="fill-current font-semibold"
            stroke="var(--background)"
            strokeWidth="4"
            paintOrder="stroke"
          >
            {hypotenuseLabel}
          </text>
        )}

        {footLabels && (
          <>
            <text x={ax} y={ay + 36} textAnchor="middle" className="fill-current">
              {footLabels[0]}
            </text>
            <text x={bx} y={ay + 36} textAnchor="middle" className="fill-current">
              {footLabels[1]}
            </text>
          </>
        )}
      </svg>

      {caption && (
        <figcaption className="text-center text-sm font-semibold">{caption}</figcaption>
      )}
    </figure>
  );
}

/** Enhedscirkel med en radius tegnet ved en given vinkel. */
export function UnitCircleDiagram({ figure }: { figure: UnitCircleFigure }) {
  const {
    angle,
    title,
    captions,
    showPoint = true,
    showLabels = false,
    showArrow = false,
  } = figure;

  const r = 66;
  const pad = 30;
  const size = 2 * (r + pad);
  const c = size / 2;
  const p = polar(c, c, r, angle);

  return (
    <figure className="m-0 flex flex-col items-center gap-1">
      {title && <figcaption className="text-sm">{title}</figcaption>}

      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`Enhedscirkel med radius tegnet ved ${angle} grader`}
        className="h-auto max-w-full text-zinc-800 dark:text-zinc-200"
        style={{ fontSize: 12 }}
      >
        <defs>
          <marker
            id="latex-axis-arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" strokeWidth="1" />
          </marker>
        </defs>

        <line
          x1={pad - 18}
          y1={c}
          x2={size - pad + 18}
          y2={c}
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.55"
          markerEnd="url(#latex-axis-arrow)"
        />
        <line
          x1={c}
          y1={size - pad + 18}
          x2={c}
          y2={pad - 18}
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.55"
          markerEnd="url(#latex-axis-arrow)"
        />

        <circle cx={c} cy={c} r={r} fill="none" stroke="currentColor" strokeWidth="1.1" />

        {showLabels && (
          <>
            {/* Lodret linje fra P ned til x-aksen — trekantens modstående katete. */}
            <line
              x1={p.x}
              y1={p.y}
              x2={p.x}
              y2={c}
              stroke="currentColor"
              strokeWidth="0.9"
              strokeDasharray="3 2"
            />
            <text x={p.x + 12} y={(p.y + c) / 2} className="fill-current">
              sin(v)
            </text>
            <text x={(c + p.x) / 2} y={c + 15} textAnchor="middle" className="fill-current">
              cos(v)
            </text>
            <text x={(c + p.x) / 2 - 6} y={(c + p.y) / 2 - 6} className="fill-current">
              1
            </text>
            <text x={c + 16} y={c - 6} className="fill-current" fontStyle="italic">
              v
            </text>
            <text x={c - 10} y={c + 14} className="fill-current">
              0
            </text>
            <text x={p.x + 6} y={p.y - 6} className="fill-current" fontStyle="italic">
              P
            </text>
          </>
        )}

        <line
          x1={c}
          y1={c}
          x2={p.x}
          y2={p.y}
          stroke="currentColor"
          strokeWidth="1.8"
          markerEnd={showArrow ? "url(#latex-axis-arrow)" : undefined}
        />

        {showPoint && !showArrow && <circle cx={p.x} cy={p.y} r="3" className="fill-current" />}
      </svg>

      {captions && captions.length > 0 && (
        <figcaption className="text-center text-xs leading-5 text-zinc-600 dark:text-zinc-400">
          {captions.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </figcaption>
      )}
    </figure>
  );
}
