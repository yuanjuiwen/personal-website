import type { Metadata } from "next"
import { Noto_Sans_TC, Source_Sans_3 } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { site } from "@/lib/site"
import "./globals.css"

// 人文主義無襯線字體：拉丁字母用 Source Sans 3，中文用 Noto Sans TC
const latin = Source_Sans_3({
  variable: "--font-latin",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const cjk = Noto_Sans_TC({
  variable: "--font-cjk",
  weight: ["400", "500"],
  preload: false, // 中文字體依頁面用到的字分段載入
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.role}`,
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: site.url,
    type: "website",
    locale: "zh_TW",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant-TW"
      className={`${latin.variable} ${cjk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="bg-card text-foreground shadow-raised sr-only rounded-md px-3 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
          >
            跳到主要內容
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
