type SVGStyleVariants = "default" | "icon" | "button";
type SVGStyles = {
  [k in SVGStyleVariants]: string;
} & { create: () => string };

export const svgStyles: SVGStyles = {
  default:
    "fill-grey-4 dark:fill-grey-b hover:fill-black dark:hover:fill-grey-d transition-colors",
  icon: "group-hover/icon:fill-black dark:group-hover/icon:fill-grey-d",
  button: "group-[.button]/button:fill-grey-d group-hover/button:fill-white",
  create: function () {
    const styles = Object.keys(this).map((key) => this[key as SVGStyleVariants]);
    const groupedStyles = styles.filter((style) => typeof style === "string");
    return groupedStyles.join(" ");
  },
};