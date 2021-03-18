import { Colors } from "./types";

export const baseColors = {
  failure: "#fe3d0c",
  primary: "#ff492e",
  primaryBright: "#ff992e",
  primaryDark: "#ffbfaf",
  secondary: "#054664",
  success: "#3150AA",
  warning: "#ff992e",
};

export const brandColors = {
  binance: "#972e55",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffa02e",
  backgroundDisabled: "#054951",
  contrast: "#191326",
  invertedContrast: "#054664",
  input: "#054664",
  tertiary: "#ff582e",
  text: "#F1F1F1",
  textDisabled: "#BDC2C4",
  textSubtle: "#F1F1F1",
  borderColor: "#E9EAEB",
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
