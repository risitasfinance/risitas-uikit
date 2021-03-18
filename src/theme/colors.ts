import { Colors } from "./types";

export const baseColors = {
  failure: "#ff492e",
  primary: "#ff582e",
  primaryBright: "#972e55",
  primaryDark: "#972e55",
  secondary: "#CCCCCC",
  success: "#31D0AA",
  warning: "#972e55",
};

export const brandColors = {
  binance: "#972e55",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ff582e",
  backgroundDisabled: "#054959",
  contrast: "#191326",
  invertedContrast: "#054664",
  input: "#eeeaf4",
  tertiary: "#ff582e",
  text: "#054664",
  textDisabled: "#BDC2C4",
  textSubtle: "#F1F1F1",
  borderColor: "#666666",
  card: "#054664",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#F1F1F1",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#054664",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
