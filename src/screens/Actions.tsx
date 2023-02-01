import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Actions = () => {
  return (
    <View style={styles.screen}>
      <Text>Actions</Text>
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
