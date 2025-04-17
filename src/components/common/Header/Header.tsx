"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./Header.module.scss";

const NAV_LINKS = ["/stuff", "/uses", "/blog"];

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleThemeChange = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.container}>
        <ul className={styles.list}>
          <li>
            <Link href="/" className={styles.button}>
              <span data-visually-hidden>Main page</span>
              <span aria-hidden="true">/</span>
            </Link>
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <Link href={link} className={styles.button}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          <li>
            {mounted ? (
              <button
                aria-pressed={theme === "dark"}
                className={styles.themeSwitch}
                onClick={handleThemeChange}
              >
                <span aria-hidden="true">{theme === "dark" ? "🌞" : "🌙"}</span>
                <span data-visually-hidden>
                  {theme === "dark" ? "Dark theme enabled" : "White theme enabled"}
                </span>
              </button>
            ) : (
              <button className={styles.themeSwitch}>🌞</button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
