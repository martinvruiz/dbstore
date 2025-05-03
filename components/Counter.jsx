import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../features/Counter/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [toAdd, setToAdd] = useState(0);
  return (
    <View className="flex items-center bg-background font-knewave">
      <View className="flex-row items-center justify-between font-knewave">
        <Pressable
          className="bg-primary p-3 w-20"
          onPress={() => dispatch(decrement())}
        >
          <Text className="text-center">-</Text>
        </Pressable>
        <View className="px-6">
          <Text className="font-knewave">{count}</Text>
        </View>
        <Pressable
          className="bg-primary p-3 w-20"
          onPress={() => dispatch(increment())}
        >
          <Text className="text-center">+</Text>
        </Pressable>
      </View>
      <View className="w-screen flex items-center gap-2 pt-2 font-knewave">
        <TextInput
          value={toAdd}
          onChangeText={setToAdd}
          placeholder="Ingrese cantidad"
          className="border-2 border-primary p-2 rounded-lg w-3/4 h-12 text-center font-knewave"
        />
        <View className="flex-row gap-2 w-3/4 justify-center">
          <Pressable
            className="bg-primary p-3 rounded-lg w-1/2"
            onPress={() => dispatch(incrementByAmount(Number(toAdd)))}
          >
            <Text className="text-center font-knewave">Agregar</Text>
          </Pressable>
          <Pressable
            className="bg-primary p-3 rounded-lg w-1/2"
            onPress={() => dispatch(reset())}
          >
            <Text className="text-center font-knewave">Reset</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Counter;
