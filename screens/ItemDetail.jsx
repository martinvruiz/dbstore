import { ScrollView, Text, Image, Pressable, View } from 'react-native'
import Header from '../components/Header'
import ButtonSecondary from '../components/ButtonSecondary'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Counter from '../components/Counter'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useGetProductByIdQuery } from '../services/shopService'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/Cart/cartSlice'
import { Toast } from 'toastify-react-native'

const ItemDetail = ({ route }) => {
  const navigation = useNavigation()
  const { selectedItem } = route.params
  const insets = useSafeAreaInsets()
  const dispatch = useDispatch()
  const counterValue = useSelector((state) => state.counter.value)

  const { data: product } = useGetProductByIdQuery(selectedItem)
  const onAdd = () => {
    dispatch(addItem({ ...product, quantity: counterValue }))
    Toast.show({
      type: 'success',
      text1: `${counterValue} item/s añadido!`,
      visibilityTime: 1000,
      backgroundColor: '#6A9C89',
      textColor: 'white',
      progressBarColor: 'white',
      useModal: true,
    })
  }

  return (
    <>
      {product ? (
        <ScrollView
          className="bg-background font-knewave"
          contentContainerStyle={{
            paddingBottom: insets.bottom + 20,
            alignItems: 'center',
          }}
        >
          <View className="relative w-screen md:w-3/4 flex items-center gap-2 bg-background font-knewave">
            <Pressable
              className="w-screen flex items-end p-4"
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="closecircle" size={20} color="black" />
            </Pressable>
            <Header title={product.name} />
            <Image
              source={{ uri: product.image }}
              className="h-72 w-screen py-6 rounded-lg"
              resizeMode="contain"
            />
            <Text
              className="text-2xl font-knewave w-5/6 md:w-2/4 text-center"
              style={{ fontFamily: 'knewave' }}
            >
              {product.description}
            </Text>
            <Text
              className="font-knewave text-2xl p-2"
              style={{ fontFamily: 'knewave' }}
            >
              $ {product.price}
            </Text>
            <Counter />
            <ButtonSecondary title="Agregar al carrito" onPress={onAdd} />
          </View>
        </ScrollView>
      ) : null}
    </>
  )
}

export default ItemDetail
