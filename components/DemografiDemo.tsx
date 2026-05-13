"use client";

import { useMemo, useState } from "react";

type CountryKey = "dnk" | "nga" | "jpn";
type Year = 2000 | 2025 | 2050;

type AgeBand = {
  label: string;
  male: number;
  female: number;
};

type DemographySnapshot = {
  populationMillions: number;
  fertility: number;
  urbanization: number;
  lifeExpectancy: number;
  ageBands: AgeBand[];
};

type CountryData = {
  name: string;
  snapshots: Record<Year, DemographySnapshot>;
};

const YEARS: Year[] = [2000, 2025, 2050];

const DATA: Record<CountryKey, CountryData> = {
  dnk: {
    name: "Danmark",
    snapshots: {
      2000: {
        populationMillions: 5.34,
        fertility: 1.77,
        urbanization: 85,
        lifeExpectancy: 76.8,
        ageBands: [
          { label: "0-14", male: 8.8, female: 8.3 },
          { label: "15-24", male: 6.4, female: 6.1 },
          { label: "25-54", male: 20.8, female: 20.2 },
          { label: "55-64", male: 6.1, female: 6.4 },
          { label: "65+", male: 7.1, female: 9.8 },
        ],
      },
      2025: {
        populationMillions: 5.97,
        fertility: 1.55,
        urbanization: 88,
        lifeExpectancy: 81.5,
        ageBands: [
          { label: "0-14", male: 7.8, female: 7.4 },
          { label: "15-24", male: 5.6, female: 5.3 },
          { label: "25-54", male: 19.1, female: 18.7 },
          { label: "55-64", male: 7.3, female: 7.5 },
          { label: "65+", male: 9.2, female: 12.1 },
        ],
      },
      2050: {
        populationMillions: 6.13,
        fertility: 1.67,
        urbanization: 90,
        lifeExpectancy: 84,
        ageBands: [
          { label: "0-14", male: 7.4, female: 7.1 },
          { label: "15-24", male: 5.2, female: 4.9 },
          { label: "25-54", male: 17.6, female: 17.4 },
          { label: "55-64", male: 7.6, female: 7.8 },
          { label: "65+", male: 10.8, female: 14.2 },
        ],
      },
    },
  },
  nga: {
    name: "Nigeria",
    snapshots: {
      2000: {
        populationMillions: 122.9,
        fertility: 6.21,
        urbanization: 35,
        lifeExpectancy: 46.3,
        ageBands: [
          { label: "0-14", male: 22.4, female: 21.5 },
          { label: "15-24", male: 10.7, female: 10.4 },
          { label: "25-54", male: 14.2, female: 13.9 },
          { label: "55-64", male: 2.3, female: 2.4 },
          { label: "65+", male: 1, female: 1.2 },
        ],
      },
      2025: {
        populationMillions: 229.2,
        fertility: 5.05,
        urbanization: 54,
        lifeExpectancy: 55.1,
        ageBands: [
          { label: "0-14", male: 21, female: 20.1 },
          { label: "15-24", male: 10.8, female: 10.5 },
          { label: "25-54", male: 14.9, female: 14.6 },
          { label: "55-64", male: 2.8, female: 2.9 },
          { label: "65+", male: 1.1, female: 1.3 },
        ],
      },
      2050: {
        populationMillions: 377.5,
        fertility: 3.77,
        urbanization: 66,
        lifeExpectancy: 63.7,
        ageBands: [
          { label: "0-14", male: 18.2, female: 17.5 },
          { label: "15-24", male: 11.2, female: 10.9 },
          { label: "25-54", male: 17.3, female: 16.8 },
          { label: "55-64", male: 3.9, female: 4.1 },
          { label: "65+", male: 1.9, female: 2.2 },
        ],
      },
    },
  },
  jpn: {
    name: "Japan",
    snapshots: {
      2000: {
        populationMillions: 126.8,
        fertility: 1.36,
        urbanization: 79,
        lifeExpectancy: 81.1,
        ageBands: [
          { label: "0-14", male: 7.8, female: 7.4 },
          { label: "15-24", male: 6.6, female: 6.2 },
          { label: "25-54", male: 23.7, female: 22.8 },
          { label: "55-64", male: 6.1, female: 6.3 },
          { label: "65+", male: 8.5, female: 10.6 },
        ],
      },
      2025: {
        populationMillions: 123.3,
        fertility: 1.3,
        urbanization: 92,
        lifeExpectancy: 84.8,
        ageBands: [
          { label: "0-14", male: 5.8, female: 5.5 },
          { label: "15-24", male: 5.1, female: 4.8 },
          { label: "25-54", male: 18.2, female: 17.7 },
          { label: "55-64", male: 7.1, female: 7.3 },
          { label: "65+", male: 13.3, female: 15.2 },
        ],
      },
      2050: {
        populationMillions: 104.9,
        fertility: 1.45,
        urbanization: 94,
        lifeExpectancy: 87.1,
        ageBands: [
          { label: "0-14", male: 5.6, female: 5.3 },
          { label: "15-24", male: 4.7, female: 4.5 },
          { label: "25-54", male: 15.2, female: 15 },
          { label: "55-64", male: 7.3, female: 7.5 },
          { label: "65+", male: 16.5, female: 18.4 },
        ],
      },
    },
  },
};

