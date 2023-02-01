import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Animated,
} from "react-native";
import * as Haptics from "expo-haptics";
import Colors from "../constants/Colors";

interface CCButtonProps {
  title: string;
}

const CBButton: FC<CCButtonProps> = ({ title }) => {
  const animatedValue = new Animated.Value(1);
  const onPressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableHighlight
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{ borderRadius: 10 }}
        onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
      >
        <View style={styles.button}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
};

export default CBButton;

const styles = StyleSheet.create({
  container: {
    width: "85%",
    borderRadius: 8,
  },
  button: {
    width: "100%",
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.cbBlue,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
