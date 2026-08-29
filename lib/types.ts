export type ImageRef = {
  url: string;
  alt: string;
  credit: string;
  license: string;
  sourcePage?: string;
  width?: number;
  height?: number;
};

export type WorkedExampleStep = {
  /** Selve mellemregningen, fx "0,18 × 250 = 45". */
  expression: string;
  /** Kort forklaring af, hvorfor trinnet ser sådan ud. */
  explanation?: string;
};

/** Et gennemregnet eksempel med alle mellemregninger. */
export type WorkedExample = {
  title: string;
  task: string;
  steps: WorkedExampleStep[];
  result: string;
  /** Prøve eller overslag, der viser at svaret passer. */
  check?: string;
};

export type ConceptSection = {
  heading: string;
  /** Brødtekst. Udelades, når afsnittet i stedet er sat op med `blocks`. */
  body?: string;
  /** LaTeX-agtige dokumentblokke — bruges af emner fra metodesamlingen. */
  blocks?: DocBlock[];
  /** Tegnet figur, der viser afsnittets figur eller legeme. */
  figure?: DocFigure;
  examples?: WorkedExample[];
  image?: ImageRef;
};

export type QuizOption = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
};

export type AudioPrompt = {
  intro: string;
  prompt: string;
};

export type Topic = {
  slug: string;
  title: string;
  summary: string;
  /** Kildeangivelse, når emnet gengiver en andens materiale. */
  credit?: string;
  hero?: ImageRef;
  demoComponent?: import("react").ComponentType;
  sections: ConceptSection[];
  audioPrompt?: AudioPrompt;
  quiz: QuizQuestion[];
};

export type SubjectSlug = "geografi" | "dansk" | "matematik" | "religion";

export type Category = {
  slug: string;
  title: string;
  summary: string;
  emoji?: string;
  topics: Topic[];
};

export type Subject = {
  slug: SubjectSlug;
  title: string;
  emoji: string;
  description: string;
  categories: Category[];
};

/* ------------------------------------------------------------------ *
 * Metodesamling: LaTeX-agtige dokumentblokke
 *
 * Bruges af emner, der gengiver en trykt metodesamling. Teksten i
 * `text`-blokke må bruge en lille inline-markup: **fed**, *kursiv* og
 * $matematik$ (KaTeX). Se lib/inline.ts.
 * ------------------------------------------------------------------ */

/** En celle i en kolonneopstilling (skriftlig plus/minus). */
export type ColumnCell = {
  /** Cifret i cellen. Tom streng giver en tom celle. */
  digit?: string;
  /** Lille hævet tal foran cifret — mente ved plus, lånt 10'er ved minus. */
  carry?: string;
  /** Overstreget ciffer, som når man låner fra kolonnen. */
  struck?: boolean;
};

/** En række i en kolonneopstilling. */
export type ColumnRow = {
  /** Regnetegn ude til venstre for rækken, fx "+". */
  operator?: string;
  cells: ColumnCell[];
  /** Streg under rækken: enkelt streg, eller dobbelt streg ved facit. */
  rule?: "single" | "double";
};

/** Et ciffer eller led i pile-illustrationen over et gangestykke. */
export type ArrowDigit = {
  text: string;
  /** Tegn en pil hertil. Sættes automatisk, når `arrow` er angivet. */
  target?: boolean;
  /** Mærkat på pilen, fx romertallet I, II eller III. */
  arrow?: string;
};

/** En række i gange-opstillingen med pladsværdi-gitter. */
export type GridRow = {
  cells: string[];
  /** Fremhæv enkelte celler (0-indekseret), fx det 0, række 2 starter med. */
  emphasis?: number[];
  rule?: "single" | "double";
};

/** Et trin på "slikkepinden" (lang division). */
export type StickStep = {
  /** Tallet til venstre for stregen — med eventuel nedført rest. */
  dividend: string;
  /** Antal cifre forrest i `dividend`, der er en nedført rest (skrives kursivt). */
  carried?: number;
  /** Cifret i svaret til højre for stregen. */
  quotient?: string;
  /** Forklaringen i parentes ude til højre. */
  note?: string;
};

