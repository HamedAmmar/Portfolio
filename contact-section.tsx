"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import { Send, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section ref={sectionRef} id="contact" className="px-6 py-24">
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-12 flex items-center gap-3">
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="font-mono text-3xl font-bold text-foreground">Contact</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 md:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="What is this about?"
                required
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or idea..."
                required
                rows={5}
                className="rounded-lg resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full font-medium sm:w-auto"
              disabled={submitted}
            >
              {submitted ? (
                "Message Sent!"
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          <div className="flex flex-col gap-6 md:col-span-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {"Let's connect"}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Feel free to reach out for collaborations, freelance work, or
                just to say hello. I'm always open to discussing new projects
                and creative ideas.
              </p>
            </div>

            <a
              href="mailto:hamedhero2005@gmail.com"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">
                  hamedhero2005@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/hamed-ammar-00a5352a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p className="text-xs text-muted-foreground">Hamed Ammar</p>
              </div>
            </a>

            <a
              href="https://github.com/HamedAmmar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">GitHub</p>
                <p className="text-xs text-muted-foreground">HamedAmmar</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
