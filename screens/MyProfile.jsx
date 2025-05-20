import { View, Image, Text } from 'react-native'
import React, { use, useEffect } from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopService'
import { useServices } from '../hooks/useServices'
import { clearUser } from '../features/users/UserSlice'

const MyProfile = ({ navigation }) => {
  const defaultImage = require('../assets/defaultImage.png')
  const { image, localId, user } = useSelector((state) => state.auth.value)
  const { data: profileImage } = useGetProfileImageQuery(localId)
  const { deleteSession } = useServices()
  const dispatch = useDispatch()

  const handleChangePicture = () => {
    navigation.navigate('ImageSelector')
  }

  const handleChangeAddress = () => {
    navigation.navigate('Address')
  }

  const handleLogOut = async () => {
    try {
      await deleteSession()
      dispatch(clearUser())
    } catch (e) {
      console.log(e)
    }
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
            <Text
              className="font-knewave text-2xl"
              style={{ fontFamily: 'knewave' }}
            >
              {user.user}
            </Text>
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
          <View className="w-3/4 items-center mt-5">
            <ButtonPrimary title="Cerrar sesión" onPress={handleLogOut} />
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
            <ButtonPrimary title="Cambiar foto" onPress={handleChangePicture} />
          </View>
          <View className="w-3/4 items-center mt-5">
            <ButtonPrimary title="Cerrar sesión" onPress={handleLogOut} />
          </View>
        </>
      )}
    </View>
  )
}

export default MyProfile
