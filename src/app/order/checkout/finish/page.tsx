"use client";

import AudioPlayer from "@/components/AudioPlayer";
import Link from "next/link";

export default function Finish() {
  return (
    <div className="flex flex-1 items-center justify-center text-center">
      <AudioPlayer audioPath="/voice/enjoy.wav" delay={5000} redirectPath="/" />
      <Link href="/" className="text-7xl font-bold">
        Enjoy
      </Link>
    </div>
  );
}
