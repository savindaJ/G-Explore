import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from "native-base";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

export default function NavBar() {
  return (
    <>
      <Box
        bg="blue"
        color={"black"}
        backgroundColor={"white"}
        justifyContent="space-between"
        w="100%"
        position={"absolute"}
        bottom={0}
      >
        <HStack
          display={"flex"}
          justifyContent={"space-around"}
          flexDirection={"row"}
          p={1}
        >
          <IconButton
            onPress={() => {
              router.push("/");
            }}
            icon={<Icon as={MaterialIcons} name="home" />}
          />

          <IconButton
            onPress={() => {
              router.push("/profile");
            }}
            icon={<Icon as={MaterialIcons} name="person" />}
          />

          <IconButton
            onPress={() => {
              router.push("/parts");
            }}
            icon={<Icon as={MaterialIcons} name="settings" />}
          />

          <IconButton
            onPress={() => {
              router.push("/chat");
            }}
            icon={<Icon as={MaterialIcons} name="camera" />}
          />
        </HStack>
      </Box>
    </>
  );
}

const styles = {
  icon: {
    marginTop: 5,
  },
};
