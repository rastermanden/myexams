/**
 * Opgavegenerator til "plus med samme nævner" i metodesamlingens
 * brøkafsnit: tilfældige stykker af typen a/c + b/c med hint, facit og
 * trinvis fremgangsmåde.
 *
 * Modulet står for sig selv — som de øvrige opgavegeneratorer i lib/ —
 * så det kan køres direkte af node --test.
 */

export type Fraction = {
  numerator: number;
  denominator: number;
};

/** Største fælles divisor. Bruges til at forkorte svaret. */
export function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const r = x % y;
    x = y;
    y = r;
  }
  return x || 1;
}

/** Forkorter en brøk helt. */
export function simplifyFraction(fraction: Fraction): Fraction {
  const divisor = gcd(fraction.numerator, fraction.denominator);
  return {
    numerator: fraction.numerator / divisor,
    denominator: fraction.denominator / divisor,
  };
}

/** Sværhedsgrad for en plus-opgave med samme nævner. */
export type PlusLevel = 1 | 2 | 3;

export const PLUS_LEVEL_LABELS: Record<PlusLevel, string> = {
  1: "Let",
  2: "Mellem",
  3: "Svær",
};

export const PLUS_LEVEL_HINTS: Record<PlusLevel, string> = {
  1: "Svaret er allerede færdigt forkortet.",
  2: "Svaret kan forkortes — find det tal, der går op i både tæller og nævner.",
  3: "Tællerne bliver tilsammen større end nævneren, så svaret er en uægte brøk.",
};

export type PlusSammeNaevnerExercise = {
  /** Den forreste brøk, $a/c$. */
  left: Fraction;
  /** Den bagerste brøk, $b/c$ — samme nævner som `left`. */
  right: Fraction;
  /** Summen, før den forkortes: $(a+b)/c$. */
  raw: Fraction;
  /** Det færdige svar, altså `raw` fuldt forkortet. */
  answer: Fraction;
  level: PlusLevel;
  hint: string;
  steps: string[];
};

/** Hvordan et indtastet svar blev bedømt. */
export type AnswerVerdict =
  /** Rigtigt og fuldt forkortet. */
  | "correct"
  /** Rigtig værdi, men brøken kan forkortes yderligere. */
  | "unreduced"
  /** Forkert værdi. */
  | "wrong"
  /** Der mangler et tal, eller nævneren er 0. */
  | "incomplete";

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fractionTex(fraction: Fraction): string {
  return `\\frac{${fraction.numerator}}{${fraction.denominator}}`;
}

/** Passer opgaven til niveauet? Niveauerne er beskrevet i PLUS_LEVEL_HINTS. */
function matchesLevel(level: PlusLevel, sum: number, denominator: number): boolean {
  const canBeReduced = gcd(sum, denominator) > 1;
  if (level === 1) return sum < denominator && !canBeReduced;
  if (level === 2) return sum < denominator && canBeReduced;
  return sum > denominator;
}

function buildSteps(
  left: Fraction,
  right: Fraction,
  raw: Fraction,
  answer: Fraction,
): string[] {
  const denominator = left.denominator;
  const steps = [
    `Nævnerne er ens — begge brøker er delt i ${denominator} dele — så brøkerne kan lægges sammen med det samme.`,
    `Læg tællerne sammen, og lad nævneren stå: (${left.numerator} + ${right.numerator})/${denominator} = ${raw.numerator}/${denominator}.`,
  ];

  const divisor = gcd(raw.numerator, denominator);
  if (divisor > 1) {
    steps.push(
      `Forkort svaret: både ${raw.numerator} og ${denominator} kan divideres med ${divisor}, så ${raw.numerator}/${denominator} = ${answer.numerator}/${answer.denominator}.`,
    );
  } else {
    steps.push(
      `${raw.numerator} og ${denominator} har ingen fælles divisor, så ${answer.numerator}/${answer.denominator} er færdigt forkortet.`,
    );
  }

  if (answer.numerator > answer.denominator) {
    const whole = Math.floor(answer.numerator / answer.denominator);
    const rest = answer.numerator % answer.denominator;
    steps.push(
      `Tælleren er størst, så svaret er en uægte brøk — det er ${whole} hel${whole === 1 ? "" : "e"} og ${rest}/${answer.denominator} mere.`,
    );
  }

  return steps;
}

