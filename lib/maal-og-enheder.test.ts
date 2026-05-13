import test from "node:test";
import assert from "node:assert/strict";
import {
  UNIT_DEFINITIONS,
  convertValue,
  generateContextTask,
  generateConversionTask,
  generateScaleTask,
  getDecimalShift,
  isAnswerClose,
} from "./maal-og-enheder.ts";

test("convertValue converts metric and derived units correctly", () => {
  assert.equal(convertValue(150, "laengde", "cm", "m"), 1.5);
  assert.equal(convertValue(72, "hastighed", "kmh", "mps"), 20);
  assert.equal(convertValue(20, "temperatur", "C", "K"), 293.15);
  assert.equal(convertValue(293.15, "temperatur", "K", "C"), 20);
});

test("getDecimalShift returns expected movement for metric powers of ten", () => {
  assert.equal(getDecimalShift("laengde", "cm", "m"), -2);
  assert.equal(getDecimalShift("areal", "m2", "cm2"), 4);
  assert.equal(getDecimalShift("laengde", "in", "cm"), null);
  assert.equal(getDecimalShift("temperatur", "C", "K"), null);
});

test("generated conversion task is internally consistent", () => {
  const task = generateConversionTask();
  assert.notEqual(task.fromUnitId, task.toUnitId);
  assert.ok(UNIT_DEFINITIONS[task.category].some((unit) => unit.id === task.fromUnitId));
  assert.ok(UNIT_DEFINITIONS[task.category].some((unit) => unit.id === task.toUnitId));

  const recalculated = convertValue(task.value, task.category, task.fromUnitId, task.toUnitId);
  assert.ok(Math.abs(recalculated - task.answer) < 1e-9);
});

test("generated scale task uses known formula", () => {
  const task = generateScaleTask();
  assert.equal(task.answerMeters, (task.mapDistanceCm * task.scaleDenominator) / 100);
});

test("generated context task has finite numeric answer and closeness check works", () => {
  const task = generateContextTask();
  assert.ok(Number.isFinite(task.answer));
  assert.ok(isAnswerClose(task.answer, task.answer));
  assert.equal(isAnswerClose(task.answer, Number.NaN), false);
});
