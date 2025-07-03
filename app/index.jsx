import { StyleSheet, Text, View } from "react-native"
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
        <Text>Welcome to the Home Page</Text>
        <Text>Welcome to the Home Page</Text>

        <Link href="/login" style={styles.link}>Login Page</Link>
        <Link href="/register" style={styles.link}>Register Page</Link>
    </ThemedView>
  );
}
export default Home;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    }
})
