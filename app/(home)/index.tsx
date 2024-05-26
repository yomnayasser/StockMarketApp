import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { IMAGES } from "@/src/assets";
import { useNavigation } from "@react-navigation/native";

import { Image } from "react-native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={IMAGES.logo} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Yomna Yasser</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
