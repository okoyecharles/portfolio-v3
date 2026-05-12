"use client";
import { AnchorName } from "@/app/data/navigation";
import { update } from "@/app/redux/section/sectionSlice";
import { LegacyRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

interface SectionProps {
	gap?: string;
  padding?: string;
	fillScreen?: boolean;
  sectionRef?: LegacyRef<HTMLElement>;
  children: React.ReactNode;
  name: AnchorName;
  id: string;
	stretchScreen?: boolean
}

export default function Section({
  children,
  padding,
	gap,
	fillScreen = false,
  sectionRef,
  name,
	id,
	stretchScreen: stretchScreenMobile
}: SectionProps) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-96px",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (inView) dispatch(update(name));
  }, [inView, dispatch, name]);

  return (
    <>
      <section
        id={`${id}`}
        ref={sectionRef || null}
        className={`container mx-auto flex flex-col text-grey-6 dark:text-grey-9 relative px-6 md:px-8 leading-[1.5] ${
          padding ? padding : "py-6 md:py-8"
        } ${fillScreen ? "min-h-screen" : ""}`}
				style={{
					gap: gap,
					paddingInline: stretchScreenMobile ? "0" : undefined
        }}
      >
        {children}
        <div ref={ref} className="section-observer absolute top-[50vh] w-0 left-1/2" />
      </section>
    </>
  );
}
