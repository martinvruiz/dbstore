import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../screens/Orders";

const OrderNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="orders"
        component={Orders}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigation;
