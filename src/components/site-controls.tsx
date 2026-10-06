"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"
import { localeCookie, type Locale } from "@/i18n"

const controlClass =
  "inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm font-medium text-muted-foreground transition-colors duration-150 ease-standard hover:bg-accent hover:text-foreground"

type Props = {
  locale: Locale
  labels: { switchLanguage: string; toggleTheme: string }
}

// 右上角的兩個控制項：語言切換、深淺色切換
export function SiteControls({ locale, labels }: Props) {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()

  const target: Locale = locale === "zh" ? "en" : "zh"
  // 換掉網址開頭的語言，保留後面的路徑（例如 /zh/work/a → /en/work/a）
  const targetPath = pathname.replace(/^\/(zh|en)(?=\/|$)/, `/${target}`)

  return (
    <div className="flex items-center gap-1">
      <Link
        href={targetPath}
        hrefLang={target === "zh" ? "zh-Hant-TW" : "en"}
        aria-label={labels.switchLanguage}
        title={labels.switchLanguage}
        className={controlClass}
        onClick={() => {
          document.cookie = `${localeCookie}=${target}; path=/; max-age=31536000; SameSite=Lax`
        }}
      >
        {target === "en" ? "EN" : "中"}
      </Link>

      <button
        type="button"
        aria-label={labels.toggleTheme}
        title={labels.toggleTheme}
        className={controlClass}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {/* 用 CSS 決定顯示哪個圖示，避免頁面載入時閃一下 */}
        <MoonIcon className="size-4 dark:hidden" aria-hidden />
        <SunIcon className="hidden size-4 dark:block" aria-hidden />
      </button>
    </div>
  )
}
