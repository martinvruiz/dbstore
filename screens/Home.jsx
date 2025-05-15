import { View, Text, Image } from 'react-native'
import Header from '../components/Header'

const Home = () => {
  return (
    <View className="h-screen w-screen pt-10 bg-background flex items-center">
      <Header title={'DB Store'} />
      <Image
        resizeMode="cover"
        source={require('../assets/banner5.jpeg')}
        className="h-60 w-screen py-6 rounded-lg shadow-lg"
      />
      <Text className="text-3xl py-2 text-text font-knewave">
        Quienes somos?
      </Text>
      <Text className="text-xl text-text text-center w-5/6 my-5 font-knewave">
        Somos una tienda especializada en la famosa serie de Akira Toriyama.
        Revivi tu infancia de la mejor manera!
      </Text>
      <Text className="text-xl text-text text-center w-5/6 my-5 font-knewave">
        Encontra todo tipo de productos, desde figuras de accion, ropa,
        accesorios y mucho mas!
      </Text>
    </View>
  )
}

export default Home
