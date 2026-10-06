import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// 暫時的首頁：確認 Next.js、Tailwind、shadcn/ui 都正常運作，之後會換成正式設計
const placeholderProjects = [
  { title: "案例一", summary: "之後換成你的第一個作品", tag: "UI/UX" },
  { title: "案例二", summary: "之後換成你的第二個作品", tag: "Branding" },
  { title: "案例三", summary: "之後換成你的第三個作品", tag: "Graphic" },
]

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-24">
      <section className="space-y-6">
        <Badge variant="secondary">Portfolio · 建置中</Badge>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          你好，我是設計師。
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          這裡是作品集網站的起點。技術棧：Next.js、TypeScript、Tailwind
          CSS、shadcn/ui，部署於 Vercel。
        </p>
        <Button asChild>
          <a href="mailto:hello@example.com">聯絡我</a>
        </Button>
      </section>

      <section
        className="mt-20 grid gap-6 sm:grid-cols-3"
        aria-label="精選作品"
      >
        {placeholderProjects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <Badge variant="outline" className="mb-2 w-fit">
                {project.tag}
              </Badge>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.summary}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </main>
  )
}
