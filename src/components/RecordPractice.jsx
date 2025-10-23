import React, { useState, useEffect } from 'react';

export default function RecordPractice({ phrase }) {
  const [recording, setRecording] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) setSupported(true);
  }, []);

  async function start() {
    setRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
        setRecording(false);
        stream.getTracks().forEach((t) => t.stop());
      }, 2000);
    } catch (e) {
      console.error(e);
      setRecording(false);
    }
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="text-sm text-gray-600">Say: <span className="font-semibold">{phrase}</span></div>
      <div className="mt-2 flex gap-2">
        <button onClick={start} disabled={!supported || recording} className={`px-4 py-2 rounded-lg ${recording ? 'bg-red-300' : 'bg-white border'}`}>
          {recording ? 'Recording...' : 'Record'}
        </button>
        <button className="px-4 py-2 rounded-lg border">Play Example</button>
      </div>
      {!supported && <div className="mt-2 text-xs text-red-500">Microphone not available or blocked.</div>}
    </div>
  );
}
