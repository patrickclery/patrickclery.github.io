import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <header className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-3xl">
        <h1 className="font-[family-name:var(--font-archivo)] text-5xl font-bold tracking-tight sm:text-7xl text-[var(--color-text)]">
          Patrick Clery
        </h1>
        <p className="mt-4 text-xl text-[var(--color-accent)] font-mono">
          I write the rules. Claude writes the code.
        </p>
        <p className="mt-6 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          Full-stack engineer since 2004. Two decades of shipping products at
          startups — Ruby on Rails, React, PostgreSQL, TypeScript. Now
          pioneering AI-assisted development while staying sharp with hands-on
          code.
        </p>
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="cursor-pointer rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-[var(--color-bg)] transition-colors duration-200 hover:bg-green-400"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="cursor-pointer rounded-lg border border-[var(--color-border)] px-6 py-3 font-semibold text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Experience
          </a>
          <a
            href="https://github.com/patrickclery"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg border border-[var(--color-border)] px-6 py-3 font-semibold text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </nav>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-text-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Montreal, Canada
          </span>
          <a
            href="mailto:patrick.clery@gmail.com"
            className="cursor-pointer inline-flex items-center gap-1.5 text-[var(--color-accent)] hover:text-green-400 transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            patrick.clery@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/patrickclery/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-1.5 text-[var(--color-accent)] hover:text-green-400 transition-colors duration-200"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
