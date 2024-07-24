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
      title: "Exploring the Mountains",
      content: "Discover the beauty of the mountain ranges and enjoy a peaceful retreat.",
      image: "https://images.unsplash.com/photo-1573496799519-00a0daee8eab",
      name: "John Doe",
    },
    {
      id: 2,
      title: "The Art of Cooking",
      content: "Learn the secrets of gourmet cooking from top chefs.",
      image: "https://images.unsplash.com/photo-1533612608997-212b06408bba",
      name: "Jane Smith",
    },
    {
      id: 3,
      title: "A Day at the Beach",
      content: "Relax by the shore and soak up the sun at the world's best beaches.",
      image: "https://images.unsplash.com/photo-1517495306984-9dcd1d63b157",
      name: "Alice Johnson",
    },
    {
      id: 4,
      title: "Tech Innovations 2024",
      content: "Explore the latest advancements in technology and how they're shaping the future.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
      name: "Bob Brown",
    },
    {
      id: 5,
      title: "Wildlife Safari",
      content: "Experience the thrill of a wildlife safari and get close to nature.",
      image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
      name: "Charlie Davis",
    },
    {
      id: 6,
      title: "Urban Gardening Tips",
      content: "Learn how to grow your own garden in the city with these simple tips.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      name: "David Evans",
    },
    {
      id: 7,
      title: "Hiking Trails to Try",
      content: "Discover the best hiking trails for all skill levels.",
      image: "https://images.unsplash.com/photo-1512374382149-e1d3a7b6df93",
      name: "Eve Foster",
    },
    {
      id: 8,
      title: "DIY Home Decor",
      content: "Transform your home with these DIY decor ideas.",
      image: "https://images.unsplash.com/photo-1502767089025-6572583495b0",
      name: "Frank Green",
    },
    {
      id: 9,
      title: "Fitness Routines for Beginners",
      content: "Start your fitness journey with these easy routines.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      name: "Grace Hall",
    },
    {
      id: 10,
      title: "Travel Guide to Europe",
      content: "Plan your perfect European vacation with this comprehensive travel guide.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Hank Ives",
    },
    {
      id: 11,
      title: "Mastering Photography",
      content: "Improve your photography skills with these expert tips.",
      image: "https://images.unsplash.com/photo-1548839508-65f1db2704d1",
      name: "Ivy Jones",
    },
    {
      id: 12,
      title: "Healthy Eating Habits",
      content: "Adopt healthier eating habits with these simple changes.",
      image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15",
      name: "Jack King",
    },
    {
      id: 13,
      title: "History of Art",
      content: "Explore the fascinating history of art from ancient times to the modern era.",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
      name: "Karen Lewis",
    },
    {
      id: 14,
      title: "Creative Writing Tips",
      content: "Unleash your creativity with these writing tips from published authors.",
      image: "https://images.unsplash.com/photo-1506076838561-203d7b3b0a71",
      name: "Leo Martin",
    },
    {
      id: 15,
      title: "Sustainable Living",
      content: "Learn how to live sustainably and reduce your carbon footprint.",
      image: "https://images.unsplash.com/photo-1502767089025-6572583495b0",
      name: "Mona Nelson",
    },
    {
      id: 16,
      title: "Investing Basics",
      content: "Get started with investing with this beginner's guide.",
      image: "https://images.unsplash.com/photo-1533612608997-212b06408bba",
      name: "Nina Oliver",
    },
    {
      id: 17,
      title: "Cultural Festivals Around the World",
      content: "Experience the rich cultural festivals celebrated around the globe.",
      image: "https://images.unsplash.com/photo-1573496799519-00a0daee8eab",
      name: "Oscar Parker",
    },
    {
      id: 18,
      title: "Mindfulness and Meditation",
      content: "Enhance your well-being with mindfulness and meditation practices.",
      image: "https://images.unsplash.com/photo-1517495306984-9dcd1d63b157",
      name: "Pam Quinn",
    },
    {
      id: 19,
      title: "Architectural Wonders",
      content: "Discover the world's most stunning architectural marvels.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
      name: "Quincy Roberts",
    },
    {
      id: 20,
      title: "Digital Marketing Strategies",
      content: "Boost your business with these effective digital marketing strategies.",
      image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
      name: "Rachel Scott",
    },
  ];
  

  return (
    <ScrollView
      w={"100%"}
      h={"70%"}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <VStack space={2} alignItems="center">
        {postList.map((post, key) => (
          <PostConp title={post.title} content={post.content} image={post.image} key={key} />
        ))}
      </VStack>
    </ScrollView>
  );
}
