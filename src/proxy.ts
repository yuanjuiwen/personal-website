import { NextResponse, type NextRequest } from "next/server"
import {
  defaultLocale,
  hasLocale,
  localeCookie,
  locales,
  type Locale,
} from "@/i18n"

// 依序檢查：訪客手動選過的語言 → 瀏覽器偏好語言 → 預設中文
function pickLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value
  if (saved && hasLocale(saved)) return saved

  const accepted = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase())

  for (const language of accepted) {
    if (language.startsWith("zh")) return "zh"
    if (language.startsWith("en")) return "en"
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasPrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )
  if (hasPrefix) return

  const url = request.nextUrl.clone()
  url.pathname = `/${pickLocale(request)}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // 略過 Next.js 內部檔案與帶副檔名的靜態檔（圖片、favicon 等）
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
