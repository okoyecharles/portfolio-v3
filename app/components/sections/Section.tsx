import { LegacyRef } from "react";

interface SectionProps {
  padding?: string;
  sectionRef?: LegacyRef<HTMLElement>;
  children: React.ReactNode;
  name: string;
}

export default function Section({
  children,
  padding,
  sectionRef,
  name,
}: SectionProps) {
  return (
    <section
      id={`${name}`}
      ref={sectionRef || null}
      className={`w-full max-w-screen-lg mx-auto flex flex-col text-grey-6 dark:text-grey-9 relative overflow-x-clip px-6 md:px-8 leading-[1.5] ${
        padding ? padding : "py-6 md:py-8"
      }`}
    >
      {children}
    </section>
  );
}
