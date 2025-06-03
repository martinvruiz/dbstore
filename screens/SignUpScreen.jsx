import { View, Pressable } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import InputForm from '../components/InputForm'
import ButtonPrimary from '../components/ButtonPrimary'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../services/authServices'
import { authSchema } from '../validations/authSchema'
import { setUser } from '../features/users/UserSlice'
import { Toast } from 'toastify-react-native'

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)

  const dispatch = useDispatch()
  const [triggerSignup, result] = useSignUpMutation()
  const handleSignUp = () => {
    try {
      setError(null)
      authSchema.validateSync({
        email,
        password,
        confirmPassword,
      })
      triggerSignup({
        email,
        password,
        returnSecureToken: true,
      })
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      navigation.navigate('Login')
    } catch (e) {
      console.log(e)
      setError(e.message)
      Toast.error(e.message)
    }
  }

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          user: result.data.email,
          token: result.data.idToken,
        })
      )
      Toast.success('Cuenta creada!')
    }
  }, [result])

  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Pressable
        className="w-screen flex items-end p-4 top-0 absolute"
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="closecircle" size={20} color="black" />
      </Pressable>
      <Header title="Registro" />
      <View className="w-5/6 bg-secondary py-4 rounded-lg shadow-lg mt-2 flex items-center">
        <InputForm value={email} onChangeText={setEmail} placeholder="Email" />
        <InputForm
          value={password}
          onChangeText={setPassword}
          placeholder={'Contraseña'}
        />
        <InputForm
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder={'Confirmar Contraseña'}
        />
        <View className="flex justify-center items-center w-3/4">
          <ButtonPrimary title="Registrarse" onPress={() => handleSignUp()} />
        </View>
      </View>
    </View>
  )
}

export default SignUpScreen
