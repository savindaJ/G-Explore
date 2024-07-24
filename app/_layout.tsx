import { Navigator, Stack, Tabs } from "expo-router";
import { NativeBaseProvider } from "native-base";

export default function RootLayout() {
  return (
    <NativeBaseProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{ title: "Explore", animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="login"
          // options={{ title: "Explore", animation: "slide_from_right" }}
        />

        <Stack.Screen
          name="profile"
          // options={{ title: "Explore", animation: "slide_from_right" }}
        />

        <Stack.Screen
          name="parts"
          // options={{ title: "Explore", animation: "slide_from_right" }}
        />

        <Stack.Screen
          name="following"
          // options={{ title: "Explore", animation: "slide_from_right" }}
        />
         <Stack.Screen
          name="followers"
          // options={{ title: "Explore", animation: "slide_from_right" }}
        />
         <Stack.Screen
          name="chat"
          // options={{ title: "Explore", animation: "slide_from_right" }}
        />
      </Stack>
    </NativeBaseProvider>
  );
}
