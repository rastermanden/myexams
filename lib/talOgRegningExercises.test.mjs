import test from "node:test";
import assert from "node:assert/strict";
import {
  addFractions,
  applyPercentDecrease,
  applyPercentGrowth,
  divideFractions,
  evaluateOrderExpression,
  gcd,
  multiplyFractions,
  percentOf,
  primeFactors,
  simplifyFraction,
  subtractFractions,
  toBinary,
} from "./talOgRegningExercises.ts";

test("gcd og forkortning virker korrekt", () => {
  assert.equal(gcd(24, 18), 6);
  assert.deepEqual(simplifyFraction({ numerator: 12, denominator: 18 }), {
    numerator: 2,
    denominator: 3,
  });
});

test("brøkregning giver korrekte resultater", () => {
  assert.deepEqual(
    addFractions({ numerator: 1, denominator: 4 }, { numerator: 1, denominator: 2 }),
    { numerator: 3, denominator: 4 },
  );
  assert.deepEqual(
    subtractFractions({ numerator: 5, denominator: 6 }, { numerator: 1, denominator: 3 }),
    { numerator: 1, denominator: 2 },
  );
  assert.deepEqual(
    multiplyFractions({ numerator: 2, denominator: 3 }, { numerator: 9, denominator: 10 }),
    { numerator: 3, denominator: 5 },
  );
  assert.deepEqual(
    divideFractions({ numerator: 3, denominator: 4 }, { numerator: 2, denominator: 5 }),
    { numerator: 15, denominator: 8 },
  );
});

test("procentregning er korrekt", () => {
  assert.equal(percentOf(250, 20), 50);
  assert.equal(applyPercentGrowth(200, 15), 230);
  assert.equal(applyPercentDecrease(200, 15), 170);
});

test("regnehierarki, primtal og binær virker", () => {
  assert.equal(evaluateOrderExpression(4, 3, 2, 5), 5);
  assert.deepEqual(primeFactors(84), [2, 2, 3, 7]);
  assert.equal(toBinary(10), "1010");
});
