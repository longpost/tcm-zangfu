"use client";

import React, { useEffect } from "react";
import { useLang } from "./lang";

/**
 * Applies theme variables based on ?style=... or stored preference.
 *
 * Supported:
 * - auto: use system (default variables)
 * - meridian: match your other drwan apps (blue/purple gradients)
 * - classic: simple ink style
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { style } = useLang();

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = style || "auto";
  }, [style]);

  return <>{children}</>;
}
