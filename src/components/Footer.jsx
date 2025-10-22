import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-12 mt-0">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Brand + Description */}
        <div>
          <h2 className="text-xl font-semibold mb-2">MockupAI</h2>
          <p className="text-sm text-zinc-400 max-w-xs">
            Instantly generate high-quality product mockups using AI. Simplify
            your creative workflow — no design skills needed.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-medium text-zinc-300">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="/features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="/pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-zinc-300">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
