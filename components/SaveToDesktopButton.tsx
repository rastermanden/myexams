"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import {
  getSnapshot,
  initialSnapshot,
  promptInstall,
  subscribe,
  type Platform,
} from "@/lib/pwaInstall";

type Props = {
  topicTitle: string;
};

type UiState = "idle" | "prompting" | "installed" | "dismissed" | "help";

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

function ShareIcon({ className }: { className?: string }) {
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
      <path d="M12 3v12" />
      <path d="M8 7l4-4 4 4" />
      <rect x="4" y="11" width="16" height="10" rx="2" />
    </svg>
  );
}

function PlusSquareIcon({ className }: { className?: string }) {
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
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="5.5" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="18.5" r="1.5" />
    </svg>
  );
}

function platformInstructions(platform: Platform, ios: boolean): {
  steps: { icon: React.ReactNode; text: string }[];
  intro: string;
} {
  if (platform === "ios" || ios) {
    return {
      intro: "På iPhone og iPad i Safari:",
      steps: [
        {
          icon: <ShareIcon className="h-4 w-4" />,
          text: "Tryk på Del-knappen i værktøjslinjen.",
        },
        {
          icon: <PlusSquareIcon className="h-4 w-4" />,
          text: "Vælg “Føj til hjemmeskærm”.",
        },
      ],
    };
  }
  if (platform === "android") {
    return {
      intro: "På Android i Chrome eller Edge:",
      steps: [
        {
          icon: <MenuIcon className="h-4 w-4" />,
          text: "Åbn browserens menu (tre prikker).",
        },
        {
          icon: <PlusSquareIcon className="h-4 w-4" />,
          text: "Vælg “Installer app” eller “Tilføj til startskærm”.",
        },
      ],
    };
  }
  return {
    intro: "På computeren i Chrome, Edge eller Brave:",
    steps: [
      {
        icon: <MonitorDownloadIcon className="h-4 w-4" />,
        text: "Klik på install-ikonet i adresselinjen.",
      },
      {
        icon: <PlusSquareIcon className="h-4 w-4" />,
        text: "Eller åbn menuen og vælg “Installer myexams”.",
      },
    ],
  };
}

export default function SaveToDesktopButton({ topicTitle }: Props) {
  const { canPrompt, installed, platform, iosSafari } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => initialSnapshot,
  );
  const [uiState, setUiState] = useState<UiState>("idle");

  const handleClick = useCallback(async () => {
    if (canPrompt) {
      setUiState("prompting");
      const outcome = await promptInstall();
      if (outcome === "accepted") {
        setUiState("installed");
      } else if (outcome === "dismissed") {
        setUiState("dismissed");
        window.setTimeout(() => setUiState("help"), 1600);
      } else {
        setUiState("help");
      }
      return;
    }
    setUiState((prev) => (prev === "help" ? "idle" : "help"));
  }, [canPrompt]);

  if (installed) return null;

  const showingHelp = uiState === "help" || (!canPrompt && uiState !== "idle");
  const instructions = platformInstructions(platform, iosSafari);

  const label =
    uiState === "prompting"
      ? "Et øjeblik…"
      : uiState === "dismissed"
        ? "Måske senere"
        : canPrompt
          ? "Installer app"
          : "Vis hvordan";

  const tone =
    uiState === "dismissed"
      ? "from-amber-500 to-orange-600"
      : "from-indigo-500 to-violet-600";

  const restShadow =
    uiState === "dismissed"
      ? "0 6px 0 0 rgba(180,83,9,0.55), 0 10px 24px -8px rgba(245,158,11,0.55), inset 0 1px 0 0 rgba(255,255,255,0.28)"
      : "0 6px 0 0 rgba(67,56,202,0.55), 0 10px 24px -8px rgba(99,102,241,0.6), inset 0 1px 0 0 rgba(255,255,255,0.28)";

  return (
    <aside
      aria-labelledby="install-app-heading"
      className="mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 dark:border-zinc-800 dark:from-indigo-950/40 dark:via-zinc-900 dark:to-violet-950/40 sm:p-8"
    >
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-md">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
            Gem til skrivebord
          </p>
          <h2
            id="install-app-heading"
            className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl"
          >
            Installer myexams som app
          </h2>
          <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-300 sm:text-base">
            Få et ikon på skrivebordet eller hjemmeskærmen — så åbner du
            øvelserne med ét tryk, helt uden browser-faner.
          </p>
        </div>

        <button
          type="button"
          onClick={handleClick}
          disabled={uiState === "prompting"}
          aria-expanded={showingHelp}
          aria-label={
            canPrompt
              ? `Installer myexams som app (${topicTitle})`
              : "Vis hvordan du gemmer myexams til skrivebordet"
          }
          className={`group relative inline-flex select-none items-center gap-3 rounded-2xl bg-gradient-to-br ${tone} px-6 py-3.5 text-base font-semibold text-white outline-none transition-[transform,box-shadow,filter] duration-150 ease-out hover:brightness-[1.08] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-[3px] active:[box-shadow:0_3px_0_0_rgba(67,56,202,0.55),0_4px_12px_-6px_rgba(99,102,241,0.55),inset_0_1px_0_0_rgba(255,255,255,0.22)] disabled:cursor-wait disabled:opacity-90 motion-reduce:transition-none motion-reduce:active:translate-y-0 dark:focus-visible:ring-offset-zinc-900`}
          style={{ boxShadow: restShadow }}
        >
          <span
            className="grid h-6 w-6 shrink-0 place-items-center"
            aria-hidden="true"
          >
            {uiState === "dismissed" ? (
              <CheckIcon className="h-6 w-6" />
            ) : (
              <MonitorDownloadIcon className="h-6 w-6 transition-transform duration-200 group-hover:-translate-y-px" />
            )}
          </span>
          <span aria-live="polite">{label}</span>
        </button>
      </div>

      {showingHelp && (
        <div
          role="region"
          aria-label="Sådan installerer du myexams"
          className="mt-6 rounded-2xl border border-indigo-100 bg-white/70 p-4 backdrop-blur-sm dark:border-indigo-900/60 dark:bg-zinc-900/60 sm:p-5"
        >
          <p className="mb-3 text-sm font-medium text-zinc-700 dark:text-zinc-200">
            {instructions.intro}
          </p>
          <ol className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            {instructions.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  {step.icon}
                </span>
                <span>
                  <span className="font-semibold text-zinc-700 dark:text-zinc-200">
                    {i + 1}.
                  </span>{" "}
                  {step.text}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </aside>
  );
}
