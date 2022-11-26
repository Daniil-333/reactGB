import {createSlice} from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',

    initialState: {
        showName: false,
        name: 'Default'
    },
    reducers: {
        toggleShowName: (state = this.initialState, action) => {
            state.showName = !state.showName
        }
    }
})

export const { toggleShowName } = profileSlice.actions

export default profileSlice.reducer