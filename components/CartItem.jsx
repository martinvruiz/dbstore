import { View, Text } from 'react-native'
import React from 'react'

const CartItem = ({ name, quantity, price }) => {
  return (
    <View className="flex-row gap-4 bg-background pt-10">
      <Text className="font-knewave" style={{ fontFamily: 'knewave' }}>
        {name}
      </Text>
      <Text className="font-knewave" style={{ fontFamily: 'knewave' }}>
        Cantidad: {quantity}
      </Text>
      <Text className="font-knewave" style={{ fontFamily: 'knewave' }}>
        ${price}
      </Text>
    </View>
  )
}

export default CartItem
