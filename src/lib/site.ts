// 網站的所有文字內容都集中在這個檔案，中英文各一份。
// 換成你自己的資料時，只需要改這裡，不用碰版面程式。

import type { Locale } from "@/i18n"

export type Project = {
  title: string
  description: string
  year: string
  href?: string // 案例內頁完成後填入，例如 "/work/bank-app"（不含語言前綴）
}

export type Experience = {
  period: string
  role: string
  organization: string
}

// 兩種語言共用的資料
export const site = {
  url: "https://yuanjuiwen.vercel.app",
  email: "hello@example.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/yuanjuiwen" },
  ],
}

type Content = {
  name: string
  role: string
  description: string
  intro: string[]
  projects: Project[]
  experience: Experience[]
  contact: { before: string; after: string; button: string }
  ui: {
    skipLink: string
    introLabel: string
    projectsTitle: string
    experienceTitle: string
    contactTitle: string
    listSeparator: string
    switchLanguage: string
    toggleTheme: string
  }
}

export const content: Record<Locale, Content> = {
  zh: {
    name: "文遠睿",
    role: "產品設計師",
    description: "產品設計師的個人作品集",
    intro: [
      "我設計讓人用起來不費力的數位產品，專注在介面細節、互動回饋，以及把複雜流程變得簡單。",
      "目前在台北，對設計系統、動態設計和前端實作特別有興趣。",
    ],
    projects: [
      {
        title: "專案名稱一",
        description: "一句話說明你解決了什麼問題、帶來什麼成果。",
        year: "2026",
      },
      {
        title: "專案名稱二",
        description: "一句話說明你解決了什麼問題、帶來什麼成果。",
        year: "2025",
      },
      {
        title: "專案名稱三",
        description: "一句話說明你解決了什麼問題、帶來什麼成果。",
        year: "2025",
      },
    ],
    experience: [
      { period: "2024 — 現在", role: "產品設計師", organization: "公司名稱" },
      { period: "2022 — 2024", role: "UI 設計師", organization: "公司名稱" },
    ],
    contact: {
      before: "有合作或職缺想聊聊，歡迎寄信給我，通常會在兩天內回覆。也可以在 ",
      after: " 找到我。",
      button: "寄信給我",
    },
    ui: {
      skipLink: "跳到主要內容",
      introLabel: "自我介紹",
      projectsTitle: "精選作品",
      experienceTitle: "經歷",
      contactTitle: "聯絡",
      listSeparator: "、",
      switchLanguage: "Switch to English",
      toggleTheme: "切換深色／淺色模式",
    },
  },
  en: {
    name: "Yuan-Jui Wen",
    role: "Product Designer",
    description: "Portfolio of a product designer",
    intro: [
      "I design digital products that feel effortless to use, with a focus on interface details, interaction feedback, and making complex flows simple.",
      "Based in Taipei. Especially interested in design systems, motion design, and front-end craft.",
    ],
    projects: [
      {
        title: "Project One",
        description: "One sentence on the problem you solved and the outcome.",
        year: "2026",
      },
      {
        title: "Project Two",
        description: "One sentence on the problem you solved and the outcome.",
        year: "2025",
      },
      {
        title: "Project Three",
        description: "One sentence on the problem you solved and the outcome.",
        year: "2025",
      },
    ],
    experience: [
      {
        period: "2024 — Now",
        role: "Product Designer",
        organization: "Company",
      },
      {
        period: "2022 — 2024",
        role: "UI Designer",
        organization: "Company",
      },
    ],
    contact: {
      before:
        "For collaborations or roles, send me an email — I usually reply within two days. You can also find me on ",
      after: ".",
      button: "Email me",
    },
    ui: {
      skipLink: "Skip to main content",
      introLabel: "Introduction",
      projectsTitle: "Selected work",
      experienceTitle: "Experience",
      contactTitle: "Contact",
      listSeparator: " and ",
      switchLanguage: "切換為中文",
      toggleTheme: "Toggle dark mode",
    },
  },
}
