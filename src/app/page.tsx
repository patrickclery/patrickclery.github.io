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

      {/* ── Resume content — Task 3 fills this in ── */}
    </div>
  );
}
