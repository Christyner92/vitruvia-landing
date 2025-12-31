"use client";

import { useEffect, useState } from "react";
import Nav from "./components/Nav";

/**
 * Template discipline:
 * - Keep all homepage sections identical (Hero + device copy + Features + CTA + Footer)
 * - ONLY update phone carousel cards
 *
 * Card spec (locked):
 * - 2 pills: Topic + Confidence (words only)
 * - Short headline (anchor)
 * - One basic chart (compact)
 * - Grounding line ("Based on X variables" / dataset wording)
 * - Elegant spacing, card floats within phone
 * - Probabilistic language only
 */

const INSIGHT_CARDS = [
  {
    id: "anxiety",
    topic: "Anxiety",
    confidence: "Moderate",
    headline: "Earlier hydration linked to lower anxiety",
    grounding: "Based on 48 matched variables",
    visualType: "sparkline",
  },
  {
    id: "acne",
    topic: "Skin",
    confidence: "Moderate",
    headline: "Gentler skincare linked to fewer breakouts",
    grounding: "Based on 23 matched variables",
    visualType: "bars",
  },
  {
    id: "pancreatic",
    topic: "Cancer",
    confidence: "Elevated",
    headline: "Higher incidence observed in one region",
    grounding: "Based on anonymized regional datasets",
    visualType: "heatmap",
  },
  {
    id: "alzheimers",
    topic: "Cognitive",
    confidence: "Low",
    headline: "Vitamin C associated with lower Alzheimer’s correlation",
    grounding: "Based on 97 matched variables",
    visualType: "overlapBars",
  },
];

/* =============================
   BASIC VISUALS (NO ICONS)
============================= */

function Sparkline() {
  // Simple downward trend (sample) — compact, readable instantly.
  return (
    <svg
      className="viz-sparkline"
      viewBox="0 0 260 70"
      role="img"
      aria-label="Sample trend line"
    >
      <path className="viz-grid" d="M0 54 H260 M0 34 H260 M0 14 H260" />
      <path
        className="viz-line"
        d="M0 46 C40 44, 70 40, 95 34 S150 22, 175 24 S220 30, 260 18"
      />
      <text className="viz-axis-label" x="2" y="66">
        Earlier
      </text>
      <text className="viz-axis-label" x="214" y="66">
        Later
      </text>
    </svg>
  );
}

function Bars() {
  // Simple before/after bars (sample). No extra labels beyond Before/After.
  return (
    <div className="viz-bars" role="img" aria-label="Sample before after bars">
      <div className="viz-bars-row">
        <div className="viz-bars-label">Before</div>
        <div className="viz-bars-track">
          <div className="viz-bars-fill" style={{ width: "78%" }} />
        </div>
      </div>
      <div className="viz-bars-row">
        <div className="viz-bars-label">After</div>
        <div className="viz-bars-track">
          <div className="viz-bars-fill is-soft" style={{ width: "42%" }} />
        </div>
      </div>
    </div>
  );
}

function Heatmap() {
  // Muted heatmap intensity with one hotspot (sample).
  const cells = [
    0.08, 0.1, 0.12, 0.14, 0.16, 0.14, 0.12, 0.1, 0.1, 0.12, 0.16, 0.22, 0.28,
    0.22, 0.14, 0.1, 0.12, 0.16, 0.24, 0.4, 0.62, 0.36, 0.2, 0.12, 0.1, 0.12,
    0.16, 0.26, 0.46, 0.3, 0.18, 0.12,
  ];

  return (
    <div className="viz-heatmap" role="img" aria-label="Sample heatmap">
      {cells.map((v, i) => (
        <div
          key={i}
          className="viz-heat-cell"
          style={{ opacity: 0.12 + v }}
          title="Sample intensity"
        />
      ))}
    </div>
  );
}

function OverlapBars() {
  /**
   * Two bars with visible overlap band (sample) to signal uncertainty.
   * Not implying causation; just a visual comparison.
   */
  return (
    <div
      className="viz-overlapbars"
      role="img"
      aria-label="Sample comparison with overlap"
    >
      <div className="viz-overlapband" aria-hidden="true" />
      <div className="viz-overlap-row">
        <div className="viz-overlap-label">Vitamin C</div>
        <div className="viz-overlap-track">
          <div className="viz-overlap-fill" style={{ width: "54%" }} />
        </div>
      </div>
      <div className="viz-overlap-row">
        <div className="viz-overlap-label">No C</div>
        <div className="viz-overlap-track">
          <div className="viz-overlap-fill is-soft" style={{ width: "60%" }} />
        </div>
      </div>
      <div className="viz-overlap-note">Wide overlap in groups (sample)</div>
    </div>
  );
}

