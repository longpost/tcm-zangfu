"use client";

import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useMemo } from "react";
import { useSearchParams } from "next/navigation";

type Props = PropsWithChildren<
  LinkProps & {
    className?: string;
    title?: string;
  }
>;

/**
 * Link that preserves ?lang=... and ?style=... across navigation.
 */
export default function ParamLink({ href, children, ...rest }: Props) {
  const sp = useSearchParams();

  const outHref = useMemo(() => {
    const url = typeof href === "string" ? href : href.pathname || "/";
    const q = new URLSearchParams();
    const lang = sp.get("lang");
    const style = sp.get("style") || sp.get("theme");
    const copy = sp.get("copy");

    if (lang) q.set("lang", lang);
    if (style) q.set("style", style);
    if (copy) q.set("copy", copy);

    const qs = q.toString();
    return qs ? `${url}${url.includes("?") ? "&" : "?"}${qs}` : url;
  }, [href, sp]);

  return (
    <Link href={outHref} {...rest}>
      {children}
    </Link>
  );
}
