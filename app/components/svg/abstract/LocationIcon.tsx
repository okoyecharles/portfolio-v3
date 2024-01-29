function LocationIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`
        fill-grey-6/90 dark:fill-grey-9/90
        -translate-y-3/4 origin-bottom
        group-[.is-active]/earth-pointer:-translate-y-1/2
        group-[.is-active]/earth-pointer:scale-100
        group-[.is-active]/earth-pointer:fill-blue-200
        dark:group-[.is-active]/earth-pointer:fill-blue-d-100
        group-[.is-active]/earth-pointer:hover:scale-125
        group-[.is-active]/earth-pointer:active:fill-blue-300
        dark:group-[.is-active]/earth-pointer:active:fill-blue-d-300
        group-[.is-active]/earth-pointer:duration-300
        transition duration-500
        cursor-pointer
      `}
    >
      <path d="M11.9999 0C9.4547 0.00285853 7.01456 1.0152 5.21483 2.81493C3.4151 4.61466 2.40276 7.0548 2.3999 9.6C2.3999 13.506 5.2355 16.7496 8.2391 20.1828C9.1895 21.27 10.1735 22.3944 11.0495 23.532C11.1616 23.6774 11.3056 23.7952 11.4704 23.8762C11.6351 23.9572 11.8163 23.9994 11.9999 23.9994C12.1835 23.9994 12.3647 23.9572 12.5295 23.8762C12.6942 23.7952 12.8382 23.6774 12.9503 23.532C13.8263 22.3944 14.8103 21.27 15.7607 20.1828C18.7643 16.7496 21.5999 13.506 21.5999 9.6C21.597 7.0548 20.5847 4.61466 18.785 2.81493C16.9852 1.0152 14.5451 0.00285853 11.9999 0ZM11.9999 13.2C11.2879 13.2 10.5919 12.9889 9.99985 12.5933C9.40783 12.1977 8.94641 11.6355 8.67394 10.9777C8.40146 10.3198 8.33017 9.59601 8.46908 8.89768C8.60798 8.19934 8.95085 7.55789 9.45432 7.05442C9.95779 6.55095 10.5992 6.20808 11.2976 6.06917C11.9959 5.93027 12.7197 6.00156 13.3776 6.27403C14.0354 6.54651 14.5976 7.00793 14.9932 7.59995C15.3888 8.19196 15.5999 8.88799 15.5999 9.6C15.5999 10.5548 15.2206 11.4705 14.5455 12.1456C13.8704 12.8207 12.9547 13.2 11.9999 13.2Z"/>
    </svg>
  );
}

export default LocationIcon;
