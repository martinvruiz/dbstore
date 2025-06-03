import { View, Text } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import Header from '../components/Header'
import InputForm from '../components/InputForm'
import ButtonPrimary from '../components/ButtonPrimary'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/users/UserSlice'
import { useLogInMutation } from '../services/authServices'
import { useServices } from '../hooks/useServices'
import { Toast } from 'toastify-react-native'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(null)

  const { insertSession, getSession } = useServices()

  const dispatch = useDispatch()
  const [triggerLogIn, result] = useLogInMutation()
  const handleLogin = async () => {
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
      ;(async () => {
        try {
          await insertSession({
            localId: result.data.localId,
            email: result.data.email,
            token: result.data.idToken,
          })
          dispatch(
            setUser({
              email: result.data.email,
              idToken: result.data.idToken,
              localId: result.data.localId,
            })
          )
        } catch (err) {
          console.log(err)
        }
      })()
    }
    if (result.isError) {
      Toast.error('Email o contraseña invalidos')
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
          <Text
            className="text-white text-md mt-2"
            style={{ fontFamily: 'knewave' }}
          >
            ¿No tienes cuenta?{' '}
            <Text
              className="text-primary font-bold"
              onPress={() => navigation.navigate('SignUp')}
              style={{ fontFamily: 'knewave' }}
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
