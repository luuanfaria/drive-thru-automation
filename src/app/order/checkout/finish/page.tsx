"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Finish() {
  useEffect(() => {
    const audio = new Audio("/voice/enjoy.wav");
    audio.play();

    const delay = 5000;

    const timeoutId = setTimeout(() => {
      window.location.href = "/";
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center text-center">
      <Link href="/" className="text-7xl font-bold">
        Enjoy
      </Link>
    </div>
  );
}
