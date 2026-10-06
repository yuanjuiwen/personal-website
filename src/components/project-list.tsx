import Link from "next/link"
import type { Locale } from "@/i18n"
import type { Project } from "@/lib/site"

// 作品列表：不用卡片，每列是一行文字，hover 時淡淡的底色浮現
export function ProjectList({
  projects,
  lang,
}: {
  projects: Project[]
  lang: Locale
}) {
  return (
    <ul className="-mx-3">
      {projects.map((project) => {
        const content = (
          <>
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-foreground font-medium">
                {project.title}
              </span>
              <span className="shrink-0 text-sm tabular-nums">
                {project.year}
              </span>
            </span>
            <span className="block">{project.description}</span>
          </>
        )

        const rowClass =
          "block rounded-md p-3 transition-colors duration-150 ease-standard"

        return (
          <li key={project.title}>
            {project.href ? (
              <Link
                href={`/${lang}${project.href}`}
                className={`${rowClass} hover:bg-accent`}
              >
                {content}
              </Link>
            ) : (
              <div className={rowClass}>{content}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
