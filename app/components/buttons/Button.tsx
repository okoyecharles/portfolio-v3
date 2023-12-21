import { ButtonHTMLAttributes, HTMLAttributes } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "black";
}

function Button({ children, variant = "default" }: ButtonProps) {
  const variantClass = {
    default: `
      bg-blue-200 text-white fill-white hover:bg-blue-300
      dark:bg-blue-d-300 dark:hover:bg-blue-d-300/90
    `,
    black: `
      bg-grey-1 text-grey-d fill-grey-d hover:bg-black hover:text-white hover:fill-white
      dark:bg-black dark:ring-1 dark:ring-grey-5 dark:hover:bg-grey-15 dark:hover:ring-grey-6 dark:active:bg-black
    `,
  };

  const focusClass = `
    focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-2 focus-visible:outline-grey-9
    dark:focus-visible
  `;

  return (
    <button
      className={`group flex gap-2 items-center px-4 py-3 rounded-[5px] transition-colors ${focusClass} ${variantClass[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
