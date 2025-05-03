import { View, Text } from "react-native";
import React from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";

const CategoriesList = ({ navigation }) => {
  return (
    <View className="h-screen w-screen flex justify-center items-center pt-4 font-knewave bg-background">
      <Header title={"Categories"} />
      <Categories navigation={navigation} />
    </View>
  );
};

export default CategoriesList;
