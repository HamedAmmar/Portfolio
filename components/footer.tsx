import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <a href="#" className="font-mono text-xl font-bold text-foreground">
              {"<HA />"}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              Data Scientist & Web Designer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/hamed-ammar-00a5352a2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/HamedAmmar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:hamedhero2005@gmail.com"
              aria-label="Email"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border pt-8 text-center">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            {"Built with"} <Heart className="inline h-3.5 w-3.5 text-primary" /> {"by Hamed Ammar"}
          </p>
          <p className="text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
