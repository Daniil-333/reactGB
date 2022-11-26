import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from "react-router-dom";
import { Form } from '../Form/Form';
import { Chat } from '../Chat/Chat';
import {List, ListItem, Button} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addChat, removeChat } from '../../slices/chats';

export const Chats = () => {
    const isFirstRender = useRef(true);
    const [messageList] = useState([])

    const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();

    const {chatID} = useParams()

    const newChat = {
      'id': parseInt(chats.length),
      'name': 'New Person',
      'messages': [],
    }

    // if(!chats.find(item => item.id == chatID)) {
    //   return <Navigate to="*" />;
    // }

    useEffect(() => {
        if (!isFirstRender.current) {
          console.log('message is sent');
        }
      }, [messageList])
    
      useEffect(() => {
        isFirstRender.current = false;
      }, [messageList])

    return (
        <div className='chat'>
            <div className='chat__persons'>
              <List >
                  {chats?.map((user, id) => {
                  return <Link to={`chat${id}`} key={user['id']}>
                          <ListItem>{user.name}</ListItem>
                        </Link>
                  })}
              </List>
              <Button 
                variant="contained" 
                onClick={() => {
                  dispatch(addChat(newChat))
                }}
              >Добавить чат</Button>
              <Button 
                variant="contained"
                onClick={() => {
                  dispatch(removeChat())
                }}
              >Удалить чат</Button>
            </div>
            <div className='chat__main'>
              {!chatID ? <p>Выберите чат</p> :
                (chats.length > 0) ?
                    <div className="chat__messages">
                      {chats?.map((item) => {
                        if(item.id === chatID) {
                          return <Chat key={item['id']} chat={item}/>
                        }
                      })}
                    </div> :
                    <p>Нет сообщений</p>
                }
            </div>
            <div className='chat__footer'>
              <Form />
            </div>
        </div>
    );
}