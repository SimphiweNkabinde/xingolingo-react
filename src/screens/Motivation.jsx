import React from "react";
import { useNavigate } from "react-router-dom";

export default function Motivation() {
  const navigate = useNavigate();
  const motivations = [
    "To speak to my family",
    "To understand my culture",
    "To sing and perform",
    "To do well at school",
    "Just for fun",
  ];

  return (
    <div className="h-screen flex items-center text-white flex-col justify-center gap-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Why do you want to learn?
      </h2>
      {motivations.map((m) => (
        <button
          key={m}
          onClick={() => navigate("/daily-goal")}
          class="w-full md:w-auto text-white bg-green-600 hover:bg-green-700 active:bg-green-700 py-3 font-semibold capitalize px-5 rounded-xl"
        >
          {m}
        </button>
      ))}
    </div>
  );
}
