import { FeaturedProjectTagProps } from "./props";

export default function FeaturedProjectTag({name}: FeaturedProjectTagProps) {
  const color = `text-tag-${name} dark:text-tag-${name}-dark`;
  const bg = `bg-tag-${name}/20 dark:bg-tag-${name}-dark/25`;
  return (
    <span
      className={`${color} ${bg} text-[14px] rounded-[11px] leading-[1] py-1 px-2`}
    >
      {name}
    </span>
  );
}
