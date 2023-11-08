import { useEffect } from "react";

type FinishProps = {
  audioPath: string;
  delay?: number;
  redirectPath?: string;
};

const AudioPlayer = ({ audioPath, delay, redirectPath }: FinishProps) => {
  useEffect(() => {
    const audio = new Audio(audioPath);
    audio.play();

    const timeoutId = setTimeout(() => {
      if (redirectPath) {
        window.location.href = redirectPath;
      }

      return null;
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [audioPath, delay, redirectPath]);

  return null;
};

export default AudioPlayer;
