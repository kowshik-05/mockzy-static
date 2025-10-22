import React from "react";

export default function Hero() {
  const IMAGES = [
    "https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <section className="relative h-screen bg-white overflow-hidden flex items-center justify-center text-center px-6">
      {/* Floating Images */}
      <div className="absolute inset-0 pointer-events-none">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className={`absolute rounded-[28px] overflow-hidden shadow-md float-up`}
            style={{
              animationDelay: `${i * 0.2}s`,
              ...positions[i],
            }}
          >
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="font-light tracking-wide text-[56px] md:text-[84px] leading-none text-zinc-900">
          inspired.by
        </h1>
        <p className="mt-4 text-zinc-500 text-base md:text-lg">
          made for <span className="tabular-nums">designers.</span>
        </p>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes floatUpLoop {
          0% { transform: translateY(30%); }
          100% { transform: translateY(-30%); }
        }
        .float-up {
          animation: floatUpLoop 2s ease-in-out infinite alternate;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}

/* Positions for each floating image */
const positions = [
  { top: "5%", left: "5%", width: "120px", height: "120px" },
  { top: "10%", right: "15%", width: "160px", height: "100px" },
  { top: "40%", left: "3%", width: "140px", height: "140px" },
  { top: "35%", right: "5%", width: "160px", height: "200px" },
  { bottom: "15%", left: "12%", width: "200px", height: "240px" },
  { bottom: "10%", right: "40%", width: "100px", height: "100px" },
  { top: "20%", left: "35%", width: "100px", height: "100px" },
  { bottom: "5%", right: "5%", width: "160px", height: "120px" },
];
