import test from "node:test";
import assert from "node:assert/strict";
import { toTex } from "./mathText.ts";

test("regnestykker oversættes med rigtige operatorer", () => {
  assert.equal(toTex("34 × 20 = 680"), "34 \\times 20 = 680");
  assert.equal(toTex("640 : 8 = 80"), "640 \\mathbin{:} 8 = 80");
});

test("variabler står som enkelte bogstaver", () => {
  assert.equal(
    toTex("V = l × b × h"),
    "V = l \\times b \\times h",
  );
});

test("enheder efter et tal sættes oprejst", () => {
  assert.equal(toTex("3,7 cm"), "3{,}7\\,\\text{cm}");
  assert.equal(toTex("54 cm²"), "54\\,\\text{cm}^2");
});

test("danske tal beholder tusindtalspunktum og decimalkomma", () => {
  assert.equal(toTex("1.000.000"), "1.000.000");
  assert.equal(toTex("0,49"), "0{,}49");
});

test("brøkstreger og procent bevares som skrevet", () => {
  assert.equal(toTex("P = 2/4 = 50 %"), "P = 2 / 4 = 50 \\%");
});

test("bindeordet og får luft omkring sig", () => {
  assert.equal(toTex("7 og 10"), "7\\ \\text{og}\\ 10");
});

test("brødtekst røres ikke", () => {
  assert.equal(toTex("Enere: 8 + 5 = 13 → skriv 3, 1 i mente"), null);
  assert.equal(toTex("Grundfladen først: 60 × 40 = 2.400 cm²"), null);
  assert.equal(toTex("Læg de to tal sammen med den skriftlige algoritme."), null);
});

test("ukendte tegn afviser hele udtrykket", () => {
  assert.equal(toTex("5 ★ 3"), null);
  assert.equal(toTex("a_1 + a_2"), null);
});

test("tomt og tegn-kun input giver null", () => {
  assert.equal(toTex(""), null);
  assert.equal(toTex("   "), null);
  assert.equal(toTex("= ="), null);
});

test("et ord efter et andet ord er sprog, ikke matematik", () => {
  // "I liter:" er en overskrift på trinnet — ikke en variabel gange en enhed.
  assert.equal(toTex("I liter: 84.000 : 1.000 = 84 liter"), null);
  assert.equal(toTex("V i liter"), null);
});

test("enhed efter et tal er stadig i orden", () => {
  assert.equal(toTex("84 liter"), "84\\,\\text{liter}");
  assert.equal(toTex("V = 84.000 cm³ = 84 liter"), "V = 84.000\\,\\text{cm}^3 = 84\\,\\text{liter}");
});
