import React, { useState } from "react";
import Button from "./UI/Button";

function setButtonVariant(isSelected, isCorrect) {
  if (isCorrect == null && isSelected) {
    return "primary-outline";
  }

  if (isSelected && isCorrect === false) {
    return "danger-outline";
  }
  if (isSelected && isCorrect === true) {
    return "success-outline";
  }

  return "light-outline";
}

function setAction(isCorrect, isFinalQuestion) {
  if (isCorrect && isFinalQuestion) return "Complete Lesson";
  if (isCorrect == null) return "Check Answer";
  if (isCorrect == false) return "Try Again";
  if (isCorrect == true) return "Next Question";
}

function setActionButtonVariant(isCorrect) {
  if (isCorrect == null) return "primary";
  if (isCorrect == false) return "secondary";
  if (isCorrect == true) return "success";
}

function actionHandler(isCorrect, reset, next, check) {
  if (isCorrect == null) return check();
  if (isCorrect == false) return reset();
  if (isCorrect == true) return next();
}

export default function Question({
  title,
  description,
  example,
  options,
  next,
  isFinalQuestion,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  return (
    <div className="flex flex-col gap-7">
      <div>
        <p className="text-gray-600 text-sm mb-4">{title}:</p>
        <p className="text-lg text-semibold mb-2">{description}</p>
        <div className="bg-gray-100 rounded-lg p-4">
          {/* <p className="text-sm text-gray-500 mb-2">Example:</p> */}
          <i>{example}</i>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full max-w-md">
        {options.map((opt, index) => (
          <Button
            disabled={isCorrect !== null}
            variant={setButtonVariant(selectedIndex == index, isCorrect)}
            onClick={() => setSelectedIndex(index)}
            key={opt.value}
          >
            {opt.value}

            {selectedIndex == index && isCorrect == false && (
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
                className="lucide lucide-x w-5 h-5 text-red-600"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            )}
            {selectedIndex == index && isCorrect == true && (
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
                className="lucide lucide-check w-5 h-5 text-green-600"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            )}
          </Button>
        ))}
      </div>
      {isCorrect !== null && (
        <div className="flex justify-between items-center">
          <p className={`${isCorrect ? "text-green-500" : "text-red-500"}`}>
            {options[selectedIndex].feedback}
          </p>
          <img
            className={`rounded-full w-15 animate-${
              isCorrect ? "bounce" : "pulse"
            }`}
            src={`/images/xingo-${isCorrect ? "happy" : "sad"}.webp`}
            alt=""
          />
        </div>
      )}
      <div className="flex flex-col gap-5 w-full max-w-md">
        <Button
          disabled={isCorrect == null && selectedIndex == null}
          variant={setActionButtonVariant(isCorrect)}
          onClick={() => {
            actionHandler(
              isCorrect,
              () => {
                setIsCorrect(null);
                setSelectedIndex(null);
              },
              () => {
                next();
                setIsCorrect(null);
                setSelectedIndex(null);
              },
              () => setIsCorrect(!!options[selectedIndex].correct)
            );
          }}
        >
          {setAction(isCorrect, isFinalQuestion)}
        </Button>
      </div>
    </div>
  );
}
