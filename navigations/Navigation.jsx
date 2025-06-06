import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import AuthNavigation from './AuthNavigation'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../features/users/UserSlice'
import { useServices } from '../hooks/useServices'

const Navigation = () => {
  const { user } = useSelector((state) => state.auth.value)
  const { getSession } = useServices()
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getSession()
        if (response) {
          const user = response
          dispatch(
            setUser({
              user: user.email,
              token: user.token,
              localId: user.localId,
            })
          )
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  )
}

export default Navigation
