import { useMemo } from "react";

const ColorProperties = [
  {
    name: "headerColor",
    label: "Header Color",
    cssVar: "--header-color",
  },
  {
    name: "backgroundColor",
    label: "Background Color",
    cssVar: "--body-color",
  },
  {
    name: "textColor",
    label: "Text Color",
    cssVar: "--title-color",
  },
];

export default ColorProperties;

// Use useMemo to memoize the colorProperties array
export const useColorProperties = () => {
  return useMemo(() => ColorProperties, []);
};
