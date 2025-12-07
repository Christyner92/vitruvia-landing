import Nav from "../components/Nav";

export default function PrivacyPage() {
  return (
    <main className="page">
      <Nav />

      <section className="content">
        <div className="content-inner">
          <h1>Privacy at Vitruvia</h1>
          <p className="content-lead">
            Vitruvia is being built around a simple idea: your health data should work for you, not against you. 
            Our goal is to give you insights without asking you to trade away your privacy.
          </p>

          <h2>Our approach to privacy</h2>
          <p>
            Vitruvia is early in its journey, and we&apos;re designing the product with privacy and anonymity in mind
            from the start. That means:
          </p>
          <ul>
            <li>Focusing on patterns across groups of people, not on any one individual.</li>
            <li>Minimizing the personal identifiers we collect.</li>
            <li>Working toward clear boundaries around what data is stored, for how long, and for what purpose.</li>
          </ul>

          <h2>What we aim to collect</h2>
          <p>To power insights, Vitruvia may need data such as:</p>
          <ul>
            <li>Biometric signals (heart rate, HRV, sleep, activity)</li>
            <li>Symptoms and how you feel day to day</li>
            <li>Medications and supplements you choose to track</li>
            <li>Women&apos;s health and cycle details you choose to share</li>
            <li>Food and hydration patterns</li>
            <li>Key lab values you enter manually</li>
          </ul>
          <p>
            We do <strong>not</strong> intend to collect things like your employer&apos;s name, insurance details,
            or unrelated personal identifiers.
          </p>

          <h2>How insights are generated</h2>
          <p>
            Vitruvia&apos;s goal is to use anonymized, aggregated data to find patterns and generate insights, such as:
          </p>
          <p>
            <em>&quot;People with sleep patterns like yours tend to see better rest on days with an earlier last meal.&quot;</em>
          </p>
          <p>
            These insights are based on group-level patterns, not on exposing one person&apos;s detailed history to another person.
          </p>

          <h2>What Vitruvia is not</h2>
          <p>
            Vitruvia is not a medical provider, does not store or process your data as a replacement for a healthcare system,
            and does not provide medical advice or diagnoses. It is a tool to help you explore patterns and trends in your own health data.
          </p>

          <h2>Transparency and updates</h2>
          <p>
            As the product evolves, our privacy approach and technical practices will continue to evolve too. We will update
            this page to reflect:
          </p>
          <ul>
            <li>What data we collect and why.</li>
            <li>How we store and protect that data.</li>
            <li>How we use aggregated patterns to generate insights.</li>
            <li>Your options for exporting, updating, or deleting your data.</li>
          </ul>

          <div className="content-cta">
            <h3>Questions about privacy?</h3>
            <p>
              If you have questions or concerns about how Vitruvia thinks about privacy, we want to hear them. Your expectations
              help us design a healthier relationship with health data.
            </p>
            <a href="/contact" className="btn-primary">
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
