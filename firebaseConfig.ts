import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth } from "firebase/auth";
import ReactNativeAsysncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";
import { getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCP8U0SU_P6mQ7YuYdlfFI8AJS_cO8lTsA",
  authDomain: "g-exxplore.firebaseapp.com",
  projectId: "g-exxplore",
  storageBucket: "g-exxplore.appspot.com",
  messagingSenderId: "171368449973",
  appId: "1:171368449973:web:93e92f9f028dad13503bfc",
  measurementId: "G-SNSBKHN49T",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsysncStorage),
});
export const storage = getStorage(app);