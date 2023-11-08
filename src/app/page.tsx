"use client";

import Image from "next/image";
import Link from "next/link";

import SmashBurguerImage from "../../public/image/smash-burger.jpg";
import Voice from "@/components/Voice";
import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVoice = () => {
    const audio = new Audio("/voice/welcome-voice.wav");

    audio.play();
    audio.onplay = () => setIsPlaying(true);
    audio.onended = () => setIsPlaying(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid text-center gap-5">
        <h1 className="font-anton font-bold text-6xl">Welcome</h1>
        <div className="flex gap-1 justify-center items-center text-center text-2xl font-extralight">
          <Link
            href="/order"
            className="bg-brand text-white py-1 px-3 rounded-lg text-center items-center"
          >
            Menu
          </Link>
          <p>or</p>
          <Link
            href="/order"
            className="bg-darkest text-white py-1 px-3 rounded-lg text-center items-center"
          >
            order?
          </Link>
        </div>
        <Image
          className="w-60 h-60 rounded-full object-cover justify-center items-center shadow-md"
          alt="Hamburguer Image"
          src={SmashBurguerImage}
          width={320}
          height={320}
          priority
        />
        <div onClick={playVoice} className="cursor-pointer">
          <Voice isPlaying={isPlaying} />
        </div>
      </div>
    </div>
  );
}
