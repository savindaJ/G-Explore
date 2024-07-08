import React from 'react'
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native'
import StoryComp from './StoryComp';
import AddStory from './AddStory';

export default function StorySection() {

    const stories = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  return (
    <View style={styles.flex}>
        {stories.map((story,key) => (
            key === 0 ? <AddStory/> : <StoryComp key={story} />  
        ))}
    </View>
  )
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
});
