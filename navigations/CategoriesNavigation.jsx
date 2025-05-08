import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesList from '../screens/CategoriesList'
import ItemDetail from '../screens/ItemDetail'
import ItemListContainer from '../screens/ItemListContainer'

const CategoriesNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName="CategoriesList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CategoriesList" component={CategoriesList} />
      <Stack.Screen name="itemdetail" component={ItemDetail} />
      <Stack.Screen name="itemlistcontainer" component={ItemListContainer} />
    </Stack.Navigator>
  )
}

export default CategoriesNavigation
