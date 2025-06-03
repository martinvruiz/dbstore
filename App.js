import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import { Knewave_400Regular } from '@expo-google-fonts/knewave'
import './global.css'
import Navigation from './navigations/Navigation'
import { Provider } from 'react-redux'
import store from './store'
import { useEffect } from 'react'
import { useServices } from './hooks/useServices'
import ToastProvider from 'toastify-react-native'

export default function App() {
  const { initDB } = useServices()
  const [loaded] = useFonts({
    knewave: Knewave_400Regular,
  })

  useEffect(() => {
    initDB()
  }, [])

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaView
      style={styles.container}
      className="bg-background h-screen w-screen"
    >
      <Provider store={store}>
        <ToastProvider />
        <Navigation />
      </Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
