export type UnitCategory =
  | "laengde"
  | "areal"
  | "rumfang"
  | "masse"
  | "tid"
  | "hastighed"
  | "temperatur";

export type UnitDefinition = {
  id: string;
  label: string;
  toBaseFactor?: number;
  metric?: boolean;
};

export const UNIT_DEFINITIONS: Record<UnitCategory, UnitDefinition[]> = {
  laengde: [
    { id: "mm", label: "mm", toBaseFactor: 0.001, metric: true },
    { id: "cm", label: "cm", toBaseFactor: 0.01, metric: true },
    { id: "m", label: "m", toBaseFactor: 1, metric: true },
    { id: "km", label: "km", toBaseFactor: 1000, metric: true },
    { id: "in", label: "tommer (in)", toBaseFactor: 0.0254 },
    { id: "ft", label: "fod (ft)", toBaseFactor: 0.3048 },
  ],
  areal: [
    { id: "mm2", label: "mm²", toBaseFactor: 1e-6, metric: true },
    { id: "cm2", label: "cm²", toBaseFactor: 1e-4, metric: true },
    { id: "m2", label: "m²", toBaseFactor: 1, metric: true },
    { id: "ha", label: "ha", toBaseFactor: 10000, metric: true },
    { id: "km2", label: "km²", toBaseFactor: 1e6, metric: true },
  ],
  rumfang: [
    { id: "mL", label: "mL", toBaseFactor: 0.001, metric: true },
    { id: "cL", label: "cL", toBaseFactor: 0.01, metric: true },
    { id: "L", label: "L", toBaseFactor: 1, metric: true },
    { id: "m3", label: "m³", toBaseFactor: 1000, metric: true },
  ],
  masse: [
    { id: "mg", label: "mg", toBaseFactor: 0.001, metric: true },
    { id: "g", label: "g", toBaseFactor: 1, metric: true },
    { id: "kg", label: "kg", toBaseFactor: 1000, metric: true },
    { id: "t", label: "t", toBaseFactor: 1e6, metric: true },
  ],
  tid: [
    { id: "s", label: "sekund", toBaseFactor: 1, metric: true },
    { id: "min", label: "minut", toBaseFactor: 60, metric: true },
    { id: "h", label: "time", toBaseFactor: 3600, metric: true },
    { id: "doegn", label: "døgn", toBaseFactor: 86400, metric: true },
    { id: "aar", label: "år", toBaseFactor: 31536000, metric: true },
  ],
  hastighed: [
    { id: "mps", label: "m/s", toBaseFactor: 1 },
    { id: "kmh", label: "km/h", toBaseFactor: 1 / 3.6 },
  ],
  temperatur: [
    { id: "C", label: "°C" },
    { id: "K", label: "K" },
  ],
};

function findUnit(category: UnitCategory, unitId: string): UnitDefinition | undefined {
  return UNIT_DEFINITIONS[category].find((unit) => unit.id === unitId);
}

export function convertValue(
  value: number,
  category: UnitCategory,
  fromUnitId: string,
  toUnitId: string,
): number {
  if (fromUnitId === toUnitId) return value;

  if (category === "temperatur") {
    if (fromUnitId === "C" && toUnitId === "K") return value + 273.15;
    if (fromUnitId === "K" && toUnitId === "C") return value - 273.15;
    throw new Error("Ugyldig temperaturkonvertering");
  }

  const fromUnit = findUnit(category, fromUnitId);
  const toUnit = findUnit(category, toUnitId);
  if (!fromUnit?.toBaseFactor || !toUnit?.toBaseFactor) {
    throw new Error("Manglende enhedsfaktor");
  }

  const valueInBase = value * fromUnit.toBaseFactor;
  return valueInBase / toUnit.toBaseFactor;
}

