import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import products from '../data/products.json'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import { useNavigation } from '@react-navigation/native'
import { useGetProductsQuery } from '../services/shopService'

const ItemListContainer = ({ route }) => {
  const navigation = useNavigation()
  const [filteredProducts, setFilteredProducts] = useState([])
  const [search, setSearch] = useState('')
  const { categorySelected } = route.params

  const { data: fetchedProducts, isLoading } =
    useGetProductsQuery(categorySelected)

  useEffect(() => {
    if (!isLoading && fetchedProducts) {
      const filtered = fetchedProducts.filter((product) =>
        product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
      setFilteredProducts(filtered)
    }
  }, [search, categorySelected, fetchedProducts])
  return (
    <View className="h-screen w-screen bg-background flex items-center">
      <Header title={categorySelected} />
      <Search onSearch={setSearch} goBack={() => navigation.goBack()} />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <View className="w-screen flex items-center">
            <ProductItem product={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingVertical: 16,
          paddingBottom: 90,
        }}
      />
    </View>
  )
}

export default ItemListContainer
