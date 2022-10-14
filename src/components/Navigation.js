import React from "react";

export const Navigation = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between my-6">
      <div className="flex gap-2">
        <img src="/images/Group 64.svg" alt=""></img>
        <div className="flex">
          <span className="text-blue-700 font-bold">Kloud</span>
          <span className="text-blue-400 font-bold">lite</span>
        </div>
      </div>
      <div>
        <button className="bg-blue-600 text-white py-1 px-4 rounded-md">
          Login to your account
        </button>
      </div>
    </nav>
  );
};
