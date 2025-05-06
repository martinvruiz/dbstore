import { View, Text } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import Header from '../components/Header'
import InputForm from '../components/InputForm'
import ButtonPrimary from '../components/ButtonPrimary'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/users/UserSlice'
import { useLogInMutation } from '../services/authServices'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(null)

  const dispatch = useDispatch()
  const [triggerLogIn, result] = useLogInMutation()
  const handleLogin = () => {
    try {
      setError(null)
      triggerLogIn({
        email,
        password,
      })
    } catch (e) {
      console.log(e)
      setError(e.message)
    }
  }

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          user: result.data.email,
          token: result.data.idToken,
          localId: result.data.localId,
        })
      )
    }
  }, [result])

  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Header title="Log In" />
      <View className="w-5/6 bg-secondary py-4 rounded-lg shadow-lg mt-2 flex items-center">
        <InputForm value={email} onChangeText={setEmail} placeholder="Email" />
        <InputForm
          value={password}
          onChangeText={setPassword}
          placeholder={'Contraseña'}
        />
        <View className="flex justify-center items-center w-3/4">
          <ButtonPrimary title="Ingresa" onPress={() => handleLogin()} />
        </View>
        <View>
          <Text className="text-white text-md mt-2">
            ¿No tienes cuenta?{' '}
            <Text
              className="text-primary font-bold"
              onPress={() => navigation.navigate('SignUp')}
            >
              Regístrate
            </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen
