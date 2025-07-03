import { StyleSheet } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'

const login = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer height={100} />
      <ThemedText title = {true} style = {styles.title}>
        Login to Your Account
      </ThemedText>

      <Spacer height={100} />
      <Link href={'/register'} style={styles.link}>
        <ThemedText style={styles.linkText}>
          Don't have an account? Register here
        </ThemedText>
      </Link>
        
    </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({})