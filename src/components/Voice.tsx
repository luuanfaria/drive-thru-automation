import { Waveform } from "@phosphor-icons/react/dist/ssr";

export default function Voice() {
  return (
    <div className="flex bg-brand rounded-3xl px-2 py-4 items-center justify-center gap-0 w-60 h-16 mt-6">
      <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
      <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
      <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
      <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
      <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
      <Waveform size={32} weight="fill" className="m-[-3px]" color="white" />
    </div>
  );
}
