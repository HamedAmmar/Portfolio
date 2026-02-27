"use client"

import { useEffect, useRef, useState } from "react"
import { FolderOpen, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Data Cleaning with Python",
    description:
      "Automated pipeline for cleaning and preprocessing messy datasets using Python and Pandas. Handles missing values, duplicates, and data type conversions.",
    technologies: ["Python", "Pandas", "NumPy"],
    github: "https://github.com/HamedAmmar",
    demo: "#",
  },
  {
    title: "Sales Data Analysis",
    description:
      "In-depth analysis of retail sales data to uncover trends, seasonal patterns, and key performance indicators driving business growth.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/HamedAmmar",
    demo: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard built to visualize complex datasets with charts, graphs, and filters. Enables quick decision-making through visual insights.",
    technologies: ["Python", "Plotly", "Streamlit"],
    github: "https://github.com/HamedAmmar",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive personal portfolio website showcasing projects, skills, and services. Built with a component-based architecture and smooth animations.",
    technologies: ["React", "Tailwind CSS", "Next.js"],
    github: "https://github.com/HamedAmmar",
    demo: "#",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="px-6 py-24">
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-12 flex items-center gap-3">
          <FolderOpen className="h-6 w-6 text-primary" />
          <h2 className="font-mono text-3xl font-bold text-foreground">Projects</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <FolderOpen className="h-5 w-5" />
                  <span className="text-xs font-medium tracking-wider uppercase">
                    Project {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="rounded-full">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
