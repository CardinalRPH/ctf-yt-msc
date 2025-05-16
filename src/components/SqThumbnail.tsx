import { Link } from "react-router-dom";

interface SqTHumbnailProps {
  imgUri: string;
  topText: string;
  thumbType: ThumbnailEnum.single | ThumbnailEnum.playlist;
  botText: string;
  linkTo?: string;
  musicType?: "Album" | "Song";
}

export enum ThumbnailEnum {
  single = "single",
  playlist = "playlist",
}
export enum MusiclEnum {
  album = "Album",
  song = "Song",
}

const SqTHumbnail = ({
  imgUri,
  thumbType,
  topText,
  botText,
  linkTo = "",
  musicType,
}: SqTHumbnailProps) => {
  return (
    <div className="w-44 min-w-44 snap-center">
      <img
        src={imgUri}
        className="aspect-square object-cover mb-2 w-full"
        draggable={false}
        alt={topText}
      />
      <h3 className="text-xl truncate text-white font-bold">{topText}</h3>
      {thumbType === "single" ? (
        <h4 className="text-md text-zinc-300 truncate text-wrap line-clamp-2">
          {musicType}{" • "}
          <Link className="hover:underline" to={linkTo}>
            { botText}
          </Link>
        </h4>
      ) : (
        <h4 className="text-md text-zinc-300 truncate text-wrap line-clamp-2">
          {botText}
        </h4>
      )}
    </div>
  );
};

export default SqTHumbnail;
