import { Navigator, Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";

export default function RootLayout() {
  return (
    <NativeBaseProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="parts"
          options={{ title: "parts", animation: "slide_from_right" }}
        />
      </Stack>
    </NativeBaseProvider>
  );
}
