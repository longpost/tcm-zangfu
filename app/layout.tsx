import type { Metadata } from "next";
import "./globals.css";
import AppShell from "./shell";

export const metadata: Metadata = {
  title: "中医脏腑科普 | Zang-Fu Explorer",
  description: "面向大众的中医脏腑系统科普：用人话解释中医思路（非诊断）。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans" suppressHydrationWarning>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