export function getDecimalShift(
  category: UnitCategory,
  fromUnitId: string,
  toUnitId: string,
): number | null {
  if (category === "temperatur") return null;

  const fromUnit = findUnit(category, fromUnitId);
  const toUnit = findUnit(category, toUnitId);

  if (!fromUnit?.toBaseFactor || !toUnit?.toBaseFactor) return null;
  if (!fromUnit.metric || !toUnit.metric) return null;

  const ratio = fromUnit.toBaseFactor / toUnit.toBaseFactor;
  const shift = Math.log10(ratio);
  const rounded = Math.round(shift);

  if (Math.abs(shift - rounded) > 1e-9) return null;
  return rounded;
}

export function formatNumber(value: number): string {
  if (!Number.isFinite(value)) return "-";
  return new Intl.NumberFormat("da-DK", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  }).format(value);
}

export type ConversionTask = {
  value: number;
  category: UnitCategory;
  fromUnitId: string;
  toUnitId: string;
  answer: number;
};

const RANDOM_CATEGORIES: UnitCategory[] = [
  "laengde",
  "areal",
  "rumfang",
  "masse",
  "tid",
  "hastighed",
  "temperatur",
];

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateConversionTask(): ConversionTask {
  const category = RANDOM_CATEGORIES[randomInt(0, RANDOM_CATEGORIES.length - 1)];
  const units = UNIT_DEFINITIONS[category];

  const fromIndex = randomInt(0, units.length - 1);
  let toIndex = randomInt(0, units.length - 1);
  while (toIndex === fromIndex) {
    toIndex = randomInt(0, units.length - 1);
  }

  const fromUnitId = units[fromIndex].id;
  const toUnitId = units[toIndex].id;
  const value = category === "temperatur" ? randomInt(-20, 40) : randomInt(1, 250);
  const answer = convertValue(value, category, fromUnitId, toUnitId);

  return { value, category, fromUnitId, toUnitId, answer };
}

export type ScaleTask = {
  scaleDenominator: number;
  mapDistanceCm: number;
  answerMeters: number;
};

const SCALE_OPTIONS = [5000, 10000, 25000, 50000, 100000];

export function generateScaleTask(): ScaleTask {
  const scaleDenominator = SCALE_OPTIONS[randomInt(0, SCALE_OPTIONS.length - 1)];
  const mapDistanceCm = randomInt(2, 40);
  const answerMeters = (mapDistanceCm * scaleDenominator) / 100;

  return { scaleDenominator, mapDistanceCm, answerMeters };
}

export type ContextTask = {
  prompt: string;
  answer: number;
  unitLabel: string;
};

export function generateContextTask(): ContextTask {
  const taskType = randomInt(1, 3);

  if (taskType === 1) {
    const liters = randomInt(1, 8);
    return {
      prompt: `En drikkedunk indeholder ${liters} L vand. Hvor mange mL er det?`,
      answer: liters * 1000,
      unitLabel: "mL",
    };
  }

  if (taskType === 2) {
    const distanceKm = randomInt(3, 24);
    const minutes = randomInt(20, 90);
    return {
      prompt: `En cyklist kører ${distanceKm} km på ${minutes} minutter. Hvad er gennemsnitsfarten i km/h?`,
      answer: distanceKm / (minutes / 60),
      unitLabel: "km/h",
    };
  }

  const celsius = randomInt(-10, 30);
  return {
    prompt: `Et klasselokale har temperaturen ${celsius} °C. Hvad er det i Kelvin?`,
    answer: celsius + 273.15,
    unitLabel: "K",
  };
}

export function isAnswerClose(expected: number, actual: number): boolean {
  if (!Number.isFinite(actual)) return false;
  const tolerance = Math.max(1e-3, Math.abs(expected) * 0.01);
  return Math.abs(expected - actual) <= tolerance;
}

export function getCategoryLabel(category: UnitCategory): string {
  const labels: Record<UnitCategory, string> = {
    laengde: "Længde",
    areal: "Areal",
    rumfang: "Rumfang",
    masse: "Vægt/masse",
    tid: "Tid",
    hastighed: "Hastighed",
    temperatur: "Temperatur",
  };

  return labels[category];
}
