import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}