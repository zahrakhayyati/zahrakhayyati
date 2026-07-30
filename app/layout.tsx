import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zahra Khayyati | Academic & Architectural Portfolio",
  description:
    "Academic and architectural portfolio of Zahra Khayyati, focusing on sustainable spatial planning, critical infrastructure, research methodology, and design-led practice.",
  metadataBase: new URL("https://zahra-website.vercel.app"),
  openGraph: {
    title: "Zahra Khayyati",
    description:
      "Academic and architectural portfolio of Zahra Khayyati.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
