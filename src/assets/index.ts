import { ImageSourcePropType } from "react-native";

type arrayString = {
  [key: string]: string;
};

export const IMAGES: arrayString = {
  logo: require("./images/Logo.webp"),
};

export * from "./styles/themes";
export { breakpoints } from "./styles/breakpoints";
