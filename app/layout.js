// app/layout.js

import "./globals.css";

export const metadata = {
  title: "Vitruvia — The personal health operating system",
  description:
    "Vitruvia transforms your biometrics, symptoms, medications, meals, hydration, women’s health, and lab results into insights you can act on — all anonymously.",
  openGraph: {
    title: "Vitruvia — The personal health OS",
    description:
      "See what your body has been trying to tell you — intelligently connected health insights based on your unique patterns.",
    url: "https://vitruviahealth.com",
    siteName: "Vitruvia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitruvia — The personal health OS",
    description:
      "Your body has been speaking — Vitruvia helps you finally hear it.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
