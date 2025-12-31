import Nav from "../components/Nav";

export default function Contact() {
  return (
    <div className="page">
      <Nav />

      <main className="content">
        <div className="content-inner">
          <h1>Contact Vitruvia</h1>
          <p className="content-lead">
            Have a question, an idea, or interested in collaborating? We&apos;d
            love to hear from you.
          </p>

          <h2>For early access members</h2>
          <p>If you&apos;re on the early access list or interested in joining, you can email us directly with questions about:</p>
          <ul>
            <li>What Vitruvia can and can&apos;t do today</li>
            <li>Ideas for features or health questions you want to explore</li>
            <li>Feedback on how the experience feels</li>
          </ul>

          <h2>General contact</h2>
          <p>You can reach Vitruvia at:</p>
          <p>
            <strong>Email:</strong> hello@vitruviahealth.com
          </p>

          <p>
            As the product grows, we may add more specific contact options (for
            support, partnerships, and research). For now, email is the best way
            to get in touch.
          </p>

          <h3>Interested in partnering or collaborating?</h3>
          <p>
            If you&apos;re a clinician, researcher, or work in health and want to
            explore ways to collaborate, we&apos;re especially interested in
            hearing from you.
          </p>

          <p>
            <a className="btn-primary" href="mailto:hello@vitruviahealth.com">
              Email Vitruvia
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
