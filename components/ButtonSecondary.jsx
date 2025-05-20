import { View, Text, Pressable } from 'react-native'
import React from 'react'

const ButtonSecondary = ({ title, onPress }) => {
  return (
    <Pressable
      className="w-5/6 my-2 bg-secondary rounded-lg shadow-lg"
      onPress={onPress}
    >
      <Text
        className="text-2xl text-text p-4 text-center font-knewave"
        style={{ fontFamily: 'knewave' }}
      >
        {title}
      </Text>
    </Pressable>
  )
}

export default ButtonSecondary
