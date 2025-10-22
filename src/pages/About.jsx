import React from "react";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-6">
      <div className="max-w-3xl animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-light text-zinc-900 mb-6">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            MockupAI
          </span>
        </h1>

        <p className="text-lg text-zinc-600 leading-relaxed mb-10">
          MockupAI is built for creators, designers, and brands who want to
          bring their ideas to life — instantly. Upload your product, pick a
          style, and let AI generate beautiful, ready-to-use mockups that
          reflect your brand aesthetic.
          <br />
          <br />
          Our mission is to make professional mockup creation effortless and
          inspiring for everyone.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-900 transition-all duration-300"
        >
          Back to Home
        </a>
      </div>

      {/* simple fade animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
