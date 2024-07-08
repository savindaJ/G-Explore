import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'G Explore' ,animation: 'slide_from_right'}} />
    </Stack>
  );
}
