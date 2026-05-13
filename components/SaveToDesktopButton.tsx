"use client";

import { useCallback, useState } from "react";
import type { Topic } from "@/lib/types";

type Props = {
  topic: Topic;
  subjectTitle: string;
  categoryTitle: string;
};

type SaveState = "idle" | "saved" | "error";

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function esc(input: string): string {
  return input.replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch] ?? ch);
}

function buildOfflineHtml(
  topic: Topic,
  subjectTitle: string,
  categoryTitle: string,
): string {
  const savedOn = new Date().toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sectionsHtml = topic.sections
    .map(
      (s) => `
      <section class="section">
        <h2>${esc(s.heading)}</h2>
        <p>${esc(s.body)}</p>
        ${
          s.image
            ? `<figure>
                <img src="${esc(s.image.url)}" alt="${esc(s.image.alt)}" loading="lazy" />
                <figcaption>${esc(s.image.credit)} · ${esc(s.image.license)}</figcaption>
              </figure>`
            : ""
        }
      </section>`,
    )
    .join("\n");

  const questionsHtml = topic.quiz
    .map(
      (q, i) => `
      <li class="question">
        <p class="q-prompt"><span class="q-num">${i + 1}</span>${esc(q.prompt)}</p>
        <ol class="q-options">
          ${q.options
            .map(
              (opt) => `
              <li class="${opt.id === q.correctOptionId ? "correct" : ""}">
                <span>${esc(opt.text)}</span>
                ${
                  opt.id === q.correctOptionId
                    ? '<span class="tag">Korrekt</span>'
                    : ""
                }
              </li>`,
            )
            .join("")}
        </ol>
        <p class="explanation"><strong>Forklaring.</strong> ${esc(q.explanation)}</p>
      </li>`,
    )
    .join("\n");

  return `<!doctype html>
<html lang="da">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${esc(topic.title)} · myexams</title>
<meta name="description" content="${esc(topic.summary)}" />
<style>
  :root {
    --fg: #18181b;
    --muted: #52525b;
    --line: #e4e4e7;
    --accent: #4f46e5;
    --bg: #fafafa;
    --card: #ffffff;
    --correct-bg: #f0fdf4;
    --correct-line: #16a34a;
    --tag-bg: #dcfce7;
    --tag-fg: #15803d;
    --exp-bg: #f4f4f5;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    color: var(--fg);
    background: var(--bg);
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  .container { max-width: 760px; margin: 0 auto; padding: 2.5rem 1.25rem 4rem; }
  .hero { border-bottom: 1px solid var(--line); padding-bottom: 1.5rem; margin-bottom: 2rem; }
  .crumbs {
    font-size: .72rem; letter-spacing: .07em; text-transform: uppercase;
    color: var(--muted); margin: 0 0 .6rem; font-weight: 600;
  }
  h1 { font-size: 2.25rem; line-height: 1.15; margin: 0 0 .65rem; letter-spacing: -.015em; }
  .summary { font-size: 1.125rem; color: var(--muted); margin: 0; }
  .section { padding: 1.75rem 0; border-top: 1px solid var(--line); }
  .section:first-of-type { border-top: none; padding-top: .25rem; }
  .section h2 { font-size: 1.5rem; margin: 0 0 .75rem; letter-spacing: -.005em; }
  .section p { margin: 0 0 1rem; }
  figure { margin: 1rem 0 0; }
  figure img { max-width: 100%; height: auto; border-radius: 10px; border: 1px solid var(--line); display: block; }
  figcaption { font-size: .72rem; color: var(--muted); margin-top: .4rem; }
  .quiz {
    margin-top: 2.5rem; padding: 1.5rem;
    background: var(--card); border: 1px solid var(--line); border-radius: 16px;
  }
  .quiz h2 { margin-top: 0; font-size: 1.5rem; }
  .questions { list-style: none; margin: 0; padding: 0; }
  .question { padding: 1.25rem 0; border-top: 1px solid var(--line); }
  .question:first-child { border-top: none; padding-top: 0; }
  .q-prompt { margin: 0 0 .75rem; font-size: 1rem; display: flex; gap: .6rem; align-items: baseline; }
  .q-num {
    flex: 0 0 auto; min-width: 1.5rem; height: 1.5rem; padding: 0 .4rem;
    border-radius: 999px; background: var(--accent); color: #fff;
    font-size: .75rem; font-weight: 700; display: inline-flex; align-items: center; justify-content: center;
  }
  .q-options { list-style: none; padding: 0; margin: 0 0 .75rem; display: flex; flex-direction: column; gap: .4rem; }
  .q-options li {
    padding: .55rem .8rem; border: 1px solid var(--line); border-radius: 10px; background: #fff;
    display: flex; justify-content: space-between; gap: .75rem; align-items: center;
  }
  .q-options li.correct { border-color: var(--correct-line); background: var(--correct-bg); }
  .tag {
    flex: 0 0 auto; font-size: .65rem; font-weight: 700;
    color: var(--tag-fg); background: var(--tag-bg);
    padding: .15rem .5rem; border-radius: 999px; letter-spacing: .05em; text-transform: uppercase;
  }
  .explanation {
    font-size: .9rem; color: var(--muted); background: var(--exp-bg);
    border-radius: 10px; padding: .7rem .9rem; margin: 0; line-height: 1.55;
  }
  .footer {
    margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--line);
    font-size: .78rem; color: var(--muted);
    display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
  }
  .badge {
    display: inline-flex; align-items: center; gap: .4rem;
    font-weight: 600; color: var(--accent);
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --fg: #f4f4f5; --muted: #a1a1aa; --line: #27272a;
      --bg: #09090b; --card: #18181b; --accent: #a5b4fc;
      --correct-bg: #052e1c; --correct-line: #22c55e;
      --tag-bg: #14532d; --tag-fg: #bbf7d0; --exp-bg: #1c1c20;
    }
    .q-options li { background: #1a1a1f; }
  }
  @media print {
    body { background: #fff; color: #000; }
    .container { max-width: 100%; padding: 0 .5in; }
    .quiz { border: none; padding: 0; background: transparent; }
    .question { break-inside: avoid; }
    figure img { max-width: 70%; }
  }
</style>
</head>
<body>
  <main class="container">
    <header class="hero">
      <p class="crumbs">myexams · ${esc(subjectTitle)} · ${esc(categoryTitle)}</p>
      <h1>${esc(topic.title)}</h1>
      <p class="summary">${esc(topic.summary)}</p>
    </header>
    ${sectionsHtml}
    <section class="quiz">
      <h2>Quiz · ${topic.quiz.length} spørgsmål</h2>
      <ol class="questions">
        ${questionsHtml}
      </ol>
    </section>
    <footer class="footer">
      <span class="badge">📖 myexams · gemt ${esc(savedOn)}</span>
      <span>Eksamenstræning på gymnasieniveau</span>
    </footer>
  </main>
</body>
</html>`;
}

function MonitorDownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
      <path d="M8.5 20h7" />
      <path d="M12 16.5v3.5" />
      <path d="M12 7v5.25" />
      <path d="M9.25 9.5 12 12.25l2.75-2.75" />
      <path d="M7.5 14.25h9" strokeOpacity="0.35" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12.5 10 17.5 19 7.5" />
    </svg>
  );
}

const IDLE_LABEL = "Gem til skrivebord";
const SAVED_LABEL = "Gemt på dit skrivebord";
const ERROR_LABEL = "Prøv igen";

export default function SaveToDesktopButton({
  topic,
  subjectTitle,
  categoryTitle,
}: Props) {
  const [state, setState] = useState<SaveState>("idle");

  const handleSave = useCallback(() => {
    try {
      const html = buildOfflineHtml(topic, subjectTitle, categoryTitle);
      const blob = new Blob([html], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `myexams-${topic.slug}.html`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setState("saved");
    } catch {
      setState("error");
    }
    window.setTimeout(() => setState("idle"), 2400);
  }, [topic, subjectTitle, categoryTitle]);

  const label =
    state === "saved" ? SAVED_LABEL : state === "error" ? ERROR_LABEL : IDLE_LABEL;

  const tone =
    state === "saved"
      ? "from-emerald-500 to-green-600"
      : state === "error"
        ? "from-rose-500 to-red-600"
        : "from-indigo-500 to-violet-600";

  const restShadow =
    state === "saved"
      ? "0 6px 0 0 rgba(4,120,87,0.55), 0 10px 24px -8px rgba(16,185,129,0.55), inset 0 1px 0 0 rgba(255,255,255,0.28)"
      : state === "error"
        ? "0 6px 0 0 rgba(159,18,57,0.55), 0 10px 24px -8px rgba(244,63,94,0.55), inset 0 1px 0 0 rgba(255,255,255,0.28)"
        : "0 6px 0 0 rgba(67,56,202,0.55), 0 10px 24px -8px rgba(99,102,241,0.6), inset 0 1px 0 0 rgba(255,255,255,0.28)";

  return (
    <aside
      aria-labelledby="save-desktop-heading"
      className="mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 dark:border-zinc-800 dark:from-indigo-950/40 dark:via-zinc-900 dark:to-violet-950/40 sm:p-8"
    >
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-md">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
            Studér offline
          </p>
          <h2
            id="save-desktop-heading"
            className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl"
          >
            Gem hele emnet til dit skrivebord
          </h2>
          <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-300 sm:text-base">
            Hent en pæn HTML-fil med al teksten og quizzen — inklusive facit og
            forklaringer. Perfekt til repetition uden net.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          aria-label={
            state === "saved"
              ? `${SAVED_LABEL} (${topic.title})`
              : `Gem "${topic.title}" som HTML-fil`
          }
          className={`group relative inline-flex select-none items-center gap-3 rounded-2xl bg-gradient-to-br ${tone} px-6 py-3.5 text-base font-semibold text-white outline-none transition-[transform,box-shadow,filter] duration-150 ease-out hover:brightness-[1.08] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-[3px] active:[box-shadow:0_3px_0_0_rgba(67,56,202,0.55),0_4px_12px_-6px_rgba(99,102,241,0.55),inset_0_1px_0_0_rgba(255,255,255,0.22)] motion-reduce:transition-none motion-reduce:active:translate-y-0 dark:focus-visible:ring-offset-zinc-900`}
          style={{ boxShadow: restShadow }}
        >
          <span
            className="grid h-6 w-6 shrink-0 place-items-center"
            aria-hidden="true"
          >
            {state === "saved" ? (
              <CheckIcon className="h-6 w-6" />
            ) : (
              <MonitorDownloadIcon className="h-6 w-6 transition-transform duration-200 group-hover:-translate-y-px" />
            )}
          </span>
          <span aria-live="polite">{label}</span>
        </button>
      </div>
    </aside>
  );
}
