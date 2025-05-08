import { View, Image, Text } from 'react-native'
import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopService'

const MyProfile = ({ navigation }) => {
  const defaultImage = require('../assets/defaultImage.png')
  const { image, localId, user } = useSelector((state) => state.auth.value)
  const { data: profileImage } = useGetProfileImageQuery(localId)
  const handleChangePicture = () => {
    navigation.navigate('ImageSelector')
  }

  const handleChangeAddress = () => {
    navigation.navigate('Address')
  }

  return (
    <View className="flex-1 justify-start items-center pt-10 bg-background">
      {image || profileImage ? (
        <>
          <Image
            source={{ uri: image || profileImage?.image }}
            className="w-36 h-36 rounded-full border-2 border-primary"
            resizeMode="cover"
          />
          <View className="pt-8">
            <Text className="font-knewave text-2xl">{user.user}</Text>
          </View>
          <View className="w-3/4 items-center mt-5">
            <ButtonPrimary title="Cambiar foto" onPress={handleChangePicture} />
          </View>
          <View className="w-3/4 items-center mt-5">
            <ButtonPrimary
              title="Cambiar direccion"
              onPress={handleChangeAddress}
            />
          </View>
        </>
      ) : (
        <>
          <Image
            source={defaultImage}
            className="w-36 h-36 rounded-full border-2 border-primary"
            resizeMode="contain"
          />
          <View className="w-3/4 items-center mt-5">
            <ButtonPrimary
              title="Change picture"
              onPress={handleChangePicture}
            />
          </View>
        </>
      )}
    </View>
  )
}

export default MyProfile
