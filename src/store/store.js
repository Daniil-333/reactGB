import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../slices/profile';
import chatReducer from '../slices/chats';


export const store = configureStore({
  reducer: {
    profile: profileReducer,
    chats: chatReducer
  }
})