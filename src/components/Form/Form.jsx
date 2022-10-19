import { useState } from 'react';

export const Form = ({setMessageList}) => {

    const [value, setValue] = useState('');

    const addMessage = (ev) => {
        ev.preventDefault();

        setMessageList(prevState => ([...prevState, {
            'author': 'Автор',
            'text': value,
        }]))
        setValue('')
    }

    return <form onSubmit={addMessage}>
                <h1>Chat</h1>
                <input type="text" name="msg" value={value} onChange={(e) => {
                    setValue(e.target.value);
                    }}/>
                <button type='submit'>Add msg</button>
            </form>
 
}