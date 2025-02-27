import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import CallAPI from "../components/CallAPI"; 

export default function Lab5() {
const [showAPI, setShowAPI] = useState(false);

return (
    <View style={{ padding: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: "bold" }}>Lab 5 Page</Text>
    <Button title={showAPI ? "Hide Data" : "Load Data"} onPress={() => setShowAPI(!showAPI)} />
    {showAPI && <CallAPI />}
    </View>
);
}