export default function DemografiDemo() {
  const [country, setCountry] = useState<CountryKey>("dnk");
  const [year, setYear] = useState<Year>(2025);

  const selectedSnapshot = DATA[country].snapshots[year];

  const maxPyramidValue = useMemo(() => {
    return Math.max(
      ...selectedSnapshot.ageBands.flatMap((band) => [band.male, band.female]),
      1,
    );
  }, [selectedSnapshot.ageBands]);

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Interaktiv demo: befolkningspyramide og sammenligning
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Vælg land og år for at sammenligne befolkningspyramider, udvikling over tid og
        centrale demografiske indikatorer.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-zinc-700 dark:text-zinc-300">
          Land
          <select
            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-950"
            value={country}
            onChange={(event) => setCountry(event.target.value as CountryKey)}
          >
            {(Object.keys(DATA) as CountryKey[]).map((key) => (
              <option key={key} value={key}>
                {DATA[key].name}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm text-zinc-700 dark:text-zinc-300">
          År
          <select
            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-950"
            value={year}
            onChange={(event) => setYear(Number(event.target.value) as Year)}
          >
            {YEARS.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Befolkningspyramide · {DATA[country].name} ({year})
        </h3>
        <div className="mt-3 space-y-2">
          {selectedSnapshot.ageBands.map((band) => (
            <div key={band.label} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-xs">
              <div className="flex justify-end">
                <div
                  className="h-5 rounded-l bg-blue-500"
                  style={{ width: `${(band.male / maxPyramidValue) * 100}%` }}
                  title={`Mænd: ${band.male.toFixed(1)} %`}
                />
              </div>
              <span className="font-medium text-zinc-600 dark:text-zinc-300">{band.label}</span>
              <div>
                <div
                  className="h-5 rounded-r bg-pink-500"
                  style={{ width: `${(band.female / maxPyramidValue) * 100}%` }}
                  title={`Kvinder: ${band.female.toFixed(1)} %`}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-zinc-500">Venstre: mænd · højre: kvinder · andel af total befolkning</p>
      </div>

      <div className="mt-6 rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Tidslinje for befolkningsudvikling</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3 text-sm">
          {YEARS.map((value) => (
            <li key={value} className="rounded-lg bg-zinc-50 px-3 py-2 dark:bg-zinc-950">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">{value}</p>
              <p className="text-zinc-600 dark:text-zinc-300">
                {DATA[country].snapshots[value].populationMillions.toFixed(1)} mio.
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Sammenligning af lande ({year})
        </h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                <th className="py-2 pr-3">Land</th>
                <th className="py-2 pr-3">Befolkning (mio.)</th>
                <th className="py-2 pr-3">Fertilitet</th>
                <th className="py-2 pr-3">Urbanisering (%)</th>
                <th className="py-2">Levetid (år)</th>
              </tr>
            </thead>
            <tbody>
              {(Object.keys(DATA) as CountryKey[]).map((key) => {
                const snapshot = DATA[key].snapshots[year];
                return (
                  <tr key={key} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-3 font-medium text-zinc-900 dark:text-zinc-100">
                      {DATA[key].name}
                    </td>
                    <td className="py-2 pr-3">{snapshot.populationMillions.toFixed(1)}</td>
                    <td className="py-2 pr-3">{snapshot.fertility.toFixed(2)}</td>
                    <td className="py-2 pr-3">{snapshot.urbanization}</td>
                    <td className="py-2">{snapshot.lifeExpectancy.toFixed(1)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-5 text-xs text-zinc-500">
        Datagrundlag (uddrag):
        <a
          className="ml-1 underline"
          href="https://population.un.org/wpp/"
          target="_blank"
          rel="noreferrer"
        >
          FN World Population Prospects 2024
        </a>
        {" · "}
        <a
          className="underline"
          href="https://data.worldbank.org"
          target="_blank"
          rel="noreferrer"
        >
          Verdensbanken World Development Indicators
        </a>
      </p>
    </section>
  );
}
