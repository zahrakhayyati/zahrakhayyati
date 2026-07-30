import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zahra Khayyati | Architect & Researcher",
  description:
    "Personal academic and professional website of Zahra Khayyati, Architect, Project Manager, and PhD Researcher in Spatial Planning and Sustainable Infrastructure.",
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
