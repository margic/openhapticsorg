export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header" aria-label="Primary">
        <div className="container header-inner">
          <div className="brand" aria-label="OpenHaptic-Sports">
            <div className="brand-mark" aria-hidden="true">
              <span className="brand-ring" />
              <span className="brand-core" />
            </div>
            <span className="brand-text">OpenHaptic-Sports</span>
          </div>
          <nav className="nav" aria-label="Section navigation">
            <a href="#problem">The Why</a>
            <a href="#architecture">Architecture</a>
            <a href="#kalman">Kalman Filter</a>
            <a href="#community">Community</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Open-Source • Assistive Tech • VI Hockey</p>
              <h1 id="hero-title">
                Replacing Auditory Overload with Tactile Intuition.
              </h1>
              <p className="hero-subtitle">
                An open-source hybrid tracking ecosystem for high-speed VI sports. &lt; 50ms
                Latency. 100% Hacker Friendly.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#whitepaper">
                  Read the Whitepaper
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://github.com/margic/openhapticsorg"
                  aria-label="View on GitHub"
                >
                  <span className="btn-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" focusable="false">
                      <path
                        fill="currentColor"
                        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.08 1.56 1.08.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.06 1.03-2.78-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.06.8-.23 1.66-.34 2.51-.34.85 0 1.71.11 2.51.34 1.91-1.34 2.75-1.06 2.75-1.06.55 1.41.2 2.45.1 2.71.64.72 1.03 1.65 1.03 2.78 0 3.96-2.34 4.83-4.57 5.09.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.59.69.48 3.97-1.35 6.83-5.19 6.83-9.72C22 6.58 17.52 2 12 2Z"
                      />
                    </svg>
                  </span>
                  View on GitHub
                </a>
              </div>
              <div className="hero-metrics" aria-label="Key metrics">
                <div className="metric">
                  <span className="metric-label">Latency</span>
                  <span className="metric-value">
                    <span aria-hidden="true">&lt;</span> 50ms
                  </span>
                </div>
                <div className="metric">
                  <span className="metric-label">Tracking</span>
                  <span className="metric-value valid">Valid Data</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Vision</span>
                  <span className="metric-value vision">Computer Vision</span>
                </div>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <svg viewBox="0 0 640 480" role="img" aria-hidden="true">
                <defs>
                  <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#39d353" />
                    <stop offset="100%" stopColor="#58a6ff" />
                  </linearGradient>
                </defs>
                <rect x="20" y="20" width="600" height="440" rx="24" className="frame" />
                <circle cx="470" cy="170" r="26" className="ghost-puck" />
                <text x="470" y="125" className="label">
                  Ghost Puck
                </text>
                <path
                  d="M140 340 C 210 260, 300 230, 420 190"
                  className="signal-line"
                />
                <g className="player">
                  <circle cx="140" cy="190" r="24" className="player-node" />
                  <rect x="120" y="220" width="40" height="90" rx="18" className="player-node" />
                  <rect x="95" y="240" width="90" height="20" rx="10" className="player-node" />
                  <rect x="70" y="260" width="40" height="70" rx="18" className="player-node" />
                  <rect x="160" y="260" width="40" height="70" rx="18" className="player-node" />
                  <circle cx="205" cy="250" r="18" className="glove" />
                </g>
                <text x="90" y="155" className="label">
                  Player
                </text>
                <text x="195" y="250" className="label">
                  Glove
                </text>
              </svg>
            </div>
          </div>
        </section>

        <section id="problem" className="section problem" aria-labelledby="problem-title">
          <div className="container">
            <h2 id="problem-title">The Core Problem</h2>
            <div className="grid-three">
              <article className="card">
                <h3>Speed</h3>
                <p>
                  Pucks travel at 160kph. Audio cues are too slow. We use UDP Multicast for instant
                  tactile reaction.
                </p>
                <div className="card-tag valid">Valid Data</div>
              </article>
              <article className="card">
                <h3>Durability</h3>
                <p>
                  Sensors inside pucks shatter. We use “God View” computer vision to track standard
                  pucks from the rafters.
                </p>
                <div className="card-tag vision">Computer Vision</div>
              </article>
              <article className="card">
                <h3>Occlusion</h3>
                <p>
                  Cameras lose sight in scrums. We fuse vision with UWB (Ultra-Wideband) radio tags
                  so the player never disappears.
                </p>
                <div className="card-tag warning">Occlusion/Prediction</div>
              </article>
            </div>
          </div>
        </section>

        <section id="architecture" className="section architecture" aria-labelledby="architecture-title">
          <div className="container">
            <div className="section-header">
              <h2 id="architecture-title">The Architecture</h2>
              <p className="section-subtitle">
                A visually distinct tech stack engineered for speed and trust.
              </p>
            </div>
            <div className="stack">
              <article className="stack-layer">
                <div className="stack-icon" aria-hidden="true">
                  📡
                </div>
                <div>
                  <h3>The God View</h3>
                  <p>
                    Dual-mode tracking using YOLOv8 for detection and “Blur Vector Analysis” (Hough
                    Transform) to treat motion blur as velocity data.
                  </p>
                </div>
              </article>
              <article className="stack-layer">
                <div className="stack-icon" aria-hidden="true">
                  🧠
                </div>
                <div>
                  <h3>The Fusion Engine</h3>
                  <p>
                    A Distributed Kalman Filter. It arbitrates between Camera data and UWB tags,
                    using physics to “ghost” the puck’s location when visual contact is lost.
                  </p>
                </div>
              </article>
              <article className="stack-layer">
                <div className="stack-icon" aria-hidden="true">
                  🧤
                </div>
                <div>
                  <h3>The Shear Glove</h3>
                  <p>
                    No vibration. We use lateral skin shear to create “phantom forces” that
                    physically pull the hand toward the puck.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="kalman" className="section kalman" aria-labelledby="kalman-title">
          <div className="container kalman-grid">
            <div>
              <h2 id="kalman-title">Feature Highlight: The Kalman Filter</h2>
              <p>
                Predict. Correct. Repeat. Our implementations of the Kalman Filter don’t just
                smooth data; they predict the future during visual occlusion, ensuring the haptic
                feedback never stutters.
              </p>
            </div>
            <div className="kalman-visual" aria-hidden="true">
              <svg viewBox="0 0 520 240" role="img" aria-hidden="true">
                <rect x="10" y="10" width="500" height="220" rx="18" className="frame" />
                <path
                  d="M40 180 L80 120 L120 160 L160 90 L200 140 L240 80 L280 130 L320 70 L360 120 L400 60 L440 110"
                  className="noisy-line"
                />
                <path
                  d="M40 160 C 120 110, 220 110, 300 90 S 420 80, 480 70"
                  className="smooth-line"
                />
                <text x="40" y="45" className="label">
                  Raw Sensor Data
                </text>
                <text x="320" y="210" className="label label-green">
                  Filtered Output
                </text>
              </svg>
            </div>
          </div>
        </section>

        <section id="community" className="section community" aria-labelledby="community-title">
          <div className="container community-grid">
            <div>
              <h2 id="community-title">Developer &amp; Community</h2>
              <p>Built on Python, OpenCV, and Raspberry Pi. Join the contribution.</p>
              <div className="pill-row" aria-label="Tech stack">
                <span className="pill">Python</span>
                <span className="pill">OpenCV</span>
                <span className="pill">Raspberry Pi</span>
                <span className="pill">UWB</span>
              </div>
            </div>
            <div className="terminal" role="region" aria-label="Sample data packet">
              <div className="terminal-bar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="terminal-title">ohs-packet.json</span>
              </div>
              <pre>{`{
  "protocol": "OHS/1.0",
  "puck": { "pos": [12.45, 8.12], "vel": [15.2, -2.1] },
  "latency": "8ms"
}`}</pre>
            </div>
          </div>
        </section>

        <section id="whitepaper" className="section whitepaper" aria-labelledby="whitepaper-title">
          <div className="container whitepaper-inner">
            <h2 id="whitepaper-title">Ready to build accessible speed?</h2>
            <p>Review the system design, protocols, and haptics research.</p>
            <a className="btn btn-primary" href="#">
              Read the Whitepaper
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-label="Footer">
        <div className="container footer-grid">
          <div>
            <h3>OpenHaptic-Sports</h3>
            <p>Open-source assistive technology for Visually Impaired ice hockey.</p>
          </div>
          <div className="footer-links">
            <a href="#">Documentation</a>
            <a href="#">Hardware BOM</a>
            <a href="#">3D Print Files (.STL)</a>
          </div>
          <div className="footer-meta">
            <p>OpenHaptic-Sports. Released under MIT License.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
