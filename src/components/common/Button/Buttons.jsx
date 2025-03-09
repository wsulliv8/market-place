import React from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  type = "button",
  className = "",
  ...props
}) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ].join(" ");

  return (
    <button type={type} className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
