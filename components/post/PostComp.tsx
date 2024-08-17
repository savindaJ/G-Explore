import { Avatar, Box, Center, Flex, Image, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function PostConp(prop: any) {
  return (
    <View
      style={{
        width: "100%",
        padding: 5,
        height: 500,
      }}
    >
      <Flex
        padding={5}
        w={"100vw"}
        justifyContent={"space-around"}
        display={"flex"}
        flexDirection={"row"}
      >
        <Flex display={"flex"} flexDirection={"row"} width={"90%"}>
          <Avatar
            bg="green.500"
            source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            }}
          >
            AJ
          </Avatar>
          <Box marginX={2}>
            <Text fontSize={18}>Savinda Jayaekara</Text>
            <Text>37 min ago</Text>
          </Box>
        </Flex>
        <FontAwesome name="ellipsis-h" size={20} color="black" />
      </Flex>
      <Box padding={1} w={"100vw"}>
        <Text fontWeight={500} fontSize={15}>
          Good Vibes Only.
        </Text>
      </Box>
      <Box padding={1} mt={2} w={"100vw"} h={"70%"} display={"flex"}>
        <Image
          width={"100%"}
          height={"100%"}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt="image base"
        />
      </Box>
      <Flex
        padding={5}
        w={"100vw"}
        justifyContent={"space-around"}
        display={"flex"}
        flexDirection={"row"}
      >
        <FontAwesome name="heart" size={20} color="black" />
        <FontAwesome name="comment" size={20} color="black" />
        <FontAwesome name="share" size={20} color="black" />
      </Flex>
    </View>
  );
}

const styles = {
  post: {
    width: "100%",
    innerHeight: 200,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
};
