import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import RecordPractice from "../components/RecordPractice";

const quiz = [
  {
    intro: "👋 Molo! Let's start!",
    question: "What does 'Molo' mean?",
    options: [
      { value: "Hello", correct: true },
      { value: "Goodbye" },
      { value: "Goodnight" },
    ],
    feedback: {
      correct: "🎉 Well done!",
      incorrect: "🫠 Let's try again",
    },
  },
  {
    intro: "Enkosi",
    question: "Match 'Enkosi' with the correct meaning?",
    options: [
      { value: "Please" },
      { value: "Thank you", correct: true },
      { value: "Goodbye" },
    ],
    feedback: {
      correct: "🎉Well done!",
      incorrect: "🫠 Let's try again",
    },
  },
];
export default function SampleLesson() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center flex-col justify-center gap-10 text-white">
      <h2 className="text-4xl mb-4">First Lesson</h2>

      <p className="mb-2 text-2xl">{quiz[currentStep].intro}</p>
      <div>
        <p className="mb-5">{quiz[currentStep].question}</p>
        <div className="flex flex-col w-full gap-5">
          {quiz[currentStep].options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                if (option.correct) {
                  setAnswerIsCorrect(true);
                  setTimeout(() => {
                    if (currentStep < quiz.length - 1) {
                      setCurrentStep(currentStep + 1);
                      setShowFeedback(false);
                    }
                  }, [1500]);
                } else {
                  setAnswerIsCorrect(false);
                }
                setShowFeedback(true);
              }}
              className="w-full md:w-auto bg-white text-black hover:bg-green-100 active:bg-green-700 py-3 font-semibold capitalize px-5 rounded-xl"
            >
              {option.value}
            </button>
          ))}
        </div>
      </div>

      {showFeedback && (
        <p>
          {answerIsCorrect
            ? quiz[currentStep].feedback.correct
            : quiz[currentStep].feedback.incorrect}
        </p>
      )}
      {currentStep == quiz.length - 1 && showFeedback && answerIsCorrect ? (
        <button
          onClick={() => navigate("/profile")}
          className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-xl"
        >
          Continue
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
