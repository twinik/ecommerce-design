import { StyleSheet, StatusBar } from "react-native";
export const global = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
