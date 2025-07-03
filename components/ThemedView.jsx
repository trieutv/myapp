import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Color";

const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
        },
        styles.card,
      ]}
      {...props}
    />
  );
};
export default ThemedView;
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
  },
});
