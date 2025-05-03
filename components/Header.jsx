import { View, Text } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View className="w-full">
      <Text className="text-5xl p-2 text-text font-knewave text-center">{title}</Text>
    </View>
  )
}

export default Header