interface SectionProps {
  padding?: string;
  children: React.ReactNode;
}

export default function Section({ children, padding }: SectionProps) {
  return (
      <section
        className={`w-full max-w-screen-lg mx-auto flex flex-col text-grey-6 dark:text-grey-9 relative overflow-x-clip px-6 md:px-8 ${
          padding ? padding : "py-6 md:py-8"
        }`}
      >
        {children}
      </section>
  );
}
