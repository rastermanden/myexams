export type DifficultyLevel = 1 | 2 | 3;
export type AnswerFormat = "fraction" | "decimal" | "percent";

export type SubtopicSlug =
  | "naturtal-heltal-decimaltal"
  | "broeker"
  | "procentregning"
  | "negative-tal"
  | "regnehierarki"
  | "potenser-og-roedder"
  | "primtal-faktorisering-divisorer"
  | "talsystemer";

export type Fraction = {
  numerator: number;
  denominator: number;
};

export type ExerciseVisualization = {
  type: "number-line" | "fraction-bar" | "percent-circle";
  value: number;
  label: string;
};

export type GeneratedExercise = {
  id: string;
  subtopic: SubtopicSlug;
  prompt: string;
  options: string[];
  correctOption: string;
  hint: string;
  explanationSteps: string[];
  visualization?: ExerciseVisualization;
};

export const SUBTOPIC_ORDER: SubtopicSlug[] = [
  "naturtal-heltal-decimaltal",
  "broeker",
  "procentregning",
  "negative-tal",
  "regnehierarki",
  "potenser-og-roedder",
  "primtal-faktorisering-divisorer",
  "talsystemer",
];

function nextExerciseId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choice<T>(items: readonly T[]): T {
  return items[randomInt(0, items.length - 1)];
}

function shuffle<T>(items: T[]): T[] {
  const clone = [...items];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values));
}

function formatDa(value: number, decimals = 2): string {
  if (Number.isInteger(value)) return String(value);
  return Number(value.toFixed(decimals)).toString().replace(".", ",");
}

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

export function simplifyFraction(fraction: Fraction): Fraction {
  const divisor = gcd(fraction.numerator, fraction.denominator);
  const denominator = fraction.denominator / divisor;
  const numerator = fraction.numerator / divisor;
  if (denominator < 0) {
    return { numerator: -numerator, denominator: -denominator };
  }
  return { numerator, denominator };
}

export function addFractions(a: Fraction, b: Fraction): Fraction {
  return simplifyFraction({
    numerator: a.numerator * b.denominator + b.numerator * a.denominator,
    denominator: a.denominator * b.denominator,
  });
}

export function subtractFractions(a: Fraction, b: Fraction): Fraction {
  return simplifyFraction({
    numerator: a.numerator * b.denominator - b.numerator * a.denominator,
    denominator: a.denominator * b.denominator,
  });
}

export function multiplyFractions(a: Fraction, b: Fraction): Fraction {
  return simplifyFraction({
    numerator: a.numerator * b.numerator,
    denominator: a.denominator * b.denominator,
  });
}

export function divideFractions(a: Fraction, b: Fraction): Fraction {
  return simplifyFraction({
    numerator: a.numerator * b.denominator,
    denominator: a.denominator * b.numerator,
  });
}

export function toDecimal(fraction: Fraction): number {
  return fraction.numerator / fraction.denominator;
}

export function toPercent(fraction: Fraction): number {
  return (fraction.numerator / fraction.denominator) * 100;
}

export function asDisplayValue(fraction: Fraction, format: AnswerFormat): string {
  const simple = simplifyFraction(fraction);
  if (format === "fraction") {
    if (simple.denominator === 1) return String(simple.numerator);
    return `${simple.numerator}/${simple.denominator}`;
  }
  if (format === "decimal") {
    return formatDa(toDecimal(simple));
  }
  return `${formatDa(toPercent(simple), 1)}%`;
}

export function percentOf(value: number, percent: number): number {
  return (value * percent) / 100;
}

export function applyPercentGrowth(value: number, percent: number): number {
  return Number((value * (1 + percent / 100)).toFixed(10));
}

export function applyPercentDecrease(value: number, percent: number): number {
  return Number((value * (1 - percent / 100)).toFixed(10));
}

export function evaluateOrderExpression(a: number, b: number, c: number, d: number): number {
  return a + b * c - d;
}

