import React from "react";
import { Text, View } from "react-native";
import SkeletonLoader from "expo-skeleton-loader";
import styles from "./StockListSkeleton.styles";
const StockListSkeleton = () => {
  return (
    <SkeletonLoader>
      <SkeletonLoader.Container>
        <SkeletonLoader.Container
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[...new Array(8)]?.map((index) => {
            return (
              <SkeletonLoader.Item
                style={{
                  width: 170,
                  height: 140,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />
            );
          })}
        </SkeletonLoader.Container>
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
};

export default StockListSkeleton;