/** Trækker en tilfældig opgave af typen $a/c + b/c$ på det valgte niveau. */
export function generatePlusSammeNaevner(level: PlusLevel): PlusSammeNaevnerExercise {
  const maxDenominator = level === 1 ? 10 : 12;

  // Der trækkes, til opgaven passer til niveauet. Skulle det mod forventning
  // ikke lykkes, falder vi tilbage på en fast opgave, så demoen aldrig står tom.
  for (let attempt = 0; attempt < 200; attempt++) {
    const denominator = randomInt(4, maxDenominator);
    const a = randomInt(1, denominator - 1);
    const b = randomInt(1, level === 3 ? denominator - 1 : denominator - a);
    const sum = a + b;
    if (sum === denominator) continue; // Svaret ville være 1 — ikke en brøk at forkorte.
    if (!matchesLevel(level, sum, denominator)) continue;

    const left = { numerator: a, denominator };
    const right = { numerator: b, denominator };
    const raw = { numerator: sum, denominator };
    const answer = simplifyFraction(raw);
    return {
      left,
      right,
      raw,
      answer,
      level,
      hint: `Nævneren fortæller, hvor store stykkerne er — den står stille. ${PLUS_LEVEL_HINTS[level]}`,
      steps: buildSteps(left, right, raw, answer),
    };
  }

  const fallback: Record<PlusLevel, [number, number, number]> = {
    1: [3, 2, 8],
    2: [1, 3, 8],
    3: [5, 4, 7],
  };
  const [a, b, denominator] = fallback[level];
  const left = { numerator: a, denominator };
  const right = { numerator: b, denominator };
  const raw = { numerator: a + b, denominator };
  const answer = simplifyFraction(raw);
  return {
    left,
    right,
    raw,
    answer,
    level,
    hint: `Nævneren fortæller, hvor store stykkerne er — den står stille. ${PLUS_LEVEL_HINTS[level]}`,
    steps: buildSteps(left, right, raw, answer),
  };
}

/** Opgaven skrevet som LaTeX, fx "\frac{3}{8} + \frac{2}{8}". */
export function exerciseTex(exercise: PlusSammeNaevnerExercise): string {
  return `${fractionTex(exercise.left)} + ${fractionTex(exercise.right)}`;
}

/** Hele udregningen skrevet som LaTeX — bruges når facit vises. */
export function solutionTex(exercise: PlusSammeNaevnerExercise): string {
  const { left, right, raw, answer } = exercise;
  const start = `${exerciseTex(exercise)} = \\frac{${left.numerator}+${right.numerator}}{${left.denominator}} = ${fractionTex(raw)}`;
  if (raw.numerator === answer.numerator && raw.denominator === answer.denominator) {
    return start;
  }
  return `${start} = ${fractionTex(answer)}`;
}

/**
 * Bedømmer et indtastet svar. En rigtig værdi, der ikke er forkortet helt,
 * tæller ikke som fejl, men får sin egen tilbagemelding.
 */
export function checkAnswer(
  exercise: PlusSammeNaevnerExercise,
  numerator: string,
  denominator: string,
): AnswerVerdict {
  const t = Number.parseInt(numerator.trim(), 10);
  const n = Number.parseInt(denominator.trim(), 10);
  if (!Number.isFinite(t) || !Number.isFinite(n) || n === 0) return "incomplete";

  const { answer } = exercise;
  if (t * answer.denominator !== answer.numerator * n) return "wrong";
  if (t === answer.numerator && n === answer.denominator) return "correct";
  return "unreduced";
}
