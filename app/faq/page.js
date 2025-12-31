import Nav from "../components/Nav";

export default function FAQ() {
  return (
    <div className="page">
      <Nav />

      <main className="content">
        <div className="content-inner">
          <h1>Frequently asked questions</h1>
          <p className="content-lead">
            A few common questions about Vitruvia, how your data is used, and
            what to expect during early access.
          </p>

          <h2>What is Vitruvia?</h2>
          <p>
            Vitruvia is a personal health operating system. It brings together
            your biometrics, symptoms, medications, women&apos;s health, food,
            hydration, and basic lab results to highlight patterns you might not
            see on your own.
          </p>

          <h2>How is Vitruvia different from a regular health app?</h2>
          <p>
            Most apps track one slice of your health — steps, sleep, period
            tracking, mood, or labs. Vitruvia is designed to sit above those
            tools, connecting multiple signals and running nightly pattern
            searches to surface relationships, not just charts.
          </p>

          <h2>What kinds of data can I track?</h2>
          <p>In the early versions of Vitruvia, you&apos;ll be able to track:</p>
          <ul>
            <li>Biometrics from wearables (heart rate, HRV, sleep)</li>
            <li>Daily symptoms and how you feel</li>
            <li>Medications and supplements</li>
            <li>Women&apos;s health and cycle phases</li>
            <li>Food and hydration habits</li>
            <li>Basic lab values (A1C, lipids, thyroid)</li>
          </ul>

          <h2>Is my data anonymous?</h2>
          <p>
            Vitruvia is being designed with anonymity and privacy as a core
            principle. The goal is to use patterns across many people without
            exposing individual identities, and to avoid connecting your
            personal identity to the insights you receive.
          </p>
          <p>
            As the product evolves, we&apos;ll publish clear, human-readable
            explanations of how your data is stored, processed, and protected.
          </p>

          <h2>Will Vitruvia give me medical advice or diagnoses?</h2>
          <p>
            No. Vitruvia does not provide medical advice, diagnosis, or
            treatment. It&apos;s a tool for awareness and pattern discovery,
            meant to help you notice trends and have more informed conversations
            with your healthcare team.
          </p>

          <h2>Is there a cost to use Vitruvia?</h2>
          <p>
            During the early access phase, Vitruvia may be free or reduced-cost
            while we learn from early members and refine the product. Pricing
            for the full product hasn&apos;t been finalized yet, and early
            members will help shape what feels fair and sustainable.
          </p>

          <h2>Which countries will Vitruvia be available in?</h2>
          <p>
            Early access will likely start in a small number of regions and
            expand over time. If you&apos;d like to be notified when Vitruvia is
            available where you live, join the early access list and include
            your country.
          </p>

          <h2>How can I influence the product direction?</h2>
          <p>
            Early access members are a core part of shaping Vitruvia. You&apos;ll
            have opportunities to share feedback, request features, and tell us
            which health questions matter most to you.
          </p>

          <h3>Still have a question?</h3>
          <p>
            You can always reach out with questions or ideas. Vitruvia is being
            built for people like you — your questions help us build it better.
          </p>

          <p>
            <a className="btn-primary" href="/contact">
              Contact us
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
