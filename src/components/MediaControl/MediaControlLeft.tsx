import type { AudioPlayerHandle } from "../AudioPlayerComponent";

interface MediaControlLeftProps {
  audioRef: AudioPlayerHandle | null;
}
const MediaControlLeft = ({ audioRef }: MediaControlLeftProps) => {
  const playPause = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    console.log(audioRef);

    if (audioRef) {
      audioRef.play();
    }
  };

  const goPrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const goNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };
  return (
    <div className="flex py-2 gap-4 justify-end items-center w-1/4 lg:w-[292px]">
      <button
        className=" cursor-pointer p-2 ease-in duration-150 hidden lg:block  active:bg-zinc-400 rounded-full"
        onClick={goPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-5"
          fill="white"
          viewBox="0 0 320 512"
        >
          <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z" />
        </svg>
      </button>
      <button
        className="cursor-pointer p-2 ease-in duration-150  active:bg-zinc-400  rounded-full"
        onClick={playPause}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="white"
          viewBox="0 0 384 512"
        >
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
        </svg>
      </button>
      <button
        className="cursor-pointer p-2  ease-in duration-150  active:bg-zinc-400 rounded-full"
        onClick={goNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-5"
          fill="white"
          viewBox="0 0 320 512"
        >
          <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z" />
        </svg>
      </button>
      <span className="text-zinc-400 text-xs font-medium text-nowrap hidden lg:block">
        00:00 / 00:00
      </span>
    </div>
  );
};

export default MediaControlLeft;
