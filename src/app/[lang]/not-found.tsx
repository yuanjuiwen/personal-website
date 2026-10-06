import Link from "next/link"

// 404 頁：拿不到目前語言，所以中英並列
export default function NotFound() {
  return (
    <main
      id="main"
      className="max-w-page mx-auto flex min-h-dvh flex-col justify-center gap-4 px-6"
    >
      <h1 className="text-foreground font-medium">404</h1>
      <p>
        找不到這個頁面。
        <br />
        This page could not be found.
      </p>
      <p className="flex gap-4">
        <Link href="/zh" className="link">
          回到首頁
        </Link>
        <Link href="/en" className="link">
          Back home
        </Link>
      </p>
    </main>
  )
}
