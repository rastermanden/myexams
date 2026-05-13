"use client";

import { useEffect } from "react";
import { registerServiceWorker } from "@/lib/pwaInstall";

export default function PwaInit() {
  useEffect(() => {
    registerServiceWorker();
  }, []);
  return null;
}
