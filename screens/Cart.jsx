import { View, FlatList, Text, Button } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import ButtonPrimary from '../components/ButtonPrimary'
import { usePostOrderMutation } from '../services/shopService'
import { clearCart } from '../features/Cart/cartSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.value.items)
  const total = useSelector((state) => state.cart.value.total || 0)
  const localId = useSelector((state) => state.auth.value.localId)

  const [triggerPostOrder] = usePostOrderMutation()
  const dispatch = useDispatch()

  const handleOrder = () => {
    triggerPostOrder({
      items: cartItems,
      total: total,
      user: localId,
      date: new Date().toLocaleDateString(),
    })
    dispatch(clearCart())
  }

  return (
    <View className="flex-1 items-center bg-background pt-4">
      <Header title="Cart" />
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            name={item.name}
            quantity={item.quantity}
            price={item.price * item.quantity}
          />
        )}
      />
      <View className="bottom-0 w-full p-8 flex items-center">
        <Text className="font-knewave text-2xl">Total: $ {total}</Text>
        <ButtonPrimary
          title="Comprar ahora"
          onPress={() => {
            handleOrder()
          }}
        />
      </View>
    </View>
  )
}

export default Cart
