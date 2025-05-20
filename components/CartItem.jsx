import { View, Text, Pressable } from 'react-native'
import React from 'react'

const CartItem = ({ name, quantity, price, onPress }) => {
  return (
    <View className="w-screen flex items-center justify-center bg-background">
      <View className="flex-row gap-4 bg-background pt-10">
        <Text className="font-knewave" style={{ fontFamily: 'knewave' }}>
          {name}
        </Text>
        <Text className="font-knewave" style={{ fontFamily: 'knewave' }}>
          Cant: {quantity}
        </Text>
        <Text className="font-knewave" style={{ fontFamily: 'knewave' }}>
          ${price}
        </Text>
      </View>
      <View className="w-1/4 ">
        <Pressable className="bg-red-500 p-1 rounded-lg" onPress={onPress}>
          <Text
            className="font-knewave text-center"
            style={{ fontFamily: 'knewave' }}
          >
            Eliminar
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CartItem
