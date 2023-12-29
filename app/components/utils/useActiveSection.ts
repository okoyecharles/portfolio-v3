import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";

export default function useActiveSection() {
  const section = useSelector((state: RootState) => state.section.section);
  const activeNavMap = {
    home: 0,
    about: 1,
    projects: 2,
    contact: 3,
    unmounted: 4,
  };
  return activeNavMap[section];
}