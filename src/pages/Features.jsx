import React from "react";

export default function Features() {
  const features = [
    {
      title: "AI-Powered Mockup Generation",
      desc: "Upload your product image and let our AI instantly create stunning, studio-quality mockups tailored to your brand aesthetic.",
    },
    {
      title: "Lightning-Fast Rendering",
      desc: "Generate high-resolution visuals in seconds — no manual editing or complex setup required.",
    },
    {
      title: "Multiple Scene Styles",
      desc: "Choose from lifestyle, studio, or creative backgrounds to match your brand’s tone and target audience.",
    },
    {
      title: "Consistent Brand Aesthetic",
      desc: "Keep your visual identity unified across campaigns with auto color-matching and lighting adjustment.",
    },
    {
      title: "Commercial-Ready Quality",
      desc: "Export crisp, high-quality assets optimized for ads, websites, or social media.",
    },
    {
      title: "No Design Skills Needed",
      desc: "Just upload your product — AI handles the rest. Perfect for founders, marketers, and creators.",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full text-center animate-fadeIn">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-light mb-6">
          Powerful Features
        </h1>
        <p className="text-lg text-zinc-600 mb-16 max-w-2xl mx-auto">
          Everything you need to create professional, on-brand mockups — faster
          than ever.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 border border-zinc-200 rounded-3xl bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-left"
            >
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Simple fade animation */}
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
