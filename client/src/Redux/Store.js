import { configureStore,combineReducers } from '@reduxjs/toolkit'
import LoginInfo from './Loginslic'
import LoginInfos from './Adminslice'
import LoginInfoss from './Companyslice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'ecomdata',
  version: 1,
  storage,
}
const Rootreducer=combineReducers({login:LoginInfo,adminlogin:LoginInfos,companylogin:LoginInfoss})
const persistedReducer = persistReducer(persistConfig,Rootreducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export let persistor = persistStore(store)

