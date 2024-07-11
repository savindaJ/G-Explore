import NavBar from "@/components/app-bar/NavBar";
import HeaderText from "@/components/Header/HeaderText";
import { Text, View } from "native-base";
import React from "react";

export default function parts() {
  return (
    <View w={"100%"} h={"100%"}>
      <HeaderText />
      <Text>Parts.</Text>
      <NavBar />
    </View>
  );
}
