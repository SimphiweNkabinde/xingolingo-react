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
import SampleLesson from "./screens/SampleLesson";
import ProfileSetup from "./screens/ProfileSetup";
import HomeMap from "./screens/HomeMap";
import StoryLesson from "./screens/StoryLesson";
import ProgressRewards from "./screens/ProgressRewards";
import SplashStart from "./screens/SplashStart";

export default function App() {
  return (
    <div style={{ background: "#1E3A5F" }} className="min-h-screen py-1 px-6">
      <ProgressProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/start" element={<SplashStart />} />
            <Route path="/language" element={<LanguageSelection />} />
            <Route path="/user-type" element={<UserType />} />
            <Route path="/motivation" element={<Motivation />} />
            <Route path="/daily-goal" element={<DailyGoal />} />
            <Route path="/sample-lesson" element={<SampleLesson />} />
            <Route path="/profile" element={<ProfileSetup />} />
            <Route path="/home" element={<HomeMap />} />
            <Route path="/story/:id" element={<StoryLesson />} />
            <Route path="/rewards" element={<ProgressRewards />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ProgressProvider>
    </div>
  );
}
