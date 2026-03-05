import { Code, Cpu } from "lucide-react";

export function VibeCoding() {
  return (
    <section className="px-6 py-24 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-[family-name:var(--font-archivo)] text-3xl font-bold tracking-tight sm:text-4xl">
          Two Decades of Code. Now Amplified by AI.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-5 h-5 text-[var(--color-accent-warm)]" />
              <h3 className="font-[family-name:var(--font-archivo)] text-lg font-semibold text-[var(--color-accent-warm)]">
                The Foundation
              </h3>
            </div>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              20+ years of hands-on engineering. Ruby on Rails since it was beta
              software. PostgreSQL since before it was cool. Led teams, split
              monoliths, integrated 15 payment gateways, presented 50+ live
              coding demos. The kind of deep expertise you only get by shipping
              real products at real startups.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-5 h-5 text-[var(--color-accent)]" />
              <h3 className="font-[family-name:var(--font-archivo)] text-lg font-semibold text-[var(--color-accent)]">
                The Multiplier
              </h3>
            </div>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              Now I pair with AI to build faster than ever. Not as a crutch — as
              a force multiplier. I write the rules that guide AI assistants
              (see{" "}
              <a
                href="https://github.com/patrickclery/ruly"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-[var(--color-accent)] hover:text-green-400 transition-colors duration-200 underline underline-offset-2"
              >
                ruly
              </a>
              ), architect the systems, and let AI handle the boilerplate. The
              result: startup-speed output with senior-engineer quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
