import { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

export const Form = ({setMessageList}) => {

    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    // useEffect(() => {
    //     console.log(inputRef.current.firstChild);
    //     inputRef.current?.focus();
    // }, []);

    const addMessage = (ev) => {
        ev.preventDefault();

        if(value) {
            setMessageList(prevState => {

                return [...prevState, {
                    'id': ++prevState.length,
                    'author': 'Автор',
                    'text': value,
                }]
            })
            setValue('')
        }else {
            console.log('Message is empty');
        }

    }

    return <form onSubmit={addMessage} className="chat__form">

                <OutlinedInput  
                    id="outlined-basic" 
                    className='chat__textarea'
                    // ref={inputRef}
                    autoFocus
                    variant="filled" 
                    placeholder="Please enter message" 
                    multiline 
                    minRows={5} 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}/>
                <Button variant="contained" type='submit'>Add msg</Button>
            </form>
 
}