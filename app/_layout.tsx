import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";


export default function RootLayout() {

  return (
    <NativeBaseProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="followers" options={{ title: 'Profile' ,animation: 'slide_from_right'}} />
        {/* <Stack.Screen name="index" options={{ title: 'G Explore' ,animation: 'slide_from_right'}} /> */}
      </Stack>
    </NativeBaseProvider>
  );
}
