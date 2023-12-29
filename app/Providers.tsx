"use client";
import { ThemeProvider } from "next-themes";
import { Provider as ReduxProvider } from "react-redux";
import { store as reduxStore } from "./redux/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
      <ReduxProvider store={reduxStore}>{children}</ReduxProvider>
    </ThemeProvider>
  );
}
