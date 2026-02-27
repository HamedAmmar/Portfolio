"use client"

import { useEffect, useRef, useState } from "react"
import { Layers } from "lucide-react"

const skills = [
  { name: "Python", level: 90, category: "Data Science" },
  { name: "Data Analysis", level: 85, category: "Data Science" },
  { name: "Data Cleaning", level: 88, category: "Data Science" },
  { name: "Pandas", level: 85, category: "Data Science" },
  { name: "NumPy", level: 80, category: "Data Science" },
  { name: "Data Visualization", level: 82, category: "Data Science" },
  { name: "HTML", level: 95, category: "Web Development" },
  { name: "CSS", level: 90, category: "Web Development" },
  { name: "JavaScript", level: 80, category: "Web Development" },
  { name: "React", level: 75, category: "Web Development" },
]

export function SkillsSection() {
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

  const dataSkills = skills.filter((s) => s.category === "Data Science")
  const webSkills = skills.filter((s) => s.category === "Web Development")

  return (
    <section ref={sectionRef} id="skills" className="px-6 py-24">
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-12 flex items-center gap-3">
          <Layers className="h-6 w-6 text-primary" />
          <h2 className="font-mono text-3xl font-bold text-foreground">Skills</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              Data Science & Analytics
            </h3>
            <div className="flex flex-col gap-5">
              {dataSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              Web Development
            </h3>
            <div className="flex flex-col gap-5">
              {webSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${(i + dataSkills.length) * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
