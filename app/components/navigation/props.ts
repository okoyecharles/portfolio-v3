import { AnchorName } from "@/app/data/navigation";
import { LegacyRef } from "react";

export type SubmenuProps<T> = {
  name: AnchorName;
  anchors: T[];
  open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<AnchorName | null>>;
  submenuItemRef: LegacyRef<HTMLAnchorElement>; 
}
