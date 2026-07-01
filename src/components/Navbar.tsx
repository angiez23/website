"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const shakeVariant: Variants = {
  rest: { x: 0, y: 0, scale: 1 },
  hover: {
    x: [0, -3, 3, -3, 3, -2, 2, 0],
    y: [0, 2, -2, 3, -3, 2, -2, 0],
    scale: 2.0,
    transition: {
      x: { duration: 0.4, repeat: Infinity, ease: "easeInOut" },
      y: { duration: 0.35, repeat: Infinity, ease: "easeInOut" },
      scale: { duration: 0.2, ease: "easeOut" },
    },
  },
};

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={shakeVariant}
      style={{ display: "inline-block" }}
    >
      <Link
        href={to}
        style={{
          color: "#521A1A",
          textDecoration: "none",
          fontSize: "16px",
          letterSpacing: "0.05em",
          fontFamily: "'Jost', sans-serif",
          textTransform: "lowercase",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px clamp(16px, 4vw, 48px)",
        background: "#FFDB87dd",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <NavLink to="/">Angie Zhang</NavLink>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(16px, 3vw, 32px)",
          }}
        >
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
