import test from "node:test";
import assert from "node:assert/strict";
import {
  TJEK_UP_AREAS,
  boxVolume,
  buildOptions,
  circleArea,
  circleCircumference,
  coneVolume,
  cubicCentimetersToLiters,
  cylinderVolume,
  formatFraction,
  formatNumber,
  formatThousands,
  fractionOf,
  generateTjekUpExercise,
  growthFactor,
  lcm,
  percentShare,
  priceBefore,
  probability,
  pyramidVolume,
  rectangleArea,
  sphereVolume,
  trapezoidArea,
  triangleArea,
} from "./tjekUp8Exercises.ts";

test("tal formateres med dansk decimalkomma", () => {
  assert.equal(formatNumber(12.5), "12,5");
  assert.equal(formatNumber(7), "7");
  assert.equal(formatNumber(2 / 3, 3), "0,667");
  assert.equal(formatThousands(30000), "30.000");
  assert.equal(formatThousands(950), "950");
});

test("brøkhjælpere regner korrekt", () => {
  assert.equal(lcm(4, 6), 12);
  assert.equal(formatFraction({ numerator: 8, denominator: 12 }), "2/3");
  assert.equal(formatFraction({ numerator: 6, denominator: 3 }), "2");
  assert.equal(fractionOf({ numerator: 3, denominator: 4 }, 240), 180);
});

test("procenthjælpere følger vækstfaktor-reglerne", () => {
  assert.equal(growthFactor(25), 1.25);
  assert.equal(growthFactor(-20), 0.8);
  assert.equal(percentShare(18, 60), 30);
  assert.equal(Math.round(priceBefore(600, -25)), 800);
});

test("arealformler er korrekte", () => {
  assert.equal(rectangleArea(8, 5), 40);
  assert.equal(triangleArea(10, 6), 30);
  assert.equal(trapezoidArea(4, 8, 5), 30);
  assert.equal(Math.round(circleArea(3) * 100) / 100, 28.27);
  assert.equal(Math.round(circleCircumference(3) * 100) / 100, 18.85);
});

test("rumfangsformler er korrekte", () => {
  assert.equal(boxVolume(4, 3, 2), 24);
  assert.equal(Math.round(cylinderVolume(2, 10) * 100) / 100, 125.66);
  assert.equal(Math.round(coneVolume(2, 10) * 100) / 100, 41.89);
  assert.equal(pyramidVolume(9, 5), 15);
  assert.equal(Math.round(sphereVolume(3) * 100) / 100, 113.1);
  assert.equal(cubicCentimetersToLiters(2500), 2.5);
});

test("sandsynlighed forkortes til uforkortelig brøk", () => {
  assert.deepEqual(probability(3, 12), { numerator: 1, denominator: 4 });
  assert.deepEqual(probability(4, 6), { numerator: 2, denominator: 3 });
});

test("svarmuligheder indeholder altid det korrekte svar og ingen dubletter", () => {
  const options = buildOptions("42", ["42", "40", "40", "44", "46", "48"]);
  assert.equal(options.length, 4);
  assert.ok(options.includes("42"));
  assert.equal(new Set(options).size, options.length);
});

test("alle områder og niveauer genererer gyldige opgaver", () => {
  for (const area of TJEK_UP_AREAS) {
    for (const level of [1, 2, 3]) {
      for (let i = 0; i < 40; i++) {
        const exercise = generateTjekUpExercise(area, level);
        assert.equal(exercise.area, area);
        assert.equal(exercise.level, level);
        assert.ok(exercise.prompt.length > 10, `tom opgavetekst i ${area}/${level}`);
        assert.ok(
          exercise.options.includes(exercise.correctOption),
          `svaret mangler blandt mulighederne i ${area}/${level}`,
        );
        assert.equal(
          new Set(exercise.options).size,
          exercise.options.length,
          `dubletter blandt svarmulighederne i ${area}/${level}`,
        );
        assert.ok(exercise.options.length >= 3, `for få svarmuligheder i ${area}/${level}`);
        assert.ok(exercise.steps.length >= 2, `for få forklaringstrin i ${area}/${level}`);
        assert.ok(exercise.hint.length > 5, `manglende hint i ${area}/${level}`);
        assert.ok(
          !JSON.stringify(exercise).includes("NaN"),
          `NaN i opgave fra ${area}/${level}: ${exercise.prompt}`,
        );
        assert.ok(
          !JSON.stringify(exercise).includes("undefined"),
          `undefined i opgave fra ${area}/${level}: ${exercise.prompt}`,
        );
      }
    }
  }
});
