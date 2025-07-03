import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Color";
const About = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text>About</Text>
            <Text>This is the about page of the app.</Text>
            <Link href="/" style={styles.link}>Back Home</Link>
        </View>
    );
}
export default About;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    }
})