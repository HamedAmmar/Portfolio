"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Sparkles, BarChart3, LayoutDashboard, Globe } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Data Cleaning",
    description:
      "Transform messy, incomplete datasets into clean, structured data ready for analysis. I handle missing values, duplicates, formatting issues, and more.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Extract meaningful insights from your data through statistical analysis, trend identification, and pattern recognition to drive informed decisions.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Creation",
    description:
      "Build interactive, visually appealing dashboards that present complex data in a clear and understandable way for stakeholders.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Design and develop modern, responsive websites with clean code, smooth animations, and intuitive user experiences that leave a lasting impression.",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="px-6 py-24">
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-12 flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="font-mono text-3xl font-bold text-foreground">Services</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="group flex flex-col items-start rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
