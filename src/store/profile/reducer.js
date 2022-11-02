import {createSlice} from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',

    initialState: {
        showName: false,
        name: 'Default'
    },
    reducers: {
        toggleShowName: (state = this.initialState, action) => {
            // switch (action.type) {
            //     case EXAMPLE_ACTION:
            //     return {
            //         ...state,
            //         showName: !state.showName
            //     }
            //     default:
            //         return state
            // }
            state.showName = !state.showName
        }
    }
})

export const { toggleShowName } = profileSlice.actions

export default profileSlice.reducer