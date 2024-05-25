import { ImageSourcePropType } from "react-native";

type images = {
  [key: string]: ImageSourcePropType;
};

export const IMAGES: images = {
  logo: require("./images/Logo.webp"),
};
