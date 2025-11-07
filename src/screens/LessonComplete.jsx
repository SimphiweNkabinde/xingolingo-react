import React, { useEffect } from "react";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

export default function LessonComplete({ totalQuestions, score, lessonId }) {
  const navigate = useNavigate();

  useEffect(() => {
    const completeLessons =
      JSON.parse(localStorage.getItem("completed_lessons")) || [];
    completeLessons.push(lessonId);

    localStorage.setItem("completed_lessons", JSON.stringify(completeLessons));
  }, []);
  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-trophy w-10 h-10 text-yellow-400"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
          <path d="M4 22h16"></path>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-2">Lesson Complete</h2>
      <p className="mb-6">Great Job on Completing this lesson</p>
      <img
        className="rounded-xl w-15 animate-bounce mx-auto my-4"
        src="/images/xingo-celebrate.webp"
        alt=""
      />
      <div className="bg-yellow-500 rounded-xl p-6 mb-6">
        <div className="text-5xl font-bold mb-2">
          {(score / totalQuestions) * 100}%
        </div>
        <p>
          {score} out of {totalQuestions} complete
        </p>
      </div>
      <div>
        <Button onClick={() => navigate("/profile")} variant="success">
          Back to Lessons
        </Button>
      </div>
    </div>
  );
}
