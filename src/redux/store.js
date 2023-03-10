import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice.js';
import { logInReducer } from './Login/logInSlices';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

export const store = configureStore(
  {
    reducer: { 
      contacts: contactsReducer,
      auth: persistReducer(persistConfig, logInReducer),
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  }

);

export const persistor = persistStore(store);