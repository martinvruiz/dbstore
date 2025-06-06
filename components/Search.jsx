import React, { useState } from 'react'
import { Platform, Pressable, TextInput, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Entypo from '@expo/vector-icons/Entypo'

const Search = ({ onSearch, goBack }) => {
  const [search, setSearch] = useState('')
  return (
    <View className="w-screen md:w-2/4 flex items-center justify-center pt-4 bg-background">
      <TextInput
        className="w-3/4 h-10 text-center bg-primary rounded-lg"
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
        style={{ fontFamily: 'knewave' }}
      />
      <View className="flex-row justify-evenly w-5/6 my-2 rounded-lg p-1">
        <Pressable onPress={() => onSearch(search)}>
          <FontAwesome
            name="search"
            size={Platform.OS !== 'web' ? 24 : 16}
            color="black"
          />
        </Pressable>
        <Pressable onPress={() => setSearch('')}>
          <FontAwesome6
            name="delete-left"
            size={Platform.OS !== 'web' ? 24 : 16}
            color="black"
          />
        </Pressable>
        <Pressable onPress={goBack}>
          <Entypo
            name="back"
            size={Platform.OS !== 'web' ? 24 : 16}
            color="black"
          />
        </Pressable>
      </View>
    </View>
  )
}

export default Search
