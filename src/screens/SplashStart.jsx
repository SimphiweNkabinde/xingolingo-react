import React from "react";
import { useNavigate } from "react-router-dom";

export default function SplashStart() {
  const navigate = useNavigate();
  return (
    <div
      style={{ background: "#1E3A5F" }}
      className="h-screen flex items-center text-white flex-col justify-center gap-10"
    >
      <h1 className="text-4xl font-semibold text-center">Ready?</h1>
      <button
        onClick={() => navigate("/language")}
        class="w-full md:w-auto bg-green-600 hover:bg-green-700 active:bg-green-700 py-3 px-5 shadow rounded-xl flex justify-center items-center gap-2"
      >
        Let's Begin
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </button>
    </div>
  );
}
