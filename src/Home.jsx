//@ts-check
import React, { Suspense, useRef, useState, useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ShoeCard from "./ShoeCard";

const Home = () => {
  return (
    <View style={styles.container}>
      x
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Designer Couch</Text>
          <Text style={styles.textPrice}>$400.00</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mattis maximus eros, eu ullamcorper ante ullamcorper a. Phasellus
            turpis tellus, tempus at feugiat at, facilisis ac sem.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.textButton}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000077",
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
    color: "#113b80",
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
    backgroundColor: "#113b80",
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
