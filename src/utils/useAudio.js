import { useEffect, useRef } from 'react';

export default function useAudio(src) {
  const audioRef = useRef(null);
  useEffect(() => {
    if (!src) return;
    audioRef.current = new Audio(src);
    return () => audioRef.current && audioRef.current.pause();
  }, [src]);

  const play = () => audioRef.current?.play();
  const pause = () => audioRef.current?.pause();

  return { play, pause, audioRef };
}
