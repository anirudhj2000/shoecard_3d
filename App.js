import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, LogBox } from "react-native";
import Home from "./src/Home";
import { useEffect } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