export function primeFactors(n: number): number[] {
  const factors: number[] = [];
  let value = n;
  let divisor = 2;

  while (value > 1) {
    while (value % divisor === 0) {
      factors.push(divisor);
      value /= divisor;
    }
    // Efter 2 behøver vi kun teste ulige divisorer.
    divisor = divisor === 2 ? 3 : divisor + 2;
  }

  return factors;
}

export function toBinary(value: number): string {
  return value.toString(2);
}

function makeOptions(correct: string, alternatives: string[]): string[] {
  const options = unique([correct, ...alternatives]).slice(0, 4);
  if (options.length < 4) {
    const fallback = ["0", "1", "2", "3", "4", "5", "10", "50%"];
    for (const item of fallback) {
      if (options.length >= 4) break;
      if (!options.includes(item)) options.push(item);
    }
  }
  return shuffle(options);
}

function naturtalExercise(difficulty: DifficultyLevel, format: AnswerFormat): GeneratedExercise {
  const scale = difficulty === 1 ? 10 : difficulty === 2 ? 100 : 1000;
  const randomNumerator = randomInt(1, scale);
  const denominator = choice([2, 4, 5, 8, 10]);
  const fraction = simplifyFraction({ numerator: randomNumerator, denominator });
  const correct = asDisplayValue(fraction, format);
  const alternatives = [
    asDisplayValue({ numerator: fraction.numerator + 1, denominator: fraction.denominator }, format),
    asDisplayValue({ numerator: fraction.numerator, denominator: fraction.denominator + 1 }, format),
    asDisplayValue({ numerator: fraction.numerator - 1, denominator: fraction.denominator }, format),
  ];

  return {
    id: nextExerciseId("naturtal"),
    subtopic: "naturtal-heltal-decimaltal",
    prompt: `Hvad er ${fraction.numerator}/${fraction.denominator} skrevet som ${
      format === "fraction" ? "forkortet brøk" : format === "decimal" ? "decimaltal" : "procent"
    }?`,
    options: makeOptions(correct, alternatives),
    correctOption: correct,
    hint: "Divider tæller med nævner først, og omregn derefter til ønsket format.",
    explanationSteps: [
      `${randomNumerator}/${denominator} forkortes til ${fraction.numerator}/${fraction.denominator}.`,
      `Decimaltal: ${formatDa(toDecimal(fraction))}.`,
      `Procent: ${formatDa(toPercent(fraction), 1)}%.`,
    ],
  };
}

function fractionExercise(difficulty: DifficultyLevel, format: AnswerFormat): GeneratedExercise {
  const max = difficulty === 1 ? 6 : difficulty === 2 ? 9 : 12;
  const a: Fraction = { numerator: randomInt(1, max), denominator: randomInt(2, max) };
  const b: Fraction = { numerator: randomInt(1, max), denominator: randomInt(2, max) };
  const operation = choice(["+", "-", "×", "÷"] as const);

  const result =
    operation === "+"
      ? addFractions(a, b)
      : operation === "-"
        ? subtractFractions(a, b)
        : operation === "×"
          ? multiplyFractions(a, b)
          : divideFractions(a, b);

  const correct = asDisplayValue(result, format);
  const alternatives = [
    asDisplayValue({ numerator: result.numerator + 1, denominator: result.denominator }, format),
    asDisplayValue({ numerator: result.numerator, denominator: result.denominator + 1 }, format),
    asDisplayValue({ numerator: result.numerator + result.denominator, denominator: result.denominator }, format),
  ];

  return {
    id: nextExerciseId("broeker"),
    subtopic: "broeker",
    prompt: `Beregn: ${a.numerator}/${a.denominator} ${operation} ${b.numerator}/${b.denominator}`,
    options: makeOptions(correct, alternatives),
    correctOption: correct,
    hint: operation === "+" || operation === "-" ? "Find fælles nævner først." : "Ved division: vend den anden brøk og gang.",
    explanationSteps: [
      `Regn operationen ${operation} og forkort resultatet.`,
      `Resultat som brøk: ${asDisplayValue(result, "fraction")}.`,
      `Resultat i valgt format: ${correct}.`,
    ],
    visualization: {
      type: "fraction-bar",
      value: Math.max(0, Math.min(1, toDecimal(result))),
      label: `Andel = ${asDisplayValue(result, "fraction")}`,
    },
  };
}

