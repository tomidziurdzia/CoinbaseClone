import React from "react";
import { StyleSheet, Text, View } from "react-native";

const News = () => {
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
