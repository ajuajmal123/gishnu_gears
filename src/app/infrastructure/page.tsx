"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Infrastructure from "@/components/sections/Infrastructure";

export default function InfrastructurePage() {
  const router = useRouter();

  const handleBackToPortal = () => {
    router.push("/?portal=true");
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar onBackToPortal={handleBackToPortal} />
      <div className="pt-8">
        <Infrastructure />
      </div>
      <Footer onBackToPortal={handleBackToPortal} />
    </main>
  );
}
