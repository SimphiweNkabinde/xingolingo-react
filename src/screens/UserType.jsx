import React from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

export default function UserType() {
  const navigate = useNavigate();
  const { setProfile } = useProgress();

  const chooseType = (type) => {
    setProfile((p) => ({ ...p, userType: type }));
    navigate("/motivation");
  };

  return (
    <div className="h-screen flex items-center text-white flex-col justify-center gap-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Who are you?</h2>
      <div className="flex flex-col gap-5 w-full max-w-md">
        {["🧑‍🎓 Student", "🧳 Tourist"].map((type) => (
          <button
            key={type}
            onClick={() => chooseType(type)}
            class="w-full md:w-auto text-white bg-green-600 hover:bg-green-700 active:bg-green-700 py-3 font-semibold capitalize px-5 rounded-xl"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
