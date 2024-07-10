import React from "react";
import {
  ScrollView,
  VStack,
  Center,
  useTheme,
  Heading,
  NativeBaseProvider,
  View,
} from "native-base";
import PostConp from "../post/PostComp";

export default function PostSection() {
  const { colors } = useTheme();

  const postList = [
    {
      id: 1,
      title: "Post Title 1",
      content: "Post Content 1",
    },
    {
      id: 2,
      title: "Post Title 2",
      content: "Post Content 2",
    },
    {
      id: 3,
      title: "Post Title 3",
      content: "Post Content 3",
    },
    {
      id: 4,
      title: "Post Title 4",
      content: "Post Content 4",
    },
    {
      id: 5,
      title: "Post Title 5",
      content: "Post Content 5",
    },
    {
      id: 6,
      title: "Post Title 6",
      content: "Post Content 6",
    },
    {
      id: 7,
      title: "Post Title 7",
      content: "Post Content 7",
    },
    {
      id: 8,
      title: "Post Title 8",
      content: "Post Content 8",
    },
    {
      id: 9,
      title: "Post Title 9",
      content: "Post Content 9",
    },
    {
      id: 10,
      title: "Post Title 10",
      content: "Post Content 10",
    },
    {
      id: 11,
      title: "Post Title 11",
      content: "Post Content 11",
    },
    {
      id: 12,
      title: "Post Title 12",
      content: "Post Content 12",
    },
    {
      id: 13,
      title: "Post Title 13",
      content: "Post Content 13",
    },
    {
      id: 14,
      title: "Post Title 14",
      content: "Post Content 14",
    },
    {
      id: 15,
      title: "Post Title 15",
      content: "Post Content 15",
    },
    {
      id: 16,
      title: "Post Title 16",
      content: "Post Content 16",
    },
    {
      id: 17,
      title: "Post Title 17",
      content: "Post Content 17",
    },
    {
      id: 18,
      title: "Post Title 18",
      content: "Post Content 18",
    },
    {
      id: 19,
      title: "Post Title 19",
      content: "Post Content 19",
    },
    {
      id: 20,
      title: "Post Title 20",
      content: "Post Content 20",
    },
  ];

  return (
    <ScrollView
      w={"100vw"}
      h={"70%"}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <VStack space={2} alignItems="center">
        {postList.map((post, key) => (
          <PostConp title={post.title} content={post.content} key={key} />
        ))}
      </VStack>
    </ScrollView>
  );
}
