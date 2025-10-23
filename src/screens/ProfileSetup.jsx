import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

export default function ProfileSetup() {
  const navigate = useNavigate();
  const { setProfile } = useProgress();
  const [name, setName] = useState("");

  const handleSubmit = () => {
    setProfile((p) => ({ ...p, name }));
    navigate("/home");
  };

  return (
    <div className="h-screen flex items-center flex-col justify-center gap-10 text-white">
      <p>You’re doing great! You already know the isiXhosa words!</p>
      <h2 className="text-2xl font-bold mb-4">What’s your name, champ?</h2>
      <input
        className="border rounded-xl p-3 mb-4 w-full max-w-sm text-center"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button
        onClick={handleSubmit}
        className="bg-pink-600 text-white px-6 py-3 rounded-xl"
      >
        Continue
      </button>
    </div>
  );
}
