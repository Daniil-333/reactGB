import { useState } from 'react';

export const Form = ({handleMessageList}) => {

    const [value, setValue] = useState('');

    const addMessage = (ev) => {
        ev.preventDefault();

        handleMessageList((prevState) => {
            prevState.push({
                'author': '',
                'text': ev.target[0].value
            })
            console.log(ev);
        })
    }

    return <>
            <form onSubmit={addMessage}>
                <h1>Chat</h1>
                <input type="text" name="msg" value={value} onChange={(e) => {
                    setValue(e.target.value);
                    }}/>
                <button>Add msg</button>
            </form>
        </>
}