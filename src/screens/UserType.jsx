import React from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import Button from "../components/UI/Button";

export default function UserType() {
  const navigate = useNavigate();
  const { setProfile } = useProgress();

  const chooseType = (type) => {
    setProfile((p) => ({ ...p, userType: type }));
    navigate("/motivation");
  };

  return (
    <div className="h-screen flex items-center flex-col justify-center gap-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Who are you?</h2>
      <div className="flex flex-col gap-5 w-full max-w-md">
        {["🧑‍🎓 Student", "🧳 Tourist", "Missionary"].map((type) => (
          <Button variant="success" key={type} onClick={() => chooseType(type)}>
            <span className="font-semibold">{type}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
