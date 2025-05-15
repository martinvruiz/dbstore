import { View, Text } from 'react-native'
import React from 'react'

const OrderItem = ({ order }) => {
  return (
    <View className="max-w-5xl h-auto bg-secondary rounded-lg gap-6 shadow-md flex-row items-center justify-between p-4 my-4">
      <View>
        <Text className="text-xl font-knewave">{order.date}</Text>
      </View>
      <View className="">
        <Text className="font-knewave">$ {order.total}</Text>
      </View>
    </View>
  )
}

export default OrderItem
