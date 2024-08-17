import React from "react";
import StoryComp from "./StoryComp";
import AddStory from "./AddStory";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  ScrollView,
} from "react-native";

export default function StorySection() {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  

  return (
    <View style={styles.story}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.flex}>
          {stories.map((story, key) =>
            key === 0 ? (
              <AddStory key={key} />
            ) : (
              <StoryComp key={key} style={styles.story} />
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    gap: 10,
    overflow: "scroll",
  },
  border: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
  },
  story: {
    marginLeft: 10,
    padding: 10,
  },
});
