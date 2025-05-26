import { Outlet } from "react-router-dom";
import NavbabarComponent from "../../components/NavbarComponent";
import SidebarComponent from "../../components/SidebarComponent";
import { useEffect, useRef, useState } from "react";
import MediaContainer from "../../components/MediaControl/MediaContainer";
import MediaOverComponent from "../../components/MediaControl/MediaOverComponent";
import MeidaArtComponent from "../../components/MediaControl/MediaArtComponent";

const RootLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDektop, setIsDesktop] = useState(false);
  const [mediaOverOpen, setMediaoverOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setSidebarOpen(false);
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
      setSidebarOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) &&
        window.innerWidth < 640
      ) {
        setSidebarOpen(false);
      }
    };

    const handleChangeWindow = () => {
      if (window.innerWidth < 1024 && window.innerWidth >=640) {
        setSidebarOpen(false);
        setIsDesktop(true);
      } else if (window.innerWidth < 640) {
        setSidebarOpen(false);
        setIsDesktop(false);
      } else {
        setSidebarOpen(true);
        setIsDesktop(true);
      }
    };

    window.addEventListener("resize", handleChangeWindow);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleChangeWindow);
    };
  }, [sidebarOpen]);

  return (
    <>
      <NavbabarComponent
        isSidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        refProp={navbarRef}
      />
      <SidebarComponent
        isOpen={sidebarOpen}
        ref={sidebarRef}
        isDesktop={isDektop}
      />
      <MediaOverComponent sidebarOpen={sidebarOpen} isDesktop={isDektop} isOpen={mediaOverOpen} />
      <MediaContainer isMediaOverOpen={mediaOverOpen} setMediaOverOpen={setMediaoverOpen} />
      <MeidaArtComponent isMediaOverOpen={mediaOverOpen} />
      <div
        className={`p-4  ${
          sidebarOpen ? "sm:ml-64" : isDektop ? "sm:ml-16" : "sm:ml-0"
        } transition-normal duration-300  bg-stone-950 dark:border-zinc-500`}
      >
        <div className="p-4  bg-stone-950  my-14">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
