import { cn } from "@/lib/utils"

type SectionProps = {
  title: string
  children: React.ReactNode
  className?: string
}

// 每個區塊：16px / 500 的墨色標題，下方 16px 接內容
export function Section({ title, children, className }: SectionProps) {
  const id = `section-${title}`
  return (
    <section aria-labelledby={id} className={cn("space-y-4", className)}>
      <h2 id={id} className="text-foreground font-medium">
        {title}
      </h2>
      {children}
    </section>
  )
}
