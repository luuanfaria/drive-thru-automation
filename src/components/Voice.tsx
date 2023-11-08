"use client";

import { Waveform } from "@phosphor-icons/react/dist/ssr";
import styles from "../styles/wave.module.css";
import { useState } from "react";

type VoiceProps = {
  isPlaying: boolean;
};

export default function Voice({ isPlaying }: VoiceProps) {
  const waveClasses = isPlaying ? styles["wave-animation"] : "";
  const [hasAction, setHasAction] = useState(false);

  return (
    <div>
      {hasAction && (
        <div>
          <div className="flex gap-1 justify-center items-center text-center text-2xl font-extralight">
            <button
              onClick={() => console.log("Do this")}
              className="bg-brand text-white py-1 px-3 rounded-lg text-center items-center"
            >
              How about a dessert?
            </button>
          </div>
        </div>
      )}
      <div
        className={`flex bg-brand rounded-3xl px-2 py-4 items-center justify-center gap-0 w-60 h-16 mt-6 ${waveClasses}`}
      >
        <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
        <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
        <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
        <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
        <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
        <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
      </div>
    </div>
  );
}
