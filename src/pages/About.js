import React from "react";
import { AboutComponent } from "../components/AboutComponent";

export const About = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="text-center font-bold mb-10">
        <span className="text-4xl">
          KloudLite is an automated DevOps console.
        </span>
      </div>
      <AboutComponent />
    </div>
  );
};
