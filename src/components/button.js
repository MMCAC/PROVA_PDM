import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.calculateButton} onPress={props.onPress}>
      <Text style={styles.button}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  calculateButton:{
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 10
  },
  button: {
    fontSize: 24,
    fontWeight: 700,
  },
})