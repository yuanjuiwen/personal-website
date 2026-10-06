import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Noto_Sans_TC, Source_Sans_3 } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { hasLocale, htmlLang, locales } from "@/i18n"
import { content, site } from "@/lib/site"
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

// 建置時預先產生 /zh 與 /en 兩個靜態版本；其他語言代碼一律 404
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}
export const dynamicParams = false

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const c = content[lang]
  // 分頁標題中英版本都使用英文名
  const title = content.en.name

  return {
    metadataBase: new URL(site.url),
    title,
    description: c.description,
    // 告訴搜尋引擎兩種語言版本互為對應
    alternates: {
      canonical: `/${lang}`,
      languages: {
        [htmlLang.zh]: "/zh",
        [htmlLang.en]: "/en",
        "x-default": "/zh",
      },
    },
    openGraph: {
      title,
      description: c.description,
      url: `/${lang}`,
      type: "website",
      locale: lang === "zh" ? "zh_TW" : "en_US",
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html
      lang={htmlLang[lang]}
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
            {content[lang].ui.skipLink}
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
