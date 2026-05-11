import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>("up");

  useEffect(() => {
    const threshold = 5;
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateScrollDir () {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return scrollDir;
}