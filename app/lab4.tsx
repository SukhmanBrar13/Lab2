import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import vacationDestinations, { VacationDestination } from "../components/constants/list_items";


const Lab4 = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id) // Remove if already selected
        : [...prevSelected, id] // Add if not selected
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: VacationDestination }) => {
          const isSelected = selectedIds.includes(item.id);
          return (
            <TouchableOpacity
              style={[styles.card, isSelected && styles.selectedCard]}
              onPress={() => toggleSelection(item.id)}
            >
              <Text style={styles.destinationText}>
                {isSelected ? "✅ " : ""} {item.location}
              </Text>
              <Text style={styles.details}>Price: ${item.price}</Text>
              <Text style={styles.details}>Avg Temp: {item.average_yearly_temperature}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  },
  card: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10
  },
  selectedCard: {
    backgroundColor: "#d4edda"
  },
  destinationText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  details: {
    fontSize: 14,
    color: "#555"
  }
});

export default Lab4;
