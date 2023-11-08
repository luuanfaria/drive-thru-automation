"use client";

import Link from "next/link";
import { useEffect } from "react";

type FinishProps = {
  audioPath: string;
  delay: number;
  redirectPath: string;
};

const playAudioWithDelay = ({
  audioPath,
  delay,
  redirectPath,
}: FinishProps) => {
  const audio = new Audio(audioPath);
  audio.play();

  const timeoutId = setTimeout(() => {
    window.location.href = redirectPath;
  }, delay);

  return () => {
    clearTimeout(timeoutId);
  };
};

export default function Finish() {
  useEffect(() => {
    return playAudioWithDelay({
      audioPath: "/voice/enjoy.wav",
      delay: 5000,
      redirectPath: "/",
    });
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center text-center">
      <Link href="/" className="text-7xl font-bold">
        Enjoy
      </Link>
    </div>
  );
}
