import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav">
      <div className="logo">
        <Link href="/" aria-label="Vitruvia home" className="logo-link">
          <span className="brand-lockup">
            <Image
              src="/assets/vitruvia-logo.png"
              alt=""
              width={34}
              height={34}
              priority
            />
            <span className="brand-wordmark">Vitruvia</span>
          </span>
        </Link>
      </div>

      <nav className="nav-right" aria-label="Primary navigation">
        <Link className="nav-link" href="/how-it-works">
          How it works
        </Link>
        <Link className="nav-link" href="/faq">
          FAQ
        </Link>
        <Link className="nav-link" href="/privacy">
          Privacy
        </Link>
        <Link className="nav-link" href="/contact">
          Contact
        </Link>
        <Link className="nav-link nav-link-primary" href="/#get-early-access">
          Get Early Access
        </Link>
      </nav>
    </header>
  );
}





