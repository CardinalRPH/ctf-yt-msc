import GenreCatButton from "../../components/Button/GenreCatButton";
import SqTHumbnail from "../../components/SqThumbnail";
import { thumbnails } from "../../data/thumbnailDummy";
import HomeThumbnailContainer from "../../components/HomeThumbnailContainer";

const HomePage = () => {
  return (
    <>
      <div className="mx-0 md:mx-20">
        <div className="flex flex-wrap gap-3">
          <GenreCatButton>asdasd</GenreCatButton>
          <GenreCatButton>asdasd</GenreCatButton>
          <GenreCatButton>asdasd</GenreCatButton>
        </div>
        <HomeThumbnailContainer toptitle="listen again" className="" subTitle="again" uriPhoto="https://us.123rf.com/450wm/rawpixel/rawpixel1612/rawpixel161204079/66532382-playing-sound-audio-music-rhythm-art-melody-concept.jpg">
            {thumbnails.map((val,i)=> (
                <SqTHumbnail {...val} key={i}/>
            ))}
        </HomeThumbnailContainer>
        <HomeThumbnailContainer toptitle="listen again" subTitle="again" uriPhoto="https://us.123rf.com/450wm/rawpixel/rawpixel1612/rawpixel161204079/66532382-playing-sound-audio-music-rhythm-art-melody-concept.jpg">
            {thumbnails.map((val,i)=> (
                <SqTHumbnail {...val} key={i}/>
            ))}
        </HomeThumbnailContainer>
        <HomeThumbnailContainer toptitle="listen again" subTitle="again" uriPhoto="https://us.123rf.com/450wm/rawpixel/rawpixel1612/rawpixel161204079/66532382-playing-sound-audio-music-rhythm-art-melody-concept.jpg">
            {thumbnails.map((val,i)=> (
                <SqTHumbnail {...val} key={i}/>
            ))}
        </HomeThumbnailContainer>
      </div>
    </>
  );
};

export default HomePage;
