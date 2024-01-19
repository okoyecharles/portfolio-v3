interface LineProps {
  height?: number;
  color?: string;
}

export default function VerticalLineIcon({
  height = 22,
  color = "stroke-grey-ea dark:stroke-grey-5",
}: LineProps) {
  return (
    <svg
      width="1"
      height={height}
      viewBox={`0 0 1 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${color}`}
    >
      <line x1="0.5" y1={height} x2="0.5" />
    </svg>
  );
}
