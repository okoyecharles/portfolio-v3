interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export default function Link({ children, href }: LinkProps) {
  return (
    <a href={href} className={`
      text-blue-200 dark:text-blue-d-200 relative whitespace-nowrap transition-colors
      hover:text-blue-300 dark:hover:text-d-blue-100 
      after:bg-blue-200 after:dark:bg-blue-200 after:pointer-events-none
      after:absolute after:left-0 after:-bottom-[2px]
      after:w-full after:h-[2px]
      after:opacity-0 hover:after:opacity-100
    `}>
      {children}
    </a>
  );
}
