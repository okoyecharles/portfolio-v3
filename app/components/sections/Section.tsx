interface SectionProps {
  padding?: string;
  children: React.ReactNode;
}

export default function Section({ children, padding }: SectionProps) {
  return (
    <div className="section-container mx-6 md:mx-8 text-grey-6 dark:text-grey-9 relative">
      <section
        className={`w-full max-w-screen-lg mx-auto flex flex-col ${
          padding ? padding : "py-6 md:py-8"
        }`}
      >
        {children}
      </section>
    </div>
  );
}
