import { update } from "@/app/redux/section/sectionSlice";
import { LegacyRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

interface SectionProps {
  padding?: string;
  sectionRef?: LegacyRef<HTMLElement>;
  children: React.ReactNode;
  name: "home" | "about" | "projects" | "contact";
  id: string;
}

export default function Section({
  children,
  padding,
  sectionRef,
  name,
  id
}: SectionProps) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-96px",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (inView) dispatch(update(name));
  }, [inView]);

  return (
    <>
      <section
        id={`${id}`}
        ref={sectionRef || null}
        className={`w-full max-w-screen-lg mx-auto flex flex-col text-grey-6 dark:text-grey-9 relative overflow-x-clip px-6 md:px-8 leading-[1.5] ${
          padding ? padding : "py-6 md:py-8"
        }`}
      >
        {children}
        <div ref={ref} className="section-observer absolute top-[50vh] w-0 left-1/2" />
      </section>
    </>
  );
}
