import { notFound } from "next/navigation"

// 任何不存在的網址（例如 /zh/abc）都顯示 404 頁
export default function CatchAll() {
  notFound()
}
