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
  description: "Advanced Industrial Gearbox Solutions & Precision Engineering for Standard Gearboxes, Customized Gearboxes, and Gears & Components.",
  keywords: ["Gearboxes", "Standard Gearboxes", "Customized Gearboxes", "Gears and Components", "Gishnu Gears", "Custom Industrial Gearbox", "Industrial Transmissions"],
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
      <body className="min-h-full bg-background text-foreground selection:bg-brand-gold selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
