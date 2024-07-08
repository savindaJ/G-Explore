import { Text, View } from "react-native";
import HeaderText from "@/components/Header/HeaderText";
import StorySection from "@/components/story/StorySection";

export default function Index() {
  return (
    <View>
      <HeaderText />
      <StorySection />
    </View>
  );
}
