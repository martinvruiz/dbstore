import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import InputForm from '../components/InputForm'
import { useDispatch, useSelector } from 'react-redux'
import { usePostAddressMutation } from '../services/shopService'
import ButtonPrimary from '../components/ButtonPrimary'

const AddressSelector = ({ navigation }) => {
  const [address, setAddress] = useState('')
  const { localId } = useSelector((state) => state.auth.value)
  const [triggerPostAddress, result] = usePostAddressMutation()

  const handlePostAddress = () => {
    if (address.trim() === '') {
      alert('Por favor ingresa una dirección válida')
      return
    }
    triggerPostAddress({ localId, address })
    setAddress('')
    navigation.navigate('Address')
  }

  return (
    <View className="flex-1 justify-start items-center pt-10 bg-background">
      <Header title="Ingresa tu dirección" />
      <View className="w-3/4 items-center justify-center mt-3">
        <InputForm
          value={address}
          onChangeText={setAddress}
          placeholder="Dirección"
        />
      </View>
      <View className="w-3/4 items-center justify-center px-4">
        <ButtonPrimary title="Confirmar" onPress={handlePostAddress} />
      </View>
    </View>
  )
}

export default AddressSelector
