import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function StoryComp(prop: any) {
  return (
    <View style={styles.story}></View>
  )
}

const styles = StyleSheet.create({
    story: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "#BDB9B9",
    },
})