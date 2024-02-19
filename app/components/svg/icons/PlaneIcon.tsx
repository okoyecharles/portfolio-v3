import { svgStyles } from "../styles";

export default function PlaneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={svgStyles.create()}
    >
      <g clipPath="url(#clip0_725_1920)">
        <path
          d="M-0.0137553 3.44881L2.47592 9.85984L19.8701 10.435L-0.0137553 3.44881Z"
        />
        <path
          d="M19.8701 10.4353L2.49693 11.1742L0.296943 17.7322L19.8701 10.4353Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_725_1920">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
