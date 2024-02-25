import { useState } from "react";

export default function useUserScrolling() {
  const [userScrolling, setUserScrolling] = useState<boolean>(true);

  // enable only when user actually scrolls
  window.addEventListener("wheel", () => setUserScrolling(true));
  window.addEventListener("touchmove", () => setUserScrolling(true));
  window.addEventListener("mousedown", () => setUserScrolling(true));
  window.addEventListener("keydown", () => setUserScrolling(true));
  window.addEventListener("keyup", () => setUserScrolling(true));

  return { userScrolling, setUserScrolling };
}