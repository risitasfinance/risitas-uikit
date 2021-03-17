import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#972e55",
  primaryBright: "#972e55",
  primaryDark: "#972e55",
  secondary: "#222222",
  success: "#31D0AA",
  warning: "#972e55",
};

export const brandColors = {
  binance: "#972e55",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#ce4073",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#222222",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#ce4073",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#222222",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#ce4073",
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
