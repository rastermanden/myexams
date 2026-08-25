/**
 * Opgavegenerator til "tjek-up" i 8. klasse: de fire regnearters algoritmer,
 * brøk, procent, areal, rumfang og sandsynlighed.
 */

export type TjekUpArea =
  | "regnearter"
  | "broeker"
  | "procent"
  | "areal"
  | "rumfang"
  | "sandsynlighed";

export type TjekUpLevel = 1 | 2 | 3;

export type TjekUpExercise = {
  id: string;
  area: TjekUpArea;
  level: TjekUpLevel;
  prompt: string;
  options: string[];
  correctOption: string;
  hint: string;
  steps: string[];
};

export const TJEK_UP_AREAS: TjekUpArea[] = [
  "regnearter",
  "broeker",
  "procent",
  "areal",
  "rumfang",
  "sandsynlighed",
];

export const TJEK_UP_AREA_LABELS: Record<TjekUpArea, string> = {
  regnearter: "De 4 regnearter",
  broeker: "Brøk",
  procent: "Procent",
  areal: "Areal",
  rumfang: "Rumfang",
  sandsynlighed: "Sandsynlighed",
};

export const TJEK_UP_LEVEL_LABELS: Record<TjekUpLevel, string> = {
  1: "Let",
  2: "Mellem",
  3: "Svær",
};

const PI = Math.PI;

export type Fraction = {
  numerator: number;
  denominator: number;
};

/** Størst fælles divisor. */
export function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    [x, y] = [y, x % y];
  }
  return x || 1;
}

export function simplifyFraction(fraction: Fraction): Fraction {
  const divisor = gcd(fraction.numerator, fraction.denominator);
  return {
    numerator: fraction.numerator / divisor,
    denominator: fraction.denominator / divisor,
  };
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

function shuffle<T>(items: readonly T[]): T[] {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}


function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick<T>(items: readonly T[]): T {
  return items[randomInt(0, items.length - 1)];
}

function nextId(area: TjekUpArea): string {
  return `${area}-${randomInt(100000, 999999)}-${randomInt(100000, 999999)}`;
}

/** Formaterer med dansk decimalkomma og uden overflødige nuller. */
export function formatNumber(value: number, maxDecimals = 2): string {
  const rounded = Number(value.toFixed(maxDecimals));
  return String(rounded).replace(".", ",");
}

/** Tusindtalsseparator med punktum, som man skriver tal på dansk. */
export function formatThousands(value: number): string {
  const negative = value < 0;
  const digits = String(Math.abs(Math.round(value)));
  let grouped = "";
  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && (digits.length - i) % 3 === 0) grouped += ".";
    grouped += digits[i];
  }
  return negative ? `-${grouped}` : grouped;
}

export function formatFraction(fraction: Fraction): string {
  const simplified = simplifyFraction(fraction);
  if (simplified.denominator === 1) return String(simplified.numerator);
  return `${simplified.numerator}/${simplified.denominator}`;
}

/** Samler svarmuligheder: fjerner dubletter, blander og beholder det rigtige svar. */
export function buildOptions(correct: string, distractors: string[], count = 4): string[] {
  const unique: string[] = [];
  for (const candidate of distractors) {
    if (candidate === correct) continue;
    if (unique.includes(candidate)) continue;
    unique.push(candidate);
  }
  return shuffle([correct, ...unique.slice(0, Math.max(count - 1, 0))]);
}

type ExerciseDraft = Omit<TjekUpExercise, "id" | "area" | "level">;

// ---------------------------------------------------------------------------
// De 4 regnearters algoritmer
// ---------------------------------------------------------------------------

export function additionSteps(a: number, b: number): string[] {
  const ones = (a % 10) + (b % 10);
  const carryOnes = ones >= 10 ? 1 : 0;
  const tens = (Math.floor(a / 10) % 10) + (Math.floor(b / 10) % 10) + carryOnes;
  const carryTens = tens >= 10 ? 1 : 0;
  const hundreds = (Math.floor(a / 100) % 10) + (Math.floor(b / 100) % 10) + carryTens;
  return [
    `Skriv tallene under hinanden, så enere står under enere, tiere under tiere osv.: ${a} + ${b}.`,
    `Enere: ${a % 10} + ${b % 10} = ${ones}${carryOnes ? ` → skriv ${ones % 10} og husk 1 i mente.` : "."}`,
    `Tiere: ${Math.floor(a / 10) % 10} + ${Math.floor(b / 10) % 10}${carryOnes ? " + 1 (mente)" : ""} = ${tens}${carryTens ? ` → skriv ${tens % 10} og husk 1 i mente.` : "."}`,
    `Hundreder: ${Math.floor(a / 100) % 10} + ${Math.floor(b / 100) % 10}${carryTens ? " + 1 (mente)" : ""} = ${hundreds}.`,
    `Resultat: ${a} + ${b} = ${a + b}.`,
  ];
}

export function subtractionSteps(a: number, b: number): string[] {
  const needsBorrow = a % 10 < b % 10;
  return [
    `Skriv det største tal øverst: ${a} − ${b}, med enere under enere.`,
    needsBorrow
      ? `Enere: ${a % 10} er mindre end ${b % 10}, så du låner 10 fra tierne: ${(a % 10) + 10} − ${b % 10} = ${(a % 10) + 10 - (b % 10)}. Tieren ovenover bliver 1 mindre.`
      : `Enere: ${a % 10} − ${b % 10} = ${(a % 10) - (b % 10)}.`,
    "Fortsæt med tiere og hundreder på samme måde — lån 10 fra næste søjle, når du mangler.",
    `Resultat: ${a} − ${b} = ${a - b}.`,
    `Tjek ved at lægge sammen igen: ${a - b} + ${b} = ${a}.`,
  ];
}

export function multiplicationSteps(a: number, b: number): string[] {
  const tens = Math.floor(b / 10) * 10;
  const ones = b % 10;
  if (tens === 0) {
    const partHigh = Math.floor(a / 10) * 10 * ones;
    const partLow = (a % 10) * ones;
    return [
      `Del det store tal op: ${a} = ${Math.floor(a / 10) * 10} + ${a % 10}.`,
      `${Math.floor(a / 10) * 10} × ${ones} = ${partHigh} og ${a % 10} × ${ones} = ${partLow}.`,
      `Læg delresultaterne sammen: ${partHigh} + ${partLow} = ${a * b}.`,
    ];
  }
  return [
    `Del det ene tal op i tiere og enere: ${b} = ${tens} + ${ones}.`,
    `Gang med enerne: ${a} × ${ones} = ${a * ones}.`,
    `Gang med tierne: ${a} × ${tens} = ${a * tens}.`,
    `Læg delresultaterne sammen: ${a * ones} + ${a * tens} = ${a * b}.`,
  ];
}

export function divisionSteps(dividend: number, divisor: number): string[] {
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend - quotient * divisor;
  const steps = [
    `Sæt op som lang division: ${dividend} : ${divisor}.`,
    `Tag cifrene fra venstre og spørg hver gang: hvor mange gange går ${divisor} op i tallet?`,
    `Gang op og træk fra, og tag næste ciffer ned — indtil der ikke er flere cifre.`,
    `Resultat: ${dividend} : ${divisor} = ${quotient}${remainder ? ` rest ${remainder}` : ""}.`,
  ];
  if (!remainder) {
    steps.push(`Tjek ved at gange tilbage: ${quotient} × ${divisor} = ${dividend}.`);
  } else {
    steps.push(`Tjek: ${quotient} × ${divisor} + ${remainder} = ${dividend}.`);
  }
  return steps;
}

function regnearterLevel1(): ExerciseDraft {
  const variant = pick(["plus", "minus", "gange", "division"] as const);

  if (variant === "plus") {
    const a = randomInt(148, 879);
    const b = randomInt(139, 869);
    const answer = a + b;
    return {
      prompt: `Regn ud med den skriftlige algoritme: ${a} + ${b}`,
      options: buildOptions(
        String(answer),
        [String(answer - 10), String(answer + 10), String(answer - 100), String(answer + 1)],
      ),
      correctOption: String(answer),
      hint: "Læg sammen søjle for søjle fra højre — husk menten.",
      steps: additionSteps(a, b),
    };
  }

  if (variant === "minus") {
    const a = randomInt(420, 968);
    const b = randomInt(137, 399);
    const answer = a - b;
    return {
      prompt: `Regn ud med den skriftlige algoritme: ${a} − ${b}`,
      options: buildOptions(
        String(answer),
        [String(answer + 10), String(answer - 10), String(answer + 100), String(b - a + 2 * a)],
      ),
      correctOption: String(answer),
      hint: "Træk fra søjle for søjle fra højre — lån 10 fra næste søjle, når du mangler.",
      steps: subtractionSteps(a, b),
    };
  }

  if (variant === "gange") {
    const a = randomInt(23, 89);
    const b = randomInt(3, 9);
    const answer = a * b;
    return {
      prompt: `Regn ud: ${a} × ${b}`,
      options: buildOptions(
        String(answer),
        [String(answer + b), String(answer - b), String(answer + 10), String(a + b)],
      ),
      correctOption: String(answer),
      hint: `Del ${a} op i tiere og enere, og gang hver del med ${b}.`,
      steps: multiplicationSteps(a, b),
    };
  }

  const divisor = randomInt(3, 9);
  const quotient = randomInt(21, 98);
  const dividend = divisor * quotient;
  return {
    prompt: `Regn ud: ${dividend} : ${divisor}`,
    options: buildOptions(
      String(quotient),
      [String(quotient + 1), String(quotient - 1), String(quotient + 10), String(dividend - divisor)],
    ),
    correctOption: String(quotient),
    hint: "Lang division: tag cifrene fra venstre, og gang tilbage til sidst som tjek.",
    steps: divisionSteps(dividend, divisor),
  };
}

