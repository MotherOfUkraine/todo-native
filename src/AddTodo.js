import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'
export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Field can`t be empty')
    }
  }
  return (
    <View style={styles.wrapper}>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        value={value}
        placeholder="Enter todo`s name"
        onChangeText={setValue}
        style={styles.input}
      />
      <Button onPress={pressHandler} title="Add" />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    padding: 10,
    width: '80%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
})
