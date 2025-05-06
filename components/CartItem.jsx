import { View, Text } from 'react-native'
import React from 'react'

const CartItem = ({ name, quantity, price }) => {
  return (
    <View className="flex-row gap-4 bg-background pt-10">
      <Text className="font-knewave">{name}</Text>
      <Text className="font-knewave">Cantidad: {quantity}</Text>
      <Text className="font-knewave">${price}</Text>
    </View>
  )
}

export default CartItem
