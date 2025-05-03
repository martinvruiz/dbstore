import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Knewave_400Regular } from "@expo-google-fonts/knewave";
import "./global.css";
import Navigation from "./navigations/Navigation";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const [loaded] = useFonts({
    knewave: Knewave_400Regular,
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} className="bg-background h-screen">
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
