import NavBar from "@/components/app-bar/NavBar";
import HeaderText from "@/components/Header/HeaderText";
import PostSection from "@/components/post-section/PostSection";
import StorySection from "@/components/story/StorySection";
import { View } from "native-base";

export default function Index() {
  return (
    <View w={"100vw"} h={"100%"}>
      <HeaderText />
      <StorySection />
      <PostSection />
      <NavBar />
    </View>
  );
}
