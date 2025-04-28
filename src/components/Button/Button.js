"use client";

import Link from "next/link";
import styles from "./Button.module.scss";

const Button = ({
  children,
  fn,
  href,
  target,
  hollow = false,
  variation = "primary",
  textDecoration,
  label,
  value,
}) => {
  const Tag = href || value ? Link : "button";

  return (
    <Tag
      href={href || value}
      onClick={fn && fn}
      target={target}
      className={`${styles.button} ${hollow ? styles.hollow : styles.filled} ${styles[variation]}`}
      style={{ textDecoration }}
    >
      {children || label}
    </Tag>
  );
};

export default Button;
