import { Waveform } from "@phosphor-icons/react/dist/ssr";
import styles from "../styles/wave.module.css";

export default function Voice({ isPlaying }: { isPlaying: boolean }) {
  const waveClasses = isPlaying ? styles["wave-animation"] : "";
  return (
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
  );
}
