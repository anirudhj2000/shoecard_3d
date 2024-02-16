import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, LogBox } from "react-native";
import Home from "./src/Home";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  modelContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textContainer: {
    margin: 20,
    marginBottom: 0,
  },
  textTitle: {
    fontSize: 28,
    color: "#051E47",
    fontWeight: "bold",
  },
  textPrice: {
    fontSize: 28,
    color: "#3F6900",
    fontWeight: "bold",
  },
  text: {
    color: "black",
    fontSize: 16,
    textAlign: "justify",
    marginVertical: 10,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3F6900",
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
