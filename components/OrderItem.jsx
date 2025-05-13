import { View, Text } from 'react-native'
import React from 'react'

const OrderItem = ({ order }) => {
  return (
    <View className="w-5/6 h-20 bg-secondary rounded-lg shadow-md flex-row items-center justify-between px-4 my-4">
      <View>
        <Text className="text-xl font-knewave">{order.date}</Text>
      </View>
      <View className="p-4">
        <Text className="font-knewave">$ {order.total}</Text>
      </View>
    </View>
  )
}

export default OrderItem
