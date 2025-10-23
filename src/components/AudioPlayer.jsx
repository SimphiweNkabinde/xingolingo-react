import React from "react";
import useAudio from "../utils/useAudio";
export default function AudioPlayer({ src }) {
  const { play } = useAudio(src);
  return (
    <button
      onClick={play}
      className="p-2 bg-indigo-100 rounded-full hover:bg-indigo-200"
    >
      🔊 Play
    </button>
  );
}
