/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "react-native";

import { Colors } from "@/src/constants/Colors";

export function useThemeColor(colorTheme: "light" | "dark") {
  return Colors[colorTheme];
}
