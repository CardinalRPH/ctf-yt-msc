import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";

export interface AudioPlayerProps {
  src: string;
  volume: number;

  onLoadedMetadata?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  onVolumeChange?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  onSeeked?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  onPlay?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  onPause?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  onTimeUpdate?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  onError?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  onEnded?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  onCanPlay?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  onCanPlayThrough?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  onAbort?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
}

export interface AudioPlayerHandle {
  play: () => void;
  pause: () => void;
  setVolume: (value: number) => void;
}

const AudioPlayerComponent = forwardRef<AudioPlayerHandle, AudioPlayerProps>(
  (
    {
      src,
      volume,
      onLoadedMetadata,
      onVolumeChange,
      onSeeked,
      onPlay,
      onPause,
      onTimeUpdate,
      onError,
      onEnded,
      onCanPlay,
      onCanPlayThrough,
      onAbort,
    },
    ref
  ) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useImperativeHandle(ref, () => ({
      play: () => audioRef.current?.play(),
      pause: () => audioRef.current?.pause(),
      setVolume: (value: number) => {
        if (audioRef.current) {
          audioRef.current.volume = value;
        }
      },
    }));

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
      }
    }, [volume]);

    return (
      <audio
        ref={audioRef}
        src={src}
        onLoadedMetadata={onLoadedMetadata}
        onVolumeChange={onVolumeChange}
        onSeeked={onSeeked}
        onPlay={onPlay}
        onPause={onPause}
        onTimeUpdate={onTimeUpdate}
        onError={onError}
        onEnded={onEnded}
        onCanPlay={onCanPlay}
        onCanPlayThrough={onCanPlayThrough}
        onAbort={onAbort}
      />
    );
  }
);

export default AudioPlayerComponent;
