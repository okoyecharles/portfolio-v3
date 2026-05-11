"use client";
import React, { useRef, useEffect, useMemo } from "react";
import { useSpring } from "@react-spring/web";
import { useTheme } from "next-themes";
import { Theme } from "@/app/data/theme";

type RGB = {
  r: number;
  g: number;
  b: number;
};

const InteractiveCanvasGrid = ({
  width = 1500,
  height = 1000,
  glowRadius = 150,
  baseDotAlpha = 0.1,
}) => {
  const { resolvedTheme: theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Math setup based on your constraints
  const CIRCLE_DIAMETER = 4;
  const CIRCLE_RADIUS = CIRCLE_DIAMETER / 2;
  const SPACING = 12;
  // Center-to-center distance for the grid
  const CELL_SIZE = CIRCLE_DIAMETER + SPACING;

  // Pre-calculate the grid layout so we aren't doing heavy math in the animation loop
  const gridPoints = useMemo(() => {
    const points = [];
    const cols = Math.ceil(width / CELL_SIZE);
    const rows = Math.ceil(height / CELL_SIZE);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        points.push({
          x: i * CELL_SIZE + CELL_SIZE / 2,
          y: j * CELL_SIZE + CELL_SIZE / 2,
        });
      }
    }
    return points;
  }, [width, height, CELL_SIZE]);

  const [{ springX, springY, opacity }, api] = useSpring(() => ({
    springX: width / 2,
    springY: height / 2,
    opacity: 0,
    config: {
      tension: 220,
      friction: 25,
    },
  }));

  useEffect(() => {
    const backgroundColor: RGB =
      theme === Theme.Dark ? { r: 0, g: 0, b: 0 } : { r: 255, g: 255, b: 255 };
    const circleBaseColor: RGB =
      theme === Theme.Dark ? { r: 200, g: 200, b: 200 } : { r: 0, g: 0, b: 0 };
    const intensityMultiplier = theme === Theme.Dark ? 0.3 : 0.5;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize for no transparent canvas background
    if (!ctx) return;
    let animationFrameId: number;

    const render = () => {
      // 1. Paint the solid background
      ctx.fillStyle = `rgb(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b})`;
      ctx.fillRect(0, 0, width, height);

      // 2. Read the current animated values without triggering a React render using .get()
      const currentX = springX.get();
      const currentY = springY.get();
      const currentOpacity = opacity.get();

      // 3. Draw the grid
      for (let i = 0; i < gridPoints.length; i++) {
        const point = gridPoints[i];

        // Pythagorean theorem to find distance from circle to the trailing cursor
        const dx = point.x - currentX;
        const dy = point.y - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        ctx.beginPath();
        ctx.arc(point.x, point.y, CIRCLE_RADIUS, 0, Math.PI * 2);

        // Calculate lighting
        if (distance < glowRadius) {
          // Creates a linear falloff (1 at center, 0 at edge)
          const falloff = 1 - distance / glowRadius;

          // Apply the react-spring opacity for smooth hover in/out
          const intensity = falloff * currentOpacity;

          // Interpolate alpha from a base dim grey to a bright grey/white
          const alpha = baseDotAlpha + intensityMultiplier * intensity;
          ctx.fillStyle = `rgba(${circleBaseColor.r}, ${circleBaseColor.g}, ${circleBaseColor.b}, ${alpha})`;
        } else {
          // Base unlit state
          ctx.fillStyle = `rgba(${circleBaseColor.r}, ${circleBaseColor.g}, ${circleBaseColor.b}, ${baseDotAlpha})`;
        }

        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Kick off the loop
    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [
    width,
    height,
    gridPoints,
    glowRadius,
    springX,
    springY,
    opacity,
    theme,
    baseDotAlpha,
    CIRCLE_RADIUS,
  ]);

  // Global mouse event listener to fix the z-index/layering blocking issue
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();

      // Calculate the mouse position relative to the canvas layout
      api.start({
        springX: e.clientX - rect.left,
        springY: e.clientY - rect.top,
        opacity: 1, // Keep the light on while moving inside the window
      });
    };

    const handleGlobalMouseOut = (e: MouseEvent) => {
      // Fade out smoothly if the mouse leaves the browser window entirely
      if (
        e.clientY <= 0 ||
        e.clientX <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        api.start({ opacity: 0 });
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseout", handleGlobalMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseout", handleGlobalMouseOut);
    };
  }, [api]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        display: "block",
      }}
    />
  );
};

export default InteractiveCanvasGrid;
