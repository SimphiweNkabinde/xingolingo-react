import React from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

export default function DailyGoal() {
  const navigate = useNavigate();
  const { setProfile } = useProgress();

  const goals = [
    { label: "🌱 One Story (5 min)", value: 1 },
    { label: "🔥 Two Stories (10 min)", value: 2 },
    { label: "👑 Three Stories (15 min)", value: 3 },
  ];

  const setGoal = (goal) => {
    setProfile((p) => ({ ...p, goal }));
    navigate("/sample-lesson");
  };

  return (
    <div className="h-screen flex items-center flex-col justify-center gap-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">
        How many stories per day?
      </h2>
      {goals.map((g) => (
        <button
          key={g.value}
          onClick={() => setGoal(g.value)}
          className="w-full md:w-auto bg-white hover:bg-green-100 active:bg-green-700 py-3 font-semibold capitalize px-5 rounded-xl"
        >
          {g.label}
        </button>
      ))}
    </div>
  );
}
