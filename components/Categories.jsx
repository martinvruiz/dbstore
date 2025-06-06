import { View, FlatList, Dimensions } from 'react-native'
import React from 'react'

import ButtonPrimary from './ButtonPrimary'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/shop/shopSlice'
import { useGetCatsQuery } from '../services/shopService'

const Categories = ({ navigation }) => {
  const dispatch = useDispatch()

  const { data } = useGetCatsQuery()

  const handleCategoryPress = (item) => {
    dispatch(setCategorySelected(item))
    navigation.navigate('Categories', {
      screen: 'itemlistcontainer',
      params: { categorySelected: item },
    })
  }

  return (
    <View className="flex-1 bg-background w-screen ">
      <FlatList
        showsVerticalScrollIndicator={true}
        data={data}
        renderItem={({ item }) => (
          <View className="flex items-center my-1 ">
            <ButtonPrimary
              title={item}
              onPress={() => handleCategoryPress(item)}
            />
          </View>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          paddingVertical: 16,
          paddingBottom: 90,
        }}
      />
    </View>
  )
}

export default Categories
