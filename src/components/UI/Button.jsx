import React from "react";
export default function Button({ label, onClick, className }) {
  return (
    <button
      onClick={onClick}
      // style={{ background: "#1E3A5F" }}
      className={`w-full bg-green-600 hover:bg-green-700 active:bg-green-700 cursor-pointer text-white py-3 rounded-xl shadow ${className}`}
    >
      {label}
    </button>
  );
}
