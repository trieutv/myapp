import { View, Text, useColorScheme } from 'react-native'

const ThemedText = ({style,title=false, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    const textColor = title ? theme.title : theme.text;
  return (
    <Text
      style={[{ color: textColor }, style]}
      {...props}
    >
    </Text>
  )
}

export default ThemedText