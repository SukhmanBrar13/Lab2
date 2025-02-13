import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Landing = () => {
  const router = useRouter(); // ✅ Use Expo Router instead of React Navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Vacation Planner</Text>
      <Button title="Go to Lab 4" onPress={() => router.push("/lab4")} />  {/* ✅ Fix navigation */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  }
});

export default Landing;
