import { Navigator, Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import followers from "./followers";
import Index from ".";

export default function RootLayout() {
  return (
    <NativeBaseProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="followers"
          options={{ title: "followers", animation: "slide_from_right" }}
        />
        {/* <Stack.Screen name="index" options={{ title: 'G Explore' ,animation: 'slide_from_right'}} /> */}
      </Stack>
    </NativeBaseProvider>
  );
}
