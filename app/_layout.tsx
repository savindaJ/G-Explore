import { Navigator, Stack, Tabs } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

export default function RootLayout() {
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible
        // Pre-load any necessary resources here if needed
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync(); // Hide the splash screen after loading
      }
    }

    prepare();
  }, []);
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
        <Stack.Screen
          name="signUp"
          // options={{ title: "Explore", animation: "slide_from_right" }}
        />
      </Stack>
    </NativeBaseProvider>
  );
}
