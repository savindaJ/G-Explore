import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "native-base";

export default function StoryComp(prop: any) {
  return (
    // <View style={styles.story}></View>
    <Avatar
      borderColor={"white"}
      borderWidth={4}
      style={styles.story}
      bg="green.500"
      source={{
        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      }}
    >
      AJ
    </Avatar>
  );
}

const styles = StyleSheet.create({
  story: {
    width: 60,
    height: 60,
  },
});
