import Plus from "../background/Plus";

interface SectionHeaderProps {
  children: React.ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <header className="self-center items-center flex gap-3">
      <Plus className="stroke-blue-100 dark:stroke-blue-d-200" />
      <h2 className="font-visby font-extrabold text-[24px] text-grey-1 dark:text-grey-d uppercase leading-[1.2] lg:text-[32px]">
        {children}
      </h2>
      <Plus className="stroke-blue-100 dark:stroke-blue-d-200" />
    </header>
  );
}
