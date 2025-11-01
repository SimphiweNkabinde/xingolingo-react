import React from "react";
import { lessons } from "../data/lessons";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

export default function Lessons() {
  const navigate = useNavigate();
  return (
    <div className="text-center p-5">
      <h2 className="text-2xl font-bold text-gray-900 mb-10">Lessons</h2>
      <div className="flex flex-col gap-5 w-full max-w-md">
        {lessons.map((lesson) => (
          <Button
            onClick={() => navigate(`/lesson/${lesson.id}`)}
            className="shadow-lg"
          >
            {lesson.title}
          </Button>
        ))}
      </div>
    </div>
  );
}
