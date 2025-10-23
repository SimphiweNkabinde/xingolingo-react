import React from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { languages } from "../data/languages";
import AudioPlayer from "../components/AudioPlayer";

export default function LanguageSelection() {
  const navigate = useNavigate();
  const { setProfile } = useProgress();

  const selectLanguage = (lang) => {
    setProfile((p) => ({ ...p, language: lang.name }));
    navigate("/user-type");
  };

  return (
    <div
      style={{ background: "#1E3A5F" }}
      className="h-screen flex items-center text-white flex-col justify-center gap-10"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Which language do you want to learn?
      </h2>
      <div className="flex flex-col gap-5 w-full max-w-md">
        {languages.map((lang) => (
          <button
            key={lang.name}
            onClick={() => selectLanguage(lang)}
            class="w-full md:w-auto bg-green-600 hover:bg-green-700 active:bg-green-700 py-3 font-semibold capitalize px-5 rounded-xl"
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}
