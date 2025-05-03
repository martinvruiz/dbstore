import { View, FlatList } from "react-native";
import React from "react";

import ButtonPrimary from "./ButtonPrimary";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";
import { useGetCatsQuery } from "../services/shopService";

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();

  const { data } = useGetCatsQuery();

  const handleCategoryPress = (item) => {
    dispatch(setCategorySelected(item));
    navigation.navigate("Home", {
      screen: "itemlistcontainer",
      params: { categorySelected: item },
    });
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => (
        <View className="w-screen flex items-center">
          <ButtonPrimary
            title={item}
            onPress={() => handleCategoryPress(item)}
          />
        </View>
      )}
      keyExtractor={(item) => item}
    />
  );
};

export default Categories;
