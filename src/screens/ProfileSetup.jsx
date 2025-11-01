import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import Button from "../components/UI/Button";
import TextInput from "../components/UI/TextInput";
import Select from "../components/UI/Select";
import NumberInput from "../components/UI/NumberInput";

export default function ProfileSetup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    const profile = localStorage.getItem("profile_name");
    if (profile) navigate("/lessons");
  }, []);

  const forms = [
    {
      label: "What’s your name, champ?",
      inputType: "text",
      inputPlaceholder: "Enter your name",
      onChange: (e) => {
        localStorage.setItem("profile_name", e.target.value);
        setName(e.target.value);
      },
      actionText: "Continue",
      actionHandler: () => {
        setStep(step + 1);
      },
    },
    {
      label: "What’s your age?",
      inputType: "number",
      onChange: (e) => {
        localStorage.setItem("profile_age", e.target.value);
      },
      actionText: "Continue",
      actionHandler: () => {
        setStep(step + 1);
      },
    },
    {
      label: "What’s your gender?",
      inputType: "select",
      onChange: (e) => {
        localStorage.setItem("profile_gender", e.target.value);
      },
      options: ["male", "female"],
      actionText: "Complete Profile Setup",
      actionHandler: () => {
        setStep(step + 1);
      },
    },
  ];

  return (
    <div className="h-screen flex flex-col justify-evenly">
      {step !== forms.length && <h1>Let's get your profile set up</h1>}
      {forms.map((formItem, index) => (
        <div
          key={index}
          className={`${
            step !== index && "hidden"
          } flex items-center flex-col justify-center gap-10 w-full`}
        >
          <h2 className="text-2xl text-center font-bold mb-4">
            {formItem.label}
          </h2>
          {formItem.inputType == "text" && (
            <TextInput
              onChange={(e) => formItem.onChange(e)}
              placeholder={formItem.placeholder}
            />
          )}
          {formItem.inputType == "number" && (
            <NumberInput onChange={(e) => formItem.onChange(e)} />
          )}
          {formItem.inputType == "select" && (
            <Select
              options={formItem.options}
              onChange={(e) => formItem.onChange(e)}
            />
          )}
          <Button variant="primary" onClick={() => formItem.actionHandler()}>
            {formItem.actionText}
          </Button>
        </div>
      ))}

      {step == forms.length && (
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
              className="lucide lucide-check w-15 h-15 text-green-600"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Profile Setup Complete
          </h2>
          <p className="text-gray-600 mb-6">
            Welcome aboard <span className="capitalize">{name}</span>
          </p>
          <img
            className="rounded-xl w-15 animate-bounce mx-auto my-4"
            src="/images/xingo-celebrate.webp"
            alt=""
          />
          <div>
            <Button onClick={() => navigate("/lessons")} variant="primary">
              Go to Lessons
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
