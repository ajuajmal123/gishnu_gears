import React from "react";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean; // Maintained for API compatibility
}

export default function Logo({ className = "h-12", showSubtitle = true }: LogoProps) {
  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Gishnu Gears Logo"
        className="h-full w-auto object-contain object-left filter brightness-95 contrast-105"
      />
    </div>
  );
}
