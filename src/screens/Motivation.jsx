import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";

export default function Motivation() {
  const navigate = useNavigate();
  const motivations = [
    "🧑‍🧑‍🧒‍🧒 To speak to my family",
    "🪘 To understand my culture",
    "🎤 To sing and perform",
    "📚 To do well at school",
    "😸 Just for fun",
  ];

  return (
    <div className="h-screen flex items-center flex-col justify-center gap-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Why do you want to learn?
      </h2>
      <div className="flex flex-col gap-5 w-full max-w-md">
        {motivations.map((m) => (
          <Button key={m} onClick={() => navigate("/daily-goal")}>
            {m}
          </Button>
        ))}
      </div>
    </div>
  );
}
