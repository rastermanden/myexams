"use client";

import { useState } from "react";

type Fraction = { numerator: number; denominator: number };

type PracticeTask = {
  id: string;
  prompt: string;
  options: string[];
  correctOption: string;
  hint: string;
  explanation: string;
  probability: Fraction;
};

type LessonStep = {
  id: number;
  title: string;
  level: "Begynder" | "Let øvet" | "Øvet";
  intro: string;
  tasks: PracticeTask[];
};

const STEP_IDS = [1, 2, 3, 4, 5, 6] as const;
const REQUIRED_ATTEMPTS = 8;
const REQUIRED_CORRECT = 8;

const makeTask = (
  id: string,
  prompt: string,
  options: string[],
  correctOption: string,
  hint: string,
  explanation: string,
  probability: Fraction,
): PracticeTask => ({
  id,
  prompt,
  options,
  correctOption,
  hint,
  explanation,
  probability,
});

const LESSON_STEPS: LessonStep[] = [
  {
    id: 1,
    title: "Intuition: hvad er sandsynlighed?",
    level: "Begynder",
    intro:
      "Placer hverdagssituationer på linjen fra 0 til 1 og vælg den bedste sproglige vurdering.",
    tasks: [
      makeTask("1-1", "Solen står op i morgen.", ["umuligt", "usandsynligt", "sandsynligt", "sikkert"], "sikkert", "Tænk på noget, der sker hver dag.", "Det regnes som sikkert i denne model.", { numerator: 1, denominator: 1 }),
      makeTask("1-2", "En fair terning viser tallet 7.", ["umuligt", "usandsynligt", "lige sandsynligt", "sandsynligt"], "umuligt", "En standardterning har kun seks sider.", "Udfaldet 7 findes ikke i udfaldsrummet 1-6.", { numerator: 0, denominator: 1 }),
      makeTask("1-3", "Det regner i juli i Danmark.", ["umuligt", "usandsynligt", "sandsynligt", "sikkert"], "sandsynligt", "Regn kan godt forekomme om sommeren.", "Regn er muligt og ofte realistisk, men ikke sikkert.", { numerator: 7, denominator: 10 }),
      makeTask("1-4", "Ved ét møntkast får du krone.", ["umuligt", "usandsynligt", "lige sandsynligt", "sikkert"], "lige sandsynligt", "Mønten har to sider med samme chance.", "Krone og plat har hver sandsynlighed 1/2.", { numerator: 1, denominator: 2 }),
      makeTask("1-5", "At trække et hjerter i et kortspil.", ["umuligt", "usandsynligt", "lige sandsynligt", "sandsynligt"], "sandsynligt", "Hvor stor en del af kortene er hjerter?", "13 af 52 kort er hjerter, altså 1/4. I denne introduktion behandles 1/4 som sandsynligt.", { numerator: 1, denominator: 4 }),
      makeTask("1-6", "At få et tal mellem 1 og 6 på en fair terning.", ["umuligt", "usandsynligt", "sandsynligt", "sikkert"], "sikkert", "Alle sider er mellem 1 og 6.", "Alle mulige udfald opfylder hændelsen.", { numerator: 1, denominator: 1 }),
      makeTask("1-7", "At slå en sekser på en fair terning.", ["umuligt", "usandsynligt", "lige sandsynligt", "sandsynligt"], "usandsynligt", "Kun ét udfald er gunstigt.", "Sandsynligheden er 1/6, altså lav.", { numerator: 1, denominator: 6 }),
      makeTask("1-8", "At få mindst én krone i to møntkast.", ["umuligt", "usandsynligt", "sandsynligt", "sikkert"], "sandsynligt", "Kun ét udfald giver ingen kroner.", "Kun PP fejler, så sandsynligheden er 3/4.", { numerator: 3, denominator: 4 }),
      makeTask("1-9", "At trække en rød kugle fra en pose med 5 røde og 5 blå kugler.", ["umuligt", "usandsynligt", "lige sandsynligt", "sikkert"], "lige sandsynligt", "Sammenlign antallet af røde og blå.", "Rød og blå er lige sandsynlige: 5/10.", { numerator: 1, denominator: 2 }),
      makeTask("1-10", "At få præcis tallet 2 på en fair terning.", ["umuligt", "usandsynligt", "lige sandsynligt", "sandsynligt"], "usandsynligt", "Et enkelt udfald ud af seks.", "Et specifikt tal på en terning har sandsynlighed 1/6.", { numerator: 1, denominator: 6 }),
    ],
  },
  {
    id: 2,
    title: "Simple eksperimenter",
    level: "Begynder",
    intro: "Brug mønt, terning og kugler til at koble eksperiment og sandsynlighed.",
    tasks: [
      makeTask("2-1", "Fair mønt: P(plat)", ["1/6", "1/3", "1/2", "2/3"], "1/2", "Der er to lige sandsynlige udfald.", "Plat er ét af to udfald.", { numerator: 1, denominator: 2 }),
      makeTask("2-2", "Fair terning: P(ulige)", ["1/6", "2/6", "3/6", "4/6"], "3/6", "Ulige tal er 1, 3, 5.", "Tre gunstige af seks mulige.", { numerator: 3, denominator: 6 }),
      makeTask("2-3", "Pose med 3 røde og 1 blå: P(rød)", ["1/4", "2/4", "3/4", "4/4"], "3/4", "Tæl røde kugler ud af totalen.", "Tre røde ud af fire i alt.", { numerator: 3, denominator: 4 }),
      makeTask("2-4", "Fair terning: P(tal > 4)", ["1/6", "2/6", "3/6", "4/6"], "2/6", "Kun 5 og 6 passer.", "To gunstige udfald: 5 og 6.", { numerator: 2, denominator: 6 }),
      makeTask("2-5", "To møntkast: P(krone i første kast)", ["1/4", "1/2", "3/4", "1"], "1/2", "Første kast påvirkes ikke af andet kast.", "Første kast er krone i halvdelen af udfaldene.", { numerator: 1, denominator: 2 }),
      makeTask("2-6", "Pose med 2 grønne og 6 gule: P(grøn)", ["1/8", "2/8", "3/8", "6/8"], "2/8", "To grønne ud af otte i alt.", "Sandsynligheden er 2/8 = 1/4.", { numerator: 2, denominator: 8 }),
      makeTask("2-7", "Fair terning: P(1 eller 2)", ["1/6", "2/6", "3/6", "4/6"], "2/6", "To sider er gunstige.", "Udfaldene 1 og 2 giver 2/6.", { numerator: 2, denominator: 6 }),
      makeTask("2-8", "Fair mønt: P(krone eller plat)", ["0", "1/2", "3/4", "1"], "1", "Begge mulige udfald er med.", "Hændelsen dækker hele udfaldsrummet.", { numerator: 1, denominator: 1 }),
      makeTask("2-9", "Pose med 5 røde og 5 blå: P(blå)", ["2/10", "4/10", "5/10", "8/10"], "5/10", "Halvdelen af kuglerne er blå.", "5 af 10 kugler er blå.", { numerator: 5, denominator: 10 }),
      makeTask("2-10", "Fair terning: P(præcis 6)", ["1/6", "2/6", "3/6", "6/6"], "1/6", "Kun én side giver succes.", "Præcis ét gunstigt udfald.", { numerator: 1, denominator: 6 }),
    ],
  },
  {
    id: 3,
    title: "Tælle udfald",
    level: "Let øvet",
    intro: "Identificér udfaldsrum og gunstige udfald, før du regner.",
    tasks: [
      makeTask("3-1", "Hvor mange udfald har ét fair møntkast?", ["1", "2", "3", "4"], "2", "Mønten har to sider.", "Udfaldsrummet er {krone, plat}.", { numerator: 1, denominator: 1 }),
      makeTask("3-2", "Hvor mange udfald har ét fair terningekast?", ["4", "5", "6", "7"], "6", "Tæl siderne på terningen.", "Udfaldsrummet er 1-6.", { numerator: 1, denominator: 1 }),
      makeTask("3-3", "Hvor mange gunstige udfald giver et lige tal på terning?", ["2", "3", "4", "5"], "3", "Lige tal er 2, 4, 6.", "Der er tre gunstige udfald.", { numerator: 3, denominator: 6 }),
      makeTask("3-4", "To møntkast: antal mulige ordnede udfald?", ["2", "3", "4", "6"], "4", "Skriv udfaldene KK, KP, PK, PP.", "Der er 4 udfald i alt.", { numerator: 1, denominator: 1 }),
      makeTask("3-5", "To terninger: antal mulige ordnede udfald?", ["12", "24", "30", "36"], "36", "Brug 6·6.", "Første terning 6 valg og anden 6 valg.", { numerator: 1, denominator: 1 }),
      makeTask("3-6", "To møntkast: antal udfald med præcis én krone?", ["1", "2", "3", "4"], "2", "Det er KP og PK.", "Præcis én krone sker i 2 af 4 udfald.", { numerator: 2, denominator: 4 }),
      makeTask("3-7", "Terning: antal udfald større end 3?", ["2", "3", "4", "5"], "3", "Udfald over 3 er 4, 5, 6.", "Der er tre gunstige udfald.", { numerator: 3, denominator: 6 }),
      makeTask("3-8", "Pose med 4 hvide og 6 sorte: antal mulige enkelttræk?", ["4", "6", "8", "10"], "10", "Tæl alle kugler i posen.", "Ét træk har 10 mulige kugler.", { numerator: 1, denominator: 1 }),
      makeTask("3-9", "Pose med 4 hvide og 6 sorte: antal gunstige for sort?", ["4", "5", "6", "10"], "6", "Gunstige = antal sorte.", "Der er seks sorte kugler.", { numerator: 6, denominator: 10 }),
      makeTask("3-10", "To terninger: antal udfald med sum 7?", ["4", "5", "6", "7"], "6", "Skriv parrene (1,6)...(6,1).", "Der er seks ordnede par med sum 7.", { numerator: 6, denominator: 36 }),
    ],
  },
  {
    id: 4,
    title: "Beregning af sandsynlighed",
    level: "Let øvet",
    intro:
      "Brug formlen P(A) = gunstige / mulige. Sammenlign altid brøk, decimaltal og procent.",
    tasks: [
      makeTask("4-1", "Terning: P(lige tal)", ["1/6", "2/6", "3/6", "4/6"], "3/6", "Lige udfald: 2, 4, 6.", "P = 3/6 = 0,5 = 50%.", { numerator: 3, denominator: 6 }),
      makeTask("4-2", "Terning: P(tal ≤ 2)", ["1/6", "2/6", "3/6", "4/6"], "2/6", "Udfald 1 og 2 passer.", "P = 2/6 = 1/3 ≈ 33,3%.", { numerator: 2, denominator: 6 }),
      makeTask("4-3", "Kortspil: P(hjerter)", ["1/2", "1/4", "1/13", "13/52"], "13/52", "Der er 13 hjerter i 52 kort.", "P = 13/52 = 1/4 = 25%.", { numerator: 13, denominator: 52 }),
      makeTask("4-4", "To møntkast: P(to kroner)", ["1/2", "1/3", "1/4", "3/4"], "1/4", "Kun udfaldet KK er gunstigt.", "P = 1/4 = 0,25 = 25%.", { numerator: 1, denominator: 4 }),
      makeTask("4-5", "Terning: P(præcis 1 eller 6)", ["1/6", "2/6", "3/6", "4/6"], "2/6", "To gunstige udfald.", "P = 2/6 = 1/3.", { numerator: 2, denominator: 6 }),
      makeTask("4-6", "Pose med 2 røde, 3 blå: P(rød)", ["1/5", "2/5", "3/5", "4/5"], "2/5", "To røde ud af fem i alt.", "P = 2/5 = 0,4 = 40%.", { numerator: 2, denominator: 5 }),
      makeTask("4-7", "To terninger: P(sum 7)", ["4/36", "5/36", "6/36", "7/36"], "6/36", "Der er 6 gunstige ordnede par.", "P = 6/36 = 1/6 ≈ 16,7%.", { numerator: 6, denominator: 36 }),
      makeTask("4-8", "Terning: P(ikke 6)", ["1/6", "2/6", "5/6", "6/6"], "5/6", "Alle udfald undtagen 6.", "P = 5/6 ≈ 83,3%.", { numerator: 5, denominator: 6 }),
      makeTask("4-9", "Mønt: P(krone) som procent", ["25%", "50%", "75%", "100%"], "50%", "Krone er 1 ud af 2.", "1/2 svarer til 50%.", { numerator: 1, denominator: 2 }),
      makeTask("4-10", "Pose med 1 grøn og 9 gule: P(grøn)", ["1/10", "2/10", "5/10", "9/10"], "1/10", "Én grøn ud af ti.", "P = 0,1 = 10%.", { numerator: 1, denominator: 10 }),
    ],
  },
  {
    id: 5,
    title: "Komplementær sandsynlighed",
    level: "Øvet",
    intro: "Træn reglen P(ikke A) = 1 − P(A) i mange små varianter.",
    tasks: [
      makeTask("5-1", "Hvis P(A)=1/6, hvad er P(ikke A)?", ["1/6", "3/6", "5/6", "6/6"], "5/6", "Træk fra 1.", "1 - 1/6 = 5/6.", { numerator: 5, denominator: 6 }),
      makeTask("5-2", "Terning: P(ikke lige)", ["1/6", "2/6", "3/6", "4/6"], "3/6", "P(lige) er 3/6.", "P(ikke lige) = 1 - 3/6 = 3/6.", { numerator: 3, denominator: 6 }),
      makeTask("5-3", "Hvis P(regn)=0,2, hvad er P(ikke regn)?", ["0,2", "0,4", "0,8", "1,2"], "0,8", "1 minus 0,2.", "P(ikke regn) = 0,8.", { numerator: 8, denominator: 10 }),
      makeTask("5-4", "Kortspil: P(ikke hjerter)", ["13/52", "26/52", "39/52", "52/52"], "39/52", "P(hjerter) er 13/52.", "1 - 13/52 = 39/52.", { numerator: 39, denominator: 52 }),
      makeTask("5-5", "To møntkast: P(ikke to kroner)", ["1/4", "2/4", "3/4", "4/4"], "3/4", "P(to kroner)=1/4.", "Komplementet er 3/4.", { numerator: 3, denominator: 4 }),
      makeTask("5-6", "Terning: P(ikke 1)", ["1/6", "2/6", "5/6", "6/6"], "5/6", "Kun udfaldet 1 er uønsket.", "Fem af seks udfald er ikke 1.", { numerator: 5, denominator: 6 }),
      makeTask("5-7", "Pose: P(blå)=3/10. Hvad er P(ikke blå)?", ["3/10", "5/10", "7/10", "10/10"], "7/10", "1 - 3/10.", "P(ikke blå)=7/10.", { numerator: 7, denominator: 10 }),
      makeTask("5-8", "Hvis P(A)=65%, hvad er P(ikke A)?", ["25%", "35%", "45%", "65%"], "35%", "100% minus 65%.", "P(ikke A)=35%.", { numerator: 35, denominator: 100 }),
      makeTask("5-9", "Terning: P(ikke >4)", ["2/6", "3/6", "4/6", "5/6"], "4/6", "P(>4)=2/6.", "1 - 2/6 = 4/6.", { numerator: 4, denominator: 6 }),
      makeTask("5-10", "Hvis P(A)=0,95, hvad er P(ikke A)?", ["0,05", "0,5", "0,95", "1,05"], "0,05", "Komplementet er resten op til 1.", "1 - 0,95 = 0,05.", { numerator: 5, denominator: 100 }),
    ],
  },
  {
    id: 6,
    title: "Sammensatte hændelser (introduktion)",
    level: "Øvet",
    intro:
      "Første møde med to-trins situationer: to kast, to terninger og simple tælletræer.",
    tasks: [
      makeTask("6-1", "To møntkast: P(mindst én krone)", ["1/4", "2/4", "3/4", "4/4"], "3/4", "Brug evt. komplement: ingen kroner.", "Kun PP fejler, så 3/4.", { numerator: 3, denominator: 4 }),
      makeTask("6-2", "To møntkast: P(præcis én krone)", ["1/4", "2/4", "3/4", "4/4"], "2/4", "Gunstige udfald er KP og PK.", "2 af 4 udfald.", { numerator: 2, denominator: 4 }),
      makeTask("6-3", "To terninger: P(sum 12)", ["1/36", "2/36", "3/36", "6/36"], "1/36", "Kun (6,6) virker.", "Et gunstigt udfald ud af 36.", { numerator: 1, denominator: 36 }),
      makeTask("6-4", "To terninger: P(første er 6)", ["1/12", "1/6", "2/6", "1/2"], "1/6", "Anden terning er ligegyldig.", "6 ud af 36 udfald har første terning = 6.", { numerator: 6, denominator: 36 }),
      makeTask("6-5", "To terninger: P(begge er lige)", ["1/4", "1/3", "1/2", "2/3"], "1/4", "Lige sandsynlighed for lige på hver terning er 1/2.", "(1/2)·(1/2)=1/4.", { numerator: 1, denominator: 4 }),
      makeTask("6-6", "To møntkast: P(to ens)", ["1/4", "2/4", "3/4", "4/4"], "2/4", "Ens betyder KK eller PP.", "2 af 4 udfald giver samme side.", { numerator: 2, denominator: 4 }),
      makeTask("6-7", "Tre møntkast: P(alle tre kroner)", ["1/4", "1/6", "1/8", "1/12"], "1/8", "Hver krone har sandsynlighed 1/2.", "(1/2)^3 = 1/8.", { numerator: 1, denominator: 8 }),
      makeTask("6-8", "To terninger: P(sum 2 eller 12)", ["1/36", "2/36", "3/36", "4/36"], "2/36", "Mulighederne er (1,1) og (6,6).", "To gunstige udfald ud af 36.", { numerator: 2, denominator: 36 }),
      makeTask("6-9", "To møntkast: P(første krone OG anden plat)", ["1/4", "2/4", "3/4", "1"], "1/4", "Kun ét ordnet udfald passer.", "Kun KP er gunstigt.", { numerator: 1, denominator: 4 }),
      makeTask("6-10", "To terninger: P(sum mindst 11)", ["2/36", "3/36", "4/36", "5/36"], "3/36", "Mulige summer: 11 eller 12.", "(5,6), (6,5), (6,6) giver 3/36.", { numerator: 3, denominator: 36 }),
    ],
  },
];

