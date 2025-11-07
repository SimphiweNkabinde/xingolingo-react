import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ProgressProvider } from "./context/ProgressContext";

import Splash from "./screens/Splash";
import LanguageSelection from "./screens/LanguageSelection";
import UserType from "./screens/UserType";
import Motivation from "./screens/Motivation";
import DailyGoal from "./screens/DailyGoal";
import ProfileSetup from "./screens/ProfileSetup";
import HomeMap from "./screens/HomeMap";
import SplashStart from "./screens/SplashStart";
import Lesson from "./screens/Lesson";
import Lessons from "./screens/Lessons";

export default function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(315deg,rgba(22, 163, 74, 1) -95%, rgba(30, 58, 95, 1) 45%)",
      }}
      className="min-h-screen py-1 px-5 bg-gradient-to-br from-blue-50 via-white to-green-50 text-white"
    >
      <ProgressProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/start" element={<SplashStart />} />
            <Route path="/language" element={<LanguageSelection />} />
            <Route path="/user-type" element={<UserType />} />
            <Route path="/motivation" element={<Motivation />} />
            <Route path="/daily-goal" element={<DailyGoal />} />
            <Route path="/profile" element={<ProfileSetup />} />
            <Route path="/home" element={<HomeMap />} />
            <Route path="/lesson/:id" element={<Lesson />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ProgressProvider>
    </div>
  );
}
