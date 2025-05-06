import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      user: null,
      token: null,
      localId: null,
      image: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value.user = action.payload
      state.value.token = action.payload
      state.value.localId = action.payload.localId
    },
    clearUser: (state) => {
      state.value.user = null
      state.value.token = null
    },
    setProfileImage: (state, action) => {
      state.value.image = action.payload
    },
  },
})

export const { setUser, clearUser, setProfileImage } = UserSlice.actions
export default UserSlice.reducer
