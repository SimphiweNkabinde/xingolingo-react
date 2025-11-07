import React, { useEffect, useState } from "react";
import { lessons as AllLessons, lessons } from "../data/lessons";
import Question from "../components/Question";
import LessonComplete from "./LessonComplete";
import { useParams } from "react-router-dom";

export default function Lesson() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    setLesson(lessons.find((item) => item.id === id));
  }, []);

  return (
    lesson && (
      <div className="pt-5">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{lesson.title}</h2>
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
              {currentQuestion}/{lesson.questions.length}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(currentQuestion / lesson.questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {currentQuestion < lesson.questions.length && (
          <Question
            description={lesson.questions[currentQuestion].description}
            title={lesson.questions[currentQuestion].title}
            example={lesson.questions[currentQuestion].example}
            options={lesson.questions[currentQuestion].options}
            next={() => setCurrentQuestion(currentQuestion + 1)}
            isFinalQuestion={currentQuestion == lesson.questions.length - 1}
          />
        )}
        {currentQuestion >= lesson.questions.length && (
          <LessonComplete
            lessonId={lesson.id}
            totalQuestions={lesson.questions.length}
            score={lesson.questions.length}
          />
        )}
      </div>
    )
  );
}
