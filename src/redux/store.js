import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice.js';
import { logInReducer } from './Login/logInSlices';
// import { logInSlice } from './Login/logInSlice.js';
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
  // blacklist: ['filter'],
  whitelist: ['token'],
};

// const persistedReducer = persistReducer(persistConfig, contactsReducer);
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   auth: logInReducer,
// })

export const store = configureStore(
  {
    // reducer: rootReducer ,
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