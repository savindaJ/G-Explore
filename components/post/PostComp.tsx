import { Actionsheet, Avatar, Box, Button, Center, Flex, Image, Text, useDisclose } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { router } from "expo-router";



export default function PostConp(prop: any) {

  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  
  const [lick,setLick] = useState(false);


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
          <TouchableOpacity 
            onPress={()=>{
              router.push('/profile')
            }}
          >
          <Avatar
            bg="green.500"
            source={{
              uri: prop.image ,
            }}
          >
            AJ
          </Avatar>
          </TouchableOpacity>
          <Box marginX={2}>
            <Text fontSize={18}>{prop.name}</Text>
            <Text>37 min ago</Text>
          </Box>
        </Flex>
        <TouchableOpacity onPress={onOpen}>
            <FontAwesome name="ellipsis-h" size={20} color="black" />
        </TouchableOpacity>
      </Flex>
      <Box padding={1} w={"100vw"}>
        <Text fontWeight={500} fontSize={15}>
          {prop.title}
        </Text>
      </Box>
      <Box padding={1} mt={2} w={"100vw"} h={"70%"} display={"flex"}>
        <TouchableOpacity 
          onPress={()=>{
              setLick(true);
          }}
        >
        <Image
          width={"100%"}
          height={"100%"}
          source={{
            uri: prop.image,
          }}
          alt={prop.title}
        />
        </TouchableOpacity>
      </Box>
      <Flex
        padding={5}
        w={"100vw"}
        justifyContent={"space-around"}
        display={"flex"}
        flexDirection={"row"}
      >
        <Button background={'transparent'}
          onPress={()=>{
            setLick(false)
          }}
        ><FontAwesome name="heart" size={20} color={lick?"pink":"black"} /></Button>
        <Button onPress={onOpen} background={'transparent'}><FontAwesome name="comment" size={20} color="black" /></Button>
        <Button background={'transparent'}><FontAwesome name="share" size={20} color="black" /></Button>
      </Flex>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
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


function CommentSection(prop:any) {
  return <Center>
      <Actionsheet isOpen={prop.isOpen} onClose={prop.isClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>;
}