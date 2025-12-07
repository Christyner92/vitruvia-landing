"use client";

import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="page">
      {/* NAV */}
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="eyebrow">Personal health OS</p>
          <h1>See what your body has been trying to tell you.</h1>
          <p className="hero-sub">
            Vitruvia transforms your biometrics, symptoms, medications, meals,
            hydration, women&apos;s health, and basic lab results into nightly
            insights you can act on — all anonymously.
          </p>

          <div className="hero-actions">
            <a href="#early-access" className="btn-primary">
              Get Early Access
            </a>
            <p className="hero-note">
              Private by design. No identities. Ever.
            </p>
          </div>
        </div>

        {/* PRODUCT PREVIEW / DEVICE */}
        <div className="hero-device">
          <span className="insight-label">Real nightly insight</span>

          <div className="device-copy">
            <p className="device-title">Your nightly health insight</p>
            <p className="device-subtitle">
              Every morning, Vitruvia turns yesterday&apos;s signals into one
              simple, human explanation you can actually use.
            </p>
          </div>

          <div className="device-frame">
            <div className="insight-card">
              <div className="insight-card-header">
                <span className="insight-pill">Sleep · Hydration</span>
                <span className="insight-stat">Confidence 82%</span>
              </div>

              <div className="insight-metric">
                <div className="insight-metric-main">14 min faster</div>
                <div className="insight-metric-sub">to fall asleep</div>
              </div>

              <p className="insight-body">
                On nights when you drink a glass of water after 6 pm, you fall
                asleep faster the next day.
              </p>

              <div className="insight-chart">
                <svg
                  viewBox="0 0 120 40"
                  className="sparkline"
                  aria-hidden="true"
                >
                  <path
                    d="M4 30 C 20 26, 28 22, 40 24 C 52 26, 60 20, 72 18 C 86 16, 96 14, 116 10"
                    fill="none"
                    stroke="#FF675E"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="4"
                    y1="32"
                    x2="116"
                    y2="32"
                    stroke="#E2E8F0"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              <p className="insight-meta">
                Tonight · Based on 12 nights like this in your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="features-inner">
          <h2>One place for your entire health story.</h2>
          <p className="features-sub">
            Track the inputs that actually affect your health — together, not
            scattered across apps.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-dot" />
              <span>Biometrics from wearables (heart rate, HRV, sleep)</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot" />
              <span>Daily symptoms, mood, and notes</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot" />
              <span>Medications and supplements</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot" />
              <span>Women&apos;s health and cycle patterns</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot" />
              <span>Food and hydration patterns</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot" />
              <span>Basic lab values like A1C, lipids, thyroid</span>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS CTA */}
      <section id="early-access" className="cta">
        <div className="cta-inner">
          <h2>Become an early Vitruvia member.</h2>
          <p>
            Join the early access list to help shape the product and be among
            the first to see your nightly health insights.
          </p>

          <form
            className="cta-form"
            action="https://formspree.io/f/xldqlkye"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="cta-input"
              required
            />
            <button type="submit" className="btn-primary">
              Get Early Access
            </button>
          </form>

          <p className="cta-footnote">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>© {new Date().getFullYear()} Vitruvia Health</div>
          <div className="footer-links">
            <span>Privacy-first by design</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

