import NavBar from "@/components/app-bar/NavBar";
import HeaderText from "@/components/Header/HeaderText";
import {
  Box,
  HStack,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";

export default function parts() {
  const partList = [
    {
      name: "part 1",
      price: 100,
      description: "This is part 1",
      image: "https://images.unsplash.com/photo-1634020207805-6a4b4d7e5e3b",
    },
    {
      name: "part 2",
      price: 200,
      description: "This is part 2",
      image: "https://images.unsplash.com/photo-1634020207805-6a4b4d7e5e3b",
    },
    {
      name: "part 3",
      price: 300,
      description: "This is part 3",
      image: "https://images.unsplash.com/photo-1634020207805-6a4b4d7e5e3b",
    },
    {
      name: "part 4",
      price: 400,
      description: "This is part 4",
      image: "https://images.unsplash.com/photo-1634020207805-6a4b4d7e5e3b",
    },
    {
      name: "part 5",
      price: 500,
      description: "This is part 5",
      image: "https://images.unsplash.com/photo-1634020207805-6a4b4d7e5e3b",
    },
    {
      name: "part 6",
      price: 600,
      description: "This is part 6",
      image: "https://images.unsplash.com/photo-1634020207805-6a4b4d7e5e3b",
    },
    {
      name: "part 7",
      price: 700,
      description: "This is part 7",
      image: "https://images.unsplash.com/photo-1634020207805-6a4b4d7e5e3b",
    },
    {
      name: "part 8",
      price: 800,
      description: "This is part 8",
      image: "https://images.unsplash.com/photo-1634020207805-6a4b4d7e5e3b",
    },
  ];

  return (
    <View w={"100%"} h={"100%"}>
      <HeaderText />
      <Box>
        <Input
          w={"90%"}
          m={"auto"}
          h={9}
          mt={2}
          shadow={2}
          _light={{
            bg: "coolGray.100",
            _hover: {
              bg: "coolGray.200",
            },
            _focus: {
              bg: "coolGray.200:alpha.70",
            },
          }}
          _dark={{
            bg: "coolGray.800",
            _hover: {
              bg: "coolGray.900",
            },
            _focus: {
              bg: "coolGray.900:alpha.70",
            },
          }}
          placeholder="Serch Part Bt Name"
        />
      </Box>
      <Text fontWeight={"bold"} fontSize={18} p={3}>
        All Parts
      </Text>
      <ScrollView
        w={"100vw"}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Box w={"90%"} m={"auto"}>
          <VStack space={4}>
            {partList.map((part, index) => (
              <Box
                key={index}
                w={"100%"}
                h={200}
                bg={"gray.100"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                p={3}
                borderRadius={10}
              >
                <Box w={"30%"} h={200}>
                  <Box
                    w={"100%"}
                    h={200}
                    bg={"gray.200"}
                    borderRadius={10}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text fontWeight={700} fontSize={24}>
                      {part.price}
                    </Text>
                  </Box>
                </Box>
                <Box w={"60%"} h={200}>
                  <Box
                    w={"100%"}
                    h={200}
                    bg={"gray.200"}
                    borderRadius={10}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text fontWeight={700} fontSize={24}>
                      {part.name}
                    </Text>
                    <Text color={"gray"} fontSize={16}>
                      {part.description}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>
      </ScrollView>
      <NavBar />
    </View>
  );
}