/** En retvinklet trekant med frit valgte sidebenævnelser. */
export type TriangleFigure = {
  kind: "triangle";
  /** Bredde og højde i tegnede enheder — styrer trekantens facon. */
  base: number;
  height: number;
  /** Længste side i billedpunkter. Sæt den ned, når flere trekanter
   *  skal stå side om side. Standard er 190. */
  size?: number;
  angleLabel: string;
  /** Tekst langs den hosliggende katete (vandret). */
  adjacentLabel?: string;
  /** Tekst langs den modstående katete (lodret). */
  oppositeLabel?: string;
  /** Tekst langs hypotenusen. */
  hypotenuseLabel?: string;
  /** Tekst under trekanten, fx "Trekant 1". */
  caption?: string;
  /** Små mærkater i hver ende af grundlinjen, fx "Dig" og "Træ". */
  footLabels?: [string, string];
  /** Vis den lille firkant ved den rette vinkel. */
  showRightAngle?: boolean;
};

/** En enhedscirkel med en radius tegnet ved en given vinkel. */
export type UnitCircleFigure = {
  kind: "unitCircle";
  /** Vinklen i grader, målt fra den positive x-akse. */
  angle: number;
  /** Overskrift over cirklen, fx "90°". */
  title?: string;
  /** Linjer med tekst under cirklen, fx "cos = 0, sin = 1". */
  captions?: string[];
  /** Marker punktet P på cirklen. */
  showPoint?: boolean;
  /** Vis navnene 1, sin(v), cos(v) og v inde i figuren. */
  showLabels?: boolean;
  /** Tegn pilespids for enden af radius. */
  showArrow?: boolean;
};

/**
 * Mål, der kan sættes på en figur. Kun de mål, figuren faktisk har,
 * bliver brugt — en kugle har fx kun en radius.
 */
export type ShapeLabels = {
  /** Længde langs figurens forkant. */
  length?: string;
  /** Bredde ind i dybden (rumlige figurer) eller lodret side (plane). */
  width?: string;
  height?: string;
  radius?: string;
  /** Sidelængde i en terning eller et kvadrat. */
  side?: string;
  /** Grundlinje i en trekant, et parallelogram eller en trapez. */
  base?: string;
  /** Den korte parallelle side i en trapez. */
  top?: string;
};

/** En rumlig figur tegnet i skråprojektion. */
export type SolidFigure = {
  kind: "solid";
  shape: "box" | "cube" | "prism" | "cylinder" | "cone" | "pyramid" | "sphere";
  labels?: ShapeLabels;
  caption?: string;
};

/** En plan figur set forfra. */
export type PlaneFigure = {
  kind: "shape";
  shape:
    | "rectangle"
    | "square"
    | "triangle"
    | "parallelogram"
    | "trapezoid"
    | "circle";
  labels?: ShapeLabels;
  caption?: string;
};

/** En lagkage, hvor en del af cirklen er skraveret. */
export type PieFigure = {
  numerator: number;
  denominator: number;
  /** Tekst under lagkagen. */
  caption?: string;
};

export type DocFigure =
  | { kind: "columns"; rows: ColumnRow[] }
  | {
      kind: "arrows";
      left: string[];
      /** Indeks i `left` på det ciffer, pilene udgår fra. */
      fromIndex: number;
      operator: string;
      right: ArrowDigit[];
      /** Sæt variabler i kursiv, som når reglen skrives med a, b og c. */
      italic?: boolean;
    }
  | { kind: "grid"; header: string[]; rows: GridRow[] }
  | { kind: "stick"; divisor: string; steps: StickStep[]; remainder?: string }
  | { kind: "pies"; pies: PieFigure[] }
  | TriangleFigure
  | UnitCircleFigure
  | SolidFigure
  | PlaneFigure;

export type DocBlock =
  /** Et almindeligt afsnit. Må indeholde **fed**, *kursiv* og $matematik$. */
  | { kind: "text"; text: string }
  /** En centreret formel, sat med KaTeX. */
  | { kind: "math"; tex: string }
  /** En punktopstilling med valgfri overskrift, fx "Husk:". */
  | { kind: "list"; title?: string; ordered?: boolean; items: string[] }
  /** En figur med valgfri billedtekst. */
  | { kind: "figure"; figure: DocFigure; caption?: string }
  /** Flere figurer side om side, fx tre trekanter eller enhedscirkler. */
  | { kind: "figureRow"; figures: DocFigure[] };
