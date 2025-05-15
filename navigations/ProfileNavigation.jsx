import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyProfile from '../screens/MyProfile'
import ImageSelector from '../screens/ImageSelector'
import Address from '../screens/Address'
import AddressSelector from '../screens/AddressSelector'

const Stack = createNativeStackNavigator()

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MyProfile"
    >
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="ImageSelector" component={ImageSelector} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="AddressSelector" component={AddressSelector} />
    </Stack.Navigator>
  )
}

export default ProfileNavigation
