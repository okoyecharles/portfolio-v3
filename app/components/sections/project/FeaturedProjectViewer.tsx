import {
  LegacyRef,
  MutableRefObject,
  SyntheticEvent,
  useDebugValue,
  useEffect,
  useRef,
  useState,
} from "react";
import { FeaturedProjectViewerProps } from "./props";
import ImageIcon from "../../svg/abstract/ImageIcon";
import { AutoplayEvents } from "swiper/types";
import Image from "next/image";

export default function FeaturedProjectViewer({
  open,
  setOpen,
  project,
  projectViewMode,
}: FeaturedProjectViewerProps) {
  function handleBgClose(event: SyntheticEvent) {
    if (event.target === event.currentTarget) {
      setOpen(false);
    }
  }
  function handleMouseDown(e: KeyboardEvent) {
    if (e.key == "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  }
  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleMouseDown);
      return () => {
        window.removeEventListener("keydown", handleMouseDown);
      };
    }
  }, [open]);
  return (
    <div
      className={`
        project-viewer-background fixed inset-0 bg-black/30 dark:bg-black/50 z-50 transition-opacity duration-300
        ${open ? "" : " pointer-events-none opacity-0"}
      `}
    >
      <div
        className="project-viewer-container relative w-full h-full"
        onClick={handleBgClose}
      >
        <div
          className={`
          project-viewer absolute inset-8 md:inset-16 rounded-[10px] overflow-hidden
          bg-grey-ea dark:bg-black
          ring-grey-d dark:ring-grey-3 ring-1
          grid grid-rows-auto
        `}
        >
          <header className="flex p-4 bg-white dark:bg-grey-15 items-center ring-grey-d dark:ring-grey-3 ring-1">
            <ImageIcon />
            <h3 className="font-semibold text-grey-1 dark:text-grey-b ml-4">
              {project.name} - {projectViewMode} view
            </h3>
            <button
              className="ml-auto leading-[1] py-1 px-[6px] bg-grey-ea dark:bg-grey-1 ring-1 ring-grey-b dark:ring-grey-4 rounded-sm text-grey-1 dark:text-grey-b select-none hover:bg-grey-d dark:hover:bg-black hover:ring-grey-9 dark:hover:ring-grey-6 transition-colors"
              onClick={() => setOpen(false)}
            >
              Esc
            </button>
          </header>
          <div className="viewer">
            <Image
              className=""
              src={project.image[projectViewMode]}
              alt={`${projectViewMode} view image of ${project.name}`}
              width={projectViewMode === "mobile" ? 122 : 351}
              height={projectViewMode === "mobile" ? 246 : 216}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
