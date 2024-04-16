import React from "react";
import { Tooltip, TooltipRefProps } from "react-tooltip";

type CustomTooltipProps = {
  id: string;
  content?: string;
  children?: React.ReactNode;
};

export default function CustomTooltip(props: CustomTooltipProps) {
  return (
    <Tooltip
      {...props}
      globalCloseEvents={{ escape: true }}
      className="!bg-grey-1 dark:!bg-grey-2 !text-white !opacity-100"
      offset={20}
    >{props.children}</Tooltip>
  );
}
