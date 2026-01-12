import Link from "next/link";
import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

type ParamLinkProps = {
  href: string;
  className?: string;
  title?: string;
  children?: ReactNode;

  // ✅ allow inline styles
  style?: CSSProperties;

  // ✅ common optional passthroughs
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  prefetch?: boolean;
};

function getFirst(v: string | string[] | undefined): string | undefined {
  if (!v) return undefined;
  return Array.isArray(v) ? v[0] : v;
}

export default function ParamLink({
  href,
  className,
  title,
  children,
  style,
  target,
  rel,
  onClick,
  prefetch,
}: ParamLinkProps) {
  // Read current query params on client, but avoid SSR mismatch:
  // If window is undefined (SSR), just return the plain href.
  let finalHref = href;

  if (typeof window !== "undefined") {
    const sp = new URLSearchParams(window.location.search);

    const lang = getFirst(sp.get("lang") || undefined);
    const styleParam = getFirst(sp.get("style") || sp.get("theme") || undefined);
    const copy = getFirst(sp.get("copy") || undefined);

    // Merge into href (preserve existing query)
    const [path, queryStr] = href.split("?");
    const out = new URLSearchParams(queryStr || "");

    if (lang && !out.has("lang")) out.set("lang", lang);
    if (styleParam && !out.has("style")) out.set("style", styleParam);
    if (copy && !out.has("copy")) out.set("copy", copy);

    const q = out.toString();
    finalHref = q ? `${path}?${q}` : path;
  }

  // If opening in new tab, set rel safely unless provided
  const safeRel =
    target === "_blank" ? rel || "noopener noreferrer" : rel;

  return (
    <Link
      href={finalHref}
      className={className}
      title={title}
      style={style}
      target={target}
      rel={safeRel}
      onClick={onClick}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
}

