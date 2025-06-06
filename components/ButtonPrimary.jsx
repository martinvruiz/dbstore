import { Pressable, Text } from 'react-native'
import React from 'react'

const ButtonPrimary = ({ title, onPress }) => {
  return (
    <Pressable
      className="w-5/6 md:w-2/4 my-2 bg-primary rounded-lg shadow-lg"
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

export default ButtonPrimary
