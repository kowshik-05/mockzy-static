import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-black px-6 relative overflow-hidden">
      {/* Large 404 */}
      <h1 className="text-[120px] md:text-[180px] font-extrabold tracking-tighter text-black/10 select-none">
        404
      </h1>

      {/* Subheading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-lg text-zinc-600 max-w-lg text-center mb-8">
        The page you’re looking for doesn’t exist or may have been moved. Let’s
        take you back home.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-zinc-900 transition-all duration-300"
      >
        Back to Home
      </button>

      {/* Subtle floating shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-black/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-black/5 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>
    </div>
  );
}
