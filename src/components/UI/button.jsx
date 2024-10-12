import React from "react";

// Button Component
export function Button({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };
  const sizes = {
    default: "h-10 py-5 px-5",
    sm: "h-9 px-3 rounded-md",
    lg: "h-14 py-4 px-8 rounded-md",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    className || ""
  }`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}