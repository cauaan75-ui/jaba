import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  variant?: "default" | "inverse";
  className?: string;
}

export default function Logo({
  size = "md",
  showTagline = false,
  variant = "default",
  className = "",
}: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl md:text-5xl",
  };

  const taglineSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base md:text-lg",
  };

  const middleColor = variant === "inverse" ? "text-ink-inverse" : "text-ink";
  const taglineColor =
    variant === "inverse" ? "text-ink-inverse/70" : "text-ink/70";

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`${sizeClasses[size]} font-bold tracking-tight`}>
        <span className="text-ember">BAR</span>
        <span className={middleColor}> DO </span>
        <span className="text-wood">JABA</span>
      </div>
      {showTagline && (
        <p className={`${taglineSizeClasses[size]} ${taglineColor} mt-1 tracking-wide`}>
          Self-Service com Churrasco
        </p>
      )}
    </div>
  );
}
