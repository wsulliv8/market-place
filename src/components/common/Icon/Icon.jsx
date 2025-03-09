import React from "react";
import styles from "./Icon.module.css";

export default function Icon({
  icon: IconComponent,
  size = 20,
  color = "currentColor",
  fill = "currentcolor",
  className = "",
  ...props
}) {
  return (
    <span className={`${styles.iconWrapper} ${className}`}>
      <IconComponent
        size={size}
        color={color}
        fill={fill}
        className={styles.icon}
        {...props}
      />
    </span>
  );
}
