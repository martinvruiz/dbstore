import { ScrollView, Text, Image, Pressable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ButtonSecondary from '../components/ButtonSecondary'
import ButtonPrimary from '../components/ButtonPrimary'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Counter from '../components/Counter'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useGetProductByIdQuery } from '../services/shopService'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/Cart/cartSlice'

const ItemDetail = ({ route }) => {
  const navigation = useNavigation()
  const { selectedItem } = route.params
  const insets = useSafeAreaInsets()
  const dispatch = useDispatch()
  const counterValue = useSelector((state) => state.counter.value)

  const { data: product } = useGetProductByIdQuery(selectedItem)
  const onAdd = () => {
    dispatch(addItem({ ...product, quantity: counterValue }))
  }

  return (
    <>
      {product ? (
        <ScrollView
          className="bg-background font-knewave"
          contentContainerStyle={{ paddingBottom: insets.bottom + 160 }}
        >
          <View className="relative w-screen flex items-center gap-2 bg-background font-knewave">
            <Pressable
              className="w-screen flex items-end p-4"
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="closecircle" size={20} color="black" />
            </Pressable>
            <Header title={product.name} />
            <Image
              source={require('../assets/banner5.jpeg')}
              className="h-72 w-screen py-6 rounded-lg shadow-lg"
            />
            <Text className="text-2xl font-knewave w-5/6 text-center">
              {product.description}
            </Text>
            <Text className="font-knewave text-2xl">$ {product.price}</Text>
            <Counter />
            <ButtonSecondary title="Agregar al carrito" onPress={onAdd} />
          </View>
        </ScrollView>
      ) : null}
    </>
  )
}

export default ItemDetail
