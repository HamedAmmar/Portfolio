"use client"

import { useEffect, useRef, useState } from "react"
import { User, Code, Database, BarChart3 } from "lucide-react"

const highlights = [
  { icon: Code, label: "Web Design", value: "3+" },
  { icon: Database, label: "Data Projects", value: "10+" },
  { icon: BarChart3, label: "Analyses", value: "20+" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="px-6 py-24"
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-12 flex items-center gap-3">
          <User className="h-6 w-6 text-primary" />
          <h2 className="font-mono text-3xl font-bold text-foreground">About Me</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <div className="flex flex-col gap-6 md:col-span-3">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {"I'm a passionate student and freelancer with a deep interest in data science, data analysis, and web design. I love turning messy datasets into clean, actionable insights and building visually appealing websites that deliver great user experiences."}
            </p>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Whether it's exploring patterns in sales data, creating interactive
              dashboards, or designing responsive web applications, I thrive on
              solving complex problems and bringing ideas to life through data
              and code.
            </p>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I believe in continuous learning and staying at the forefront of
              technology. Every project is an opportunity to grow, and every
              dataset has a story waiting to be told.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:col-span-2">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-mono text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
