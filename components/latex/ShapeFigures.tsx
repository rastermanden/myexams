import type { PlaneFigure, ShapeLabels, SolidFigure } from "@/lib/types";

/*
 * Figurerne tegnes med `currentColor`, så de følger tekstens farve og
 * dermed virker på både lys og mørk baggrund. Flader får en svag tone,
 * og skjulte kanter er stiplede, som man tegner dem i hånden.
 */

const FACE = "fill-zinc-400/15";
const EDGE = { stroke: "currentColor", strokeWidth: 1.3, fill: "none" } as const;
const HIDDEN = { ...EDGE, strokeDasharray: "4 3", strokeWidth: 1 } as const;
const GUIDE = { stroke: "currentColor", strokeWidth: 1, strokeDasharray: "3 3", fill: "none" } as const;

function Frame({
  width,
  height,
  label,
  caption,
  children,
}: {
  width: number;
  height: number;
  label: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="m-0 flex flex-col items-center">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={label}
        className="max-w-full text-zinc-800 dark:text-zinc-200"
        style={{ fontSize: 13 }}
      >
        {children}
      </svg>
      {caption && (
        <figcaption className="mt-1 text-center text-sm text-zinc-600 dark:text-zinc-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Label({
  x,
  y,
  children,
  anchor = "middle",
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      dominantBaseline="middle"
      className="fill-current"
      stroke="var(--background)"
      strokeWidth="3.5"
      paintOrder="stroke"
    >
      {children}
    </text>
  );
}

/* ------------------------------ rumlige ------------------------------ */

/** Kasse og terning: forflade, bagflade forskudt, og kanterne imellem. */
function Box({ labels, cube }: { labels: ShapeLabels; cube: boolean }) {
  const w = cube ? 110 : 150;
  const h = cube ? 110 : 90;
  const d = 44;
  const x = 26;
  const y = 52;
  const bx = x + d;
  const by = y - d * 0.55;

  return (
    <>
      <polygon points={`${x},${y} ${x + w},${y} ${x + w},${y + h} ${x},${y + h}`} className={FACE} />
      {/* Skjulte kanter bag figuren. */}
      <polyline points={`${bx},${by + h} ${x},${y + h}`} {...HIDDEN} />
      <polyline points={`${bx},${by} ${bx},${by + h} ${bx + w},${by + h}`} {...HIDDEN} />
      {/* Synlige kanter. */}
      <polygon points={`${x},${y} ${x + w},${y} ${x + w},${y + h} ${x},${y + h}`} {...EDGE} />
      <polyline points={`${x},${y} ${bx},${by} ${bx + w},${by} ${x + w},${y}`} {...EDGE} />
      <polyline points={`${bx + w},${by} ${bx + w},${by + h} ${x + w},${y + h}`} {...EDGE} />

      {cube
        ? labels.side && <Label x={x + w / 2} y={y + h + 16}>{labels.side}</Label>
        : (
          <>
            {labels.length && <Label x={x + w / 2} y={y + h + 16}>{labels.length}</Label>}
            {labels.height && <Label x={x - 14} y={y + h / 2}>{labels.height}</Label>}
            {labels.width && (
              // Dybdemålet sættes over dybdekanten, så stregen ikke går
              // gennem teksten.
              <Label x={x + w + d / 2} y={y - d * 0.275 - 14}>{labels.width}</Label>
            )}
          </>
        )}
    </>
  );
}

/** Trekantet prisme: en trekant trukket bagud i dybden. */
function Prism({ labels }: { labels: ShapeLabels }) {
  const d = 52;
  const front = "40,150 150,150 95,66";
  const shift = (p: string) =>
    p
      .split(" ")
      .map((pair) => {
        const [px, py] = pair.split(",").map(Number);
        return `${px + d},${py - d * 0.55}`;
      })
      .join(" ");
  const back = shift(front);

  return (
    <>
      <polygon points={front} className={FACE} />
      <polygon points={back} {...HIDDEN} />
      <polygon points={front} {...EDGE} />
      <line x1="40" y1="150" x2={40 + d} y2={150 - d * 0.55} {...HIDDEN} />
      <line x1="150" y1="150" x2={150 + d} y2={150 - d * 0.55} {...EDGE} />
      <line x1="95" y1="66" x2={95 + d} y2={66 - d * 0.55} {...EDGE} />
      <polyline
        points={`${40 + d},${150 - d * 0.55} ${150 + d},${150 - d * 0.55} ${95 + d},${66 - d * 0.55}`}
        {...EDGE}
      />
      {labels.base && <Label x={95} y={166}>{labels.base}</Label>}
      {labels.height && (
        <>
          <line x1={95} y1={66} x2={95} y2={150} {...GUIDE} />
          <Label x={112} y={108}>{labels.height}</Label>
        </>
      )}
      {labels.length && <Label x={150 + d / 2 + 8} y={150 - d * 0.275 + 14}>{labels.length}</Label>}
    </>
  );
}

/** Cylinder: to ellipser og de to lodrette sider. */
function Cylinder({ labels }: { labels: ShapeLabels }) {
  const cx = 105;
  const rx = 52;
  const ry = 18;
  const top = 46;
  const bottom = 158;

  return (
    <>
      <rect x={cx - rx} y={top} width={rx * 2} height={bottom - top} className={FACE} />
      <ellipse cx={cx} cy={bottom} rx={rx} ry={ry} className={FACE} />
      {/* Bagkanten af bundens ellipse kan ikke ses. */}
      <path d={`M ${cx - rx} ${bottom} A ${rx} ${ry} 0 0 1 ${cx + rx} ${bottom}`} {...HIDDEN} />
      <path d={`M ${cx - rx} ${bottom} A ${rx} ${ry} 0 0 0 ${cx + rx} ${bottom}`} {...EDGE} />
      <line x1={cx - rx} y1={top} x2={cx - rx} y2={bottom} {...EDGE} />
      <line x1={cx + rx} y1={top} x2={cx + rx} y2={bottom} {...EDGE} />
      <ellipse cx={cx} cy={top} rx={rx} ry={ry} {...EDGE} className={FACE} />

      {labels.radius && (
        <>
          <line x1={cx} y1={top} x2={cx + rx} y2={top} {...GUIDE} />
          <Label x={cx + rx + 8} y={top} anchor="start">{labels.radius}</Label>
        </>
      )}
      {labels.height && (
        <>
          <line x1={cx - rx - 16} y1={top} x2={cx - rx - 16} y2={bottom} {...GUIDE} />
          <Label x={cx - rx - 30} y={(top + bottom) / 2}>{labels.height}</Label>
        </>
      )}
    </>
  );
}

/** Kegle: grundflade med spids over midten. */
function Cone({ labels }: { labels: ShapeLabels }) {
  const cx = 105;
  const rx = 52;
  const ry = 18;
  const base = 158;
  const apex = 40;

  return (
    <>
      <path
        d={`M ${cx - rx} ${base} L ${cx} ${apex} L ${cx + rx} ${base} A ${rx} ${ry} 0 0 1 ${cx - rx} ${base} Z`}
        className={FACE}
      />
      <path d={`M ${cx - rx} ${base} A ${rx} ${ry} 0 0 1 ${cx + rx} ${base}`} {...HIDDEN} />
      <path d={`M ${cx - rx} ${base} A ${rx} ${ry} 0 0 0 ${cx + rx} ${base}`} {...EDGE} />
      <line x1={cx - rx} y1={base} x2={cx} y2={apex} {...EDGE} />
      <line x1={cx + rx} y1={base} x2={cx} y2={apex} {...EDGE} />

      {labels.height && (
        <>
          <line x1={cx} y1={apex} x2={cx} y2={base} {...GUIDE} />
          <Label x={cx + 14} y={(apex + base) / 2}>{labels.height}</Label>
        </>
      )}
      {labels.radius && (
        <>
          <line x1={cx} y1={base} x2={cx + rx} y2={base} {...GUIDE} />
          <Label x={cx + rx + 8} y={base} anchor="start">{labels.radius}</Label>
        </>
      )}
    </>
  );
}

/** Pyramide: kvadratisk grundflade i skråprojektion med spids over. */
function Pyramid({ labels }: { labels: ShapeLabels }) {
  const apex = { x: 108, y: 38 };
  const a = { x: 36, y: 150 };
  const b = { x: 148, y: 150 };
  const c = { x: 186, y: 122 };
  const d = { x: 74, y: 122 };

  return (
    <>
      <polygon points={`${a.x},${a.y} ${b.x},${b.y} ${apex.x},${apex.y}`} className={FACE} />
      <polygon points={`${b.x},${b.y} ${c.x},${c.y} ${apex.x},${apex.y}`} className={FACE} />
      <polygon
        points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y} ${d.x},${d.y}`}
        {...HIDDEN}
      />
      <line x1={d.x} y1={d.y} x2={apex.x} y2={apex.y} {...HIDDEN} />
      <polyline points={`${d.x},${d.y} ${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y}`} {...EDGE} />
      <line x1={a.x} y1={a.y} x2={apex.x} y2={apex.y} {...EDGE} />
      <line x1={b.x} y1={b.y} x2={apex.x} y2={apex.y} {...EDGE} />
      <line x1={c.x} y1={c.y} x2={apex.x} y2={apex.y} {...EDGE} />

      {labels.height && (
        <>
          <line x1={apex.x} y1={apex.y} x2={apex.x} y2={136} {...GUIDE} />
          <Label x={apex.x + 14} y={90}>{labels.height}</Label>
        </>
      )}
      {labels.base && <Label x={(a.x + b.x) / 2} y={166}>{labels.base}</Label>}
    </>
  );
}

/** Kugle med markeret radius og en ækvator, der giver rumfornemmelsen. */
function Sphere({ labels }: { labels: ShapeLabels }) {
  const cx = 105;
  const cy = 100;
  const r = 62;

  return (
    <>
      <circle cx={cx} cy={cy} r={r} className={FACE} />
      <circle cx={cx} cy={cy} r={r} {...EDGE} />
      <path d={`M ${cx - r} ${cy} A ${r} 20 0 0 0 ${cx + r} ${cy}`} {...EDGE} strokeWidth={1} />
      <path d={`M ${cx - r} ${cy} A ${r} 20 0 0 1 ${cx + r} ${cy}`} {...HIDDEN} />
      {labels.radius && (
        <>
          <line x1={cx} y1={cy} x2={cx + r} y2={cy} {...GUIDE} />
          <circle cx={cx} cy={cy} r="2.5" className="fill-current" />
          <Label x={cx + r + 8} y={cy} anchor="start">{labels.radius}</Label>
        </>
      )}
    </>
  );
}

const SOLIDS: Record<
  SolidFigure["shape"],
  { size: [number, number]; render: (l: ShapeLabels) => React.ReactNode; name: string }
> = {
  box: { size: [235, 175], render: (l) => <Box labels={l} cube={false} />, name: "kasse" },
  cube: { size: [200, 195], render: (l) => <Box labels={l} cube />, name: "terning" },
  prism: { size: [230, 185], render: (l) => <Prism labels={l} />, name: "trekantet prisme" },
  cylinder: { size: [255, 190], render: (l) => <Cylinder labels={l} />, name: "cylinder" },
  cone: { size: [255, 185], render: (l) => <Cone labels={l} />, name: "kegle" },
  pyramid: { size: [215, 180], render: (l) => <Pyramid labels={l} />, name: "pyramide" },
  sphere: { size: [255, 180], render: (l) => <Sphere labels={l} />, name: "kugle" },
};

export function SolidDiagram({ figure }: { figure: SolidFigure }) {
  const spec = SOLIDS[figure.shape];
  return (
    <Frame
      width={spec.size[0]}
      height={spec.size[1]}
      label={`Tegning af en ${spec.name}`}
      caption={figure.caption}
    >
      {spec.render(figure.labels ?? {})}
    </Frame>
  );
}

/* ------------------------------- plane ------------------------------- */

function Rect({ labels, square }: { labels: ShapeLabels; square: boolean }) {
  const w = square ? 120 : 170;
  const h = square ? 120 : 96;
  const x = 30;
  const y = 26;

  return (
    <>
      <rect x={x} y={y} width={w} height={h} className={FACE} />
      <rect x={x} y={y} width={w} height={h} {...EDGE} />
      {square
        ? labels.side && <Label x={x + w / 2} y={y + h + 16}>{labels.side}</Label>
        : (
          <>
            {labels.length && <Label x={x + w / 2} y={y + h + 16}>{labels.length}</Label>}
            {labels.width && <Label x={x - 16} y={y + h / 2}>{labels.width}</Label>}
          </>
        )}
    </>
  );
}

/** Trekant med grundlinje og indtegnet højde. */
function Triangle({ labels }: { labels: ShapeLabels }) {
  const a = { x: 30, y: 140 };
  const b = { x: 200, y: 140 };
  const apex = { x: 120, y: 34 };

  return (
    <>
      <polygon points={`${a.x},${a.y} ${b.x},${b.y} ${apex.x},${apex.y}`} className={FACE} />
      <polygon points={`${a.x},${a.y} ${b.x},${b.y} ${apex.x},${apex.y}`} {...EDGE} />
      <line x1={apex.x} y1={apex.y} x2={apex.x} y2={a.y} {...GUIDE} />
      <polyline
        points={`${apex.x - 11},${a.y} ${apex.x - 11},${a.y - 11} ${apex.x},${a.y - 11}`}
        {...EDGE}
        strokeWidth={1}
      />
      {labels.base && <Label x={(a.x + b.x) / 2} y={a.y + 16}>{labels.base}</Label>}
      {labels.height && <Label x={apex.x + 16} y={(apex.y + a.y) / 2}>{labels.height}</Label>}
    </>
  );
}

/** Parallelogram med højden tegnet vinkelret på grundlinjen. */
function Parallelogram({ labels }: { labels: ShapeLabels }) {
  const y0 = 36;
  const y1 = 140;
  const a = { x: 30, y: y1 };
  const b = { x: 176, y: y1 };
  const c = { x: 214, y: y0 };
  const d = { x: 68, y: y0 };

  return (
    <>
      <polygon points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y} ${d.x},${d.y}`} className={FACE} />
      <polygon points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y} ${d.x},${d.y}`} {...EDGE} />
      <line x1={d.x} y1={y0} x2={d.x} y2={y1} {...GUIDE} />
      <polyline points={`${d.x - 11},${y1} ${d.x - 11},${y1 - 11} ${d.x},${y1 - 11}`} {...EDGE} strokeWidth={1} />
      {labels.base && <Label x={(a.x + b.x) / 2} y={y1 + 16}>{labels.base}</Label>}
      {labels.height && <Label x={d.x + 16} y={(y0 + y1) / 2}>{labels.height}</Label>}
    </>
  );
}

/** Trapez med de to parallelle sider og højden. */
function Trapezoid({ labels }: { labels: ShapeLabels }) {
  const y0 = 36;
  const y1 = 140;
  const a = { x: 24, y: y1 };
  const b = { x: 216, y: y1 };
  const c = { x: 168, y: y0 };
  const d = { x: 76, y: y0 };

  return (
    <>
      <polygon points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y} ${d.x},${d.y}`} className={FACE} />
      <polygon points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y} ${d.x},${d.y}`} {...EDGE} />
      <line x1={d.x} y1={y0} x2={d.x} y2={y1} {...GUIDE} />
      <polyline points={`${d.x - 11},${y1} ${d.x - 11},${y1 - 11} ${d.x},${y1 - 11}`} {...EDGE} strokeWidth={1} />
      {labels.base && <Label x={(a.x + b.x) / 2} y={y1 + 16}>{labels.base}</Label>}
      {labels.top && <Label x={(c.x + d.x) / 2} y={y0 - 14}>{labels.top}</Label>}
      {labels.height && <Label x={d.x + 16} y={(y0 + y1) / 2}>{labels.height}</Label>}
    </>
  );
}

/** Cirkel med radius, og diameter når den er navngivet. */
function Circle({ labels }: { labels: ShapeLabels }) {
  const cx = 110;
  const cy = 96;
  const r = 68;

  return (
    <>
      <circle cx={cx} cy={cy} r={r} className={FACE} />
      <circle cx={cx} cy={cy} r={r} {...EDGE} />
      <circle cx={cx} cy={cy} r="2.5" className="fill-current" />
      {/* Radius tegnes opad og diameteren vandret, så de to mål kan
          skelnes fra hinanden i stedet for at ligge oven i hinanden. */}
      {labels.radius && (
        <>
          <line x1={cx} y1={cy} x2={cx} y2={cy - r} {...GUIDE} />
          <Label x={cx + 14} y={cy - r / 2} anchor="start">{labels.radius}</Label>
        </>
      )}
      {labels.length && (
        <>
          <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} {...GUIDE} />
          <Label x={cx} y={cy + 16}>{labels.length}</Label>
        </>
      )}
    </>
  );
}

const PLANES: Record<
  PlaneFigure["shape"],
  { size: [number, number]; render: (l: ShapeLabels) => React.ReactNode; name: string }
> = {
  rectangle: { size: [230, 160], render: (l) => <Rect labels={l} square={false} />, name: "rektangel" },
  square: { size: [180, 180], render: (l) => <Rect labels={l} square />, name: "kvadrat" },
  triangle: { size: [235, 168], render: (l) => <Triangle labels={l} />, name: "trekant" },
  parallelogram: { size: [240, 168], render: (l) => <Parallelogram labels={l} />, name: "parallelogram" },
  trapezoid: { size: [240, 168], render: (l) => <Trapezoid labels={l} />, name: "trapez" },
  circle: { size: [265, 180], render: (l) => <Circle labels={l} />, name: "cirkel" },
};

export function PlaneDiagram({ figure }: { figure: PlaneFigure }) {
  const spec = PLANES[figure.shape];
  return (
    <Frame
      width={spec.size[0]}
      height={spec.size[1]}
      label={`Tegning af et ${spec.name}`}
      caption={figure.caption}
    >
      {spec.render(figure.labels ?? {})}
    </Frame>
  );
}
