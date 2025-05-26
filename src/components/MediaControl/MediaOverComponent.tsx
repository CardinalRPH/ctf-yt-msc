interface MediaOverProps {
  sidebarOpen: boolean;
  isDesktop: boolean;
  isOpen:boolean
}
const MediaOverComponent = ({ sidebarOpen, isDesktop, isOpen }: MediaOverProps) => {
  return (
    <div className={`bg-blue-500 w-full  z-10 ${sidebarOpen && isDesktop ? "sm:ml-64":"sm:ml-16"} my-16 h-full fixed ease-in duration-200 p-3 ${isOpen==false && "translate-y-full"}`}>
      lorem
    </div>
  );
};

export default MediaOverComponent;