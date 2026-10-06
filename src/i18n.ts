// 語言設定：網址以 /zh 和 /en 開頭
export const locales = ["zh", "en"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "zh"

// 記住訪客手動選擇的語言
export const localeCookie = "NEXT_LOCALE"

// <html lang> 與 hreflang 使用的正式語言代碼
export const htmlLang: Record<Locale, string> = {
  zh: "zh-Hant-TW",
  en: "en",
}

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)
