export default function NorthWestIcon({
  variant = "default",
}: {
  variant?: "default" | "link";
}) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={
        variant === "default"
          ? "stroke-grey-5 dark:stroke-grey-6"
          : "stroke-blue-200 dark:stroke-blue-d-200"
      }
    >
      <path
        d="M1 6.65685L6.65685 1M6.65685 1H2.41421M6.65685 1V5.24264"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
