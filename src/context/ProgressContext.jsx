import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();
const STORAGE_KEY = 'xingoLingoUserData';

export const ProgressProvider = ({ children }) => {
  const [profile, setProfile] = useState({ name: '', goal: 1, language: '', userType: '' });
  const [xp, setXp] = useState(0);
  const [beads, setBeads] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setProfile(parsed.profile || { name: '', goal:1, language:'', userType:'' });
      setXp(parsed.xp || 0);
      setBeads(parsed.beads || 0);
    }
  }, []);

  useEffect(() => {
    const data = { profile, xp, beads };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [profile, xp, beads]);

  return (
    <ProgressContext.Provider value={{ profile, setProfile, xp, setXp, beads, setBeads }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
