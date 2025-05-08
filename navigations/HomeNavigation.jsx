import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import ItemListContainer from '../screens/ItemListContainer'
import ItemDetail from '../screens/ItemDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator()

  return (
    <View className="h-screen w-screen flex justify-center font-knewave">
      <Stack.Navigator
        initialRouteName="homescreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="homescreen" component={Home} />
      </Stack.Navigator>
    </View>
  )
}

export default HomeNavigation