function regnearterLevel2(): ExerciseDraft {
  const variant = pick(["gange", "rest", "decimalplus", "storplus"] as const);

  if (variant === "gange") {
    const a = randomInt(24, 89);
    const b = randomInt(12, 39);
    const answer = a * b;
    return {
      prompt: `Regn ud: ${a} × ${b}`,
      options: buildOptions(
        String(answer),
        [String(a * (b % 10)), String(a * Math.floor(b / 10) * 10), String(answer + a), String(answer - 10)],
      ),
      correctOption: String(answer),
      hint: "Gang først med enerne, så med tierne — og læg de to delresultater sammen.",
      steps: multiplicationSteps(a, b),
    };
  }

  if (variant === "rest") {
    const divisor = randomInt(6, 14);
    const quotient = randomInt(12, 48);
    const remainder = randomInt(1, divisor - 1);
    const dividend = divisor * quotient + remainder;
    const answer = `${quotient} rest ${remainder}`;
    return {
      prompt: `Regn ud: ${dividend} : ${divisor} (skriv svaret med rest)`,
      options: buildOptions(
        answer,
        [
          `${quotient} rest ${remainder + 1}`,
          `${quotient + 1} rest ${remainder}`,
          `${quotient - 1} rest ${remainder}`,
          `${quotient} rest 0`,
        ],
      ),
      correctOption: answer,
      hint: "Resten skal altid være mindre end det tal, du dividerer med.",
      steps: divisionSteps(dividend, divisor),
    };
  }

  if (variant === "decimalplus") {
    const a = randomInt(1250, 8900) / 100;
    const b = randomInt(150, 900) / 10;
    const answer = Math.round((a + b) * 100) / 100;
    return {
      prompt: `Regn ud: ${formatNumber(a)} + ${formatNumber(b)}`,
      options: buildOptions(
        formatNumber(answer),
        [
          formatNumber(answer + 0.9),
          formatNumber(answer - 0.1),
          formatNumber(Math.round((a + b / 10) * 100) / 100),
          formatNumber(answer + 10),
        ],
      ),
      correctOption: formatNumber(answer),
      hint: "Sæt komma under komma — og fyld op med nuller, så tallene er lige lange.",
      steps: [
        `Skriv tallene under hinanden med komma under komma: ${formatNumber(a)} + ${formatNumber(b)}0.`,
        "Læg sammen som almindelige hele tal — søjle for søjle fra højre.",
        `Sæt kommaet lige ned i resultatet: ${formatNumber(answer)}.`,
      ],
    };
  }

  const a = randomInt(2450, 8900);
  const b = randomInt(1230, 3900);
  const answer = a + b;
  return {
    prompt: `Regn ud: ${a} + ${b}`,
    options: buildOptions(
      String(answer),
      [String(answer - 100), String(answer + 100), String(answer - 10), String(answer + 1000)],
    ),
    correctOption: String(answer),
    hint: "Fire cifre ændrer ingenting — samme algoritme, bare en søjle mere.",
    steps: additionSteps(a % 1000, b % 1000).slice(0, 4).concat([
      `Tusinder: ${Math.floor(a / 1000)} + ${Math.floor(b / 1000)} (+ eventuel mente).`,
      `Resultat: ${a} + ${b} = ${answer}.`,
    ]),
  };
}

