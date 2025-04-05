import { configureStore, combineReducers } from '@reduxjs/toolkit';
import configSlice from './slice/configSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  config: configSlice,
});

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['auth', 'config'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
