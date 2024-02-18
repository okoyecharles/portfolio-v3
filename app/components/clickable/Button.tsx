import { DOMAttributes } from "react";

const className = {
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
    default: `
      bg-blue-200 text-white fill-white hover:bg-blue-300
      dark:bg-blue-d-300 dark:hover:bg-blue-d-300/90
      disabled:bg-blue-200 dark:disabled:bg-blue-d-300
    `,
    black: `
      bg-grey-1 text-grey-d fill-grey-d hover:bg-black hover:text-white hover:fill-white
      dark:bg-black dark:ring-1 dark:ring-grey-5 dark:hover:bg-grey-15 dark:hover:ring-grey-6 dark:active:bg-black
      disabled:bg-grey-1
    `,
  },
};

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: keyof (typeof className)["variant"];
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
}

function Button({
  disabled,
  children,
  variant = "default",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`
        ${className.default}
        ${className.focus}
        ${className.disabled}
        ${className.variant[variant]}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
