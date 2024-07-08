import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function HeaderText() {
  return (
    <View style={styles.flex}>
      <Text style={{padding:20,fontSize:25,color:'#0E0D6B',fontWeight:700}}>G Explore</Text>
      <FontAwesome name="bell" style={styles.bell} />
    </View>
  );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight: "700",
        color: "#0E0D6B",
        padding: 20,
    },
    flex: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bell: {
        fontSize: 25,
        padding: 20,
        color: "#FFC502",
    },
});
