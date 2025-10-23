import React from "react";
export default function Card({ children }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg w-full max-w-lg">
      {children}
    </div>
  );
}
