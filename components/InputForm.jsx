import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputForm = ({ value, onChangeText, placeholder }) => {
  return (
    <View className="w-3/4 mx-auto my-2 bg-white rounded-lg shadow-lg p-6">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="h-10 "
        secureTextEntry={placeholder === 'Contraseña'}
        fontFamily="knewave"
      />
    </View>
  )
}

export default InputForm
