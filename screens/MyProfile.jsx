import { View, Image } from 'react-native'
import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopService'

const MyProfile = ({ navigation }) => {
  const defaultImage = require('../assets/defaultImage.png')
  const { image, localId } = useSelector((state) => state.auth.value)
  const { data: profileImage } = useGetProfileImageQuery(localId)
  const handleChangePicture = () => {
    navigation.navigate('ImageSelector')
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
          <View className="w-3/4 items-center mt-5">
            <ButtonPrimary
              title="Change picture"
              onPress={handleChangePicture}
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
