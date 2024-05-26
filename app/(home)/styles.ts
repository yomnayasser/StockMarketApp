import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F202E",
    justifyContent: "center",
    alignItems: "center",
  },
  homeContainer: { flex: 1, backgroundColor: "#1F202E" },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    justifyContent: "center",

    marginTop: 30,
    fontSize: 20,
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  textContainer: {
    position: "absolute",
    bottom: 50,
    right: 20,
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
});
