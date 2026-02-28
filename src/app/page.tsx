const ASCII_BANNER = `██████╗  █████╗ ████████╗██████╗ ██╗ ██████╗██╗  ██╗     ██████╗██╗
██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██║██╔════╝██║ ██╔╝    ██╔════╝██║
██████╔╝███████║   ██║   ██████╔╝██║██║     █████╔╝     ██║     ██║
██╔═══╝ ██╔══██║   ██║   ██╔══██╗██║██║     ██╔═██╗     ██║     ██║
██║     ██║  ██║   ██║   ██║  ██║██║╚██████╗██║  ██╗    ╚██████╗███████╗
╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝     ╚═════╝╚══════╝

███████╗██████╗ ██╗   ██╗
██╔════╝██╔══██╗╚██╗ ██╔╝
█████╗  ██████╔╝ ╚████╔╝
██╔══╝  ██╔══██╗  ╚██╔╝
███████╗██║  ██║   ██║
╚══════╝╚═╝  ╚═╝   ╚═╝`;

const AWESOMER_TASKS = [
  'Fetch star snapshots from GitHub API',
  'Parse awesome list markdown → extract repos',
  'Compute trending deltas (7d / 30d / 90d)',
  'Render static site output',
];

const GIG_TASKS = [
  'Write bash CLI entry point',
  'Add assume-unchanged flag logic',
  'Add skip-worktree support',
  'Add gig show/status command',
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="py-8">

        {/* ASCII Banner — desktop */}
        <div className="hidden sm:block mb-6 overflow-x-auto">
          <pre className="ascii-art text-accent glow-intense glitch">{ASCII_BANNER}</pre>
        </div>

        {/* Mobile fallback */}
        <div className="sm:hidden text-accent glow text-2xl font-bold mb-4">
          patrick clery<span className="cursor-blink">_</span>
        </div>

        {/* macOS window — awesomer */}
        <div
          className="mb-4 overflow-hidden rounded-lg text-xs font-mono"
          style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
        >
          <div className="flex items-center px-4 py-2.5" style={{ backgroundColor: '#252525' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f56' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
            </div>
            <div className="flex-1 text-center" style={{ color: '#555' }}>claude-code — ~/awesomer</div>
          </div>
          <div style={{ backgroundColor: '#1a1b2e' }}>
            <div className="px-2 py-0.5" style={{ borderBottom: '1px solid #2a2d3e' }}>
              <span style={{ color: '#f38ba8' }}>►► bypass permissions on</span>
              <span style={{ color: '#585b70' }}> (shift+tab to cycle)</span>
            </div>
            <div className="px-3 py-2">
              <span style={{ color: '#585b70' }}>&gt; </span>
              <span style={{ color: '#c96a2b' }}>/execute-plan</span>
              <span style={{ color: '#cdd6f4' }}> build-trending-repo-rankings-from-awesome-lists.md</span>
              <span className="cursor-blink" style={{ color: '#cdd6f4' }}>█</span>
            </div>
            <div className="px-3 pb-3">
              <div className="mb-1.5" style={{ color: '#585b70' }}>● TodoWrite</div>
              {AWESOMER_TASKS.map((task) => (
                <div key={task} className="pl-2 leading-relaxed">
                  <span style={{ color: '#00ff41' }}>✓ </span>
                  <span style={{ color: '#cdd6f4' }}>{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* macOS window — gig */}
        <div
          className="mb-8 overflow-hidden rounded-lg text-xs font-mono"
          style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
        >
          <div className="flex items-center px-4 py-2.5" style={{ backgroundColor: '#252525' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f56' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
            </div>
            <div className="flex-1 text-center" style={{ color: '#555' }}>claude-code — ~/gig</div>
          </div>
          <div style={{ backgroundColor: '#1a1b2e' }}>
            <div className="px-2 py-0.5" style={{ borderBottom: '1px solid #2a2d3e' }}>
              <span style={{ color: '#f38ba8' }}>►► bypass permissions on</span>
              <span style={{ color: '#585b70' }}> (shift+tab to cycle)</span>
            </div>
            <div className="px-3 py-2">
              <span style={{ color: '#585b70' }}>&gt; </span>
              <span style={{ color: '#c96a2b' }}>/vibe-code</span>
              <span style={{ color: '#cdd6f4' }}> git-ignore-flag-manager.md</span>
              <span className="cursor-blink" style={{ color: '#cdd6f4' }}>█</span>
            </div>
            <div className="px-3 pb-3">
              <div className="mb-1.5" style={{ color: '#585b70' }}>● TodoWrite</div>
              {GIG_TASKS.map((task) => (
                <div key={task} className="pl-2 leading-relaxed">
                  <span style={{ color: '#00ff41' }}>✓ </span>
                  <span style={{ color: '#cdd6f4' }}>{task}</span>
                </div>
              ))}
            </div>
            <div className="px-3 py-1.5" style={{ borderTop: '1px solid #2a2d3e' }}>
              <span style={{ color: '#585b70' }}>— gig in action —</span>
            </div>
            <div className="px-3 pb-3 space-y-1">
              <div><span style={{ color: '#585b70' }}>$ </span><span className="text-accent">gig i</span></div>
              <div className="pl-2" style={{ color: '#585b70' }}>
                <div>git update-index --assume-unchanged config/database.yml</div>
                <div>git update-index --assume-unchanged .env.local</div>
              </div>
              <div><span style={{ color: '#585b70' }}>$ </span><span className="text-accent">gig</span></div>
              <div className="pl-2">
                <div><span style={{ color: '#cdd6f4' }}>[ignored]  config/database.yml</span></div>
                <div><span style={{ color: '#cdd6f4' }}>[ignored]  .env.local</span></div>
              </div>
              <div><span style={{ color: '#585b70' }}>$ </span><span className="text-accent">brew install patrickclery/tap/gig</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Resume content ──────────────────────────────── */}

      {/* Header / whoami */}
      <section className="mb-10">
        <div className="text-accent glow text-sm mb-4">$ whoami</div>
        <div className="mb-1">
          <span className="text-foreground text-xl font-bold">Patrick Clery</span>
        </div>
        <div className="text-muted text-sm mb-3">Full-Stack Engineer / Tech Lead</div>
        <p className="text-muted text-sm max-w-2xl mb-4">
          Expert in Ruby, CSS, and PostgreSQL since 2004. Added React.js and Docker to my top skills since 2017.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
          <span>📍 Montreal, Canada</span>
          <a href="mailto:patrick@patrickclery.com" className="hover:text-accent transition-colors">✉ patrick@patrickclery.com</a>
          <a href="https://patrickclery.com/" className="hover:text-accent transition-colors">🔗 patrickclery.com</a>
          <a href="https://www.linkedin.com/in/patrickclery/" className="hover:text-accent transition-colors">[linkedin]</a>
          <a href="https://github.com/patrickclery" className="hover:text-accent transition-colors">[github]</a>
        </div>
      </section>

      {/* Work History */}
      <section className="mb-10">
        <div className="text-accent glow text-sm mb-4">$ cat work-history.md</div>

        {/* Lexop */}
        <div className="mb-8">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-1">
            <span className="text-foreground font-bold">Full-Stack Engineer / Tech Lead</span>
            <span className="text-muted text-xs">Jun 2020 – Apr 2024</span>
            <span className="text-muted text-xs">Montreal, Quebec</span>
          </div>
          <div className="mb-2">
            <a href="https://lexop.com/" className="text-accent text-sm hover:text-accent-hover transition-colors">Lexop</a>
          </div>
          <p className="text-muted text-sm mb-2">B2B SaaS that provides companies with tools to import past-due customer lists, manage email campaigns, and collect payments through credit or bank on a branded payment portal.</p>
          <ul className="text-sm text-muted space-y-1 list-none">
            <li>📊 Built a customer-facing analytics dashboard with date ranges and custom filters, supported by complex PostgreSQL that analyzes 1M+ records in under 1s.</li>
            <li>🇺🇸 Created diagrams and technical architecture for a complete rewrite of the payments API, allowing the company to expand into the American market.</li>
            <li>👨🏻‍🏫 Led a team of 5 engineers, conducted the majority of code reviews, pair-coded 1-2x per week, and mentored developers to do system design, code reviews, and feature planning themselves.</li>
            <li>🪓 Split the Payments API from a Ruby on Rails monolith into separate Ruby backend + React frontend components, allowing the engineering team to scale from 3 full-stack engineers to a mix of 15 backend/frontend engineers.</li>
            <li>💸 Integrated 15 payment gateways: Authorize.Net, Bambora, Chase, Cogeco, Cyber Source, Eigen, Moneris, Plaid, Pllenty, Repay, Spreedly, Square, Stripe, Vopay, Zumrails.</li>
            <li>🚢 Dockerized the application and created developer tools for debugging remote environments, allowing developers to reproduce bugs that occur in production.</li>
            <li>🎞️ Presented 50+ live coding demos which became the &quot;developer handbook&quot; for the engineering department, speeding-up onboarding and reducing reliance on hiring senior developers.</li>
            <li>🚀 Improved frontend development quality by introducing Storybook and Jest testing to our CI/CD pipeline.</li>
            <li>🌱 Developed a comprehensive DB seeding script to replace manual data creation, streamlining the setup process for new developers.</li>
            <li>🧩 Redesigned the SDLC to split technical tasks into small pieces allowing up to 5 developers to work in parallel without blocking each other to be considered done.</li>
            <li>🛠 Identified and replaced bloated classes and confusing design patterns with well-known and documented patterns, reducing the time to onboard new developers.</li>
          </ul>
        </div>

        {/* Vericatch */}
        <div className="mb-8">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-1">
            <span className="text-foreground font-bold">Full-Stack Engineer</span>
            <span className="text-muted text-xs">Mar 2018 – Nov 2018</span>
            <span className="text-muted text-xs">Vancouver, British Columbia</span>
          </div>
          <div className="mb-2">
            <a href="https://vericatch.com/" className="text-accent text-sm hover:text-accent-hover transition-colors">Vericatch</a>
          </div>
          <p className="text-muted text-sm mb-2">Fisheries management SaaS designed for accurate catch reporting to government bodies.</p>
          <ul className="text-sm text-muted space-y-1 list-none">
            <li>🚛 Crafted complex PostgreSQL that modeled the complex architecture of the fishing industry supply-chain from fishing boat to the consumer&apos;s plate.</li>
            <li>👨🏻‍🎓 Onboarded new developers and shared the responsibilities of code reviews, pair programming, and feature planning.</li>
            <li>📊 Worked with Turbolinks, Websockets, and jQuery on a single-page application with real-time status of supply-chain events.</li>
            <li>🎨 Translated design mockups into responsive HTML/CSS using Bootstrap and custom CSS.</li>
          </ul>
        </div>

        {/* Freelance */}
        <div className="mb-8">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-1">
            <span className="text-foreground font-bold">Full-Stack Engineer</span>
            <span className="text-muted text-xs">Jun 2004 – Nov 2018</span>
          </div>
          <div className="mb-2">
            <a href="https://patrickclery.com/" className="text-accent text-sm hover:text-accent-hover transition-colors">PatrickClery.com (Freelance Work)</a>
          </div>
          <p className="text-muted text-sm mb-2">Freelance web development for small businesses.</p>
          <ul className="text-sm text-muted space-y-1 list-none">
            <li>🏗️ Created subscription-based preview sites using Ruby on Rails, featuring a paywall for non-member access control.</li>
            <li>🏗️ Redesigned a travel photography site from hand-edited HTML to a Ruby on Rails CMS.</li>
            <li>🐧 Developed a hotel cleaning staff HRMS prototype with an integrated scheduling system.</li>
          </ul>
        </div>

        {/* Beano Publishing */}
        <div className="mb-8">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-1">
            <span className="text-foreground font-bold">Full-Stack Engineer</span>
            <span className="text-muted text-xs">Aug 2003 – May 2005</span>
            <span className="text-muted text-xs">Remote, USA</span>
          </div>
          <div className="mb-2">
            <a href="https://www.linkedin.com/company/beano-publishing-llc/" className="text-accent text-sm hover:text-accent-hover transition-colors">Beano Publishing, LLC</a>
          </div>
          <p className="text-muted text-sm mb-2">SEO-focused web development company that had a portfolio of 100+ popular websites.</p>
          <ul className="text-sm text-muted space-y-1 list-none">
            <li>🎨 Used Ruby on Rails when it was beta software to prototype ideas and create basic CMS systems for clients.</li>
            <li>🏗️ Involved in beta testing of an official PostgreSQL library in production, allowing us to launch a dating site with &quot;required&quot; and &quot;optional&quot; criteria, which was previously impossible with 100K+ users.</li>
            <li>🐧 Built a Ruby on Rails dashboard that appraised and forecasted top domains to buy/sell, leveraging Alexa.com and Google Keywords API.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <div className="text-accent glow text-sm mb-4">$ cat education.md</div>
        <div className="mb-2">
          <span className="text-foreground font-bold">University of Alberta</span>
          <span className="text-muted text-xs ml-3">Sep 2005 – May 2006</span>
        </div>
        <div className="text-muted text-sm">Computing Sciences</div>
      </section>

      {/* Certificates */}
      <section className="mb-10">
        <div className="text-accent glow text-sm mb-4">$ cat certificates.md</div>
        <div className="mb-2">
          <span className="text-foreground font-bold">Brazilian Jiu-Jitsu Instructor Certification Program</span>
        </div>
        <div className="text-muted text-sm">Issued by Gracie Barra Association, Jul 2023</div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <div className="text-accent glow text-sm mb-4">$ cat skills.json</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <div className="text-muted text-xs mb-2">## Backend</div>
            <div className="flex flex-wrap gap-1">
              {['Bash', 'GraphQL', 'JSON:API', 'PostgreSQL', 'REST APIs', 'Ruby on Rails', 'Sidekiq', 'WebSockets'].map(s => (
                <span key={s} className="text-xs px-2 py-0.5 border border-border text-muted">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-muted text-xs mb-2">## Frontend</div>
            <div className="flex flex-wrap gap-1">
              {['Next.js', 'React Query', 'React Router', 'React Testing Library', 'React.js', 'Storybook', 'styled-components', 'Tailwind CSS'].map(s => (
                <span key={s} className="text-xs px-2 py-0.5 border border-border text-muted">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-muted text-xs mb-2">## Software Design</div>
            <div className="flex flex-wrap gap-1">
              {['Agile Methodologies', 'API Architecture', 'Coding Standards', 'Data Modeling', 'Design Patterns', 'ERD Diagrams', 'PlantUML Diagrams', 'Software Development Lifecycle (SDLC)'].map(s => (
                <span key={s} className="text-xs px-2 py-0.5 border border-border text-muted">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-muted text-xs mb-2">## Test-Driven Development</div>
            <div className="flex flex-wrap gap-1">
              {['CI/CD Pipelines', 'Code Coverage Analysis', 'End-to-End Browser Testing', 'Minitest', 'Mocking Frameworks', 'Playwright', 'RSpec', 'User Story Writing'].map(s => (
                <span key={s} className="text-xs px-2 py-0.5 border border-border text-muted">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-muted text-xs mb-2">## DevOps</div>
            <div className="flex flex-wrap gap-1">
              {['CircleCI', 'DNS', 'Docker', 'Github Actions', 'Kubernetes', "Let's Encrypt", 'Linux', 'Nginx'].map(s => (
                <span key={s} className="text-xs px-2 py-0.5 border border-border text-muted">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-muted text-xs mb-2">## Tools</div>
            <div className="flex flex-wrap gap-1">
              {['Jira', 'JetBrains IDE', 'Linux', 'MacOS'].map(s => (
                <span key={s} className="text-xs px-2 py-0.5 border border-border text-muted">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-10">
        <div className="text-accent glow text-sm mb-4">$ cat languages.md</div>
        <div className="space-y-1 text-sm text-muted">
          <div><span className="text-foreground">English</span> — Native Speaker</div>
          <div><span className="text-foreground">French</span> — Professional Working</div>
          <div><span className="text-foreground">Russian</span> — Elementary</div>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <div className="text-accent glow text-sm mb-4">$ cat references.md</div>

        <blockquote className="border-l-2 border-border pl-4 mb-6">
          <p className="text-muted text-sm mb-2 whitespace-pre-line">&quot;I interviewed and hired Patrick myself, close to four years ago, and would do it all over again if I could.
During his tenure at Lexop, he proved his dedication by implementing a number of best-practices, creating training material for the team, engaging in pair-programming and mentoring new hires and more junior developers.
He&apos;s also been instrumental in developing a number of our core components, and has done so in a way that makes them far simpler to maintain and build on. You can also clearly see how seriously he takes his work in the code reviews he leaves, and in hiring assessments he helped us complete throughout these last few years.
I highly recommend Patrick to anyone looking to hire a full-stack developer at the top of his game.&quot;</p>
          <cite className="text-xs text-muted not-italic">— Michel Jamati / CTO at Lexop (April 24, 2024, via LinkedIn)</cite>
        </blockquote>

        <blockquote className="border-l-2 border-border pl-4 mb-6">
          <p className="text-muted text-sm mb-2 whitespace-pre-line">&quot;It was an absolute privilege of working closely with Patrick while he was a Tech Lead and my mentor at Lexop. I was impressed by his remarkable ability of maintaining high standards and consistently delivering the results with the team, even being under intense pressure in the most demanding circumstances.
Patrick&apos;s passion and expertise in problem-solving, together with his attention to details and mastery in utilizing modern tools, were invaluable assets that made a big impact on the product and the team&apos;s success.&quot;</p>
          <cite className="text-xs text-muted not-italic">— Nataliia Kumeiko / Senior Software Engineer at Lexop (April 23, 2024, via LinkedIn)</cite>
        </blockquote>

        <blockquote className="border-l-2 border-border pl-4 mb-6">
          <p className="text-muted text-sm mb-2 whitespace-pre-line">&quot;🧙‍♂️ I&apos;m thrilled to recommend Patrick, a standout Full Stack Senior Engineer. Patrick is not only skilled in React and Ruby, but he&apos;s also a wizard with JetBrains IDE. He was the one who showed me the ropes with this tool, making it so much easier to get things done.
🎯 Patrick is the kind of guy who makes problem-solving fun. Working through tough issues with him is always a highlight thanks to his dependable and upbeat approach. When I first joined Lexop, he was my mentor and played a huge role in helping me settle in and find my path, always pushing me to check out new technologies and broaden my skill set.
🏦  He&apos;s also done some amazing work on our payment platform, nailing the ins and outs of payment transactions perfectly. His teamwork and innovation don&apos;t just boost our productivity; they make our office a better place.
🙌  I fully support Patrick for any future projects—he&apos;s a true asset, and I have no doubt he&apos;ll continue to impress and motivate everyone around him.&quot;</p>
          <cite className="text-xs text-muted not-italic">— Vickram Bayragee / Frontend Engineer at Lexop (May 2, 2024, via LinkedIn)</cite>
        </blockquote>

        <blockquote className="border-l-2 border-border pl-4 mb-6">
          <p className="text-muted text-sm mb-2 whitespace-pre-line">&quot;Patrick&apos;s expertise and dedication were evident during our time working together. As a seasoned full stack developer with abundant experience, his contributions were invaluable, particularly in code review and documenting his work, which enhanced project quality and streamlined our process.
A standout achievement was his leadership in integrating new payment gateways for US and Canadian processors, showcasing his ability to break down complex projects and collaborate effectively with his peers, ensuring successful and timely implementations. His insights also improved our CI/CD pipeline, enhancing app delivery.
Patrick&apos;s technical leadership and positive attitude enriched team dynamics, demonstrating discipline, a methodical approach, and a keen eye for detail. His passion for Test Driven Development is exemplary, making him a fantastic partner during pair programming sessions.
I highly recommend Patrick to any team seeking a proficient developer who fosters collaboration and delivers exceptional results. His software development mastery and dedication make him an inestimable team member.&quot;</p>
          <cite className="text-xs text-muted not-italic">— Aurélien Goulon / Team Lead at Lexop (April 19, 2024, via LinkedIn)</cite>
        </blockquote>

        <blockquote className="border-l-2 border-border pl-4 mb-6">
          <p className="text-muted text-sm mb-2 whitespace-pre-line">&quot;I had the pleasure of working alongside Patrick for over two years. He is an exceptional team member, full of energy and always ready to assist others. Patrick regularly contributes to our team&apos;s growth by creating detailed knowledge articles and instructional videos that clarify complex processes. Working with him has been an immensely enriching experience, both professionally and personally. Patrick&apos;s kindness and eagerness to share his expertise have greatly benefited our team.&quot;</p>
          <cite className="text-xs text-muted not-italic">— Ajay Komirishetty / Software Engineer at Lexop (May 2, 2024, via LinkedIn)</cite>
        </blockquote>

        <blockquote className="border-l-2 border-border pl-4 mb-6">
          <p className="text-muted text-sm mb-2 whitespace-pre-line">&quot;I worked with Patrick on one project and I can say that he is highly skilled and motivated developer who knows absolutely everything about coding.
He is awesome engineer with out of the box thinking skills.
Patrick always planned and solved all the tasks in a schedule with lowest bugs presences.
I am highly recommending to work with Patrick. He will suite to any teams.&quot;</p>
          <cite className="text-xs text-muted not-italic">— Roman Yakymchuk / QA Engineer at Lexop (April 17, 2024, via LinkedIn)</cite>
        </blockquote>

        <blockquote className="border-l-2 border-border pl-4 mb-6">
          <p className="text-muted text-sm mb-2 whitespace-pre-line">&quot;Patrick is a passionate and forward-thinking Rails Engineer. Working at Vericatch was challenging, and he was able to pick up and learn the codebases quickly. He is someone with strong problem solving skills, and a great asset to any company.&quot;</p>
          <cite className="text-xs text-muted not-italic">— Andy Wong / Senior Engineer at Vericatch (October 16, 2019, via LinkedIn)</cite>
        </blockquote>

        <blockquote className="border-l-2 border-border pl-4 mb-6">
          <p className="text-muted text-sm mb-2 whitespace-pre-line">&quot;I had the pleasure working with Patrick. Very skilled Ruby developer and pays great attention to details. What stood out to me the most was the questioning of different approaches in solving complex problems and the openness to take the right direction when challenged.&quot;</p>
          <cite className="text-xs text-muted not-italic">— Mohammed Alamri / Senior Engineer at Vericatch (October 16, 2019, via LinkedIn)</cite>
        </blockquote>
      </section>
    </div>
  );
}