function regnearterLevel3(): ExerciseDraft {
  const variant = pick(["decimalgange", "decimaldivision", "hierarki", "negativ"] as const);

  if (variant === "decimalgange") {
    const a = randomInt(15, 89) / 10;
    const b = randomInt(12, 45) / 10;
    const answer = Math.round(a * b * 100) / 100;
    return {
      prompt: `Regn ud: ${formatNumber(a)} × ${formatNumber(b)}`,
      options: buildOptions(
        formatNumber(answer),
        [
          formatNumber(Math.round(a * b * 10) / 10 + 1),
          formatNumber(answer * 10),
          formatNumber(answer / 10),
          formatNumber(answer + 0.5),
        ],
      ),
      correctOption: formatNumber(answer),
      hint: "Gang uden komma, og sæt til sidst lige så mange decimaler i svaret, som de to tal har tilsammen.",
      steps: [
        `Fjern kommaerne: ${a * 10} × ${b * 10} = ${a * 10 * b * 10}.`,
        `De to tal har tilsammen 2 decimaler, så svaret skal have 2 decimaler.`,
        `Sæt kommaet: ${formatNumber(answer)}.`,
        `Overslag som tjek: ca. ${Math.round(a)} × ${Math.round(b)} = ${Math.round(a) * Math.round(b)} — passer med svaret.`,
      ],
    };
  }

  if (variant === "decimaldivision") {
    const divisor = pick([4, 5, 8] as const);
    const dividend = randomInt(31, 199);
    const answer = dividend / divisor;
    return {
      prompt: `Regn ud: ${dividend} : ${divisor} (svar med decimaltal)`,
      options: buildOptions(
        formatNumber(answer, 3),
        [
          formatNumber(answer + 1, 3),
          formatNumber(answer - 0.5, 3),
          formatNumber(answer * 10, 3),
          formatNumber(Math.floor(answer), 3),
        ],
      ),
      correctOption: formatNumber(answer, 3),
      hint: "Går divisionen ikke op, sætter du komma i svaret og henter nuller ned.",
      steps: [
        `Divider som normalt: ${divisor} går op i ${dividend} ${Math.floor(answer)} gang${Math.floor(answer) === 1 ? "" : "e"}.`,
        `Er der en rest, sætter du komma i svaret og henter et 0 ned.`,
        `Fortsæt til der ikke er mere rest: ${dividend} : ${divisor} = ${formatNumber(answer, 3)}.`,
        `Tjek: ${formatNumber(answer, 3)} × ${divisor} = ${dividend}.`,
      ],
    };
  }

  if (variant === "hierarki") {
    const a = randomInt(3, 9);
    const b = randomInt(2, 9);
    const c = randomInt(2, 6);
    const d = randomInt(2, 4);
    const value = a + (b * c) / d;
    const rounded = Math.round(value * 100) / 100;
    return {
      prompt: `Regn ud med korrekt regnerækkefølge: ${a} + ${b} × ${c} : ${d}`,
      options: buildOptions(
        formatNumber(rounded),
        [
          formatNumber(Math.round(((a + b) * c) / d * 100) / 100),
          formatNumber(Math.round((a + b * c) * 100) / 100),
          formatNumber(rounded + d),
          formatNumber(Math.round(((a + b) * c) * 100) / 100),
        ],
      ),
      correctOption: formatNumber(rounded),
      hint: "Rækkefølgen er: parenteser → potenser → gange og dividere (fra venstre) → plus og minus.",
      steps: [
        `Gange og dividere først, fra venstre: ${b} × ${c} = ${b * c}, og ${b * c} : ${d} = ${formatNumber((b * c) / d)}.`,
        `Til sidst plus: ${a} + ${formatNumber((b * c) / d)} = ${formatNumber(rounded)}.`,
        `Svar: ${formatNumber(rounded)}.`,
      ],
    };
  }

  const a = randomInt(4, 12);
  const b = randomInt(3, 9);
  const c = randomInt(5, 40);
  const answer = -a * b + c;
  return {
    prompt: `Regn ud: (−${a}) × ${b} + ${c}`,
    options: buildOptions(
      String(answer),
      [String(a * b + c), String(-a * b - c), String(-(a + b) + c), String(answer + b)],
    ),
    correctOption: String(answer),
    hint: "Minus gange plus giver minus. Gange før plus.",
    steps: [
      `Gange først: (−${a}) × ${b} = −${a * b} (minus gange plus giver minus).`,
      `Derefter plus: −${a * b} + ${c} = ${answer}.`,
      `Tænk på talinjen: start i −${a * b} og gå ${c} skridt til højre.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Brøk
// ---------------------------------------------------------------------------

/** Mindste fælles nævner. */
export function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

/** Del af et antal, fx 3/4 af 240. */
export function fractionOf(fraction: Fraction, total: number): number {
  return (total * fraction.numerator) / fraction.denominator;
}

function broekerLevel1(): ExerciseDraft {
  const variant = pick(["samme-naevner", "forkort", "del-af-antal"] as const);

  if (variant === "samme-naevner") {
    const denominator = pick([6, 8, 9, 10, 12] as const);
    const a = randomInt(1, denominator - 2);
    const b = randomInt(1, denominator - a - 1);
    const plus = Math.random() < 0.5;
    const result = plus
      ? addFractions({ numerator: a, denominator }, { numerator: b, denominator })
      : subtractFractions({ numerator: a + b, denominator }, { numerator: b, denominator });
    const promptText = plus
      ? `${a}/${denominator} + ${b}/${denominator}`
      : `${a + b}/${denominator} − ${b}/${denominator}`;
    const answer = formatFraction(result);
    return {
      prompt: `Regn ud og forkort så meget som muligt: ${promptText}`,
      options: buildOptions(
        answer,
        [
          `${plus ? a + b : a}/${denominator * 2}`,
          `${plus ? a + b : a}/${denominator}`,
          `${denominator}/${plus ? a + b : a}`,
          `${plus ? a * b : a + b}/${denominator}`,
        ],
      ),
      correctOption: answer,
      hint: "Samme nævner: læg tællerne sammen (eller træk dem fra) og behold nævneren.",
      steps: [
        `Nævnerne er ens, så du regner kun med tællerne: ${promptText}.`,
        `Tæller: ${plus ? `${a} + ${b} = ${a + b}` : `${a + b} − ${b} = ${a}`}, nævner: ${denominator}.`,
        `Forkort hvis muligt → ${answer}.`,
      ],
    };
  }

  if (variant === "forkort") {
    const base = pick([
      { numerator: 2, denominator: 3 },
      { numerator: 3, denominator: 4 },
      { numerator: 2, denominator: 5 },
      { numerator: 5, denominator: 6 },
      { numerator: 3, denominator: 8 },
    ] as const);
    const factor = randomInt(2, 6);
    const numerator = base.numerator * factor;
    const denominator = base.denominator * factor;
    const answer = `${base.numerator}/${base.denominator}`;
    return {
      prompt: `Forkort brøken helt: ${numerator}/${denominator}`,
      options: buildOptions(
        answer,
        [
          `${numerator / (factor > 2 ? 2 : 1)}/${denominator / (factor > 2 ? 2 : 1)}`,
          `${base.denominator}/${base.numerator}`,
          `${base.numerator + 1}/${base.denominator}`,
          `${numerator - factor}/${denominator - factor}`,
        ],
      ),
      correctOption: answer,
      hint: `Find det største tal, der går op i både ${numerator} og ${denominator}.`,
      steps: [
        `Største fælles divisor for ${numerator} og ${denominator} er ${gcd(numerator, denominator)}.`,
        `Divider begge tal med ${gcd(numerator, denominator)}: ${numerator} : ${gcd(numerator, denominator)} = ${base.numerator} og ${denominator} : ${gcd(numerator, denominator)} = ${base.denominator}.`,
        `Svar: ${answer}. Brøken er nu uforkortelig.`,
      ],
    };
  }

  const denominator = pick([3, 4, 5, 6, 8] as const);
  const numerator = randomInt(1, denominator - 1);
  const total = denominator * randomInt(4, 25);
  const answer = fractionOf({ numerator, denominator }, total);
  return {
    prompt: `Hvor meget er ${numerator}/${denominator} af ${total}?`,
    options: buildOptions(
      String(answer),
      [
        String(total / denominator),
        String(total - answer),
        String(answer + denominator),
        String(Math.round(total * (numerator / (denominator + 1)))),
      ],
    ),
    correctOption: String(answer),
    hint: `Del først med nævneren (${denominator}), gang så med tælleren (${numerator}).`,
    steps: [
      `Én ${denominator}-del: ${total} : ${denominator} = ${total / denominator}.`,
      `${numerator} af dem: ${total / denominator} × ${numerator} = ${answer}.`,
      `Svar: ${numerator}/${denominator} af ${total} er ${answer}.`,
    ],
  };
}

function broekerLevel2(): ExerciseDraft {
  const variant = pick(["forskellige-naevnere", "gange", "sammenlign"] as const);

  if (variant === "forskellige-naevnere") {
    const d1 = pick([3, 4, 5, 6] as const);
    const d2 = pick([4, 6, 8, 10, 12] as const);
    const n1 = randomInt(1, d1 - 1);
    const n2 = randomInt(1, d2 - 1);
    const plus = Math.random() < 0.5;
    const first = { numerator: n1, denominator: d1 };
    const second = { numerator: n2, denominator: d2 };
    const raw = plus ? addFractions(first, second) : subtractFractions(first, second);
    if (!plus && raw.numerator <= 0) {
      return broekerLevel2();
    }
    const answer = formatFraction(raw);
    const common = lcm(d1, d2);
    return {
      prompt: `Regn ud og forkort: ${n1}/${d1} ${plus ? "+" : "−"} ${n2}/${d2}`,
      options: buildOptions(
        answer,
        [
          `${plus ? n1 + n2 : n1 - n2}/${d1 + d2}`,
          `${plus ? n1 + n2 : Math.abs(n1 - n2)}/${common}`,
          `${raw.numerator + 1}/${raw.denominator}`,
          `${n1 * n2}/${common}`,
        ],
      ),
      correctOption: answer,
      hint: `Find fælles nævner for ${d1} og ${d2} — den mindste er ${common}.`,
      steps: [
        `Mindste fælles nævner for ${d1} og ${d2} er ${common}.`,
        `Forlæng: ${n1}/${d1} = ${(n1 * common) / d1}/${common} og ${n2}/${d2} = ${(n2 * common) / d2}/${common}.`,
        `Regn med tællerne: ${(n1 * common) / d1} ${plus ? "+" : "−"} ${(n2 * common) / d2} = ${plus ? (n1 * common) / d1 + (n2 * common) / d2 : (n1 * common) / d1 - (n2 * common) / d2}.`,
        `Forkort hvis muligt → ${answer}.`,
      ],
    };
  }

  if (variant === "gange") {
    const a = { numerator: randomInt(1, 5), denominator: pick([2, 3, 4, 5, 6] as const) };
    const b = { numerator: randomInt(1, 5), denominator: pick([3, 4, 5, 7, 8] as const) };
    const product = multiplyFractions(a, b);
    const answer = formatFraction(product);
    return {
      prompt: `Regn ud og forkort: ${a.numerator}/${a.denominator} × ${b.numerator}/${b.denominator}`,
      options: buildOptions(
        answer,
        [
          `${a.numerator + b.numerator}/${a.denominator + b.denominator}`,
          `${a.numerator * b.denominator}/${a.denominator * b.numerator}`,
          `${a.numerator * b.numerator}/${a.denominator + b.denominator}`,
          `${product.numerator + 1}/${product.denominator}`,
        ],
      ),
      correctOption: answer,
      hint: "Gange brøker: tæller gange tæller, nævner gange nævner. Ingen fælles nævner nødvendig.",
      steps: [
        `Tæller: ${a.numerator} × ${b.numerator} = ${a.numerator * b.numerator}.`,
        `Nævner: ${a.denominator} × ${b.denominator} = ${a.denominator * b.denominator}.`,
        `${a.numerator * b.numerator}/${a.denominator * b.denominator} forkortet er ${answer}.`,
      ],
    };
  }

  const options = shuffle([
    { numerator: 3, denominator: 4 },
    { numerator: 2, denominator: 3 },
    { numerator: 5, denominator: 8 },
    { numerator: 7, denominator: 10 },
    { numerator: 4, denominator: 9 },
    { numerator: 5, denominator: 6 },
  ]).slice(0, 4);
  const largest = options.reduce((best, current) =>
    current.numerator / current.denominator > best.numerator / best.denominator ? current : best,
  );
  const answer = `${largest.numerator}/${largest.denominator}`;
  return {
    prompt: `Hvilken brøk er størst?`,
    options: shuffle(options.map((f) => `${f.numerator}/${f.denominator}`)),
    correctOption: answer,
    hint: "Omregn brøkerne til decimaltal — eller giv dem samme nævner.",
    steps: [
      `Omregn hver brøk til decimaltal (tæller : nævner):`,
      options
        .map((f) => `${f.numerator}/${f.denominator} = ${formatNumber(f.numerator / f.denominator, 3)}`)
        .join("; ") + ".",
      `Det største decimaltal hører til ${answer}.`,
    ],
  };
}

function broekerLevel3(): ExerciseDraft {
  const variant = pick(["division", "blandet-tal", "procentomregning"] as const);

  if (variant === "division") {
    const a = { numerator: randomInt(1, 7), denominator: pick([2, 3, 4, 5, 6] as const) };
    const b = { numerator: randomInt(1, 5), denominator: pick([2, 3, 4, 8] as const) };
    const result = divideFractions(a, b);
    const answer = formatFraction(result);
    return {
      prompt: `Regn ud og forkort: ${a.numerator}/${a.denominator} : ${b.numerator}/${b.denominator}`,
      options: buildOptions(
        answer,
        [
          formatFraction(multiplyFractions(a, b)),
          `${a.numerator * b.numerator}/${a.denominator * b.denominator}`,
          `${result.denominator}/${result.numerator}`,
          `${a.numerator}/${b.denominator}`,
        ],
      ),
      correctOption: answer,
      hint: "Vend og gang: vend den bageste brøk om, og gang i stedet for at dividere.",
      steps: [
        `Vend divisorbrøken om: ${b.numerator}/${b.denominator} → ${b.denominator}/${b.numerator}.`,
        `Gang: ${a.numerator}/${a.denominator} × ${b.denominator}/${b.numerator} = ${a.numerator * b.denominator}/${a.denominator * b.numerator}.`,
        `Forkort → ${answer}.`,
      ],
    };
  }

  if (variant === "blandet-tal") {
    const whole = randomInt(2, 6);
    const denominator = pick([3, 4, 5, 8] as const);
    const numerator = randomInt(1, denominator - 1);
    const improper = whole * denominator + numerator;
    const answer = `${improper}/${denominator}`;
    return {
      prompt: `Skriv det blandede tal ${whole} ${numerator}/${denominator} som en uægte brøk.`,
      options: buildOptions(
        answer,
        [
          `${whole + numerator}/${denominator}`,
          `${whole * numerator}/${denominator}`,
          `${improper}/${denominator + numerator}`,
          `${improper - denominator}/${denominator}`,
        ],
      ),
      correctOption: answer,
      hint: "Gang heltallet med nævneren og læg tælleren til.",
      steps: [
        `${whole} hele = ${whole} × ${denominator}/${denominator} = ${whole * denominator}/${denominator}.`,
        `Læg brøkdelen til: ${whole * denominator}/${denominator} + ${numerator}/${denominator} = ${answer}.`,
        `Tjek med decimaltal: ${answer} = ${formatNumber(improper / denominator, 3)} og ${whole} ${numerator}/${denominator} = ${formatNumber(whole + numerator / denominator, 3)}.`,
      ],
    };
  }

  const fraction = pick([
    { numerator: 3, denominator: 4 },
    { numerator: 1, denominator: 8 },
    { numerator: 2, denominator: 5 },
    { numerator: 7, denominator: 10 },
    { numerator: 3, denominator: 20 },
    { numerator: 5, denominator: 8 },
  ] as const);
  const decimal = fraction.numerator / fraction.denominator;
  const percent = decimal * 100;
  const answer = `${formatNumber(decimal, 3)} og ${formatNumber(percent, 1)} %`;
  return {
    prompt: `Skriv ${fraction.numerator}/${fraction.denominator} som decimaltal og som procent.`,
    options: buildOptions(
      answer,
      [
        `${formatNumber(decimal * 10, 3)} og ${formatNumber(percent * 10, 1)} %`,
        `${formatNumber(decimal, 3)} og ${formatNumber(decimal, 3)} %`,
        `${formatNumber(fraction.denominator / fraction.numerator, 3)} og ${formatNumber((fraction.denominator / fraction.numerator) * 100, 1)} %`,
        `${formatNumber(decimal / 10, 3)} og ${formatNumber(percent / 10, 1)} %`,
      ],
    ),
    correctOption: answer,
    hint: "Decimaltal: divider tæller med nævner. Procent: gang decimaltallet med 100.",
    steps: [
      `${fraction.numerator} : ${fraction.denominator} = ${formatNumber(decimal, 3)}.`,
      `${formatNumber(decimal, 3)} × 100 = ${formatNumber(percent, 1)} %.`,
      `Brøk, decimaltal og procent er tre måder at skrive det samme tal på.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Procent
// ---------------------------------------------------------------------------

/** Vækstfaktor: +25 % → 1,25 og −25 % → 0,75. */
export function growthFactor(percentChange: number): number {
  return 1 + percentChange / 100;
}

/** Hvor mange procent udgør part af whole? */
export function percentShare(part: number, whole: number): number {
  return (part / whole) * 100;
}

/** Prisen før en ændring, når du kender prisen efter. */
export function priceBefore(priceAfter: number, percentChange: number): number {
  return priceAfter / growthFactor(percentChange);
}

function procentLevel1(): ExerciseDraft {
  const variant = pick(["procent-af", "omregning"] as const);

  if (variant === "procent-af") {
    const percent = pick([5, 10, 20, 25, 50, 75] as const);
    const total = randomInt(4, 40) * 20;
    const answer = (total * percent) / 100;
    return {
      prompt: `Hvor meget er ${percent} % af ${total}?`,
      options: buildOptions(
        formatNumber(answer),
        [
          formatNumber(answer * 10),
          formatNumber(answer / 10),
          formatNumber(total - answer),
          formatNumber(answer + percent),
        ],
      ),
      correctOption: formatNumber(answer),
      hint: `${percent} % betyder ${percent} ud af 100 — gang med ${formatNumber(percent / 100)}.`,
      steps: [
        `Skriv procenten som decimaltal: ${percent} % = ${formatNumber(percent / 100)}.`,
        `Gang med tallet: ${formatNumber(percent / 100)} × ${total} = ${formatNumber(answer)}.`,
        `Tjek med 1 %: 1 % af ${total} er ${formatNumber(total / 100)}, og ${percent} × ${formatNumber(total / 100)} = ${formatNumber(answer)}.`,
      ],
    };
  }

  const percent = pick([4, 8, 12, 15, 35, 60, 120] as const);
  const answer = formatNumber(percent / 100, 3);
  return {
    prompt: `Skriv ${percent} % som decimaltal.`,
    options: buildOptions(
      answer,
      [
        formatNumber(percent / 10, 3),
        formatNumber(percent / 1000, 3),
        formatNumber(percent, 3),
        formatNumber(100 / percent, 3),
      ],
    ),
    correctOption: answer,
    hint: "Procent betyder hundrededele — divider med 100.",
    steps: [
      `${percent} % = ${percent}/100.`,
      `${percent} : 100 = ${answer} (flyt kommaet to pladser til venstre).`,
    ],
  };
}

function procentLevel2(): ExerciseDraft {
  const variant = pick(["rabat", "moms", "hvor-mange-procent"] as const);

  if (variant === "rabat") {
    const price = randomInt(8, 60) * 25;
    const percent = pick([10, 15, 20, 25, 30, 40] as const);
    const answer = price * growthFactor(-percent);
    return {
      prompt: `En vare koster ${price} kr. Den sættes ned med ${percent} %. Hvad er den nye pris?`,
      options: buildOptions(
        formatNumber(answer),
        [
          formatNumber((price * percent) / 100),
          formatNumber(price * growthFactor(percent)),
          formatNumber(price - percent),
          formatNumber(answer - 10),
        ],
      ),
      correctOption: formatNumber(answer),
      hint: `Et fald på ${percent} % betyder, at du har ${100 - percent} % tilbage.`,
      steps: [
        `Rabatten er ${percent} % af ${price} kr = ${formatNumber((price * percent) / 100)} kr.`,
        `Ny pris: ${price} − ${formatNumber((price * percent) / 100)} = ${formatNumber(answer)} kr.`,
        `Genvej med vækstfaktor: ${price} × ${formatNumber(growthFactor(-percent), 2)} = ${formatNumber(answer)} kr.`,
      ],
    };
  }

  if (variant === "moms") {
    const withoutVat = randomInt(6, 50) * 20;
    const answer = withoutVat * 1.25;
    return {
      prompt: `En vare koster ${withoutVat} kr uden moms. Moms er 25 %. Hvad koster varen med moms?`,
      options: buildOptions(
        formatNumber(answer),
        [
          formatNumber(withoutVat * 0.75),
          formatNumber(withoutVat + 25),
          formatNumber(withoutVat * 1.2),
          formatNumber(withoutVat / 1.25),
        ],
      ),
      correctOption: formatNumber(answer),
      hint: "At lægge 25 % oveni svarer til at gange med vækstfaktoren 1,25.",
      steps: [
        `Momsen er 25 % af ${withoutVat} kr = ${formatNumber(withoutVat * 0.25)} kr.`,
        `Pris med moms: ${withoutVat} + ${formatNumber(withoutVat * 0.25)} = ${formatNumber(answer)} kr.`,
        `Med vækstfaktor: ${withoutVat} × 1,25 = ${formatNumber(answer)} kr.`,
      ],
    };
  }

  const whole = pick([40, 50, 60, 80, 120, 200] as const);
  const part = Math.round(whole * pick([0.15, 0.25, 0.3, 0.45, 0.6] as const));
  const answer = percentShare(part, whole);
  return {
    prompt: `Hvor mange procent er ${part} af ${whole}?`,
    options: buildOptions(
      `${formatNumber(answer)} %`,
      [
        `${formatNumber(percentShare(whole, part))} %`,
        `${formatNumber(answer / 10)} %`,
        `${formatNumber(whole - part)} %`,
        `${formatNumber(answer + 10)} %`,
      ],
    ),
    correctOption: `${formatNumber(answer)} %`,
    hint: "Del delen med det hele, og gang med 100.",
    steps: [
      `${part} : ${whole} = ${formatNumber(part / whole, 4)}.`,
      `${formatNumber(part / whole, 4)} × 100 = ${formatNumber(answer)} %.`,
      `Husk rækkefølgen: delen øverst, det hele nederst.`,
    ],
  };
}

function procentLevel3(): ExerciseDraft {
  const variant = pick(["foer-prisen", "to-aendringer", "rente"] as const);

  if (variant === "foer-prisen") {
    const percent = pick([20, 25, 40, 50] as const);
    const before = randomInt(10, 40) * 50;
    const after = before * growthFactor(-percent);
    return {
      prompt: `Efter ${percent} % rabat koster en vare ${formatNumber(after)} kr. Hvad kostede den før?`,
      options: buildOptions(
        formatNumber(before),
        [
          formatNumber(after * growthFactor(percent)),
          formatNumber(after + percent),
          formatNumber(after * 2),
          formatNumber(after / growthFactor(percent)),
        ],
      ),
      correctOption: formatNumber(before),
      hint: `Prisen efter er ${100 - percent} % af den gamle pris — divider i stedet for at gange.`,
      steps: [
        `Vækstfaktoren ved ${percent} % rabat er ${formatNumber(growthFactor(-percent), 2)}.`,
        `Gammel pris = ny pris : vækstfaktor = ${formatNumber(after)} : ${formatNumber(growthFactor(-percent), 2)} = ${formatNumber(before)} kr.`,
        `Tjek: ${formatNumber(before)} × ${formatNumber(growthFactor(-percent), 2)} = ${formatNumber(after)} kr.`,
      ],
    };
  }

  if (variant === "to-aendringer") {
    const start = randomInt(4, 20) * 100;
    const up = pick([10, 20, 25] as const);
    const down = pick([10, 20, 25] as const);
    const answer = start * growthFactor(up) * growthFactor(-down);
    return {
      prompt: `Et beløb på ${start} kr stiger først ${up} % og falder derefter ${down} %. Hvad er beløbet til sidst?`,
      options: buildOptions(
        formatNumber(answer),
        [
          formatNumber(start),
          formatNumber(start * growthFactor(up - down)),
          formatNumber(start * growthFactor(up) - down),
          formatNumber(start * growthFactor(-down) * growthFactor(up) + 10),
        ],
      ),
      correctOption: formatNumber(answer),
      hint: "Gang de to vækstfaktorer sammen — procenter må ikke bare lægges sammen.",
      steps: [
        `Vækstfaktorer: ${formatNumber(growthFactor(up), 2)} (stigning) og ${formatNumber(growthFactor(-down), 2)} (fald).`,
        `${start} × ${formatNumber(growthFactor(up), 2)} = ${formatNumber(start * growthFactor(up))} kr efter stigningen.`,
        `${formatNumber(start * growthFactor(up))} × ${formatNumber(growthFactor(-down), 2)} = ${formatNumber(answer)} kr.`,
        `Samlet vækstfaktor: ${formatNumber(growthFactor(up) * growthFactor(-down), 4)} — altså ${formatNumber((growthFactor(up) * growthFactor(-down) - 1) * 100, 2)} % i alt.`,
      ],
    };
  }

  const deposit = randomInt(2, 20) * 500;
  const rate = pick([2, 3, 4, 5] as const);
  const years = randomInt(2, 4);
  const answer = deposit * Math.pow(growthFactor(rate), years);
  return {
    prompt: `Du sætter ${deposit} kr i banken til ${rate} % i rente om året. Hvor meget står der efter ${years} år?`,
    options: buildOptions(
      formatNumber(answer),
      [
        formatNumber(deposit * growthFactor(rate * years)),
        formatNumber(deposit + rate * years),
        formatNumber(deposit * growthFactor(rate)),
        formatNumber(answer + 100),
      ],
    ),
    correctOption: formatNumber(answer),
    hint: "Renters rente: gang med vækstfaktoren én gang for hvert år.",
    steps: [
      `Vækstfaktor pr. år: ${formatNumber(growthFactor(rate), 2)}.`,
      `Efter ${years} år: ${deposit} × ${formatNumber(growthFactor(rate), 2)}^${years} = ${formatNumber(answer)} kr.`,
      `Renten regnes hvert år af det nye, større beløb — derfor potens og ikke gange med ${years}.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Areal
// ---------------------------------------------------------------------------

export function rectangleArea(length: number, width: number): number {
  return length * width;
}

export function triangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function trapezoidArea(a: number, b: number, height: number): number {
  return ((a + b) / 2) * height;
}

export function circleArea(radius: number): number {
  return PI * radius * radius;
}

export function circleCircumference(radius: number): number {
  return 2 * PI * radius;
}

function arealLevel1(): ExerciseDraft {
  const variant = pick(["rektangel", "trekant", "omkreds"] as const);

  if (variant === "rektangel") {
    const length = randomInt(4, 18);
    const width = randomInt(3, 12);
    const answer = rectangleArea(length, width);
    return {
      prompt: `Et rektangel er ${length} cm langt og ${width} cm bredt. Hvad er arealet?`,
      options: buildOptions(
        `${formatNumber(answer)} cm²`,
        [
          `${formatNumber(2 * (length + width))} cm²`,
          `${formatNumber(answer / 2)} cm²`,
          `${formatNumber(length + width)} cm²`,
          `${formatNumber(answer)} cm`,
        ],
      ),
      correctOption: `${formatNumber(answer)} cm²`,
      hint: "Areal af rektangel = længde × bredde.",
      steps: [
        `A = længde × bredde = ${length} × ${width}.`,
        `A = ${answer} cm².`,
        `Husk enheden: areal måles i kvadratenheder (cm²).`,
      ],
    };
  }

  if (variant === "trekant") {
    const base = randomInt(3, 9) * 2;
    const height = randomInt(3, 14);
    const answer = triangleArea(base, height);
    return {
      prompt: `En trekant har grundlinje ${base} cm og højde ${height} cm. Hvad er arealet?`,
      options: buildOptions(
        `${formatNumber(answer)} cm²`,
        [
          `${formatNumber(base * height)} cm²`,
          `${formatNumber(answer / 2)} cm²`,
          `${formatNumber(base + height)} cm²`,
          `${formatNumber(answer + base)} cm²`,
        ],
      ),
      correctOption: `${formatNumber(answer)} cm²`,
      hint: "Trekanten er det halve af et rektangel med samme grundlinje og højde.",
      steps: [
        `A = (grundlinje × højde) : 2 = (${base} × ${height}) : 2.`,
        `A = ${base * height} : 2 = ${formatNumber(answer)} cm².`,
        `Højden skal altid stå vinkelret på grundlinjen.`,
      ],
    };
  }

  const length = randomInt(5, 20);
  const width = randomInt(3, 15);
  const answer = 2 * (length + width);
  return {
    prompt: `Et rektangel er ${length} m langt og ${width} m bredt. Hvad er omkredsen?`,
    options: buildOptions(
      `${formatNumber(answer)} m`,
      [
        `${formatNumber(length * width)} m`,
        `${formatNumber(length + width)} m`,
        `${formatNumber(answer / 2)} m`,
        `${formatNumber(answer)} m²`,
      ],
    ),
    correctOption: `${formatNumber(answer)} m`,
    hint: "Omkreds er turen hele vejen rundt om figuren.",
    steps: [
      `O = 2 × (længde + bredde) = 2 × (${length} + ${width}).`,
      `O = 2 × ${length + width} = ${answer} m.`,
      `Omkreds måles i længdeenheder (m) — ikke i m².`,
    ],
  };
}

function arealLevel2(): ExerciseDraft {
  const variant = pick(["cirkel-areal", "cirkel-omkreds", "trapez", "parallelogram"] as const);

  if (variant === "cirkel-areal") {
    const radius = randomInt(2, 12);
    const answer = circleArea(radius);
    return {
      prompt: `En cirkel har radius ${radius} cm. Hvad er arealet? (afrund til 1 decimal)`,
      options: buildOptions(
        `${formatNumber(answer, 1)} cm²`,
        [
          `${formatNumber(circleCircumference(radius), 1)} cm²`,
          `${formatNumber(PI * radius * 2 * radius, 1)} cm²`,
          `${formatNumber(answer / 2, 1)} cm²`,
          `${formatNumber(PI * radius, 1)} cm²`,
        ],
      ),
      correctOption: `${formatNumber(answer, 1)} cm²`,
      hint: "A = π × r². Kvadrér radius først, gang så med π.",
      steps: [
        `r² = ${radius}² = ${radius * radius}.`,
        `A = π × ${radius * radius} = ${formatNumber(answer, 1)} cm².`,
        `Pas på: r² betyder r × r — ikke r × 2.`,
      ],
    };
  }

  if (variant === "cirkel-omkreds") {
    const diameter = randomInt(3, 14) * 2;
    const radius = diameter / 2;
    const answer = circleCircumference(radius);
    return {
      prompt: `En cirkel har diameter ${diameter} cm. Hvad er omkredsen? (afrund til 1 decimal)`,
      options: buildOptions(
        `${formatNumber(answer, 1)} cm`,
        [
          `${formatNumber(circleArea(radius), 1)} cm`,
          `${formatNumber(PI * radius, 1)} cm`,
          `${formatNumber(answer * 2, 1)} cm`,
          `${formatNumber(diameter, 1)} cm`,
        ],
      ),
      correctOption: `${formatNumber(answer, 1)} cm`,
      hint: "O = π × d, eller O = 2 × π × r. Diameteren er dobbelt så lang som radius.",
      steps: [
        `Radius: r = d : 2 = ${diameter} : 2 = ${radius} cm.`,
        `O = π × d = π × ${diameter} = ${formatNumber(answer, 1)} cm.`,
        `Kontrol: 2 × π × ${radius} giver det samme.`,
      ],
    };
  }

  if (variant === "trapez") {
    const a = randomInt(4, 12);
    const b = a + randomInt(2, 10);
    const height = randomInt(3, 10) * 2;
    const answer = trapezoidArea(a, b, height);
    return {
      prompt: `Et trapez har parallelle sider på ${a} cm og ${b} cm og højden ${height} cm. Hvad er arealet?`,
      options: buildOptions(
        `${formatNumber(answer)} cm²`,
        [
          `${formatNumber((a + b) * height)} cm²`,
          `${formatNumber(a * b)} cm²`,
          `${formatNumber(((a + b) / 2) * (height / 2))} cm²`,
          `${formatNumber(a + b + height)} cm²`,
        ],
      ),
      correctOption: `${formatNumber(answer)} cm²`,
      hint: "Tag gennemsnittet af de to parallelle sider, og gang med højden.",
      steps: [
        `Gennemsnit af de parallelle sider: (${a} + ${b}) : 2 = ${formatNumber((a + b) / 2)}.`,
        `A = ${formatNumber((a + b) / 2)} × ${height} = ${formatNumber(answer)} cm².`,
      ],
    };
  }

  const base = randomInt(5, 16);
  const height = randomInt(3, 12);
  const answer = base * height;
  return {
    prompt: `Et parallelogram har grundlinje ${base} cm og højde ${height} cm. Hvad er arealet?`,
    options: buildOptions(
      `${formatNumber(answer)} cm²`,
      [
        `${formatNumber(answer / 2)} cm²`,
        `${formatNumber(2 * (base + height))} cm²`,
        `${formatNumber(base + height)} cm²`,
        `${formatNumber(answer + height)} cm²`,
      ],
    ),
    correctOption: `${formatNumber(answer)} cm²`,
    hint: "Et parallelogram kan klippes om til et rektangel med samme grundlinje og højde.",
    steps: [
      `A = grundlinje × højde = ${base} × ${height}.`,
      `A = ${answer} cm².`,
      `Brug højden — ikke den skrå side.`,
    ],
  };
}

function arealLevel3(): ExerciseDraft {
  const variant = pick(["sammensat", "baglaens", "enheder"] as const);

  if (variant === "sammensat") {
    const width = randomInt(4, 12);
    const rectHeight = randomInt(3, 9);
    const triHeight = randomInt(2, 8);
    const answer = width * rectHeight + (width * triHeight) / 2;
    return {
      prompt: `Et hus tegnes som et rektangel (${width} m bredt, ${rectHeight} m højt) med en trekantet tagflade ovenpå (samme bredde, ${triHeight} m høj). Hvad er det samlede areal set fra siden?`,
      options: buildOptions(
        `${formatNumber(answer)} m²`,
        [
          `${formatNumber(width * rectHeight + width * triHeight)} m²`,
          `${formatNumber(width * (rectHeight + triHeight) / 2)} m²`,
          `${formatNumber(width * rectHeight)} m²`,
          `${formatNumber(answer + width)} m²`,
        ],
      ),
      correctOption: `${formatNumber(answer)} m²`,
      hint: "Del figuren op i kendte figurer, regn hver del for sig, og læg sammen.",
      steps: [
        `Rektanglet: ${width} × ${rectHeight} = ${width * rectHeight} m².`,
        `Trekanten: (${width} × ${triHeight}) : 2 = ${formatNumber((width * triHeight) / 2)} m².`,
        `I alt: ${width * rectHeight} + ${formatNumber((width * triHeight) / 2)} = ${formatNumber(answer)} m².`,
      ],
    };
  }

  if (variant === "baglaens") {
    const area = randomInt(6, 30) * 6;
    const base = pick([4, 6, 8, 12] as const);
    const height = (2 * area) / base;
    return {
      prompt: `En trekant har arealet ${area} cm² og grundlinjen ${base} cm. Hvor høj er trekanten?`,
      options: buildOptions(
        `${formatNumber(height)} cm`,
        [
          `${formatNumber(area / base)} cm`,
          `${formatNumber(area * 2)} cm`,
          `${formatNumber(base / 2)} cm`,
          `${formatNumber(height + base)} cm`,
        ],
      ),
      correctOption: `${formatNumber(height)} cm`,
      hint: "Skriv formlen op, sæt ind, og isolér højden.",
      steps: [
        `A = (g × h) : 2 → ${area} = (${base} × h) : 2.`,
        `Gang begge sider med 2: ${2 * area} = ${base} × h.`,
        `Divider med ${base}: h = ${2 * area} : ${base} = ${formatNumber(height)} cm.`,
      ],
    };
  }

  const squareMeters = randomInt(2, 12);
  const answer = squareMeters * 10000;
  return {
    prompt: `Hvor mange cm² er ${squareMeters} m²?`,
    options: buildOptions(
      `${formatThousands(answer)} cm²`,
      [
        `${formatThousands(squareMeters * 100)} cm²`,
        `${formatThousands(squareMeters * 1000)} cm²`,
        `${formatThousands(squareMeters * 1000000)} cm²`,
        `${formatThousands(squareMeters)} cm²`,
      ],
    ),
    correctOption: `${formatThousands(answer)} cm²`,
    hint: "1 m = 100 cm, og arealet er en længde gange en længde.",
    steps: [
      `1 m² = 100 cm × 100 cm = 10.000 cm².`,
      `${squareMeters} m² = ${squareMeters} × 10.000 = ${formatThousands(answer)} cm².`,
      `Ved areal ganger (eller dividerer) du med omregningstallet to gange.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Rumfang
// ---------------------------------------------------------------------------

export function boxVolume(length: number, width: number, height: number): number {
  return length * width * height;
}

export function prismVolume(baseArea: number, height: number): number {
  return baseArea * height;
}

export function cylinderVolume(radius: number, height: number): number {
  return PI * radius * radius * height;
}

export function coneVolume(radius: number, height: number): number {
  return (PI * radius * radius * height) / 3;
}

export function pyramidVolume(baseArea: number, height: number): number {
  return (baseArea * height) / 3;
}

export function sphereVolume(radius: number): number {
  return (4 / 3) * PI * radius * radius * radius;
}

/** 1 liter = 1 dm³ = 1000 cm³, og 1 m³ = 1000 liter. */
export function cubicCentimetersToLiters(volume: number): number {
  return volume / 1000;
}

function rumfangLevel1(): ExerciseDraft {
  const variant = pick(["kasse", "terning", "liter"] as const);

  if (variant === "kasse") {
    const length = randomInt(4, 15);
    const width = randomInt(3, 12);
    const height = randomInt(2, 10);
    const answer = boxVolume(length, width, height);
    return {
      prompt: `En kasse er ${length} cm lang, ${width} cm bred og ${height} cm høj. Hvad er rumfanget?`,
      options: buildOptions(
        `${formatNumber(answer)} cm³`,
        [
          `${formatNumber(length * width)} cm³`,
          `${formatNumber(length + width + height)} cm³`,
          `${formatNumber(answer / 2)} cm³`,
          `${formatNumber(answer)} cm²`,
        ],
      ),
      correctOption: `${formatNumber(answer)} cm³`,
      hint: "Rumfang af kasse = længde × bredde × højde.",
      steps: [
        `Grundfladen: ${length} × ${width} = ${length * width} cm².`,
        `Gang med højden: ${length * width} × ${height} = ${answer} cm³.`,
        `Rumfang måles i kubikenheder (cm³).`,
      ],
    };
  }

  if (variant === "terning") {
    const side = randomInt(3, 12);
    const answer = side ** 3;
    return {
      prompt: `En terning har sidelængden ${side} cm. Hvad er rumfanget?`,
      options: buildOptions(
        `${formatNumber(answer)} cm³`,
        [
          `${formatNumber(side * side)} cm³`,
          `${formatNumber(side * 3)} cm³`,
          `${formatNumber(6 * side * side)} cm³`,
          `${formatNumber(answer / side)} cm³`,
        ],
      ),
      correctOption: `${formatNumber(answer)} cm³`,
      hint: "Alle sider er lige lange: V = s × s × s = s³.",
      steps: [
        `V = ${side} × ${side} × ${side}.`,
        `V = ${answer} cm³.`,
        `Til sammenligning er overfladen 6 × ${side}² = ${6 * side * side} cm² — det er noget andet.`,
      ],
    };
  }

  const liters = randomInt(2, 40) / 2;
  const answer = liters * 1000;
  return {
    prompt: `Hvor mange cm³ er ${formatNumber(liters)} liter?`,
    options: buildOptions(
      `${formatNumber(answer)} cm³`,
      [
        `${formatNumber(liters * 100)} cm³`,
        `${formatNumber(liters * 10)} cm³`,
        `${formatNumber(liters * 10000)} cm³`,
        `${formatNumber(liters)} cm³`,
      ],
    ),
    correctOption: `${formatNumber(answer)} cm³`,
    hint: "1 liter er præcis 1 dm³, altså en terning på 10 cm × 10 cm × 10 cm.",
    steps: [
      `1 liter = 1 dm³ = 10 cm × 10 cm × 10 cm = 1.000 cm³.`,
      `${formatNumber(liters)} liter = ${formatNumber(liters)} × 1.000 = ${formatNumber(answer)} cm³.`,
    ],
  };
}

function rumfangLevel2(): ExerciseDraft {
  const variant = pick(["cylinder", "trekantprisme", "kasse-liter"] as const);

  if (variant === "cylinder") {
    const radius = randomInt(2, 10);
    const height = randomInt(4, 20);
    const answer = cylinderVolume(radius, height);
    return {
      prompt: `En cylinder har radius ${radius} cm og højde ${height} cm. Hvad er rumfanget? (afrund til 1 decimal)`,
      options: buildOptions(
        `${formatNumber(answer, 1)} cm³`,
        [
          `${formatNumber(PI * radius * height, 1)} cm³`,
          `${formatNumber(answer / 3, 1)} cm³`,
          `${formatNumber(2 * PI * radius * height, 1)} cm³`,
          `${formatNumber(answer * 2, 1)} cm³`,
        ],
      ),
      correctOption: `${formatNumber(answer, 1)} cm³`,
      hint: "V = grundflade × højde, og grundfladen er en cirkel: π × r².",
      steps: [
        `Grundfladen: A = π × ${radius}² = ${formatNumber(circleArea(radius), 1)} cm².`,
        `V = A × h = ${formatNumber(circleArea(radius), 1)} × ${height} = ${formatNumber(answer, 1)} cm³.`,
        `Det svarer til ${formatNumber(cubicCentimetersToLiters(answer), 2)} liter.`,
      ],
    };
  }

  if (variant === "trekantprisme") {
    const base = randomInt(3, 10) * 2;
    const triHeight = randomInt(3, 10);
    const length = randomInt(5, 20);
    const baseArea = triangleArea(base, triHeight);
    const answer = prismVolume(baseArea, length);
    return {
      prompt: `Et prisme har en trekantet endeflade med grundlinje ${base} cm og højde ${triHeight} cm. Prismet er ${length} cm langt. Hvad er rumfanget?`,
      options: buildOptions(
        `${formatNumber(answer)} cm³`,
        [
          `${formatNumber(base * triHeight * length)} cm³`,
          `${formatNumber(baseArea)} cm³`,
          `${formatNumber(answer / 3)} cm³`,
          `${formatNumber(base + triHeight + length)} cm³`,
        ],
      ),
      correctOption: `${formatNumber(answer)} cm³`,
      hint: "Alle prismer: V = grundflade × højde (her længden).",
      steps: [
        `Grundfladen (trekanten): (${base} × ${triHeight}) : 2 = ${formatNumber(baseArea)} cm².`,
        `V = ${formatNumber(baseArea)} × ${length} = ${formatNumber(answer)} cm³.`,
      ],
    };
  }

  const length = randomInt(10, 40);
  const width = randomInt(10, 30);
  const height = randomInt(5, 25);
  const volume = boxVolume(length, width, height);
  const answer = cubicCentimetersToLiters(volume);
  return {
    prompt: `Et akvarium er ${length} cm × ${width} cm × ${height} cm. Hvor mange liter vand kan der være i det?`,
    options: buildOptions(
      `${formatNumber(answer, 2)} liter`,
      [
        `${formatNumber(volume, 2)} liter`,
        `${formatNumber(volume / 100, 2)} liter`,
        `${formatNumber(volume / 10000, 2)} liter`,
        `${formatNumber(answer * 10, 2)} liter`,
      ],
    ),
    correctOption: `${formatNumber(answer, 2)} liter`,
    hint: "Regn først rumfanget i cm³, og divider så med 1.000.",
    steps: [
      `V = ${length} × ${width} × ${height} = ${formatNumber(volume)} cm³.`,
      `1 liter = 1.000 cm³, så ${formatNumber(volume)} : 1.000 = ${formatNumber(answer, 2)} liter.`,
    ],
  };
}

function rumfangLevel3(): ExerciseDraft {
  const variant = pick(["kegle", "pyramide", "kugle", "baglaens"] as const);

  if (variant === "kegle") {
    const radius = randomInt(2, 9);
    const height = randomInt(4, 15);
    const answer = coneVolume(radius, height);
    return {
      prompt: `En kegle har radius ${radius} cm og højde ${height} cm. Hvad er rumfanget? (afrund til 1 decimal)`,
      options: buildOptions(
        `${formatNumber(answer, 1)} cm³`,
        [
          `${formatNumber(cylinderVolume(radius, height), 1)} cm³`,
          `${formatNumber(answer * 2, 1)} cm³`,
          `${formatNumber(circleArea(radius), 1)} cm³`,
          `${formatNumber(answer / 3, 1)} cm³`,
        ],
      ),
      correctOption: `${formatNumber(answer, 1)} cm³`,
      hint: "En kegle fylder præcis 1/3 af cylinderen med samme grundflade og højde.",
      steps: [
        `Cylinderen ville have V = π × ${radius}² × ${height} = ${formatNumber(cylinderVolume(radius, height), 1)} cm³.`,
        `Keglen er 1/3 heraf: ${formatNumber(cylinderVolume(radius, height), 1)} : 3 = ${formatNumber(answer, 1)} cm³.`,
      ],
    };
  }

  if (variant === "pyramide") {
    const side = randomInt(3, 12);
    const height = randomInt(4, 15);
    const answer = pyramidVolume(side * side, height);
    return {
      prompt: `En pyramide har en kvadratisk grundflade med sidelængde ${side} cm og er ${height} cm høj. Hvad er rumfanget? (afrund til 1 decimal)`,
      options: buildOptions(
        `${formatNumber(answer, 1)} cm³`,
        [
          `${formatNumber(side * side * height, 1)} cm³`,
          `${formatNumber((side * side * height) / 2, 1)} cm³`,
          `${formatNumber(side * height, 1)} cm³`,
          `${formatNumber(answer / 3, 1)} cm³`,
        ],
      ),
      correctOption: `${formatNumber(answer, 1)} cm³`,
      hint: "V = (grundflade × højde) : 3 — samme 1/3-regel som keglen.",
      steps: [
        `Grundfladen: ${side} × ${side} = ${side * side} cm².`,
        `V = (${side * side} × ${height}) : 3 = ${formatNumber(answer, 1)} cm³.`,
      ],
    };
  }

  if (variant === "kugle") {
    const radius = randomInt(2, 9);
    const answer = sphereVolume(radius);
    return {
      prompt: `En kugle har radius ${radius} cm. Hvad er rumfanget? (afrund til 1 decimal)`,
      options: buildOptions(
        `${formatNumber(answer, 1)} cm³`,
        [
          `${formatNumber(4 * PI * radius * radius, 1)} cm³`,
          `${formatNumber(answer / 4, 1)} cm³`,
          `${formatNumber((4 / 3) * PI * radius * radius, 1)} cm³`,
          `${formatNumber(answer * 3, 1)} cm³`,
        ],
      ),
      correctOption: `${formatNumber(answer, 1)} cm³`,
      hint: "V = 4/3 × π × r³. Radius skal i tredje potens.",
      steps: [
        `r³ = ${radius}³ = ${radius ** 3}.`,
        `V = 4/3 × π × ${radius ** 3} = ${formatNumber(answer, 1)} cm³.`,
        `Til sammenligning er kuglens overflade 4 × π × r² = ${formatNumber(4 * PI * radius * radius, 1)} cm².`,
      ],
    };
  }

  const width = randomInt(4, 12);
  const length = randomInt(5, 15);
  const height = randomInt(3, 12);
  const volume = boxVolume(length, width, height);
  return {
    prompt: `En kasse har rumfanget ${formatNumber(volume)} cm³. Grundfladen er ${length} cm × ${width} cm. Hvor høj er kassen?`,
    options: buildOptions(
      `${formatNumber(height)} cm`,
      [
        `${formatNumber(volume / length)} cm`,
        `${formatNumber(volume / (length + width))} cm`,
        `${formatNumber(height * 2)} cm`,
        `${formatNumber(length * width)} cm`,
      ],
    ),
    correctOption: `${formatNumber(height)} cm`,
    hint: "Divider rumfanget med grundfladens areal.",
    steps: [
      `Grundfladen: ${length} × ${width} = ${length * width} cm².`,
      `h = V : grundflade = ${formatNumber(volume)} : ${length * width} = ${formatNumber(height)} cm.`,
      `Tjek: ${length * width} × ${height} = ${formatNumber(volume)} cm³.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Sandsynlighed
// ---------------------------------------------------------------------------

/** Sandsynlighed som brøk, når alle udfald er lige sandsynlige. */
export function probability(favourable: number, total: number): Fraction {
  return simplifyFraction({ numerator: favourable, denominator: total });
}

function probabilityAnswer(favourable: number, total: number): string {
  const fraction = probability(favourable, total);
  return `${formatFraction(fraction)} (${formatNumber((favourable / total) * 100, 1)} %)`;
}

function sandsynlighedLevel1(): ExerciseDraft {
  const variant = pick(["terning", "pose", "chance-procent"] as const);

  if (variant === "terning") {
    const target = randomInt(1, 6);
    const answer = probabilityAnswer(1, 6);
    return {
      prompt: `Du kaster en almindelig terning. Hvad er sandsynligheden for at slå ${target}?`,
      options: buildOptions(
        answer,
        [probabilityAnswer(1, 3), probabilityAnswer(target, 6), probabilityAnswer(5, 6), probabilityAnswer(1, 2)],
      ),
      correctOption: answer,
      hint: "P = gunstige udfald : mulige udfald.",
      steps: [
        `Udfaldsrummet er {1, 2, 3, 4, 5, 6} — 6 mulige udfald.`,
        `Kun ét udfald er gunstigt (${target}).`,
        `P = 1/6 ≈ ${formatNumber(100 / 6, 1)} %.`,
      ],
    };
  }

  if (variant === "pose") {
    const red = randomInt(2, 8);
    const blue = randomInt(2, 8);
    const green = randomInt(1, 5);
    const total = red + blue + green;
    const answer = probabilityAnswer(red, total);
    return {
      prompt: `En pose indeholder ${red} røde, ${blue} blå og ${green} grønne kugler. Du trækker én uden at kigge. Hvad er sandsynligheden for en rød?`,
      options: buildOptions(
        answer,
        [
          probabilityAnswer(blue, total),
          probabilityAnswer(red, red + blue),
          probabilityAnswer(total - red, total),
          probabilityAnswer(green, total),
        ],
      ),
      correctOption: answer,
      hint: `Tæl først alle kugler: ${red} + ${blue} + ${green}.`,
      steps: [
        `Antal kugler i alt: ${red} + ${blue} + ${green} = ${total}.`,
        `Gunstige udfald (røde): ${red}.`,
        `P(rød) = ${red}/${total} = ${formatFraction(probability(red, total))} ≈ ${formatNumber((red / total) * 100, 1)} %.`,
      ],
    };
  }

  const favourable = randomInt(1, 4);
  const total = pick([10, 20, 25, 50] as const);
  const answer = `${formatNumber((favourable / total) * 100, 1)} %`;
  return {
    prompt: `I en klasse med ${total} lodder vinder ${favourable} en præmie. Hvor stor er chancen i procent for at vinde med ét lod?`,
    options: buildOptions(
      answer,
      [
        `${formatNumber(favourable / total, 2)} %`,
        `${formatNumber(((total - favourable) / total) * 100, 1)} %`,
        `${formatNumber((favourable / total) * 10, 1)} %`,
        `${formatNumber(favourable, 1)} %`,
      ],
    ),
    correctOption: answer,
    hint: "Regn sandsynligheden som brøk, og gang med 100.",
    steps: [
      `P = ${favourable}/${total} = ${formatNumber(favourable / total, 3)}.`,
      `${formatNumber(favourable / total, 3)} × 100 = ${answer}.`,
    ],
  };
}

function sandsynlighedLevel2(): ExerciseDraft {
  const variant = pick(["komplement", "mindst", "to-terninger"] as const);

  if (variant === "komplement") {
    const red = randomInt(3, 9);
    const others = randomInt(4, 12);
    const total = red + others;
    const answer = probabilityAnswer(others, total);
    return {
      prompt: `En pose har ${total} kugler, hvoraf ${red} er røde. Hvad er sandsynligheden for IKKE at trække en rød?`,
      options: buildOptions(
        answer,
        [
          probabilityAnswer(red, total),
          probabilityAnswer(others, red),
          probabilityAnswer(1, total),
          probabilityAnswer(others - 1, total),
        ],
      ),
      correctOption: answer,
      hint: "Komplementreglen: P(ikke A) = 1 − P(A).",
      steps: [
        `P(rød) = ${red}/${total}.`,
        `P(ikke rød) = 1 − ${red}/${total} = ${others}/${total} = ${formatFraction(probability(others, total))}.`,
        `Det svarer til ${formatNumber((others / total) * 100, 1)} %.`,
      ],
    };
  }

  if (variant === "mindst") {
    const target = pick([3, 4, 5] as const);
    const favourable = 6 - target + 1;
    const answer = probabilityAnswer(favourable, 6);
    return {
      prompt: `Du kaster en terning. Hvad er sandsynligheden for at slå mindst ${target}?`,
      options: buildOptions(
        answer,
        [
          probabilityAnswer(6 - favourable, 6),
          probabilityAnswer(1, 6),
          probabilityAnswer(favourable - 1, 6),
          probabilityAnswer(target, 6),
        ],
      ),
      correctOption: answer,
      hint: `"Mindst ${target}" betyder ${target} eller derover — tæl udfaldene.`,
      steps: [
        `Gunstige udfald: ${Array.from({ length: favourable }, (_, i) => target + i).join(", ")} — det er ${favourable} udfald.`,
        `P = ${favourable}/6 = ${formatFraction(probability(favourable, 6))} ≈ ${formatNumber((favourable / 6) * 100, 1)} %.`,
      ],
    };
  }

  const answer = probabilityAnswer(1, 36);
  const target = randomInt(1, 6);
  return {
    prompt: `Du kaster to terninger. Hvad er sandsynligheden for at slå ${target}'er på begge?`,
    options: buildOptions(
      answer,
      [probabilityAnswer(1, 12), probabilityAnswer(2, 36), probabilityAnswer(1, 6), probabilityAnswer(1, 18)],
    ),
    correctOption: answer,
    hint: "Uafhængige hændelser: gang sandsynlighederne.",
    steps: [
      `P(${target} på første terning) = 1/6, og P(${target} på anden terning) = 1/6.`,
      `Kastene påvirker ikke hinanden, så P = 1/6 × 1/6 = 1/36.`,
      `1/36 ≈ ${formatNumber(100 / 36, 1)} %.`,
    ],
  };
}

function sandsynlighedLevel3(): ExerciseDraft {
  const variant = pick(["uden-tilbagelaegning", "med-tilbagelaegning", "mindst-en"] as const);

  if (variant === "uden-tilbagelaegning") {
    const red = randomInt(3, 7);
    const others = randomInt(4, 9);
    const total = red + others;
    const numerator = red * (red - 1);
    const denominator = total * (total - 1);
    const answer = `${formatFraction(simplifyFraction({ numerator, denominator }))} (${formatNumber((numerator / denominator) * 100, 1)} %)`;
    return {
      prompt: `En pose har ${red} røde og ${others} blå kugler. Du trækker to kugler uden at lægge tilbage. Hvad er sandsynligheden for to røde?`,
      options: buildOptions(
        answer,
        [
          `${formatFraction(simplifyFraction({ numerator: red * red, denominator: total * total }))} (${formatNumber(((red * red) / (total * total)) * 100, 1)} %)`,
          probabilityAnswer(red, total),
          probabilityAnswer(2, total),
          `${formatFraction(simplifyFraction({ numerator: red - 1, denominator: total - 1 }))} (${formatNumber(((red - 1) / (total - 1)) * 100, 1)} %)`,
        ],
      ),
      correctOption: answer,
      hint: "Efter første træk er der én kugle færre — både af røde og i alt.",
      steps: [
        `Første træk: P = ${red}/${total}.`,
        `Andet træk (én rød og én kugle mindre): P = ${red - 1}/${total - 1}.`,
        `Gang langs grenen i tælletræet: ${red}/${total} × ${red - 1}/${total - 1} = ${numerator}/${denominator} = ${formatFraction(simplifyFraction({ numerator, denominator }))}.`,
      ],
    };
  }

  if (variant === "med-tilbagelaegning") {
    const red = randomInt(3, 8);
    const others = randomInt(3, 9);
    const total = red + others;
    const numerator = red * red;
    const denominator = total * total;
    const answer = `${formatFraction(simplifyFraction({ numerator, denominator }))} (${formatNumber((numerator / denominator) * 100, 1)} %)`;
    return {
      prompt: `En pose har ${red} røde og ${others} blå kugler. Du trækker en kugle, lægger den tilbage og trækker igen. Hvad er sandsynligheden for to røde?`,
      options: buildOptions(
        answer,
        [
          `${formatFraction(simplifyFraction({ numerator: red * (red - 1), denominator: total * (total - 1) }))} (${formatNumber(((red * (red - 1)) / (total * (total - 1))) * 100, 1)} %)`,
          probabilityAnswer(red, total),
          probabilityAnswer(2 * red, total),
          probabilityAnswer(red, total * 2),
        ],
      ),
      correctOption: answer,
      hint: "Med tilbagelægning er de to træk uafhængige — samme sandsynlighed begge gange.",
      steps: [
        `P(rød) = ${red}/${total} i begge træk, fordi kuglen lægges tilbage.`,
        `P(to røde) = ${red}/${total} × ${red}/${total} = ${numerator}/${denominator} = ${formatFraction(simplifyFraction({ numerator, denominator }))}.`,
        `Det er ${formatNumber((numerator / denominator) * 100, 1)} %.`,
      ],
    };
  }

  const throws = randomInt(2, 3);
  const noSix = Math.pow(5 / 6, throws);
  const answer = `${formatNumber((1 - noSix) * 100, 1)} %`;
  return {
    prompt: `Du kaster en terning ${throws} gange. Hvad er sandsynligheden for at få mindst én 6'er? (afrund til 1 decimal)`,
    options: buildOptions(
      answer,
      [
        `${formatNumber(noSix * 100, 1)} %`,
        `${formatNumber((throws / 6) * 100, 1)} %`,
        `${formatNumber(Math.pow(1 / 6, throws) * 100, 1)} %`,
        `${formatNumber((1 - noSix) * 100 + 10, 1)} %`,
      ],
    ),
    correctOption: answer,
    hint: 'Regn modsat: "mindst én 6\'er" er det modsatte af "ingen 6\'ere".',
    steps: [
      `P(ingen 6'er i ét kast) = 5/6.`,
      `P(ingen 6'er i ${throws} kast) = (5/6)^${throws} = ${formatNumber(noSix, 4)}.`,
      `P(mindst én 6'er) = 1 − ${formatNumber(noSix, 4)} = ${formatNumber(1 - noSix, 4)} = ${answer}.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Dispatcher
// ---------------------------------------------------------------------------

const GENERATORS: Record<TjekUpArea, Record<TjekUpLevel, () => ExerciseDraft>> = {
  regnearter: { 1: regnearterLevel1, 2: regnearterLevel2, 3: regnearterLevel3 },
  broeker: { 1: broekerLevel1, 2: broekerLevel2, 3: broekerLevel3 },
  procent: { 1: procentLevel1, 2: procentLevel2, 3: procentLevel3 },
  areal: { 1: arealLevel1, 2: arealLevel2, 3: arealLevel3 },
  rumfang: { 1: rumfangLevel1, 2: rumfangLevel2, 3: rumfangLevel3 },
  sandsynlighed: { 1: sandsynlighedLevel1, 2: sandsynlighedLevel2, 3: sandsynlighedLevel3 },
};

export function generateTjekUpExercise(area: TjekUpArea, level: TjekUpLevel): TjekUpExercise {
  const draft = GENERATORS[area][level]();
  return { id: nextId(area), area, level, ...draft };
}
