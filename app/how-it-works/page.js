import Nav from "../components/Nav";

export default function HowItWorksPage() {
  return (
    <main className="page">
      <Nav />

      <section className="content">
        <div className="content-inner">
          <h1>How Vitruvia works</h1>
          <p className="content-lead">
            Vitruvia is your personal health operating system. It quietly connects your everyday data,
            then runs a nightly pattern search to surface insights you can actually act on — all without
            exposing your identity.
          </p>

          <h2>Step 1 — Bring your health data into one place</h2>
          <p>
            During early access, you&apos;ll be able to manually log or import the signals that matter most:
          </p>
          <ul>
            <li>Biometrics from wearables (heart rate, HRV, sleep duration/quality)</li>
            <li>Daily symptoms and notes</li>
            <li>Medications and supplements</li>
            <li>Women&apos;s health and cycle phases</li>
            <li>Food and hydration patterns</li>
            <li>Basic lab values like A1C, lipids, and thyroid markers</li>
          </ul>

          <h2>Step 2 — Track what&apos;s happening in your real life</h2>
          <p>
            You don&apos;t need perfect data. Vitruvia is built around real life — the days you sleep well,
            the nights you don&apos;t, the weeks you&apos;re consistent, and the weeks you&apos;re not.
          </p>
          <p>
            Each day, you can log what&apos;s important in a few taps: how you feel, what changed, and any
            notable events like travel, illness, or medication adjustments.
          </p>

          <h2>Step 3 — Nightly pattern detection (around 2:00 am)</h2>
          <p>
            Once a day, Vitruvia runs a pattern search across our anonymized dataset. Instead of generic advice,
            we look for relationships between inputs and outcomes in people who look like you from a data perspective.
          </p>
          <p>For example, Vitruvia might notice:</p>
          <ul>
            <li>Your sleep improves on nights when your last meal is earlier in the evening.</li>
            <li>Your resting heart rate is lower after days with light movement instead of zero movement.</li>
            <li>Your mood scores are higher on days you drink a minimum amount of water.</li>
            <li>Your cycle-related symptoms respond to changes in sleep, nutrition, or stress.</li>
          </ul>

          <h2>Step 4 — You receive simple, nightly insights</h2>
          <p>
            Each morning, you&apos;ll see a small number of focused insights — not an overwhelming dashboard.
            These are designed to be:
          </p>
          <ul>
            <li><strong>Understandable</strong>: written in plain language.</li>
            <li><strong>Actionable</strong>: tied to something you can try or repeat.</li>
            <li><strong>Grounded in patterns</strong>: based on data from people with similar patterns.</li>
          </ul>

          <h2>What Vitruvia is (and is not)</h2>
          <p>
            Vitruvia is a tool for personal health awareness and experimentation. It helps you notice trends
            and ask better questions about your health.
          </p>
          <p>
            Vitruvia is <strong>not</strong> a medical device and does not provide diagnosis, treatment, or
            medical advice. Any insights should be used as conversation starters with your healthcare team,
            not as a substitute for them.
          </p>

          <div className="content-cta">
            <h3>Help shape Vitruvia during early access</h3>
            <p>
              During early access, your feedback will directly shape what Vitruvia tracks, how insights are
              presented, and which health questions we prioritize first.
            </p>
            <a href="/#early-access" className="btn-primary">
              Get Early Access
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
