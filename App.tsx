import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Routes from "./src/routes/index.routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
