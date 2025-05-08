import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'
import { useSelector } from 'react-redux'
import { useGetAddressQuery } from '../services/shopService'

const Address = ({ navigation }) => {
  const { localId } = useSelector((state) => state.auth.value)
  const { data: address } = useGetAddressQuery(localId)

  const handleAddAddress = () => {
    navigation.navigate('AddressSelector')
  }

  return (
    <View className="flex-1 justify-start items-center pt-10 bg-background">
      <Header title="Dirección" />
      <View className="w-3/4 items-center justify-center mt-5">
        {address ? (
          <View>
            <Text className="text-text text-center font-knewave text-2xl p-2">
              {address?.address}
            </Text>
            <ButtonPrimary title="Cambiar direccion" />
          </View>
        ) : (
          <View className="w-full items-center justify-center">
            <Text className="text-text text-center font-knewave text-2xl p-2">
              No tienes una dirección registrada
            </Text>
            <ButtonPrimary
              title="Agregar direccion"
              onPress={handleAddAddress}
            />
          </View>
        )}
      </View>
    </View>
  )
}

export default Address
