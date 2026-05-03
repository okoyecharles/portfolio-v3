"use client";
import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import BlueCursorIcon from "../svg/home/BlueCursor";

const MagneticCursor = ({ radius = 100 }) => {
  const containerSize = radius * 2;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const [{ x, y }, api] = useSpring(() => ({
    x: containerSize / 2,
    y: containerSize / 2,
    config: { tension: 20, friction: 0 },
  }));

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const withinRect =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (withinRect) {
        setIsHovering(true);
        api.start({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      } else {
        setIsHovering(false);
        api.start({
          x: rect.width / 2,
          y: rect.height / 2,
        });
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [api, radius]);

  return (
    <div
			className="isolate"
      ref={containerRef}
      style={{
        width: containerSize,
        height: containerSize,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        className={`absolute w-4 h-4 bg-blue-ghost dark:bg-blue-d-ghost border-2 border-blue-d-300 top-0 left-0 -translate-x-1/2 -translate-y-1/2 ${isHovering ? "opacity-1" : "opacity-0"} transition-all duration-300 rounded-[3px] z-10`}
      />
      <div
        className={`absolute w-4 h-4 bg-blue-ghost dark:bg-blue-d-ghost border-2 border-blue-d-300 top-0 right-0 translate-x-1/2 -translate-y-1/2 ${isHovering ? "opacity-1" : "opacity-0"} transition-all duration-300 rounded-[3px] z-10`}
      />
      <div
        className={`absolute w-4 h-4 bg-blue-ghost dark:bg-blue-d-ghost border-2 border-blue-d-300 bottom-0 right-0 translate-x-1/2 translate-y-1/2 ${isHovering ? "opacity-1" : "opacity-0"} transition-all duration-300 rounded-[3px] z-10`}
      />
      <div
        className={`absolute w-4 h-4 bg-blue-ghost dark:bg-blue-d-ghost border-2 border-blue-d-300 bottom-0 left-0 -translate-x-1/2 translate-y-1/2 ${isHovering ? "opacity-1" : "opacity-0"} transition-all duration-300 rounded-[3px] z-10`}
      />
      <div
        className={`absolute w-[calc(100%-15px)] h-[1.5px] bg-grey-c dark:bg-grey-3 top-0 left-2 ${isHovering ? "opacity-1" : "opacity-0"} transition-all duration-300`}
      />
      <div
        className={`absolute w-[calc(100%-15px)] h-[1.5px] bg-grey-c dark:bg-grey-3 bottom-0 left-2 ${isHovering ? "opacity-1" : "opacity-0"} transition-all duration-300`}
      />
      <div
        className={`absolute h-[calc(100%-15px)] w-[1.5px] bg-grey-c dark:bg-grey-3 top-2 left-0 ${isHovering ? "opacity-1" : "opacity-0"} transition-all duration-300`}
      />
      <div
        className={`absolute h-[calc(100%-15px)] w-[1.5px] bg-grey-c dark:bg-grey-3 top-2 right-0 ${isHovering ? "opacity-1" : "opacity-0"} transition-all duration-300`}
      />

      <animated.div
				className={"z-20"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 70,
          height: 70,
          transform: to(
            [x, y],
            (xVal, yVal) =>
              `translate3d(${xVal}px, ${yVal}px, 0) translate(-50%, -50%)`,
          ),
        }}
      >
        <BlueCursorIcon />
      </animated.div>
    </div>
  );
};

export default MagneticCursor;
