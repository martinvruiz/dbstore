import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/CounterSlice";
import shopReducer from "../features/shop/shopSlice";
import authReducer from "../features/users/UserSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import shopService from "../services/shopService";
import { authApi } from "../services/authServices";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    auth: authReducer,
    [shopService.reducerPath]: shopService.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopService.middleware)
      .concat(authApi.middleware),
});

setupListeners(store.dispatch);
export default store;
