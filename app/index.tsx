import { View, Text, Button, StyleSheet } from "react-native";

import fruits from "../components/FruitList";

const Index = () => {
  const handlePress = () => {
    alert("Welcome to the app!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Lab 1 App!</Text>
      <Button title="Click Me" onPress={handlePress} />
      <Text style={styles.listHeader}>Fruit List:</Text>
      {fruits.map((fruit, index) => (
        <Text key={index} style={styles.listItem}>
          {fruit}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  listItem: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Index;
