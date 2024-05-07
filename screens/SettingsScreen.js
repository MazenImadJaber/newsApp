import { Text, Switch, View, StyleSheet } from "react-native";
import { useState } from "react";
import { GlobalLayout } from "../components/Layout";

export default function SettingsScreen() {
  const [isLargeText, setIsLargeText] = useState(false);

  return (
    <GlobalLayout>
      <View style={styles.view}>
        <Switch
          value={isLargeText}
          onValueChange={() => setIsLargeText(!isLargeText)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
        <Text>Large Text</Text>
      </View>
    </GlobalLayout>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
});