import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyProfile from '../screens/MyProfile'
import ImageSelector from '../screens/ImageSelector'


const Stack = createNativeStackNavigator()

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='MyProfile'>
        <Stack.Screen name='MyProfile' component={MyProfile}/>
        <Stack.Screen name='ImageSelector'component={ImageSelector}/>
    </Stack.Navigator>
  )
}

export default ProfileNavigation