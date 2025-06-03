import { View, FlatList, Text } from 'react-native'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import ButtonPrimary from '../components/ButtonPrimary'
import { usePostOrderMutation } from '../services/shopService'
import { clearCart, removeItem } from '../features/Cart/cartSlice'
import { Toast } from 'toastify-react-native'

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
    Toast.show({
      type: 'success',
      text1: `Orden creada!`,
      visibilityTime: 1000,
      backgroundColor: '#6A9C89',
      textColor: 'white',
      progressBarColor: 'white',
      useModal: true,
    })
  }

  const handleDelete = (id) => {
    dispatch(removeItem({ id }))
    Toast.show({
      type: 'warn',
      text1: `Item eliminado`,
      visibilityTime: 1000,
      backgroundColor: '#C1D8C3',
      textColor: 'black',
      progressBarColor: 'black',
      useModal: true,
    })
  }

  return (
    <View className="flex-1 items-center bg-background pt-4">
      <Header title="Cart" />
      <View className="w-screen h-screen flex-1 items-center justify-center">
        {cartItems.length > 0 ? (
          <View className="w-full h-full flex-1 items-center justify-center">
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CartItem
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price * item.quantity}
                  onPress={() => handleDelete(item.id)}
                />
              )}
            />
            <View className="bottom-0 w-full p-8 items-center">
              <Text
                className="font-knewave text-2xl text-center"
                style={{ fontFamily: 'knewave' }}
              >
                Total: $ {total}
              </Text>
              <ButtonPrimary
                title="Comprar ahora"
                onPress={() => {
                  handleOrder()
                }}
              />
            </View>
          </View>
        ) : (
          <Text className="text-text text-center font-knewave text-2xl p-2">
            No hay productos en el carrito
          </Text>
        )}
      </View>
    </View>
  )
}

export default Cart
