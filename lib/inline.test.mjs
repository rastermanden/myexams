import test from "node:test";
import assert from "node:assert/strict";
import { parseInline } from "./inline.ts";

test("almindelig tekst bliver ét token", () => {
  assert.deepEqual(parseInline("Ved division finder man ud af"), [
    { type: "text", value: "Ved division finder man ud af" },
  ]);
});

test("fed, kursiv og matematik genkendes", () => {
  assert.deepEqual(parseInline("**fed** og *kursiv* og $x = 4$"), [
    { type: "bold", value: "fed" },
    { type: "text", value: " og " },
    { type: "italic", value: "kursiv" },
    { type: "text", value: " og " },
    { type: "math", value: "x = 4" },
  ]);
});

test("dobbeltstjerne læses som fed, ikke som to kursiver", () => {
  assert.deepEqual(parseInline("**alle led**"), [
    { type: "bold", value: "alle led" },
  ]);
});

test("uafsluttet tegn bliver stående som tekst", () => {
  assert.deepEqual(parseInline("5 * 3 er 15"), [
    { type: "text", value: "5 * 3 er 15" },
  ]);
  assert.deepEqual(parseInline("koster 5$ i alt"), [
    { type: "text", value: "koster 5$ i alt" },
  ]);
});

test("tomt markup-par er ikke markup", () => {
  assert.deepEqual(parseInline("a ** b"), [{ type: "text", value: "a ** b" }]);
});

test("matematik midt i en sætning deler teksten korrekt", () => {
  assert.deepEqual(parseInline("Når $-4$ flyttes over, bliver det til $+4$."), [
    { type: "text", value: "Når " },
    { type: "math", value: "-4" },
    { type: "text", value: " flyttes over, bliver det til " },
    { type: "math", value: "+4" },
    { type: "text", value: "." },
  ]);
});

test("tom streng giver ingen tokens", () => {
  assert.deepEqual(parseInline(""), []);
});
