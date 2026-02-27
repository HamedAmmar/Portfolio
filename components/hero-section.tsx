"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (el) el.classList.add("animate-in", "fade-in", "duration-1000")
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="order-2 flex flex-col gap-6 md:order-1">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1 w-10 rounded-full bg-primary" />
            <span className="text-sm font-medium tracking-wider text-primary uppercase">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-balance font-mono text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {"Hi, I'm "}
            <span className="text-primary">Hamed Ammar</span>
          </h1>

          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Data Scientist <span className="text-primary">|</span> Data Analyst{" "}
            <span className="text-primary">|</span> Web Designer
          </p>

          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            I transform raw data into meaningful insights and craft beautiful,
            functional web experiences. Passionate about solving complex problems
            with data and code.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full font-medium">
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full font-medium"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/hamed-ammar-00a5352a2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/HamedAmmar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:hamedhero2005@gmail.com"
              aria-label="Email"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative order-1 flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl md:h-80 md:w-80">
              <Image
                src="/images/profile.jpeg"
                alt="Hamed Ammar profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
