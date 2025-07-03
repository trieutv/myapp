import { Stack } from "expo-router";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Color";
import { StatusBar } from "expo-status-bar";

const RootLayout = ({}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
    <StatusBar value="auto"/>
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: "About",
          }}
        />
      </Stack>
    </>
  );
};
export default RootLayout;
const styles = StyleSheet.create({});
