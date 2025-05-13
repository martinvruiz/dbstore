import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setProfileImage } from '../features/users/UserSlice'
import { usePostProfileImageMutation } from '../services/shopService'

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null)
  const { localId } = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()
  const [triggerPostProfileImage, result] = usePostProfileImageMutation()

  const verifyPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      console.log('Permission to access camera was denied')
      return false
    }
    return true
  }

  const pickImageHandler = async () => {
    const permissions = await verifyPermissions()
    if (permissions) {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      })
      if (!result.canceled) {
        setImage(`data:image/png;base64,${result.assets[0].base64}`)
      }
    }
  }

  const confirmImageHandler = () => {
    dispatch(setProfileImage(image))
    triggerPostProfileImage({ localId, image })
    navigation.goBack()
  }

  return (
    <View className="flex-1 justify-center items-center bg-background">
      {image ? (
        <>
          <Image
            source={{ uri: image }}
            className="w-36 h-36 rounded-full border-2 border-primary"
          />
          <View className="w-3/4 items-center mt-5">
            <ButtonPrimary title="Cambiar foto" onPress={pickImageHandler} />
            <ButtonSecondary
              title="Confirmar foto"
              onPress={confirmImageHandler}
            />
          </View>
        </>
      ) : (
        <View className="flex-1 justify-center items-center bg-background">
          <Text className="text-center text-primary font-bold text-xl">
            No image selected
          </Text>
          <ButtonPrimary title="Seleccionar foto" onPress={pickImageHandler} />
        </View>
      )}
    </View>
  )
}

export default ImageSelector
