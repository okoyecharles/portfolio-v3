interface SectionDescriptionProps {
  children: React.ReactNode;
}

export default function SectionDescription({
  children,
}: SectionDescriptionProps) {
  return (
    <p className="my-4 lg:my-8 self-center max-w-[700px] text-center md:text-[18px] text-grey-6 dark:text-grey-b">
      {children}
    </p>
  );
}
