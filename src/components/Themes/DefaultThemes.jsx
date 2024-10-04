import { useMemo } from "react";

let defaultThemes = [
  {
    name: "Clear Themes",
    colors: {
      textColor: "",
      backgroundColor: "",
      headerColor: "",
    },
  },
  {
    name: "Classic Green",
    colors: {
      textColor: "#00B300",
      backgroundColor: "",
      headerColor: "",
    },
  },
  {
    name: "Classic Red",
    colors: {
      textColor: "#FF2A00",
      backgroundColor: "",
      headerColor: "",
    },
  },
  {
    name: "Pure Pink",
    colors: {
      textColor: "#000000",
      backgroundColor: "#ffc3de",
      headerColor: "#ffc3de",
    },
  },
  {
    name: "Modern Orange",
    colors: {
      textColor: "#000000",
      backgroundColor: "#ff7a38",
      headerColor: "#c2c2c2",
    },
  },
  {
    name: "Modern Red",
    colors: {
      textColor: "#000000",
      backgroundColor: "#dadada",
      headerColor: "#e6210c",
    },
  },
  // Add more theme defaults as needed
];

// Define getter and setter for DefaultThemes
let DefaultThemes = {
  get() {
    return defaultThemes;
  },
  set(themes) {
    defaultThemes = themes;
  },
};

export default DefaultThemes;

// Use useMemo to memoize the getter function
export const useDefaultThemes = () => {
  return useMemo(() => DefaultThemes.get(), []);
};