function toDecimal({ numerator, denominator }: Fraction): string {
  return (numerator / denominator).toFixed(3).replace(/\.0+$/, "").replace(/(\.[0-9]*[1-9])0+$/, "$1");
}

function toPercent({ numerator, denominator }: Fraction): string {
  const value = (numerator / denominator) * 100;
  const formatted = Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1);
  return `${formatted.replace(".", ",")}%`;
}

function createCounterRecord(): Record<number, number> {
  return Object.fromEntries(STEP_IDS.map((id) => [id, 0])) as Record<number, number>;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function ProbabilityFromScratchDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [taskIndexByStep, setTaskIndexByStep] = useState<Record<number, number>>(
    createCounterRecord,
  );
  const [attemptsByStep, setAttemptsByStep] = useState<Record<number, number>>(
    createCounterRecord,
  );
  const [correctByStep, setCorrectByStep] = useState<Record<number, number>>(
    createCounterRecord,
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<
    { isCorrect: boolean; message: string; hint: string; explanation: string } | null
  >(null);

  const [coinResult, setCoinResult] = useState<string>("—");
  const [dieResult, setDieResult] = useState<number | null>(null);
  const [drawResult, setDrawResult] = useState<string>("—");
  const [coinAnimationTick, setCoinAnimationTick] = useState(0);
  const [dieAnimationTick, setDieAnimationTick] = useState(0);
  const [drawAnimationTick, setDrawAnimationTick] = useState(0);

  const [teacherMode, setTeacherMode] = useState(false);
  const [teacherStep, setTeacherStep] = useState(1);
  const [teacherSet, setTeacherSet] = useState<PracticeTask[]>([]);
  const [showTeacherAnswers, setShowTeacherAnswers] = useState(false);

  const activeStep = LESSON_STEPS.find((step) => step.id === currentStep) ?? LESSON_STEPS[0];
  const currentTask = activeStep.tasks[taskIndexByStep[currentStep] % activeStep.tasks.length];

  const isStepMastered = (stepId: number) =>
    attemptsByStep[stepId] >= REQUIRED_ATTEMPTS && correctByStep[stepId] >= REQUIRED_CORRECT;

  const isStepUnlocked = (stepId: number) => {
    if (stepId === 1) return true;
    return STEP_IDS.filter((id) => id < stepId).every((id) => isStepMastered(id));
  };

  const unlockedSteps = STEP_IDS.filter((id) => isStepUnlocked(id)).length;
  const currentFraction = currentTask.probability;
  const probabilityValue = currentFraction.numerator / currentFraction.denominator;

  const masteryText = `${correctByStep[currentStep]}/${REQUIRED_CORRECT} rigtige · ${attemptsByStep[currentStep]}/${REQUIRED_ATTEMPTS} opgaver`;

  const canMoveForward =
    currentStep < STEP_IDS.length && isStepMastered(currentStep) && isStepUnlocked(currentStep + 1);

  const completedSteps = STEP_IDS.filter((id) => isStepMastered(id)).length;
  const progressPercent = Math.round((completedSteps / STEP_IDS.length) * 100);

  function handleCheckAnswer() {
    if (!selectedOption) return;
    const isCorrect = selectedOption === currentTask.correctOption;
    const nextAttempts = attemptsByStep[currentStep] + 1;
    const nextCorrect = correctByStep[currentStep] + (isCorrect ? 1 : 0);

    setAttemptsByStep((prev) => ({ ...prev, [currentStep]: nextAttempts }));
    setCorrectByStep((prev) => ({ ...prev, [currentStep]: nextCorrect }));

    setFeedback({
      isCorrect,
      message: isCorrect ? "Korrekt!" : "Ikke helt endnu.",
      hint: currentTask.hint,
      explanation: currentTask.explanation,
    });
  }

  function handleNextTask() {
    setTaskIndexByStep((prev) => ({
      ...prev,
      [currentStep]: (prev[currentStep] + 1) % activeStep.tasks.length,
    }));
    setSelectedOption(null);
    setFeedback(null);
  }

  function runCoinFlip() {
    setCoinAnimationTick((value) => value + 1);
    setCoinResult(Math.random() < 0.5 ? "Krone" : "Plat");
  }

  function runDieRoll() {
    setDieAnimationTick((value) => value + 1);
    setDieResult(Math.floor(Math.random() * 6) + 1);
  }

  function runBagDraw() {
    const bag = ["Rød", "Rød", "Rød", "Blå", "Blå"];
    setDrawAnimationTick((value) => value + 1);
    setDrawResult(bag[Math.floor(Math.random() * bag.length)]);
  }

  function generateTeacherSet() {
    const step = LESSON_STEPS.find((item) => item.id === teacherStep);
    if (!step) return;
    setTeacherSet(shuffle(step.tasks).slice(0, 8));
    setShowTeacherAnswers(false);
  }

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Interaktiv læring: sandsynlighedsregning fra bunden
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Hvert trin har 10 små opgaver. Du skal løse mindst 8 korrekt for at åbne næste
        trin.
      </p>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
        <div
          className="h-full bg-blue-600 transition-all"
          style={{ width: `${progressPercent}%` }}
          aria-hidden
        />
      </div>
      <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
        Samlet progression: {progressPercent}% ({unlockedSteps}/6 trin åbnet)
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {LESSON_STEPS.map((step) => {
          const unlocked = isStepUnlocked(step.id);
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => unlocked && setCurrentStep(step.id)}
              disabled={!unlocked}
              className={`rounded-xl border px-3 py-3 text-left text-sm transition ${
                currentStep === step.id
                  ? "border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100"
                  : "border-zinc-300 text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
              } ${!unlocked ? "cursor-not-allowed opacity-50" : "hover:border-zinc-400"}`}
            >
              <span className="block text-xs font-semibold uppercase tracking-wide">
                Trin {step.id} · {step.level}
              </span>
              <span className="mt-1 block font-medium">{step.title}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Trin {activeStep.id}: {activeStep.title}
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{activeStep.intro}</p>
        <p className="mt-2 text-xs font-medium text-zinc-700 dark:text-zinc-200">{masteryText}</p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Opgave {(taskIndexByStep[currentStep] % activeStep.tasks.length) + 1} / {activeStep.tasks.length}
          </p>
          <p className="mt-2 text-base text-zinc-900 dark:text-zinc-50">{currentTask.prompt}</p>
          <div className="mt-4 grid gap-2">
            {currentTask.options.map((option) => {
              const selected = selectedOption === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedOption(option)}
                  className={`rounded-lg border px-3 py-2 text-left text-sm ${
                    selected
                      ? "border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100"
                      : "border-zinc-300 text-zinc-800 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCheckAnswer}
              disabled={!selectedOption || Boolean(feedback)}
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-900"
            >
              Tjek svar
            </button>
            <button
              type="button"
              onClick={handleNextTask}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 dark:border-zinc-700 dark:text-zinc-100"
            >
              Næste opgave
            </button>
            {canMoveForward && (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.min(prev + 1, STEP_IDS.length))}
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white"
              >
                Gå til trin {currentStep + 1}
              </button>
            )}
          </div>

          {feedback && (
            <div
              className={`mt-4 rounded-lg border p-3 text-sm ${
                feedback.isCorrect
                  ? "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200"
                  : "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-200"
              }`}
            >
              <p className="font-semibold">{feedback.message}</p>
              <p className="mt-1">Hint: {feedback.hint}</p>
              <p className="mt-1">Forklaring: {feedback.explanation}</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
              Sandsynlighedslinje
            </h4>
            <svg viewBox="0 0 320 70" role="img" aria-label="Sandsynlighedslinje" className="mt-3 w-full">
              <line x1="20" y1="35" x2="300" y2="35" stroke="currentColor" className="text-zinc-400" strokeWidth="4" />
              <line x1="20" y1="25" x2="20" y2="45" stroke="currentColor" className="text-zinc-500" />
              <line x1="160" y1="25" x2="160" y2="45" stroke="currentColor" className="text-zinc-500" />
              <line x1="300" y1="25" x2="300" y2="45" stroke="currentColor" className="text-zinc-500" />
              <circle cx={20 + probabilityValue * 280} cy="35" r="7" fill="currentColor" className="text-blue-600" />
              <text x="20" y="60" textAnchor="middle" className="fill-current text-[11px] text-zinc-600 dark:text-zinc-300">0</text>
              <text x="160" y="60" textAnchor="middle" className="fill-current text-[11px] text-zinc-600 dark:text-zinc-300">0,5</text>
              <text x="300" y="60" textAnchor="middle" className="fill-current text-[11px] text-zinc-600 dark:text-zinc-300">1</text>
            </svg>
            <div className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
              <p className="rounded-md bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
                Brøk: {currentFraction.numerator}/{currentFraction.denominator}
              </p>
              <p className="rounded-md bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
                Decimaltal: {toDecimal(currentFraction).replace(".", ",")}
              </p>
              <p className="rounded-md bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
                Procent: {toPercent(currentFraction)}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
              Eksperimenter med animation
            </h4>
            <div className="mt-3 grid gap-3">
              <button
                type="button"
                onClick={runCoinFlip}
                className="rounded-lg border border-zinc-300 px-3 py-2 text-left text-sm dark:border-zinc-700"
              >
                Møntkast →{" "}
                <span key={`coin-${coinAnimationTick}`} className="inline-block animate-spin">
                  {coinResult}
                </span>
              </button>
              <button
                type="button"
                onClick={runDieRoll}
                className="rounded-lg border border-zinc-300 px-3 py-2 text-left text-sm dark:border-zinc-700"
              >
                Terningekast →{" "}
                <span key={`die-${dieAnimationTick}`} className="inline-block animate-bounce">
                  {dieResult ?? "—"}
                </span>
              </button>
              <button
                type="button"
                onClick={runBagDraw}
                className="rounded-lg border border-zinc-300 px-3 py-2 text-left text-sm dark:border-zinc-700"
              >
                Træk kugle fra pose (3 røde, 2 blå) →{" "}
                <span key={`draw-${drawAnimationTick}`} className="animate-pulse font-medium">
                  {drawResult}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-dashed border-zinc-300 p-4 dark:border-zinc-700">
        <label className="inline-flex items-center gap-2 text-sm text-zinc-800 dark:text-zinc-200">
          <input
            type="checkbox"
            checked={teacherMode}
            onChange={(event) => setTeacherMode(event.target.checked)}
          />
          Lærertilstand
        </label>

        {teacherMode && (
          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <label htmlFor="teacher-step" className="text-sm text-zinc-700 dark:text-zinc-300">
                Vælg trin:
              </label>
              <select
                id="teacher-step"
                value={teacherStep}
                onChange={(event) => setTeacherStep(Number(event.target.value))}
                className="rounded-md border border-zinc-300 bg-white px-2 py-1 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              >
                {LESSON_STEPS.map((step) => (
                  <option key={step.id} value={step.id}>
                    Trin {step.id}: {step.title}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={generateTeacherSet}
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-zinc-50 dark:text-zinc-900"
              >
                Generer opgavesæt
              </button>
              {teacherSet.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowTeacherAnswers((value) => !value)}
                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700"
                >
                  {showTeacherAnswers ? "Skjul facit" : "Vis facit"}
                </button>
              )}
            </div>

            {teacherSet.length > 0 && (
              <ol className="list-decimal space-y-2 pl-5 text-sm text-zinc-800 dark:text-zinc-200">
                {teacherSet.map((task) => (
                  <li key={task.id}>
                    <span>{task.prompt}</span>
                    {showTeacherAnswers && (
                      <span className="ml-2 text-zinc-600 dark:text-zinc-300">
                        — Facit: {task.correctOption}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
