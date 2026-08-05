import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ServiceWorker } from "@/components/ServiceWorker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://testify-ai.openai-sites.com"),
  title: { default: "Testify AI — Practice with purpose", template: "%s · Testify AI" },
  description: "Focused, adaptive practice for major exams and academic competitions—with a morning alarm that turns consistency into a habit.",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Testify AI", statusBarStyle: "default" },
  openGraph: { title: "Testify AI", description: "One focused place to prepare for what matters next.", type: "website", images:[{url:"/og.png",width:1200,height:630,alt:"Testify AI — Practice with purpose"}] },
  twitter: { card: "summary_large_image", title: "Testify AI", description: "Practice with purpose.", images:["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
        <ServiceWorker />
      </body>
    </html>
  );
}
