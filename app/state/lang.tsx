"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "./i18n";

type State = {
  lang: Lang;
  setLang: (l: Lang) => void;
  style: string;
  setStyle: (s: string) => void;
  disableCopy: boolean;
  setDisableCopy: (v: boolean) => void;
};

const Ctx = createContext<State | null>(null);

export function LanguageProvider({
  initial,
  children,
}: {
  initial: { lang: Lang; style: string; disableCopy: boolean };
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>(initial.lang);
  const [style, setStyle] = useState<string>(initial.style);
  const [disableCopy, setDisableCopy] = useState<boolean>(initial.disableCopy);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem("zf_lang", lang);
      localStorage.setItem("zf_style", style);
      localStorage.setItem("zf_copy", disableCopy ? "1" : "0");
    } catch {}
  }, [lang, style, disableCopy]);

  // Keep URL query in sync so links like ?lang=en work/sharable.
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      if (style && style !== "auto") url.searchParams.set("style", style);
      else {
        url.searchParams.delete("style");
        url.searchParams.delete("theme");
      }
      if (!disableCopy) url.searchParams.set("copy", "0");
      else url.searchParams.delete("copy");
      window.history.replaceState({}, "", url.toString());
    } catch {}
  }, [lang, style, disableCopy]);

  // Hydrate from localStorage if query didn’t specify (best-effort)
  useEffect(() => {
    try {
      const storedLang = localStorage.getItem("zf_lang") as Lang | null;
      const storedStyle = localStorage.getItem("zf_style");
      const storedCopy = localStorage.getItem("zf_copy");
      if (storedLang && storedLang !== lang) setLang(storedLang);
      if (storedStyle && storedStyle !== style && style === "auto") setStyle(storedStyle);
      if (storedCopy && (storedCopy === "0" || storedCopy === "1")) {
        const v = storedCopy === "1";
        if (v !== disableCopy) setDisableCopy(v);
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo<State>(
    () => ({ lang, setLang, style, setStyle, disableCopy, setDisableCopy }),
    [lang, style, disableCopy]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLang must be used inside LanguageProvider");
  return v;
}
