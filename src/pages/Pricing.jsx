import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Get started with 3 free mockups to explore our platform.",
      features: ["3 mockups / month", "Basic scenes", "Standard quality"],
      cta: "Start Free",
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description:
        "Perfect for creators who need consistent high-quality output.",
      features: [
        "Unlimited mockups",
        "HD exports",
        "All scene categories",
        "Priority rendering",
      ],
      cta: "Go Pro",
      highlight: true,
    },
    {
      name: "Agency",
      price: "$29",
      period: "/month",
      description: "Ideal for teams, agencies, and e-commerce brands.",
      features: [
        "Unlimited mockups",
        "4K exports",
        "Team collaboration",
        "Dedicated support",
      ],
      cta: "Get Agency Plan",
    },
  ];

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full text-center animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-light text-zinc-900 mb-6">
          Simple, Transparent <span className="text-violet-600">Pricing</span>
        </h1>
        <p className="text-zinc-600 mb-12 text-lg max-w-2xl mx-auto">
          Choose a plan that fits your workflow. Upgrade or cancel anytime.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-3xl border p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? "border-violet-400 bg-gradient-to-b from-violet-50 to-white"
                  : "border-zinc-200 bg-white"
              }`}
            >
              <h2 className="text-xl font-semibold text-zinc-800 mb-3">
                {plan.name}
              </h2>
              <p className="text-4xl font-bold text-zinc-900 mb-1">
                {plan.price}
                <span className="text-base font-normal text-zinc-500">
                  {plan.period || ""}
                </span>
              </p>
              <p className="text-sm text-zinc-500 mb-6">{plan.description}</p>

              <ul className="text-sm text-zinc-700 mb-8 space-y-2 text-left">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-violet-500">✓</span> {f}
                  </li>
                ))}
              </ul>

              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  plan.highlight
                    ? "bg-violet-500 text-white hover:bg-violet-600"
                    : "bg-black text-white hover:bg-zinc-900"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
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
