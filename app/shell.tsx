"use client";

import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { LanguageProvider, useLang } from "./state/lang";
import { ThemeProvider } from "./state/theme";
import ParamLink from "./components/ParamLink";
import { t } from "./state/i18n";

type Lang = "zh" | "en";
type StyleKey = "auto" | "meridian" | "classic";

function coerceLang(v: string | null): Lang {
  return v === "en" ? "en" : "zh";
}

function coerceStyle(v: string | null): StyleKey {
  if (v === "meridian" || v === "classic" || v === "auto") return v;
  return "auto";
}

function TopNav() {
  const { lang, setLang, style, setStyle } = useLang();

  return (
    <header>
      <div className="nav">
        <div className="brand">
          <span aria-hidden>🫀</span>
          <ParamLink href="/">{t(lang, "app.title")}</ParamLink>
          <span className="badge">MVP + Popular Science</span>
        </div>

        <nav className="navlinks">
          <ParamLink href="/">{t(lang, "nav.overview")}</ParamLink>
          <ParamLink href="/symptoms">{t(lang, "nav.symptoms")}</ParamLink>
          <ParamLink href="/about">{t(lang, "nav.about")}</ParamLink>
        </nav>

        <div className="navtools" role="group" aria-label="Language & theme">
          <select
            className="select"
            value={lang}
            onChange={(e) => setLang(coerceLang(e.target.value))}
            aria-label="Language"
          >
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>

          <select
            className="select"
            value={style}
            onChange={(e) => setStyle(coerceStyle(e.target.value))}
            aria-label="Theme"
            title="Theme"
          >
            <option value="auto">Auto</option>
            <option value="meridian">Meridian</option>
            <option value="classic">Classic</option>
          </select>
        </div>
      </div>
    </header>
  );
}

function AntiCopyShield() {
  const { disableCopy } = useLang();

  useEffect(() => {
    if (!disableCopy) return;

    const onCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (
        (e.ctrlKey || e.metaKey) &&
        (key === "c" || key === "x" || key === "p" || key === "s")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("copy", onCopy);
    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [disableCopy]);

  return null;
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const sp = useSearchParams();
  const queryLang = sp.get("lang");
  const queryStyle = sp.get("style") || sp.get("theme");
  const queryCopy = sp.get("copy");

  const initial = useMemo(
    (): { lang: Lang; style: StyleKey; disableCopy: boolean } => {
      const lang = coerceLang(queryLang);
      const style = coerceStyle(queryStyle);
      const disableCopy = queryCopy === "0" ? false : true;
      return { lang, style, disableCopy };
    },
    [queryLang, queryStyle, queryCopy]
  );

  return (
    <LanguageProvider initial={initial}>
      <ThemeProvider>
        <AntiCopyShield />
        <TopNav />
        <main>{children}</main>
        <footer className="siteFooter">
          <div className="footInner">
            <div>{t(initial.lang, "footer.disclaimer")}</div>
            <div className="footMeta">© {new Date().getFullYear()} drwan.com</div>
          </div>
        </footer>
      </ThemeProvider>
    </LanguageProvider>
  );
}
