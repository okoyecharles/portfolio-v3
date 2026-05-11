import { useLayoutEffect, useState } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return { width, height };
}
