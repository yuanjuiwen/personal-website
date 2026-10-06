import { notFound } from "next/navigation"
import { ProjectList } from "@/components/project-list"
import { Section } from "@/components/section"
import { SiteControls } from "@/components/site-controls"
import { Button } from "@/components/ui/button"
import { hasLocale } from "@/i18n"
import { content, site } from "@/lib/site"

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const c = content[lang]

  return (
    <div className="max-w-page mx-auto px-6 py-16 sm:py-24">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-foreground font-medium">{c.name}</h1>
          <p>{c.role}</p>
        </div>
        <SiteControls
          locale={lang}
          labels={{
            switchLanguage: c.ui.switchLanguage,
            toggleTheme: c.ui.toggleTheme,
          }}
        />
      </header>

      <main id="main" className="mt-16 space-y-24">
        <section aria-label={c.ui.introLabel} className="space-y-4">
          {c.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <Section title={c.ui.projectsTitle}>
          <ProjectList projects={c.projects} lang={lang} />
        </Section>

        <Section title={c.ui.experienceTitle}>
          <ul className="space-y-3">
            {c.experience.map((item) => (
              <li
                key={`${item.period}-${item.role}`}
                className="flex flex-col gap-x-6 sm:flex-row"
              >
                <span className="shrink-0 text-sm tabular-nums sm:w-32 sm:pt-px">
                  {item.period}
                </span>
                <span>
                  <span className="text-foreground">{item.role}</span>
                  <span>
                    {lang === "zh" ? "，" : ", "}
                    {item.organization}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={c.ui.contactTitle}>
          <p>
            {c.contact.before}
            {site.links.map((link, index) => (
              <span key={link.href}>
                {index > 0 && c.ui.listSeparator}
                <a
                  href={link.href}
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              </span>
            ))}
            {c.contact.after}
          </p>
          <Button asChild variant="outline" size="sm" className="mt-2">
            <a href={`mailto:${site.email}`}>{c.contact.button}</a>
          </Button>
        </Section>
      </main>

      <footer className="border-border mt-24 border-t pt-6 text-sm">
        © {new Date().getFullYear()} {c.name}
      </footer>
    </div>
  )
}
