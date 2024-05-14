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
      textColor: "green",
      backgroundColor: "",
      headerColor: "",
    },
  },
  {
    name: "Classic Red",
    colors: {
      textColor: "red",
      backgroundColor: "",
      headerColor: "",
    },
  },
  {
    name: "Pure Pink",
    colors: {
      textColor: "black",
      backgroundColor: "pink",
      headerColor: "pink",
    },
  },
  {
    name: "Modern Orange",
    colors: {
      textColor: "black",
      backgroundColor: "darkorange",
      headerColor: "darkgray",
    },
  },
  {
    name: "Modern Red",
    colors: {
      textColor: "black",
      backgroundColor: "lightgray",
      headerColor: "red",
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
