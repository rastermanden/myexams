"use client";

import { BASE_PATH } from "./basePath";

type Outcome = "accepted" | "dismissed";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: Outcome; platform: string }>;
};

export type Platform = "ios" | "android" | "desktop";

export type Snapshot = {
  canPrompt: boolean;
  installed: boolean;
  platform: Platform;
  iosSafari: boolean;
};

type SafariNavigator = Navigator & { standalone?: boolean };

let pending: BeforeInstallPromptEvent | null = null;
let installed = false;
let platform: Platform = "desktop";
let iosSafari = false;
let snapshot: Snapshot = {
  canPrompt: false,
  installed: false,
  platform: "desktop",
  iosSafari: false,
};
const listeners = new Set<() => void>();
let initialized = false;

function refresh() {
  snapshot = { canPrompt: pending !== null, installed, platform, iosSafari };
  for (const listener of listeners) listener();
}

function detectAlreadyInstalled(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia?.("(display-mode: standalone)").matches) return true;
  const nav = window.navigator as SafariNavigator;
  return nav.standalone === true;
}

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/Android/.test(ua)) return "android";
  return "desktop";
}

function detectIosSafari(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const isIos = /iPad|iPhone|iPod/.test(ua);
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
  return isIos && isSafari;
}

function ensureInit() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  installed = detectAlreadyInstalled();
  platform = detectPlatform();
  iosSafari = detectIosSafari();
  snapshot = { canPrompt: false, installed, platform, iosSafari };
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    pending = event as BeforeInstallPromptEvent;
    refresh();
  });
  window.addEventListener("appinstalled", () => {
    pending = null;
    installed = true;
    refresh();
  });
  window.matchMedia?.("(display-mode: standalone)").addEventListener?.(
    "change",
    (e) => {
      if (e.matches && !installed) {
        installed = true;
        refresh();
      }
    },
  );
}

ensureInit();

export function getSnapshot(): Snapshot {
  return snapshot;
}

export const initialSnapshot: Snapshot = {
  canPrompt: false,
  installed: false,
  platform: "desktop",
  iosSafari: false,
};

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export async function promptInstall(): Promise<Outcome | "unavailable"> {
  if (!pending) return "unavailable";
  const event = pending;
  try {
    await event.prompt();
    const choice = await event.userChoice;
    if (choice.outcome === "accepted") {
      pending = null;
      installed = true;
    } else {
      pending = null;
    }
    refresh();
    return choice.outcome;
  } catch {
    return "unavailable";
  }
}

export function registerServiceWorker(): void {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;
  if (window.location.protocol !== "https:" && window.location.hostname !== "localhost") return;
  const swUrl = `${BASE_PATH}/sw.js`;
  const scope = `${BASE_PATH}/`;
  navigator.serviceWorker.register(swUrl, { scope }).catch(() => {
    // Best-effort: ignore registration failures (e.g. dev without HTTPS).
  });
}
