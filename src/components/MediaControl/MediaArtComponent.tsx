interface MeidaArtProps {
  isMediaOverOpen: boolean;
}

const MeidaArtComponent = ({ isMediaOverOpen }: MeidaArtProps) => {
  return (
    <div className={`fixed z-10 ${isMediaOverOpen ? "bottom-16 translate-y-full":"bottom-21"} hidden lg:block right-5 h-52 aspect-square ease-in duration-200 rounded`}>
      <img
        src="https://us.123rf.com/450wm/rawpixel/rawpixel1612/rawpixel161204079/66532382-playing-sound-audio-music-rhythm-art-melody-concept.jpg"
        className="aspect-square rounded w-full object-cover"
        alt=""
      />
    </div>
  );
};

export default MeidaArtComponent;
