import type { RefObject } from "react";

interface SidebarComponentProps {
  isOpen: boolean;
  ref?: RefObject<HTMLDivElement | null>;
  isDesktop: boolean;
}

const SidebarComponent = ({ isOpen, ref, isDesktop }: SidebarComponentProps) => {
  return (
    <aside
      ref={ref}
      className={`
        fixed top-0 left-0 z-40 h-screen pt-20 pb-16 transition-all duration-300 ease-in-out 
        bg-white border-r border-gray-200 dark:bg-stone-950 dark:border-zinc-500
        ${isOpen ? "w-64" : "w-16"} 
        ${isDesktop? `sm:${isOpen ? "translate-x-0" : "-translate-x-full"}`:isOpen ? "translate-x-0" : "-translate-x-full"} 
      `}
      // className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
      //   isOpen ? 'translate-x-0' : '-translate-x-full'
      // }`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group"
            >
              <span>
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512" fill="white"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              </span>
              <span
                className={`ms-3 ml-5 transition-opacity duration-300  text-start overflow-x-hidden`}
              >
                Dashboard
              </span>
            </a>
          </li>
          {/* Ulangi untuk item lainnya */}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarComponent;
