import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-white/70 " : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Left: Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-semibold text-lg text-black"
          >
            <span className="h-8 w-8 grid place-items-center rounded-lg bg-black text-white font-bold">
              M
            </span>
            <span>
              Mockup
              <span className="text-black/70">AI</span>
            </span>
          </a>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-800">
            <a
              href="/"
              className="hover:text-black transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/features"
              className="hover:text-black transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="hover:text-black transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="/about"
              className="hover:text-black transition-colors duration-200"
            >
              About
            </a>
          </div>

          {/* Right: Login */}
          <button
            onClick={() => setAuthOpen(true)}
            className="px-8 py-2 text-sm font-semibold rounded-full bg-gray-800 text-white hover:bg-zinc-900 transition-all duration-300"
          >
            Login
          </button>
        </div>
      </nav>
    </>
  );
}
