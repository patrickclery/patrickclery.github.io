import { Briefcase } from "lucide-react";

const jobs = [
  {
    company: "WorkAxle",
    role: "Full-Stack Engineer",
    period: "Sep 2024 - Present",
    location: "Montreal, QC",
    description:
      "Workforce management platform using AI and IoT to remove complexity from scheduling and compliance.",
    highlights: [],
  },
  {
    company: "Lexop",
    role: "Full-Stack Engineer / Tech Lead",
    period: "Jun 2020 - Apr 2024",
    location: "Montreal, QC",
    description:
      "B2B SaaS for past-due payment collection via email campaigns and branded payment portals.",
    highlights: [
      "Built analytics dashboard analyzing 1M+ records in under 1s",
      "Led team of 5 engineers with code reviews and pair programming",
      "Split payments API from Rails monolith, scaling team from 3 to 15 engineers",
      "Integrated 15 payment gateways (Stripe, Square, Moneris, etc.)",
      "Presented 50+ live coding demos that became the engineering handbook",
    ],
  },
  {
    company: "Vericatch",
    role: "Full-Stack Engineer",
    period: "Mar 2018 - Nov 2018",
    location: "Vancouver, BC",
    description:
      "Fisheries management SaaS for accurate catch reporting to government bodies.",
    highlights: [
      "Modeled fishing industry supply-chain in PostgreSQL",
      "Built real-time SPA with Turbolinks and WebSockets",
    ],
  },
  {
    company: "PatrickClery.com",
    role: "Freelance Full-Stack Engineer",
    period: "Jun 2006 - Nov 2012",
    location: "North America",
    description: "Freelance web development for small businesses.",
    highlights: [
      "Subscription sites with paywalls in Ruby on Rails",
      "Hotel staff HRMS prototype with scheduling system",
    ],
  },
  {
    company: "Beano Publishing LLC",
    role: "Full-Stack Engineer",
    period: "Jan 2004 - May 2005",
    location: "Hollywood, FL",
    description:
      "SEO-focused web development company with 100+ popular websites.",
    highlights: [
      "Used Ruby on Rails when it was beta software",
      "Beta tested official PostgreSQL library in production with 100K+ users",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-[family-name:var(--font-archivo)] text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
        </h2>
        <div className="mt-12 space-y-12">
          {jobs.map((job) => (
            <article
              key={job.company}
              className="relative pl-8 border-l-2 border-[var(--color-border)]"
            >
              <div className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-accent-warm)]">
                <Briefcase className="w-3 h-3 text-[var(--color-accent-warm)]" />
              </div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-[family-name:var(--font-archivo)] text-xl font-bold">
                  {job.company}
                </h3>
                <span className="text-sm text-[var(--color-text-muted)]">
                  {job.role}
                </span>
              </div>
              <div className="mt-1 flex flex-wrap gap-x-4 text-sm text-[var(--color-text-muted)]">
                <span>{job.period}</span>
                <span>{job.location}</span>
              </div>
              <p className="mt-3 text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
                {job.description}
              </p>
              {job.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-[var(--color-text-muted)] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-accent-warm)]"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
