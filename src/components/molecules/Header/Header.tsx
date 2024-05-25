import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";

import { IMAGES } from "@/src/assets";
import styles from "./Header.styles";

type Props = {
  source: ImageSourcePropType;
};

const Header = ({ source }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

export default Header;
