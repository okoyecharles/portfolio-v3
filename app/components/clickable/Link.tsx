import { LegacyRef, MouseEventHandler } from "react";

const variantClass = {
  default: `
    text-blue-200 dark:text-blue-d-200 relative whitespace-nowrap transition-colors
    hover:text-blue-300 dark:hover:text-d-blue-100 
    after:bg-blue-300 after:dark:bg-blue-200 after:pointer-events-none
    after:absolute after:left-0 after:-bottom-[2px]
    after:w-full after:h-[2px]
    after:opacity-0 hover:after:opacity-100 group/link link
  `,
  plain: ``,
};

interface LinkProps {
  children: React.ReactNode;
  href: string;
  internal?: boolean;
  className?: string;
  variant?: keyof typeof variantClass;
  tabIndex?: number;
  linkRef?: LegacyRef<HTMLAnchorElement>
  ariaLabel?: string;
  title?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  download?: boolean;
}

export default function Link({
  children,
  href,
  className,
  linkRef,
  variant = "default",
  tabIndex,
  ariaLabel,
  title,
  internal = false,
  onClick,
  download
}: LinkProps) {
  return (
    <a
      href={href}
      ref={linkRef}
      className={`
      inline-flex items-center gap-1 w-fit ${variantClass[variant]} ${className || ''}
    `}
      target={internal ? undefined : "_blank"}
      rel={internal ? undefined : "noopener noreferrer"}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
      download={download}
    >
      {children}
    </a>
  );
}
