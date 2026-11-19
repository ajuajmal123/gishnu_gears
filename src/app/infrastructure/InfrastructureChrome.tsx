"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/** Client wrapper: the shared Navbar/Footer need router callbacks, the page content itself stays server-rendered. */
export default function InfrastructureChrome({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleBackToPortal = () => router.push("/?portal=true");

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar onBackToPortal={handleBackToPortal} />
      {/* Spacer matching the fixed navbar height so the dark hero starts below it */}
      <div aria-hidden className="h-15 sm:h-18 md:h-19 bg-white" />
      {children}
      <Footer onBackToPortal={handleBackToPortal} />
    </main>
  );
}
