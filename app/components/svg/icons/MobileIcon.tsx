import { svgStyles } from "@/app/components/svg/styles";

export default function MobileIcon() {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgStyles.create(['toggle'])}
    >
      <path d="M7.99634 0H2.65543C1.55053 0 0.652588 0.978182 0.652588 2.18182V13.8182C0.652588 15.0218 1.55053 16 2.65543 16H7.99634C9.10124 16 9.99918 15.0218 9.99918 13.8182V2.18182C9.99918 0.978182 9.10124 0 7.99634 0ZM6.66111 14.5455H3.99066V13.8182H6.66111V14.5455ZM8.83085 12.3636H1.82091V2.18182H8.83085V12.3636Z" />
    </svg>
  );
}
