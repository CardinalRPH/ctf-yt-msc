import { useRef, useState, useEffect, type ReactNode } from "react";

interface HomeThumbnailContainerPorps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  toptitle: string;
  subTitle?: string;
  uriPhoto?: string;
}

const HomeThumbnailContainer = ({
  children,
  toptitle,
  subTitle,
  uriPhoto,
  ...props
}: HomeThumbnailContainerPorps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 300; // scroll per click
    const newScrollPos =
      direction === "left"
        ? el.scrollLeft - scrollAmount
        : el.scrollLeft + scrollAmount;

    el.scrollTo({ left: newScrollPos, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize state

    return () => el.removeEventListener("scroll", handleScroll);
  }, [children]);
  return (
    <div {...props} >
      <div className="relative">
        <div className="flex my-3">
          {uriPhoto && (
            <img
              className="w-16 h-16 mr-4 rounded-full object-cover"
              src={uriPhoto}
              alt="user photo"
            />
          )}
          <div className="block">
            <h3 className="text-zinc-400 text-2xl uppercase">{subTitle}</h3>
            <h2 className="text-white text-3xl font-bold">{toptitle}</h2>
          </div>
        </div>
        <div className="flex absolute bottom-0 right-0 justify-end mb-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 bg-stone-950 border-zinc-500 border-2 rounded-full mx-1 text-white ${
              !canScrollLeft
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:border-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="white"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 bg-stone-950  border-zinc-500 border-2 rounded-full  mx-1 text-white ${
              !canScrollRight
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:border-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white w-4 h-4"
              fill="white"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto gap-6 flex pb-7 whitespace-nowrap scroll-smooth   [&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        {children}
      </div>
    </div>
  );
};
export default HomeThumbnailContainer;
