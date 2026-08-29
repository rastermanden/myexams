import test from "node:test";
import assert from "node:assert/strict";
import {
  checkAnswer,
  exerciseTex,
  generatePlusSammeNaevner,
  solutionTex,
} from "./broekPlusSammeNaevner.ts";

const LEVELS = [1, 2, 3];

test("opgaverne har altid samme nævner og en korrekt sum", () => {
  for (const level of LEVELS) {
    for (let i = 0; i < 200; i++) {
      const exercise = generatePlusSammeNaevner(level);
      const { left, right, raw, answer } = exercise;
      assert.equal(left.denominator, right.denominator);
      assert.ok(left.numerator >= 1 && right.numerator >= 1);
      assert.equal(raw.numerator, left.numerator + right.numerator);
      assert.equal(raw.denominator, left.denominator);
      // Svaret er den samme værdi som den uforkortede sum.
      assert.equal(
        raw.numerator * answer.denominator,
        answer.numerator * raw.denominator,
      );
    }
  }
});

test("niveauerne rammer hver deres opgavetype", () => {
  for (let i = 0; i < 200; i++) {
    const let1 = generatePlusSammeNaevner(1);
    assert.ok(let1.raw.numerator < let1.raw.denominator, "niveau 1 giver en ægte brøk");
    assert.deepEqual(let1.answer, let1.raw, "niveau 1 kan ikke forkortes");

    const mellem = generatePlusSammeNaevner(2);
    assert.ok(mellem.raw.numerator < mellem.raw.denominator, "niveau 2 giver en ægte brøk");
    assert.ok(
      mellem.answer.denominator < mellem.raw.denominator,
      "niveau 2 kan forkortes",
    );

    const svaer = generatePlusSammeNaevner(3);
    assert.ok(
      svaer.raw.numerator > svaer.raw.denominator,
      "niveau 3 giver en uægte brøk",
    );
  }
});

test("svaret bedømmes rigtigt — også når det ikke er forkortet", () => {
  const exercise = {
    left: { numerator: 1, denominator: 6 },
    right: { numerator: 3, denominator: 6 },
    raw: { numerator: 4, denominator: 6 },
    answer: { numerator: 2, denominator: 3 },
    level: 2,
    hint: "",
    steps: [],
  };

  assert.equal(checkAnswer(exercise, "2", "3"), "correct");
  assert.equal(checkAnswer(exercise, " 2 ", " 3 "), "correct");
  assert.equal(checkAnswer(exercise, "4", "6"), "unreduced");
  assert.equal(checkAnswer(exercise, "8", "12"), "unreduced");
  assert.equal(checkAnswer(exercise, "4", "12"), "wrong");
  // Den klassiske fejl: nævnerne lagt sammen.
  assert.equal(checkAnswer(exercise, "4", "12"), "wrong");
  assert.equal(checkAnswer(exercise, "", "3"), "incomplete");
  assert.equal(checkAnswer(exercise, "2", "0"), "incomplete");
  assert.equal(checkAnswer(exercise, "to", "3"), "incomplete");
});

test("trinene forklarer forkortning og uægte brøker", () => {
  const reducible = generatePlusSammeNaevner(2);
  assert.match(reducible.steps.join(" "), /Forkort svaret/);

  const improper = generatePlusSammeNaevner(3);
  assert.match(improper.steps.join(" "), /uægte brøk/);
});

test("opgave og facit sættes som LaTeX", () => {
  const exercise = {
    left: { numerator: 3, denominator: 8 },
    right: { numerator: 2, denominator: 8 },
    raw: { numerator: 5, denominator: 8 },
    answer: { numerator: 5, denominator: 8 },
    level: 1,
    hint: "",
    steps: [],
  };
  assert.equal(exerciseTex(exercise), "\\frac{3}{8} + \\frac{2}{8}");
  assert.equal(
    solutionTex(exercise),
    "\\frac{3}{8} + \\frac{2}{8} = \\frac{3+2}{8} = \\frac{5}{8}",
  );

  const reduced = {
    ...exercise,
    left: { numerator: 1, denominator: 6 },
    right: { numerator: 3, denominator: 6 },
    raw: { numerator: 4, denominator: 6 },
    answer: { numerator: 2, denominator: 3 },
  };
  assert.equal(
    solutionTex(reduced),
    "\\frac{1}{6} + \\frac{3}{6} = \\frac{1+3}{6} = \\frac{4}{6} = \\frac{2}{3}",
  );
});
