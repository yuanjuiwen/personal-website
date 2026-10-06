// 網站的所有文字內容都集中在這個檔案。
// 換成你自己的資料時，只需要改這裡，不用碰版面程式。

export type Project = {
  title: string
  description: string
  year: string
  href?: string // 案例內頁完成後填入，例如 "/work/bank-app"
}

export type Experience = {
  period: string
  role: string
  organization: string
}

export type SocialLink = {
  label: string
  href: string
}

export const site = {
  name: "你的名字",
  role: "產品設計師",
  description: "產品設計師的個人作品集",
  url: "https://yuanjuiwen.vercel.app",
  email: "hello@example.com",

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
  ] satisfies Project[],

  experience: [
    { period: "2024 — 現在", role: "產品設計師", organization: "公司名稱" },
    { period: "2022 — 2024", role: "UI 設計師", organization: "公司名稱" },
  ] satisfies Experience[],

  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/yuanjuiwen" },
  ] satisfies SocialLink[],
}
