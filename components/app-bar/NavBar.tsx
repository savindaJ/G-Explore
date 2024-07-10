import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function NavBar() {
  return <>
      <Box bg="blue" color={'black'} py="2" justifyContent="space-between" w="100%" position={'fixed'} bottom={-22}>
        <HStack display={'flex'} justifyContent={'space-around'} flexDirection={'row'}>
          <IconButton icon={<Icon as={MaterialIcons} name="home" size="lg" color="#0E0D6B" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="lg" color="#0E0D6B" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="home" size="lg" color="#0E0D6B" />} />
        </HStack>
      </Box>
    </>;
}