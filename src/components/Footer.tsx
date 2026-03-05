import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl text-center">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:patrick.clery@gmail.com"
            className="cursor-pointer inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:text-green-400 transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            patrick.clery@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/patrickclery/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:text-green-400 transition-colors duration-200"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/patrickclery"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:text-green-400 transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
        <div className="mt-6 space-y-1 text-sm text-[var(--color-text-muted)]">
          <p>English (Native) &middot; French (Professional) &middot; Russian (Elementary)</p>
          <p>University of Alberta &middot; Computing Sciences</p>
          <p>BJJ Black Belt</p>
        </div>
      </div>
    </footer>
  );
}
