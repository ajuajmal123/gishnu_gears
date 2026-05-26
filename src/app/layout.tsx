import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gishnu Gears | Engineering Motion with Precision",
  description: "Advanced Industrial Gearbox Solutions & Precision Engineering for Modern High-End Manufacturing, Railway, Aerospace, and Defence Industries.",
  keywords: ["Gearboxes", "Precision Gears", "Gishnu Gears", "Railway Gearboxes", "Custom Industrial Gearbox", "Siemens Partner", "Bosch Industrial"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-background text-foreground selection:bg-brand-orange selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
