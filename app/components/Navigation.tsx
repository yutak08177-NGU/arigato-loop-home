"use client";

import { useState, useEffect, useCallback } from "react";

const navItems = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#mvv", label: "Mission" },
  { href: "#business", label: "Business" },
  { href: "#company", label: "Company" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="nav-logo">
          eien<span>loop</span>
        </a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="nav-hamburger"
          aria-label="メニュー"
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{ gap: menuOpen ? 0 : 5 }}
        >
          <span
            style={
              menuOpen
                ? { transform: "rotate(45deg) translate(2px, 2px)" }
                : undefined
            }
          />
          <span style={menuOpen ? { opacity: 0 } : undefined} />
          <span
            style={
              menuOpen
                ? { transform: "rotate(-45deg) translate(2px, -2px)" }
                : undefined
            }
          />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " active" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMobile}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
