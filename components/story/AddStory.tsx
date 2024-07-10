import React from "react";
import { StyleSheet, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function AddStory(prop: any) {
  return (
    <View style={styles.story}>
      <FontAwesome name="plus" style={styles.bellPosition} />
    </View>
  );
}

const styles = StyleSheet.create({
  story: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 2,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bellPosition: {
    fontSize: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "white",
    width: 20,
    height: 20,
    borderRadius: 50,
  },
});
