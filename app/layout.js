// app/layout.js

import "./globals.css";

export const metadata = {
  title: "Vitruvia — The personal health operating system",
  description:
    "Vitruvia transforms your biometrics, symptoms, medications, meals, hydration, women’s health, and lab results into insights you can act on — all anonymously.",
  icons: {
    icon: "/assets/vitruvia-logo.png",        // favicon / browser icon
    shortcut: "/assets/vitruvia-logo.png",
    apple: "/assets/vitruvia-logo.png",
  },
  openGraph: {
    title: "Vitruvia — The personal health operating system",
    description:
      "See what your body has been trying to tell you with nightly health insights from your own data.",
    url: "https://vitruviahealth.com",
    siteName: "Vitruvia",
    type: "website",
    images: [
      {
        url: "/assets/vitruvia-logo.png",     // temporary share image
        width: 800,
        height: 418,
        alt: "Vitruvia — The personal health operating system",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitruvia — The personal health OS",
    description:
      "Your body has been speaking — Vitruvia helps you finally hear it.",
    images: ["/assets/vitruvia-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
