import React from "react";
import { PlacesType, Tooltip } from "react-tooltip";

const modeStyles = {
  default: `
    !bg-grey-1 dark:!bg-grey-2 !text-sm
  `,
  error: `
    !bg-error dark:!bg-error-dark !text-bold !text-[13px]
  `,
};

type CustomTooltipProps = {
  id: string;
  content?: string;
  children?: React.ReactNode;
  mode?: keyof typeof modeStyles;
  place?: PlacesType;
};

export default function CustomTooltip({
  id,
  children,
  mode = "default",
  place = "top",
}: CustomTooltipProps) {
  return (
    <Tooltip
      id={id}
      globalCloseEvents={{ escape: true }}
      role="tooltip"
      className={`${modeStyles[mode]} !text-white !opacity-100`}
      offset={20}
      place={place}
    >
      {children}
    </Tooltip>
  );
}
