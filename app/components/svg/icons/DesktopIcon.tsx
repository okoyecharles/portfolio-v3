import { svgStyles } from "@/app/components/svg/styles";

export default function DesktopIcon() {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgStyles.create(['toggle'])}
    >
      <g clipPath="url(#clip0_97_1381)">
        <path d="M16.0376 -0.0124512H1.61508C0.729694 -0.0124512 0.0125732 0.704669 0.0125732 1.59005V11.2051C0.0125732 12.0905 0.729694 12.8076 1.61508 12.8076H7.22384L5.62134 15.2113V16.0126H12.0314V15.2113L10.4288 12.8076H16.0376C16.923 12.8076 17.6401 12.0905 17.6401 11.2051V1.59005C17.6401 0.704669 16.923 -0.0124512 16.0376 -0.0124512ZM16.0376 9.60257H1.61508V1.59005H16.0376V9.60257Z" />
      </g>
    </svg>
  );
}