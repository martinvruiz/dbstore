import { View, Text, Image, ScrollView, Platform } from 'react-native'
import Header from '../components/Header'

const Home = () => {
  return (
    <ScrollView
      className=" bg-background"
      contentContainerStyle={{ minHeight: '100vh', paddingVertical: '24' }}
    >
      <Header title={'DB Store'} />
      <Image
        resizeMode="cover"
        source={require('../assets/banner5.jpeg')}
        style={{
          height: 240,
          width: '100%',
          borderRadius: 16,
          marginVertical: 24,
          alignSelf: 'center',
        }}
      />
      <View className="w-screen flex items-center mb-14 px-4">
        <Text
          className="text-3xl py-2 text-text font-knewave text-center"
          style={{ fontFamily: 'knewave' }}
        >
          Quienes somos?
        </Text>
        <Text
          className="text-xl text-text text-center w-5/6 my-5 font-knewave"
          style={{ fontFamily: 'knewave' }}
        >
          Somos una tienda especializada en la famosa serie de Akira Toriyama.
          Revivi tu infancia de la mejor manera!
        </Text>
        <Text
          className="text-xl text-text text-center w-5/6 my-5 font-knewave"
          style={{ fontFamily: 'knewave' }}
        >
          Encontra todo tipo de productos, desde figuras de accion, ropa,
          accesorios y mucho mas!
        </Text>
      </View>
    </ScrollView>
  )
}

export default Home
