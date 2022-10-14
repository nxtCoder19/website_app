import React from "react";
import { About } from "../components/about";

export const AboutPage = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="text-center font-bold mb-10">
        <span className="text-4xl">
          KloudLite is an automated DevOps console.
        </span>
      </div>
      <About />
    </div>
  );
};
