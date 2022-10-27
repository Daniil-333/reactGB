import { useEffect, useRef, useState, useParams } from 'react';
import { Link } from "react-router-dom";
import { Form } from '../Form/Form';
import { Message } from '../Message/Message';
import {List, ListItem} from '@mui/material';

export const Chats = () => {
    const isFirstRender = useRef(true);
    const [messageList, setMessageList] = useState([])
    const [userList, setUserList] = useState([
      {
        'id': 'chat1',
        'name': 'Daniel',
      },
      {
        'id': 'chat2',
        'name': 'Viktor',
      }
    ])
    const {chatID} = useParams()
    const id = userList.findIndex(x => x.id === chatID)

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
                {userList?.map((user) => {
                return <Link to={`${id}`}>
                        <ListItem key={user['id']}>{user.name}</ListItem>
                      </Link>
                })}
            </List>
            </div>
            <div className='chat__main'>
            {(messageList.length > 0) ?
                <div className="chat__messages">
                {messageList?.map((item) => {
                    return <Message key={item['id']} message={item}/>
                })}
                </div> :
                <p>Нет сообщений</p>
            }
            </div>
            <div className='chat__footer'>
            <Form setMessageList={setMessageList} />
            </div>
        </div>
    );
}