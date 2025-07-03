import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'

const ThemedCard = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[{
      backgroundColor: theme.background,
    }, styles.card, style]} {...props}>
    </View>
  )
}

export default ThemedCard
const styles = StyleSheet.create({
  card: { 
    borderRadius: 10,
    padding: 20}});