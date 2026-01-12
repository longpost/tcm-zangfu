import "./globals.css";
import React, { Suspense } from "react";
import AppShell from "./shell";

export const metadata = {
  title: "Zang-Fu Explorer",
  description: "Public-facing Zang-Fu education app (MVP + Popular Science).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Suspense fallback={null}>
          <AppShell>{children}</AppShell>
        </Suspense>
      </body>
    </html>
  );
}
