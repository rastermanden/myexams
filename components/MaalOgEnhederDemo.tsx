"use client";

import { useMemo, useState } from "react";
import {
  UNIT_DEFINITIONS,
  convertValue,
  formatNumber,
  generateContextTask,
  generateConversionTask,
  generateScaleTask,
  getCategoryLabel,
  getDecimalShift,
  isAnswerClose,
  type ContextTask,
  type ConversionTask,
  type ScaleTask,
  type UnitCategory,
} from "@/lib/maal-og-enheder";

function getUnitLabel(category: UnitCategory, unitId: string): string {
  return UNIT_DEFINITIONS[category].find((unit) => unit.id === unitId)?.label ?? unitId;
}

export default function MaalOgEnhederDemo() {
  const [category, setCategory] = useState<UnitCategory>("laengde");
  const [fromUnitId, setFromUnitId] = useState("cm");
  const [toUnitId, setToUnitId] = useState("m");
  const [inputValue, setInputValue] = useState("150");

  const [conversionTask, setConversionTask] =
    useState<ConversionTask>(generateConversionTask);
  const [conversionAnswer, setConversionAnswer] = useState("");
  const [conversionResult, setConversionResult] = useState<null | boolean>(null);

  const [scaleTask, setScaleTask] = useState<ScaleTask>(generateScaleTask);
  const [scaleAnswer, setScaleAnswer] = useState("");
  const [scaleResult, setScaleResult] = useState<null | boolean>(null);

  const [contextTask, setContextTask] = useState<ContextTask>(generateContextTask);
  const [contextAnswer, setContextAnswer] = useState("");
  const [contextResult, setContextResult] = useState<null | boolean>(null);

  const unitOptions = UNIT_DEFINITIONS[category];

  const convertedValue = useMemo(() => {
    const numericValue = Number(inputValue.replace(",", "."));
    if (!Number.isFinite(numericValue)) return null;
    return convertValue(numericValue, category, fromUnitId, toUnitId);
  }, [category, fromUnitId, inputValue, toUnitId]);

  const decimalShift = useMemo(
    () => getDecimalShift(category, fromUnitId, toUnitId),
    [category, fromUnitId, toUnitId],
  );

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Træner: mål og enheder
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Træn omregning, målestoksforhold og praktiske opgaver med dansk feedback.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Omregner med visuel feedback
          </h3>

          <label className="block text-sm text-zinc-700 dark:text-zinc-300">
            Kategori
            <select
              value={category}
              onChange={(event) => {
                const nextCategory = event.target.value as UnitCategory;
                setCategory(nextCategory);
                const nextUnits = UNIT_DEFINITIONS[nextCategory];
                setFromUnitId(nextUnits[0].id);
                setToUnitId(nextUnits[Math.min(1, nextUnits.length - 1)].id);
              }}
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            >
              {(Object.keys(UNIT_DEFINITIONS) as UnitCategory[]).map((key) => (
                <option key={key} value={key}>
                  {getCategoryLabel(key)}
                </option>
              ))}
            </select>
          </label>

          <div className="grid gap-3 sm:grid-cols-3">
            <label className="text-sm text-zinc-700 dark:text-zinc-300">
              Værdi
              <input
                type="text"
                inputMode="decimal"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              />
            </label>

            <label className="text-sm text-zinc-700 dark:text-zinc-300">
              Fra
              <select
                value={fromUnitId}
                onChange={(event) => setFromUnitId(event.target.value)}
                className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              >
                {unitOptions.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm text-zinc-700 dark:text-zinc-300">
              Til
              <select
                value={toUnitId}
                onChange={(event) => setToUnitId(event.target.value)}
                className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              >
                {unitOptions.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Resultat:{" "}
            <span className="font-semibold">
              {convertedValue === null ? "Ugyldig værdi" : formatNumber(convertedValue)}
            </span>
          </p>

          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            {decimalShift === null
              ? "Ingen ren decimal-flytning (fx temperatur eller ikke-metrisk omregning)."
              : `Decimalpunkt flyttes ${Math.abs(decimalShift)} plads(er) ${
                  decimalShift > 0 ? "mod højre" : "mod venstre"
                }.`}
          </p>
        </div>

        <div className="space-y-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Tilfældig omregningsopgave
          </h3>

          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Omregn <span className="font-semibold">{conversionTask.value}</span>{" "}
            {getUnitLabel(conversionTask.category, conversionTask.fromUnitId)} til{" "}
            {getUnitLabel(conversionTask.category, conversionTask.toUnitId)}.
          </p>

          <div className="flex flex-wrap items-end gap-2">
            <input
              type="text"
              inputMode="decimal"
              value={conversionAnswer}
              onChange={(event) => setConversionAnswer(event.target.value)}
              placeholder="Skriv dit svar"
              className="min-w-[12rem] flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            />
            <button
              type="button"
              onClick={() => {
                const numericAnswer = Number(conversionAnswer.replace(",", "."));
                setConversionResult(isAnswerClose(conversionTask.answer, numericAnswer));
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Tjek svar
            </button>
            <button
              type="button"
              onClick={() => {
                setConversionTask(generateConversionTask());
                setConversionAnswer("");
                setConversionResult(null);
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Ny opgave
            </button>
          </div>

          {conversionResult !== null && (
            <p className={`text-sm ${conversionResult ? "text-emerald-600" : "text-red-600"}`}>
              {conversionResult
                ? "Korrekt!"
                : `Ikke helt. Facit er ${formatNumber(conversionTask.answer)}.`}
            </p>
          )}
        </div>

        <div className="space-y-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Målestoksforhold (kortlæsning)
          </h3>

          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            På et kort i målestoksforhold 1:{formatNumber(scaleTask.scaleDenominator)}
            {" "}er afstanden {formatNumber(scaleTask.mapDistanceCm)} cm.
            Hvor langt er det i virkeligheden (meter)?
          </p>

          <div className="flex flex-wrap items-end gap-2">
            <input
              type="text"
              inputMode="decimal"
              value={scaleAnswer}
              onChange={(event) => setScaleAnswer(event.target.value)}
              placeholder="Meter"
              className="min-w-[10rem] flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            />
            <button
              type="button"
              onClick={() => {
                const numericAnswer = Number(scaleAnswer.replace(",", "."));
                setScaleResult(isAnswerClose(scaleTask.answerMeters, numericAnswer));
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Tjek svar
            </button>
            <button
              type="button"
              onClick={() => {
                setScaleTask(generateScaleTask());
                setScaleAnswer("");
                setScaleResult(null);
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Ny opgave
            </button>
          </div>

          {scaleResult !== null && (
            <p className={`text-sm ${scaleResult ? "text-emerald-600" : "text-red-600"}`}>
              {scaleResult
                ? "Korrekt!"
                : `Facit: ${formatNumber(scaleTask.answerMeters)} m (${formatNumber(
                    scaleTask.answerMeters / 1000,
                  )} km).`}
            </p>
          )}
        </div>

        <div className="space-y-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Praktisk kontekstopgave
          </h3>

          <p className="text-sm text-zinc-700 dark:text-zinc-300">{contextTask.prompt}</p>

          <div className="flex flex-wrap items-end gap-2">
            <input
              type="text"
              inputMode="decimal"
              value={contextAnswer}
              onChange={(event) => setContextAnswer(event.target.value)}
              placeholder={contextTask.unitLabel}
              className="min-w-[10rem] flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            />
            <button
              type="button"
              onClick={() => {
                const numericAnswer = Number(contextAnswer.replace(",", "."));
                setContextResult(isAnswerClose(contextTask.answer, numericAnswer));
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Tjek svar
            </button>
            <button
              type="button"
              onClick={() => {
                setContextTask(generateContextTask());
                setContextAnswer("");
                setContextResult(null);
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Ny opgave
            </button>
          </div>

          {contextResult !== null && (
            <p className={`text-sm ${contextResult ? "text-emerald-600" : "text-red-600"}`}>
              {contextResult
                ? "Korrekt!"
                : `Facit: ${formatNumber(contextTask.answer)} ${contextTask.unitLabel}.`}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
