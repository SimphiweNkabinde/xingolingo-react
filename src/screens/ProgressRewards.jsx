import React from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

export default function ProgressRewards() {
  const navigate = useNavigate();
  const { beads } = useProgress();

  return (
    <div className="h-screen flex items-center flex-col justify-center gap-10 text-white">
      <h2 className="text-2xl font-bold mb-4">🥳 Congratulations!</h2>
      <p className="text-lg">You earned {beads} bead(s)! 🐚</p>
      <button
        onClick={() => navigate("/home")}
        className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-xl"
      >
        Continue
      </button>
    </div>
  );
}