function percentExercise(difficulty: DifficultyLevel, format: AnswerFormat): GeneratedExercise {
  const base = difficulty === 1 ? randomInt(20, 200) : difficulty === 2 ? randomInt(50, 500) : randomInt(100, 1000);
  const percent = choice([5, 10, 15, 20, 25, 30, 40]);
  const mode = choice(["of", "growth", "decrease"] as const);

  const rawResult =
    mode === "of"
      ? percentOf(base, percent)
      : mode === "growth"
        ? applyPercentGrowth(base, percent)
        : applyPercentDecrease(base, percent);

  const resultFraction = simplifyFraction({ numerator: Math.round(rawResult * 100), denominator: 100 });
  const correct = asDisplayValue(resultFraction, format);

  return {
    id: nextExerciseId("procent"),
    subtopic: "procentregning",
    prompt:
      mode === "of"
        ? `Hvor meget er ${percent}% af ${base}?`
        : mode === "growth"
          ? `${base} stiger med ${percent}%. Hvad bliver den nye værdi?`
          : `${base} falder med ${percent}%. Hvad bliver den nye værdi?`,
    options: makeOptions(correct, [formatDa(rawResult + 5), formatDa(rawResult - 5), formatDa(rawResult + 10)]),
    correctOption: correct,
    hint: mode === "of" ? "Gange med procenten som decimaltal." : "Brug faktor 1 ± p/100.",
    explanationSteps: [
      mode === "of"
        ? `${percent}% = ${percent / 100}.`
        : mode === "growth"
          ? `Vækstfaktor = 1 + ${percent}/100 = ${formatDa(1 + percent / 100)}.`
          : `Faldfaktor = 1 - ${percent}/100 = ${formatDa(1 - percent / 100)}.`,
      `Resultatet er ${formatDa(rawResult)}.`,
      `I valgt format: ${correct}.`,
    ],
    visualization: {
      type: "percent-circle",
      value: Math.max(0, Math.min(1, percent / 100)),
      label: `${percent}%`,
    },
  };
}

function negativeExercise(difficulty: DifficultyLevel): GeneratedExercise {
  const max = difficulty === 1 ? 20 : difficulty === 2 ? 40 : 80;
  const a = randomInt(-max, max);
  const b = randomInt(-max, max);
  const op = choice(["+", "-"] as const);
  const result = op === "+" ? a + b : a - b;
  const correct = String(result);

  return {
    id: nextExerciseId("negative"),
    subtopic: "negative-tal",
    prompt: `Beregn: ${a} ${op} (${b})`,
    options: makeOptions(correct, [String(result + 2), String(result - 2), String(-result)]),
    correctOption: correct,
    hint: "Tænk på talinjen: minus betyder bevægelse mod venstre.",
    explanationSteps: [`Start ved ${a}.`, op === "+" ? `Flyt ${b} på talinjen.` : `Træk ${b} fra (det er det samme som at lægge ${-b} til).`, `Du ender på ${result}.`],
    visualization: {
      type: "number-line",
      value: (result + max) / (2 * max),
      label: `Resultat: ${result}`,
    },
  };
}

