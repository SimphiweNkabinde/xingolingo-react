import React from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { languages } from "../data/languages";
import Button from "../components/UI/Button";

export default function LanguageSelection() {
  const navigate = useNavigate();
  const { setProfile } = useProgress();

  const selectLanguage = (lang) => {
    setProfile((p) => ({ ...p, language: lang.name }));
    navigate("/user-type");
  };

  return (
    <div className="h-screen flex items-center flex-col justify-center gap-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Which language do you want to learn?
      </h2>
      <div className="flex flex-col gap-5 w-full max-w-md">
        {languages.map((lang) => (
          <Button
            variant="success"
            key={lang.name}
            onClick={() => selectLanguage(lang)}
          >
            <span className="font-semibold">{lang.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
