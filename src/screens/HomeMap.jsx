import React from "react";
import { useNavigate } from "react-router-dom";
import { stories } from "../data/stories";

export default function HomeMap() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center flex-col justify-center gap-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">
        Choose Your Story
      </h2>
      <div className="grid gap-4">
        {stories.map((story) => (
          <button
            key={story.id}
            disabled={!story.unlocked}
            onClick={() => navigate(`/story/${story.id}`)}
            className={`p-4 rounded-xl shadow text-left ${
              !story.unlocked
                ? "bg-gray-200 text-gray-500"
                : "bg-white hover:bg-yellow-100"
            }`}
          >
            {story.title} {!story.unlocked && "🔒"}
          </button>
        ))}
      </div>
    </div>
  );
}
