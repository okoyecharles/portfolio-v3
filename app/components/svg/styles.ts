type SVGStyleVariant = "default" | "icon" | "button" | "toggle";
type SVGStyles = {
  [k in SVGStyleVariant]: string;
} & { create: (variants?: Array<SVGStyleVariant>) => string };

export const svgStyles: SVGStyles = {
  default:
    "fill-grey-4 dark:fill-grey-b hover:fill-black dark:hover:fill-grey-d transition-colors",
  icon: "group-hover/icon:fill-black dark:group-hover/icon:fill-grey-d",
  button: "group-[.button]/button:fill-grey-d group-hover/button:fill-white",
  toggle: `
    fill-grey-6 dark:fill-grey-9 transition-colors
    group-hover/toggle:fill-grey-1 dark:group-hover/toggle:fill-grey-d
    group-[.is-active.toggle]/toggle:fill-black group-[.is-active.toggle]/toggle:dark:fill-grey-d
  `,
  create (variants = ["default", "icon", "button"]) {
    const keys = Object.keys(this) as Array<SVGStyleVariant>;
    const variantSet = new Set(variants);
    const createdStyles = keys
      .filter((key) => variantSet.has(key))
      .map((variantKey) => this[variantKey]);
    return createdStyles.join(" ");
  },
};