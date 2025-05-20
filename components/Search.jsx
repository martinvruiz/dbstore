import React, { useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Entypo from '@expo/vector-icons/Entypo'

const Search = ({ onSearch, goBack }) => {
  const [search, setSearch] = useState('')
  return (
    <View className="w-screen flex items-center justify-center pt-4 bg-background">
      <TextInput
        className="w-3/4 h-10 text-center bg-primary rounded-lg"
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
        style={{ fontFamily: 'knewave' }}
      />
      <View className="flex-row justify-evenly w-5/6 my-4 rounded-lg p-2">
        <Pressable onPress={() => onSearch(search)}>
          <FontAwesome name="search" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => setSearch('')}>
          <FontAwesome6 name="delete-left" size={24} color="black" />
        </Pressable>
        <Pressable onPress={goBack}>
          <Entypo name="back" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

export default Search
