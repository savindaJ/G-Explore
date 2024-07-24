import { Box, Icon, IconButton } from "native-base";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { Link ,router} from "expo-router";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default function HeaderText() {
  return (
    <View style={styles.flex}>
      <Text
        style={{ padding: 20, fontSize: 25, color: "#0E0D6B", fontWeight: 700 }}
      >
        G Explore
      </Text>
      <Box display={"flex"} mt={5} flexDirection={"row"}>
        
        <Link href="/login" style={styles.bell}>
          <FontAwesome name="user" style={styles.bell} />
        </Link>
        <Link href="/login" style={styles.bell}>
          <FontAwesome name="bell" style={styles.bell} />
        </Link>
      </Box>
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