function InsightVisual({ type }) {
  if (type === "sparkline") return <Sparkline />;
  if (type === "bars") return <Bars />;
  if (type === "heatmap") return <Heatmap />;
  if (type === "overlapBars") return <OverlapBars />;
  return null;
}

/* =============================
   CAROUSEL
============================= */

function InsightCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INSIGHT_CARDS.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const card = INSIGHT_CARDS[activeIndex];

  return (
    <div className="carousel">
      {/* Floating card wrapper for elegant balance */}
      <div className="insight-float">
        <div className="insight-card" key={card.id}>
          <div className="insight-toprow">
            <span className="insight-pill">{card.topic}</span>
            <span className="insight-pill is-muted">{card.confidence}</span>
          </div>

          <div className="insight-title">{card.headline}</div>

          <div className="insight-visual is-compact">
            <InsightVisual type={card.visualType} />
          </div>

          <div className="insight-grounding">{card.grounding}</div>

          <div className="insight-footnote">
            This reflects patterns observed across anonymized datasets. It does
            not diagnose or establish causation.
          </div>
        </div>
      </div>

      <div className="carousel-dots" aria-label="Insight carousel dots">
        {INSIGHT_CARDS.map((c, i) => (
          <button
            key={c.id}
            type="button"
            className={`carousel-dot ${i === activeIndex ? "is-active" : ""}`}
            aria-label={`Show insight ${i + 1}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

/* =============================
   HOME (UNCHANGED OUTSIDE COPY)
============================= */

export default function Home() {
  return (
    <div className="page">
      <Nav />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="eyebrow">Personal health OS</div>

            <h1>See what your body has been trying to tell you.</h1>

            {/* Option A: shorter hero copy + supporting micro-line */}
            <p className="hero-sub">
              Vitruvia turns your health data into{" "}
              <strong>simple nightly insights</strong> you can actually
              understand and act on — all anonymously.
            </p>
            <p className="hero-sub">
              Informed by patterns across people with similar health signals.
            </p>

            <div className="hero-actions">
              <a href="#get-early-access" className="btn-primary">
                Get Early Access
              </a>
              <span className="hero-note">
                Private by design. No identities. Ever.
              </span>
            </div>
          </div>

          <div className="hero-device">
            <div className="insight-label">Real nightly insight</div>

            <div className="device-copy">
              <div className="device-title">Your nightly health insight</div>
              <div className="device-subtitle">
                Every morning, Vitruvia turns yesterday&apos;s signals into one
                simple, human explanation you can actually use — informed by
                anonymized patterns across people with similar health signals.
              </div>
            </div>

            <div className="device-frame">
              <InsightCarousel />
            </div>
          </div>
        </section>

        {/* FEATURES (UNCHANGED) */}
        <section className="features">
          <div className="features-inner">
            <h2>One place for your entire health story.</h2>
            <p className="features-sub">
              Track the inputs that actually affect your health — together, not
              scattered across apps.
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-dot" />
                <span>Biometrics from wearables (heart rate, HRV, sleep)</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot" />
                <span>Daily symptoms, mood, and notes</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot" />
                <span>Medications and supplements</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot" />
                <span>Women&apos;s health and cycle patterns</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot" />
                <span>Food and hydration patterns</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot" />
                <span>Basic lab values like A1C, lipids, thyroid</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA (UNCHANGED) */}
        <section className="cta" id="get-early-access">
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
                className="cta-input"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
              <button type="submit" className="btn-primary">
                Get Early Access
              </button>
            </form>

            <div className="cta-footnote">No spam. Unsubscribe anytime.</div>
          </div>
        </section>

        {/* FOOTER (UNCHANGED) */}
        <footer className="footer">
          <div className="footer-inner">
            <span>© 2025 Vitruvia Health</span>
            <span className="footer-right">Privacy-first by design</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
