import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigation from "./AuthNavigation";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { user } = useSelector((state) => state.auth.value);
  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
