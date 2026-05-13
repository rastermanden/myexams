export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

export type ExerciseAction = {
  id: string;
  label: string;
};

export type ExerciseStep = {
  equation: string;
  explanation: string;
  correctAction?: ExerciseAction;
  actions?: ExerciseAction[];
  hint?: string;
};

export type EquationExercise = {
  level: DifficultyLevel;
  title: string;
  solution: number;
  steps: ExerciseStep[];
};

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function shuffled<T>(values: T[]) {
  const clone = [...values];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function formatXTerm(coeff: number): string {
  if (coeff === 1) return "x";
  if (coeff === -1) return "-x";
  return `${coeff}x`;
}

function formatLinear(coeff: number, constant: number): string {
  if (coeff === 0 && constant === 0) return "0";
  if (coeff === 0) return String(constant);
  if (constant === 0) return formatXTerm(coeff);
  const sign = constant > 0 ? "+" : "-";
  return `${formatXTerm(coeff)} ${sign} ${Math.abs(constant)}`;
}

function createShuffledActions(correct: ExerciseAction, wrong: ExerciseAction[]) {
  return shuffled([correct, ...wrong]).slice(0, 4);
}

function level1Exercise(): EquationExercise {
  const x = randomInt(1, 20);
  const a = randomInt(2, 12);
  const plusVariant = Math.random() < 0.5;
  const b = plusVariant ? x + a : x - a;
  const equation = plusVariant ? `x + ${a} = ${b}` : `x - ${a} = ${b}`;
  const correct = plusVariant
    ? { id: "sub-a", label: `Træk ${a} fra på begge sider` }
    : { id: "add-a", label: `Læg ${a} til på begge sider` };
  const wrong = plusVariant
    ? [
        { id: "add-a", label: `Læg ${a} til på begge sider` },
        { id: "mul-a", label: `Gang med ${a} på begge sider` },
        { id: "div-a", label: `Dividér med ${a} på begge sider` },
      ]
    : [
        { id: "sub-a", label: `Træk ${a} fra på begge sider` },
        { id: "mul-a", label: `Gang med ${a} på begge sider` },
        { id: "div-a", label: `Dividér med ${a} på begge sider` },
      ];

  return {
    level: 1,
    title: "Niveau 1: x ± a = b",
    solution: x,
    steps: [
      {
        equation,
        explanation:
          "Fjern tallet ved x ved at gøre den modsatte operation på begge sider af lighedstegnet.",
        correctAction: correct,
        actions: createShuffledActions(correct, wrong),
        hint: "Husk reglen: gør det samme på begge sider af lighedstegnet.",
      },
      {
        equation: `x = ${x}`,
        explanation: "x er nu isoleret.",
      },
    ],
  };
}

function level2Exercise(): EquationExercise {
  const x = randomInt(1, 12);
  const a = randomInt(2, 10);
  const multiplicationVariant = Math.random() < 0.5;

  if (multiplicationVariant) {
    const b = a * x;
    const correct = { id: "div-a", label: `Dividér med ${a} på begge sider` };
    return {
      level: 2,
      title: "Niveau 2: ax = b",
      solution: x,
      steps: [
        {
          equation: `${a}x = ${b}`,
          explanation:
            "x er ganget med et tal. Ophæv det ved at dividere begge sider med samme tal (≠ 0).",
          correctAction: correct,
          actions: createShuffledActions(correct, [
            { id: "mul-a", label: `Gang med ${a} på begge sider` },
            { id: "add-a", label: `Læg ${a} til på begge sider` },
            { id: "sub-a", label: `Træk ${a} fra på begge sider` },
          ]),
          hint: "Når x er ganget med a, dividerer du begge sider med a.",
        },
        {
          equation: `x = ${x}`,
          explanation: "x er isoleret.",
        },
      ],
    };
  }

  const b = randomInt(1, 12);
  const solution = a * b;
  const correct = { id: "mul-a", label: `Gang med ${a} på begge sider` };
  return {
    level: 2,
    title: "Niveau 2: x / a = b",
    solution,
    steps: [
      {
        equation: `x / ${a} = ${b}`,
        explanation: "x er divideret med et tal. Ophæv division ved at gange begge sider med samme tal.",
        correctAction: correct,
        actions: createShuffledActions(correct, [
          { id: "div-a", label: `Dividér med ${a} på begge sider` },
          { id: "add-a", label: `Læg ${a} til på begge sider` },
          { id: "sub-a", label: `Træk ${a} fra på begge sider` },
        ]),
        hint: "Når x er divideret med a, ganger du begge sider med a.",
      },
      {
        equation: `x = ${solution}`,
        explanation: "x er isoleret.",
      },
    ],
  };
}

function level3Exercise(): EquationExercise {
  const a = randomInt(2, 9);
  let b = randomInt(-12, 12);
  if (b === 0) {
    b = randomInt(1, 12) * (Math.random() < 0.5 ? -1 : 1);
  }
  const x = randomInt(1, 12);
  const c = a * x + b;
  const firstAction =
    b >= 0
      ? { id: "sub-b", label: `Træk ${b} fra på begge sider` }
      : { id: "add-b", label: `Læg ${Math.abs(b)} til på begge sider` };
  const afterFirst = `${a}x = ${c - b}`;
  const secondAction = { id: "div-a", label: `Dividér med ${a} på begge sider` };

  return {
    level: 3,
    title: "Niveau 3: ax + b = c",
    solution: x,
    steps: [
      {
        equation: `${formatXTerm(a)} ${b >= 0 ? "+" : "-"} ${Math.abs(b)} = ${c}`,
        explanation: "Fjern konstantleddet først, så x-leddet står alene.",
        correctAction: firstAction,
        actions: createShuffledActions(firstAction, [
          { id: "div-a", label: `Dividér med ${a} på begge sider` },
          { id: "mul-a", label: `Gang med ${a} på begge sider` },
          b >= 0
            ? { id: "add-b", label: `Læg ${b} til på begge sider` }
            : { id: "sub-b", label: `Træk ${Math.abs(b)} fra på begge sider` },
        ]),
        hint: "Flyt først konstantleddet væk fra x.",
      },
      {
        equation: afterFirst,
        explanation: "Nu står x-leddet alene på venstre side.",
        correctAction: secondAction,
        actions: createShuffledActions(secondAction, [
          { id: "add-a", label: `Læg ${a} til på begge sider` },
          { id: "sub-a", label: `Træk ${a} fra på begge sider` },
          { id: "mul-a", label: `Gang med ${a} på begge sider` },
        ]),
        hint: "Ophæv gange med a ved at dividere begge sider med a.",
      },
      {
        equation: `x = ${x}`,
        explanation: "x er isoleret.",
      },
    ],
  };
}

function level4Exercise(): EquationExercise {
  const x = randomInt(1, 10);
  const leftCoeff = randomInt(3, 9);
  const rightCoeff = randomInt(1, leftCoeff - 1);
  const leftConst = randomInt(-10, 10);
  const rightConst = leftCoeff * x + leftConst - rightCoeff * x;
  const newCoeff = leftCoeff - rightCoeff;
  const reducedRight = rightConst - leftConst;

  const firstAction = {
    id: "sub-right-coeff",
    label: `Træk ${rightCoeff === 1 ? "x" : `${rightCoeff}x`} fra på begge sider`,
  };
  const secondAction =
    leftConst >= 0
      ? { id: "sub-const", label: `Træk ${leftConst} fra på begge sider` }
      : { id: "add-const", label: `Læg ${Math.abs(leftConst)} til på begge sider` };
  const thirdAction = {
    id: "div-new-coeff",
    label: `Dividér med ${newCoeff} på begge sider`,
  };

  return {
    level: 4,
    title: "Niveau 4: ax + b = cx + d",
    solution: x,
    steps: [
      {
        equation: `${formatLinear(leftCoeff, leftConst)} = ${formatLinear(
          rightCoeff,
          rightConst,
        )}`,
        explanation: "Saml alle x-led på én side af lighedstegnet.",
        correctAction: firstAction,
        actions: createShuffledActions(firstAction, [
          {
            id: "add-right-coeff",
            label: `Læg ${rightCoeff === 1 ? "x" : `${rightCoeff}x`} til på begge sider`,
          },
          { id: "sub-const", label: `Træk ${Math.abs(leftConst)} fra på begge sider` },
          { id: "div-left-coeff", label: `Dividér med ${leftCoeff} på begge sider` },
        ]),
        hint: "Når x er på begge sider, flyt først x-leddene samlet til én side.",
      },
      {
        equation: `${formatLinear(newCoeff, leftConst)} = ${rightConst}`,
        explanation: "Nu fjerner du konstantleddet ved x.",
        correctAction: secondAction,
        actions: createShuffledActions(secondAction, [
          { id: "div-new-coeff", label: `Dividér med ${newCoeff} på begge sider` },
          leftConst >= 0
            ? { id: "add-const", label: `Læg ${leftConst} til på begge sider` }
            : { id: "sub-const", label: `Træk ${Math.abs(leftConst)} fra på begge sider` },
          { id: "mul-new-coeff", label: `Gang med ${newCoeff} på begge sider` },
        ]),
        hint: "Flyt konstantleddet, så kun et x-led står tilbage.",
      },
      {
        equation: `${newCoeff}x = ${reducedRight}`,
        explanation: "Til sidst ophæver du gange med koefficienten foran x.",
        correctAction: thirdAction,
        actions: createShuffledActions(thirdAction, [
          { id: "mul-new-coeff", label: `Gang med ${newCoeff} på begge sider` },
          { id: "sub-new-coeff", label: `Træk ${newCoeff} fra på begge sider` },
          { id: "add-new-coeff", label: `Læg ${newCoeff} til på begge sider` },
        ]),
        hint: "Divider begge sider med koefficienten foran x.",
      },
      {
        equation: `x = ${x}`,
        explanation: "x er isoleret.",
      },
    ],
  };
}

function level5Exercise(): EquationExercise {
  const parenthesisVariant = Math.random() < 0.5;

  if (parenthesisVariant) {
    const factor = randomInt(2, 6);
    const inner = randomInt(1, 10);
    const x = randomInt(1, 10);
    const rhs = factor * (x + inner);
    return {
      level: 5,
      title: "Niveau 5: parenteser",
      solution: x,
      steps: [
        {
          equation: `${factor}(x + ${inner}) = ${rhs}`,
          explanation: "Ophæv først faktor uden for parentesen.",
          correctAction: {
            id: "div-factor",
            label: `Dividér med ${factor} på begge sider`,
          },
          actions: createShuffledActions(
            { id: "div-factor", label: `Dividér med ${factor} på begge sider` },
            [
              { id: "mul-factor", label: `Gang med ${factor} på begge sider` },
              { id: "sub-inner", label: `Træk ${inner} fra på begge sider` },
              { id: "add-inner", label: `Læg ${inner} til på begge sider` },
            ],
          ),
          hint: "Du kan dele hele venstre side med faktor foran parentesen.",
        },
        {
          equation: `x + ${inner} = ${rhs / factor}`,
          explanation: "Nu fjerner du konstantleddet ved x.",
          correctAction: {
            id: "sub-inner",
            label: `Træk ${inner} fra på begge sider`,
          },
          actions: createShuffledActions(
            { id: "sub-inner", label: `Træk ${inner} fra på begge sider` },
            [
              { id: "add-inner", label: `Læg ${inner} til på begge sider` },
              { id: "mul-inner", label: `Gang med ${inner} på begge sider` },
              { id: "div-inner", label: `Dividér med ${inner} på begge sider` },
            ],
          ),
          hint: "Efter division står du med x + tal = ...",
        },
        {
          equation: `x = ${x}`,
          explanation: "x er isoleret.",
        },
      ],
    };
  }

  const divisor = randomInt(2, 6);
  const inner = randomInt(1, 10);
  const rhs = randomInt(2, 12);
  const x = divisor * rhs - inner;
  return {
    level: 5,
    title: "Niveau 5: brøker",
    solution: x,
    steps: [
      {
        equation: `(x + ${inner}) / ${divisor} = ${rhs}`,
        explanation: "Fjern nævneren ved at gange begge sider med samme tal.",
        correctAction: {
          id: "mul-divisor",
          label: `Gang med ${divisor} på begge sider`,
        },
        actions: createShuffledActions(
          { id: "mul-divisor", label: `Gang med ${divisor} på begge sider` },
          [
            { id: "div-divisor", label: `Dividér med ${divisor} på begge sider` },
            { id: "sub-inner", label: `Træk ${inner} fra på begge sider` },
            { id: "add-inner", label: `Læg ${inner} til på begge sider` },
          ],
        ),
        hint: "Når en størrelse er divideret med d, ganger du med d for at ophæve.",
      },
      {
        equation: `x + ${inner} = ${divisor * rhs}`,
        explanation: "Nu fjerner du konstantleddet ved x.",
        correctAction: {
          id: "sub-inner",
          label: `Træk ${inner} fra på begge sider`,
        },
        actions: createShuffledActions(
          { id: "sub-inner", label: `Træk ${inner} fra på begge sider` },
          [
            { id: "add-inner", label: `Læg ${inner} til på begge sider` },
            { id: "mul-inner", label: `Gang med ${inner} på begge sider` },
            { id: "div-inner", label: `Dividér med ${inner} på begge sider` },
          ],
        ),
        hint: "Efter at have fjernet nævneren løses den som en almindelig ligning.",
      },
      {
        equation: `x = ${x}`,
        explanation: "x er isoleret.",
      },
    ],
  };
}

export function generateEquationExercise(level: DifficultyLevel): EquationExercise {
  switch (level) {
    case 1:
      return level1Exercise();
    case 2:
      return level2Exercise();
    case 3:
      return level3Exercise();
    case 4:
      return level4Exercise();
    case 5:
    default:
      return level5Exercise();
  }
}
