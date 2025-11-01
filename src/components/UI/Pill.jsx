import React from "react";

export default function Pill({ children, className }) {
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 ${className}`}
    >
      {children}
    </span>
  );
}
