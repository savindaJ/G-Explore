import NavBar from "@/components/app-bar/NavBar";
import { router } from "expo-router";
import { Avatar, Box, FlatList, Image, Text, View } from "native-base";
import React from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";

export default function profile() {
  return (
    <View borderColor={"black"} w={"100%"} h={"100%"}>
      <Box background={"blue"}>
        <Image
          borderColor={"black"}
          borderWidth={1}
          alt="image base"
          width={"100%"}
          height={180}
          source={{
            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          }}
        />
        <Avatar
          w={100}
          h={100}
          mt={-50}
          m={"auto"}
          borderColor={"white"}
          borderWidth={3}
          bg="green.500"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          AJ
        </Avatar>
      </Box>
      <Box w={"100%"}>
        <Text fontWeight={700} fontSize={24} textAlign={"center"}>
          Savinda Jayasekara
        </Text>
        <Text color={"gray"} fontSize={16} textAlign={"center"}>
          Good Vibes Only 🌟
        </Text>
      </Box>
      <Box
        w={"100%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
      >
        <Box
          w={"30%"}
          h={100}
          borderRadius={10}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontWeight={700} fontSize={24}>
            120
          </Text>
          <Text color={"gray"} fontSize={16}>
            Posts
          </Text>
        </Box>
        <Box
          w={"30%"}
          h={100}
          borderRadius={10}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TouchableOpacity
            onPress={() => {
              router.push("/followers");
            }}
          >
            <Text fontWeight={700} fontSize={24}>
              120
            </Text>
            <Text color={"gray"} fontSize={16}>
              Followers
            </Text>
          </TouchableOpacity>
        </Box>
        <Box
          w={"30%"}
          h={100}
          borderRadius={10}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TouchableOpacity
            onPress={() => {
              router.push("/following");
            }}
          >
            <Text fontWeight={700} fontSize={24}>
              120
            </Text>
            <Text color={"gray"} fontSize={16}>
              Following
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
      <Box
        shadow={3}
        p={0.5}
        m={"auto"}
        w={"90%"}
        borderColor={"black"}
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={"row"}
        borderRadius={20}
        h={12}
        background={"white"}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert("Button pressed!");
            console.log("Button pressed!");
          }}
        >
          <Text style={styles.buttonText}>Images</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert("Button pressed!");
          }}
        >
          <Text style={styles.buttonText}>Videos</Text>
        </TouchableOpacity>
      </Box>

      <Box h={360} w={"100%"} mt={5}>
        <FlatList
          numColumns={3}
          p={2}
          data={imageList}
          renderItem={({ item }) => {
            return (
              <Box
                mt={3}
                m={"auto"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  borderRadius={10}
                  w={100}
                  h={100}
                  source={{
                    uri: item.image,
                  }}
                />
              </Box>
            );
          }}
        />
        ;
      </Box>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFC502",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "48%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const imageList = [
  {
    id: 1,
    title: "Image Title 1",
    content: "Image Content 1",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Image Title 2",
    content: "Image Content 2",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Image Title 3",
    content: "Image Content 3",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "Image Title 4",
    content: "Image Content 4",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Image Title 5",
    content: "Image Content 5",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Image Title 5",
    content: "Image Content 5",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Image Title 5",
    content: "Image Content 5",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Image Title 5",
    content: "Image Content 5",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Image Title 5",
    content: "Image Content 5",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Image Title 5",
    content: "Image Content 5",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Image Title 5",
    content: "Image Content 5",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];
