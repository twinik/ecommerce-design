import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./src/Routes/BottomTab";

import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
