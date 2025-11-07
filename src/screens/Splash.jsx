import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/start");
    }, 5000);
  }, []);
  return (
    <div className="h-screen flex items-center gap-12 flex-col justify-center">
      <h1 className="text-5xl font-bold text-center">Xingo Lingo</h1>
      <img
        src="/images/xingo-face-smile.webp"
        className="w-20 animate-bounce rounded-full"
        alt=""
      />
      <p>Speak the Lingo. Feel the Culture.</p>
    </div>
  );
}
