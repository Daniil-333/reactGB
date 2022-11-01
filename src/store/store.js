import { configureStore } from '@reduxjs/toolkit'
import {profileReducer} from './profile/reducer';


export default configureStore({
  reducer: profileReducer
})