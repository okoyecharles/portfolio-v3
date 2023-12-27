"use client";
import footerData from "@/app/data/footer";
import { a, useSpring } from "@react-spring/web";
import { useTheme } from "next-themes";
import useClient from "../utils/useClient";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [client] = useClient();
  const activeTogglePos = { unmounted: -32, dark: 0, light: 32, system: 64 };
  const toggleThemeSpring = useSpring({
    from: { x: activeTogglePos["unmounted"] },
    to: {
      x: activeTogglePos[(theme || "unmounted") as "dark" | "light" | "system"],
    },
    config: {
      tension: 300,
    },
  });

  return (
    <div className="theme-toggle p-1 flex ring-1 ring-grey-b dark:ring-grey-3 rounded-[20px] relative isolate overflow-hidden self-start">
      <a.div
        className="toggle-active h-8 w-8 bg-grey-9/[35%] dark:bg-grey-5/[35%] rounded-[16px] absolute top-1 -z-10"
        style={toggleThemeSpring}
      ></a.div>
      {footerData.modes.map((mode) => (
        <button
          key={mode.name}
          className={
            theme == mode.name && client
              ? "group transition-colors is-active"
              : "group transition-colors"
          }
          onClick={() => setTheme(mode.name)}
        >
          {mode.icon}
        </button>
      ))}
    </div>
  );
}
