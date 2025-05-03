import { Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../features/shop/shopSlice";

const ProductItem = ({ product }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setSelectedItem(product.id));
    navigation.navigate("itemdetail", { selectedItem: product.id });
  };

  return (
    <Pressable
      className="w-5/6 p-10 my-4 bg-primary rounded-lg shadow-lg"
      onPress={() => handlePress()}
    >
      <Text className="text-2xl text-text p-4 text-center font-knewave">
        {product.name}
      </Text>
    </Pressable>
  );
};

export default ProductItem;
