import { DOMAttributes, KeyboardEvent, useRef } from "react";

const buttonStyles = {
  default: `
    group/button button
    select-none px-4 py-[10px] rounded-[5px]
    inline-flex gap-2 items-center
    transition-colors
  `,
  focus: `
    focus-visible:outline focus-visible:outline-offset-4
    focus-visible:outline-2 focus-visible:outline-grey-9
    dark:focus-visible
  `,
  disabled: `
    disabled:opacity-70 disabled:hover:cursor-not-allowed
  `,
  variant: {
    blue: `
      bg-blue-200 text-white fill-white hover:bg-blue-300
      dark:bg-blue-d-300 dark:hover:bg-blue-d-300/90
      disabled:bg-blue-200 dark:disabled:bg-blue-d-300
    `,
    black: `
      bg-grey-1 text-grey-d fill-grey-d hover:bg-black hover:text-white hover:fill-white
      dark:bg-black dark:ring-1 dark:ring-grey-5 dark:hover:bg-grey-15 dark:hover:ring-grey-6 dark:active:bg-black
      disabled:bg-grey-1
    `,
    plain: ``
  },
};

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: keyof (typeof buttonStyles)["variant"];
  tabIndex?: number;
  className?: string;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
  ariaLabel?: string;
}

function Button({
  disabled,
  children,
  variant = "plain",
  tabIndex,
  className,
  onClick,
  ariaLabel
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter") {
      buttonRef.current?.click();
    }
  }

  return (
    <button
      ref={buttonRef}
      className={`
        ${variant !== "plain" ? buttonStyles.default : ''}
        ${buttonStyles.focus}
        ${buttonStyles.disabled}
        ${buttonStyles.variant[variant]}
        ${className}
      `}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
