import { SyntheticEvent, useEffect, useRef } from "react";
import { FeaturedProjectViewerProps } from "./props";
import ImageIcon from "../../svg/abstract/ImageIcon";
import Image from "next/image";
import { a, useSpring, useTransition } from "@react-spring/web";
import DesktopIcon from "../../svg/icons/DesktopIcon";
import MobileIcon from "../../svg/icons/MobileIcon";

export default function FeaturedProjectViewer({
  open,
  setOpen,
  project,
  projectViewMode,
  setProjectViewMode,
}: FeaturedProjectViewerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // How large the fullscreen image will be compared to the preview
  const IMAGE_SIZE_FACTOR = 3;

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
      closeButtonRef.current?.focus();
      return () => {
        window.removeEventListener("keydown", handleMouseDown);
      };
    }
  }, [open]);

  const openViewerSpring = useSpring({
    scale: open ? 1 : 0.95,
    y: open ? 0 : 16,
    opacity: open ? 1 : 0,
    config: {
      tension: 300,
    },
  });

  const imageTransition = useTransition(projectViewMode, {
    keys: null,
    from: {opacity: 0, config: {tension: 750, clamp: true}},
    enter: {opacity: 1},
    leave: {opacity: 0, config: {tension: 750, clamp: true}},
    exitBeforeEnter: true,
  });

  const activeTogglePos: Record<typeof projectViewMode, number> = {
    desktop: 0,
    mobile: 32,
  };
  const toggleViewModeSpring = useSpring({
    x: activeTogglePos[projectViewMode],
    config: {
      tension: 300,
    },
  });

  return (
    <div
      className={`
        project-viewer-background fixed inset-0 bg-black/30 dark:bg-black/50 z-50 transition-opacity duration-300
        ${open ? "visible" : "invisible pointer-events-none"}
      `}
    >
      <div
        className="project-viewer-container relative w-full h-full"
        onClick={handleBgClose}
      >
        <a.div
          className={`
          project-viewer absolute inset-8 md:inset-16 rounded-[10px] overflow-hidden
          bg-grey-ea dark:bg-black
          ring-grey-d dark:ring-grey-3 ring-1
          grid grid-rows-auto
        `}
          style={openViewerSpring}
        >
          <header className="flex p-4 bg-white dark:bg-grey-15 items-center ring-grey-d dark:ring-grey-3 ring-1">
            <ImageIcon />
            <h3 className="font-semibold text-grey-1 dark:text-grey-b ml-4">
              {project.name}
            </h3>
            <button
              ref={closeButtonRef}
              className="ml-auto leading-[1] py-1 px-[6px] bg-grey-ea dark:bg-grey-1 ring-1 ring-grey-b dark:ring-grey-4 rounded-sm text-grey-1 dark:text-grey-b select-none hover:bg-grey-d dark:hover:bg-black hover:ring-grey-9 dark:hover:ring-grey-6 transition-colors"
              aria-label="close project viewer"
              aria-hidden={!open}
              onClick={() => setOpen(false)}
            >
              Esc
            </button>
          </header>
          <div className="viewer overflow-hidden relative">
            {imageTransition((style, mode) => (
              <a.div className="w-full h-full" style={style}>
                <Image
                  className="w-full h-full object-contain"
                  src={project.image[mode]}
                  alt={`${mode} view image of ${project.name}`}
                  width={
                    mode === "mobile"
                      ? 122 * IMAGE_SIZE_FACTOR
                      : 351 * IMAGE_SIZE_FACTOR
                  }
                  height={
                    mode === "mobile"
                      ? 246 * IMAGE_SIZE_FACTOR
                      : 216 * IMAGE_SIZE_FACTOR
                  }
                />
              </a.div>
            ))}
            <div className="viewer-toggle-container absolute bottom-4 right-4">
              <div
                className="viewer-toggle p-1 flex ring-1 ring-grey-b dark:ring-grey-4 rounded-[20px] relative isolate overflow-hidden self-start bg-white dark:bg-grey-15" role="radiogroup" aria-label="view toggle">
                <a.div
                  className="toggle-active h-8 w-8 bg-grey-9/[35%] dark:bg-grey-5/[50%] rounded-[16px] absolute top-1 -z-10"
                  style={toggleViewModeSpring}
                ></a.div>
                <button
                  className={`
                    toggle group/toggle transition-colors h-8 w-8 grid place-content-center
                    ${projectViewMode === "desktop" ? " is-active" : ""}
                  `}
                  role="radio"
                  aria-label="switch to desktop view"
                  aria-checked={projectViewMode === "desktop"}
                  onClick={() => setProjectViewMode("desktop")}
                >
                  <DesktopIcon />
                </button>
                <button
                  className={`
                    toggle group/toggle transition-colors h-8 w-8 grid place-content-center
                    ${projectViewMode === "mobile" ? " is-active" : ""}
                  `}
                  role="radio"
                  aria-label="switch to mobile view"
                  aria-checked={projectViewMode === "mobile"}
                  onClick={() => setProjectViewMode("mobile")}
                >
                  <MobileIcon />
                </button>
              </div>
            </div>
          </div>
        </a.div>
      </div>
    </div>
  );
}
