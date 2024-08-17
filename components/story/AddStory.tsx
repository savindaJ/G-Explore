import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { User, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";
import { storage, auth } from "../../firebaseConfig";

export default function AddStory(prop: any) {
  return (
    <TouchableOpacity
      style={styles.story}
      onPress={async() => {
        const path =
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0";

        const image = await fetch(path);
        const blob = await image.blob();

        const user = onAuthStateChanged(auth, (user) => {
          if (user) {
            const userId = user.uid;
            const storageRef = ref(
              storage,
              `new-upload-1/${userId}/image-one.png`
            );
            uploadBytes(storageRef, blob).then((snapshot) => {
              console.log(snapshot);
              console.log("Uploaded a blob or file!");
            });
          } else {
            console.log("User is signed out");
          }
        });
      }}
    >
      <FontAwesome name="plus" style={styles.bellPosition} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  story: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 2,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bellPosition: {
    fontSize: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "white",
    width: 20,
    height: 20,
    borderRadius: 50,
  },
});
