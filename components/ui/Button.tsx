"use client";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  primary: "bg-brand-gold text-white hover:bg-brand-gold/90",
  secondary: "bg-brand-dark text-white hover:bg-brand-dark/90",
  outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white",
};

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded font-semibold text-sm transition-colors inline-block text-center";
  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}