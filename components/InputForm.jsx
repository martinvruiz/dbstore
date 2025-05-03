import { View, Text, TextInput } from "react-native";
import React from "react";

const InputForm = ({ value, onChangeText, placeholder }) => {
  return (
    <View className="w-3/4 mx-auto my-2 bg-white rounded-lg shadow-lg p-4">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="h-10 "
      />
    </View>
  );
};

export default InputForm;
