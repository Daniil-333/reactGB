import { useState, useRef } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addMessage } from "../../slices/chats";
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

export const Form = () => {

    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    const {chatID} = useParams()
    const dispatch = useDispatch();

    const addMsg = (e) => {
        e.preventDefault();

        if(value) {
            dispatch(addMessage({id:chatID,data:value}));
            setValue('')
            inputRef.current.classList.add('Mui-focused')
            inputRef.current.click();
        }else {
            console.log('Message is empty');
        }

    }

    return <form onSubmit={addMsg} className="chat__form">

                <OutlinedInput  
                    id="outlined-basic" 
                    className='chat__textarea'
                    ref={inputRef}
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