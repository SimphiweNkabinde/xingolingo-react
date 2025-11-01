import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

export default function StoryLesson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setBeads } = useProgress();

  const finishLesson = () => {
    setBeads((b) => b + 1);
    navigate("/rewards");
  };

  return (
    <div className="h-screen flex items-center flex-col justify-center gap-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">
        Story {id}
      </h2>
      <button
        onClick={finishLesson}
        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl"
      >
        Finish Story
      </button>
    </div>
  );
}
