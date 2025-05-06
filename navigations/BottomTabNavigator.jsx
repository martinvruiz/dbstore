import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./HomeNavigation";
import CategoriesList from "../screens/CategoriesList";
import AntDesign from "@expo/vector-icons/AntDesign";
import CartNavigation from "./CartNavigation";
import OrderNavigation from "./OrderNavigation";
import ProfileNavigation from "./ProfileNavigation";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "FFA725",
          height: 60,
          borderColor: "6A9C89",
          borderTopWidth: 0,
          position: "relative",
        },
      }}
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
                  color={focused ? "black" : "grey"}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesList}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <AntDesign
                  name="bars"
                  size={focused ? 28 : 24}
                  color={focused ? "black" : "grey"}
                />
              </View>
            );
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
                  color={focused ? "black" : "grey"}
                />
              </View>
            );
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
                  color={focused ? "black" : "grey"}
                />
              </View>
            );
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
                  color={focused ? "black" : "grey"}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
