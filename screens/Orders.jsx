import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import OrderItem from '../components/OrderItem'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../services/shopService'

const Orders = () => {
  const { localId } = useSelector((state) => state.auth.value)
  const { data, isSuccess } = useGetOrdersQuery()
  const [filteredOrders, setFilteredOrders] = useState([])

  useEffect(() => {
    if (isSuccess && data) {
      const transformedData = Object.values(data)
      const filter = transformedData.filter((order) => order.user === localId)
      setFilteredOrders(filter)
    }
  }, [data])

  return (
    <View className="flex-1 bg-background pt-4 w-screen">
      <Header title="Orders" />
      <View className="flex-1 items-center justify-center w-screen">
        <FlatList
          data={filteredOrders}
          ListEmptyComponent={
            <Text
              className="text-center text-primary font-bold text-lg"
              style={{ fontFamily: 'knewave' }}
            >
              No hay órdenes disponibles
            </Text>
          }
          contentContainerStyle={{
            alignItems: 'center',
          }}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      </View>
    </View>
  )
}

export default Orders
