import React from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import Button from "../components/UI/Button";
import { lessons } from "../data/lessons";

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
    navigate(`/lesson/${lessons[0].id}`);
  };

  return (
    <div className="h-screen flex items-center flex-col justify-center gap-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        How many stories per day?
      </h2>
      <div className="flex flex-col gap-5 w-full max-w-md">
        {goals.map((g) => (
          <Button
            variant="success"
            key={g.value}
            onClick={() => setGoal(g.value)}
          >
            {g.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
