"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      {/* Brand: logo mark + wordmark */}
      <Link href="/" className="brand-wrapper">
        <img
          src="/assets/vitruvia-logo.png"   // <— your actual file path
          alt="Vitruvia logo"
          className="brand-logo"
        />
        <span className="brand-name">Vitruvia</span>
      </Link>

      {/* Right side navigation links */}
      <div className="nav-right">
        <Link href="/how-it-works" className="nav-link">
          How it works
        </Link>
        <Link href="/faq" className="nav-link">
          FAQ
        </Link>
        <Link href="/privacy" className="nav-link">
          Privacy
        </Link>
        <Link href="/contact" className="nav-link">
          Contact
        </Link>

        {/* CTA works from every page: goes to homepage CTA section */}
        <a href="/#early-access" className="nav-link nav-link-primary">
          Get Early Access
        </a>
      </div>
    </nav>
  );
}




