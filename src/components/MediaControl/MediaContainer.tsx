import {
  useEffect,
  useRef,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import MediaControlLeft from "./MediaControlLeft";
import MediaControlMid from "./MediaControlMid";
import MediaControlRight from "./MediaControlRight";
import AudioSong from "../../data/My Chemical Romance - I-'m Not Okay (I Promise).flac";
import AudioPlayerComponent, {
  type AudioPlayerHandle,
} from "../AudioPlayerComponent";
import { parseBlob } from "music-metadata";

interface MediaContainerProps {
  isMediaOverOpen: boolean;
  setMediaOverOpen: Dispatch<SetStateAction<boolean>>;
}

const MediaContainer = ({
  isMediaOverOpen,
  setMediaOverOpen,
}: MediaContainerProps) => {
  const seekerOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const valuePercentage =
      (Number(e.target.value) / Number(e.target.max)) * 100;
    e.target.style.background = `linear-gradient(to right, red ${valuePercentage}%, transparent ${valuePercentage}%)`;
  };

  useEffect( () => {
    const fetchMetaData =  async()=> {
      try {
        const response = await fetch(AudioSong)
        const metaData = await parseBlob(await response.blob())
        console.log(metaData);
        
      } catch (error) {
        console.error(error);
        
      }
    }
    fetchMetaData()
  }, []);

  const audioPlayerRef = useRef<AudioPlayerHandle>(null);
  return (
    <div className="fixed w-full bg-zinc-800 ring-zinc-400 ring-1 h-16 z-50 bottom-0" onClick={()=> setMediaOverOpen(!isMediaOverOpen)}>
      {/* seeker */}
      <div className="relative">
        <input
          defaultValue={0}
          type="range"
          max={100}
          min={0}
          name=""
          id="seekers"
          onChange={seekerOnchange}
          className="absolute top h-0.5 w-full appearance-none "
        />
        {/* <div className="absolute top-0 h-1 bg-red-500 w-1/2"></div> */}
      </div>
      <AudioPlayerComponent ref={audioPlayerRef} src={AudioSong} volume={1} />
      {/* control */}
      <div className="flex px-1 flex-row-reverse lg:flex-row justify-between">
        <MediaControlLeft audioRef={audioPlayerRef.current} />
        <MediaControlMid />
        <MediaControlRight
          setMediaOverOpen={setMediaOverOpen}
          isMediaOverOpen={isMediaOverOpen}
        />
      </div>
    </div>
  );
};

export default MediaContainer;
