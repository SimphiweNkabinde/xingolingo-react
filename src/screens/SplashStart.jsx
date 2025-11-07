import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";

export default function SplashStart() {
  const navigate = useNavigate();
  return (
    <div
      // style={{ background: "#1E3A5F" }}
      className="h-screen flex items-center flex-col justify-center gap-10"
    >
      <h1 className="text-4xl font-semibold text-center">Ready?</h1>
      <div className="flex flex-col gap-5 w-full max-w-md">
        <Button variant="success" onClick={() => navigate("/language")}>
          Let's Begin
        </Button>
      </div>
    </div>
  );
}
