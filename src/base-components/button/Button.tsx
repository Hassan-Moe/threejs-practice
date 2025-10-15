// src/components/ui/Button.tsx
import { cn } from "@/utils/cn";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { Spinner } from "@/components/spinner/Spinner";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      disabled,
      isLoading,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

    const variantStyles: Record<ButtonVariant, string> = {
      primary: `
        bg-sky-600 text-white 
        hover:bg-sky-700 active:bg-sky-800 
        focus:ring-sky-500
      `,
      secondary: `
        bg-neutral-200 text-neutral-900 
        hover:bg-neutral-300 active:bg-neutral-400 
        focus:ring-neutral-400
      `,
      outline: `
        border border-[var(--color-foreground)] 
        text-[var(--color-foreground)] 
        hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] 
        active:bg-[var(--color-foreground)] active:text-[var(--color-background)] 
        focus:ring-[var(--color-foreground)]
      `,
      ghost: `
        bg-transparent 
        text-[var(--color-foreground)] 
        hover:brightness-90 active:brightness-80 
        focus:ring-[var(--color-foreground)]
      `,
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const isInteractive = !disabled && !isLoading;

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          isInteractive
            ? "cursor-pointer"
            : "cursor-not-allowed pointer-events-none",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Spinner className="w-4 h-4 mr-2" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
