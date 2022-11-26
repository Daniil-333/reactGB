import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
        'id': 'chat0',
        'name': 'Daniel',
        'messages': ['c1', 'c2'],
    },
    {
        'id': 'chat1',
        'name': 'Viktor',
        'messages': ['c3', 'c4'],
    }
]

export const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        addChat: (state, action) => {
            return [...state, action.payload]
        },
        removeChat: (state) => {
            return [...state.filter((e,i) => i < state.length - 1)]
        },
        addMessage: (state, action) => {console.log(action);
            state[action.payload.id].messages.push(action.payload.data);
            return state;
        }
    }
})

export const { addChat, removeChat, addMessage } = chatSlice.actions

export default chatSlice.reducer