import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigation from './HomeNavigation'
import AntDesign from '@expo/vector-icons/AntDesign'
import CartNavigation from './CartNavigation'
import OrderNavigation from './OrderNavigation'
import ProfileNavigation from './ProfileNavigation'
import CategoriesNavigation from './CategoriesNavigation'
import { Platform } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const BottomTabNavigator = () => {
  const Top = createMaterialTopTabNavigator()
  const Bottom = createBottomTabNavigator()

  const isWeb = Platform.OS === 'web'

  const Tab = isWeb ? Top : Bottom

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFA725',
          height: Platform.OS !== 'ios' ? 80 : 60,
          position: 'relative',
          borderColor: 'transparent',
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <AntDesign
                  name="home"
                  size={focused ? 28 : 24}
                  color={focused ? 'white' : 'grey'}
                />
              </View>
            )
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  color: focused ? 'white' : 'grey',
                  fontSize: 12,
                  fontFamily: 'knewave',
                }}
              >
                Home
              </Text>
            )
          },
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <AntDesign
                  name="bars"
                  size={focused ? 28 : 24}
                  color={focused ? 'white' : 'grey'}
                />
              </View>
            )
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  color: focused ? 'white' : 'grey',
                  fontSize: 12,
                  fontFamily: 'knewave',
                }}
              >
                Categories
              </Text>
            )
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <AntDesign
                  name="shoppingcart"
                  size={focused ? 28 : 24}
                  color={focused ? 'white' : 'grey'}
                />
              </View>
            )
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  color: focused ? 'white' : 'grey',
                  fontSize: 12,
                  fontFamily: 'knewave',
                }}
              >
                Cart
              </Text>
            )
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <AntDesign
                  name="carryout"
                  size={focused ? 28 : 24}
                  color={focused ? 'white' : 'grey'}
                />
              </View>
            )
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  color: focused ? 'white' : 'grey',
                  fontSize: 12,
                  fontFamily: 'knewave',
                }}
              >
                Orders
              </Text>
            )
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <AntDesign
                  name="user"
                  size={focused ? 28 : 24}
                  color={focused ? 'white' : 'grey'}
                />
              </View>
            )
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  color: focused ? 'white' : 'grey',
                  fontSize: 12,
                  fontFamily: 'knewave',
                }}
              >
                Profile
              </Text>
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
