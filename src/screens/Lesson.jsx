import React, { useState } from "react";
import { lessons } from "../data/lessons";
import Question from "../components/Question";
import LessonComplete from "./LessonComplete";

export default function Lesson() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="pt-5">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {lessons[0].title}
          </h2>
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
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
              className="lucide lucide-trophy w-4 h-4"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
            {currentQuestion}/{lessons[0].questions.length}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${
                (currentQuestion / lessons[0].questions.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>

      {currentQuestion < lessons[0].questions.length && (
        <Question
          description={lessons[0].questions[currentQuestion].description}
          title={lessons[0].questions[currentQuestion].title}
          example={lessons[0].questions[currentQuestion].example}
          options={lessons[0].questions[currentQuestion].options}
          next={() => setCurrentQuestion(currentQuestion + 1)}
          isFinalQuestion={currentQuestion == lessons[0].questions.length - 1}
        />
      )}
      {currentQuestion >= lessons[0].questions.length && (
        <LessonComplete
          totalQuestions={lessons[0].questions.length}
          score={lessons[0].questions.length}
        />
      )}
    </div>
  );
}
