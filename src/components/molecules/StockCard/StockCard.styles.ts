import { createStyleSheet } from "react-native-unistyles";

export default createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.secondaryColor,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    width: "45%",
  },
  text: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
  },
}));
