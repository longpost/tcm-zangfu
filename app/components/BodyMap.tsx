import React from "react";
import ParamLink from "./ParamLink";

type Lang = "zh" | "en";

export default function BodyMap({ lang }: { lang: Lang }) {
  // simple internal map anchors; labels optional
  const label = (zh: string, en: string) => (lang === "en" ? en : zh);

  return (
    <div className="bodyMap">
      <svg
        viewBox="0 0 300 520"
        role="img"
        aria-label={label("人体示意图（可点击）", "Body diagram (clickable)")}
        className="bodySvg"
      >
        {/* body silhouette */}
        <path
          d="M150 35c25 0 45 20 45 45s-20 45-45 45-45-20-45-45 20-45 45-45zm-65 135c3-20 22-38 45-45l20-6c10-3 20-3 30 0l20 6c23 7 42 25 45 45l8 60c2 15-9 28-24 28h-20l6 180c1 17-12 32-30 32h-20c-9 0-17-8-17-17V330h-6v153c0 9-8 17-17 17h-20c-18 0-31-15-30-32l6-180h-20c-15 0-26-13-24-28l8-60z"
          className="bodyFill"
        />

        {/* clickable organ hotspots */}
        <g>
          <Hotspot
            x={140}
            y={170}
            w={20}
            h={20}
            href="/organ/heart"
            title={label("心", "Heart (TCM)")}
          />
          <Hotspot
            x={115}
            y={190}
            w={26}
            h={22}
            href="/organ/liver"
            title={label("肝", "Liver (TCM)")}
          />
          <Hotspot
            x={150}
            y={205}
            w={28}
            h={18}
            href="/organ/spleen"
            title={label("脾", "Spleen (TCM)")}
          />
          <Hotspot
            x={155}
            y={175}
            w={30}
            h={18}
            href="/organ/lung"
            title={label("肺", "Lung (TCM)")}
          />
          <Hotspot
            x={145}
            y={240}
            w={26}
            h={18}
            href="/organ/kidney"
            title={label("肾", "Kidney (TCM)")}
          />
          <Hotspot
            x={160}
            y={220}
            w={34}
            h={18}
            href="/organ/stomach"
            title={label("胃", "Stomach (TCM)")}
          />
        </g>
      </svg>

      <div className="bodyLegend">
        <span>{label("点击示意图中的圆点进入对应系统。", "Click a dot to open that system.")}</span>
        <span className="bodyLegendLinks">
          <ParamLink className="pill" href="/organ/liver">
            {label("肝", "Liver")}
          </ParamLink>
          <ParamLink className="pill" href="/organ/heart">
            {label("心", "Heart")}
          </ParamLink>
          <ParamLink className="pill" href="/organ/spleen">
            {label("脾", "Spleen")}
          </ParamLink>
          <ParamLink className="pill" href="/organ/lung">
            {label("肺", "Lung")}
          </ParamLink>
          <ParamLink className="pill" href="/organ/kidney">
            {label("肾", "Kidney")}
          </ParamLink>
          <ParamLink className="pill" href="/organ/stomach">
            {label("胃", "Stomach")}
          </ParamLink>
        </span>
      </div>
    </div>
  );
}

function Hotspot({
  x,
  y,
  w,
  h,
  href,
  title,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  href: string;
  title: string;
}) {
  // svg <a> doesn't preserve query easily; use overlay link instead:
  // render a circle + transparent rect and rely on pointer-events with foreignObject?
  // Keep it simple: draw the circle only; the actual click target is handled by wrapping div overlay via ParamLink
  // We'll implement as an SVG circle with onClick navigation avoided to keep SSR-safe.
  // Instead: use <foreignObject> with HTML anchor.
  return (
    <foreignObject x={x} y={y} width={w} height={h}>
      <ParamLink href={href} className="hotspot" title={title}>
        <span aria-hidden="true" className="hotspotDot" />
        <span className="srOnly">{title}</span>
      </ParamLink>
    </foreignObject>
  );
}
