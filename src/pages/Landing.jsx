import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../components/Hero";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="pt-0">
        {/* Pass the navigation handler as a prop to Hero */}
        <Hero />
      </div>
    </div>
  );
}