function hierarchyExercise(difficulty: DifficultyLevel): GeneratedExercise {
  const max = difficulty === 1 ? 6 : difficulty === 2 ? 9 : 12;
  const a = randomInt(1, max);
  const b = randomInt(1, max);
  const c = randomInt(1, max);
  const d = randomInt(1, max);
  const result = evaluateOrderExpression(a, b, c, d);

  return {
    id: nextExerciseId("hierarki"),
    subtopic: "regnehierarki",
    prompt: `Beregn: ${a} + ${b} × ${c} - ${d}`,
    options: makeOptions(String(result), [String((a + b) * c - d), String(a + b * (c - d)), String(a + b + c - d)]),
    correctOption: String(result),
    hint: "Gange/dividere før plus/minus.",
    explanationSteps: [`Først ${b} × ${c} = ${b * c}.`, `Så ${a} + ${b * c} - ${d} = ${result}.`],
  };
}

function powersExercise(difficulty: DifficultyLevel): GeneratedExercise {
  const base = difficulty === 1 ? randomInt(2, 6) : randomInt(2, 10);
  const exponent = difficulty === 3 ? 3 : 2;
  const result = base ** exponent;

  return {
    id: nextExerciseId("potens"),
    subtopic: "potenser-og-roedder",
    prompt: exponent === 2 ? `Hvad er ${base}²?` : `Hvad er ${base}³?`,
    options: makeOptions(String(result), [String(result + base), String(result - base), String(base * exponent)]),
    correctOption: String(result),
    hint: "Potenser er gentagen multiplikation.",
    explanationSteps: [
      exponent === 2 ? `${base}² = ${base} × ${base}` : `${base}³ = ${base} × ${base} × ${base}`,
      `Resultat: ${result}.`,
    ],
  };
}

function primeExercise(difficulty: DifficultyLevel): GeneratedExercise {
  const pool = difficulty === 1 ? [18, 20, 24, 30] : difficulty === 2 ? [36, 42, 54, 60] : [72, 84, 90, 96];
  const n = choice(pool);
  const factors = primeFactors(n);
  const correct = factors.join(" · ");

  return {
    id: nextExerciseId("primtal"),
    subtopic: "primtal-faktorisering-divisorer",
    prompt: `Primtalsfaktorisér tallet ${n}.`,
    options: makeOptions(correct, [
      factors.slice(0, -1).join(" · "),
      [...factors].reverse().join(" + "),
      `${n} · 1`,
    ]),
    correctOption: correct,
    hint: "Divider med mindste mulige primtal ad gangen (2, 3, 5, ...).",
    explanationSteps: [`Del ${n} i primtalstrin.`, `${n} = ${correct}.`],
  };
}

function numberSystemsExercise(difficulty: DifficultyLevel): GeneratedExercise {
  const max = difficulty === 1 ? 15 : difficulty === 2 ? 31 : 63;
  const value = randomInt(2, max);
  const correct = toBinary(value);

  return {
    id: nextExerciseId("talsystem"),
    subtopic: "talsystemer",
    prompt: `Skriv ${value} (10-talssystem) i binær.`,
    options: makeOptions(correct, [
      toBinary(Math.max(1, value - 1)),
      toBinary(value + 1),
      `${correct}0`,
    ]),
    correctOption: correct,
    hint: "Find de største 2-potensværdier der kan trækkes fra tallet.",
    explanationSteps: [`${value} i binær er ${correct}.`],
  };
}

export function generateTalOgRegningExercise(
  subtopic: SubtopicSlug,
  difficulty: DifficultyLevel,
  format: AnswerFormat,
): GeneratedExercise {
  switch (subtopic) {
    case "naturtal-heltal-decimaltal":
      return naturtalExercise(difficulty, format);
    case "broeker":
      return fractionExercise(difficulty, format);
    case "procentregning":
      return percentExercise(difficulty, format);
    case "negative-tal":
      return negativeExercise(difficulty);
    case "regnehierarki":
      return hierarchyExercise(difficulty);
    case "potenser-og-roedder":
      return powersExercise(difficulty);
    case "primtal-faktorisering-divisorer":
      return primeExercise(difficulty);
    case "talsystemer":
      return numberSystemsExercise(difficulty);
  }
}
