import { ProjectList } from "@/components/project-list"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export default function Home() {
  return (
    <div className="max-w-page mx-auto px-6 py-16 sm:py-24">
      <header>
        <h1 className="text-foreground font-medium">{site.name}</h1>
        <p>{site.role}</p>
      </header>

      <main id="main" className="mt-16 space-y-24">
        <section aria-label="自我介紹" className="space-y-4">
          {site.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <Section title="精選作品">
          <ProjectList projects={site.projects} />
        </Section>

        <Section title="經歷">
          <ul className="space-y-3">
            {site.experience.map((item) => (
              <li
                key={`${item.period}-${item.role}`}
                className="flex flex-col gap-x-6 sm:flex-row"
              >
                <span className="shrink-0 text-sm tabular-nums sm:w-32 sm:pt-px">
                  {item.period}
                </span>
                <span>
                  <span className="text-foreground">{item.role}</span>
                  <span>，{item.organization}</span>
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="聯絡">
          <p>
            有合作或職缺想聊聊，歡迎寄信給我，通常會在兩天內回覆。也可以在{" "}
            {site.links.map((link, index) => (
              <span key={link.href}>
                {index > 0 && "、"}
                <a
                  href={link.href}
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              </span>
            ))}{" "}
            找到我。
          </p>
          <Button asChild variant="outline" size="sm" className="mt-2">
            <a href={`mailto:${site.email}`}>寄信給我</a>
          </Button>
        </Section>
      </main>

      <footer className="border-border mt-24 border-t pt-6 text-sm">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  )
}
