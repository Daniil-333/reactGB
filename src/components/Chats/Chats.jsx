import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Form } from '../Form/Form';
import { Message } from '../Message/Message';
import {List, ListItem} from '@mui/material';

export const Chats = () => {
    const isFirstRender = useRef(true);
    const [messageList, setMessageList] = useState([])
    const [userList, setUserList] = useState([
      
      {
        'id': 'chat0',
        'name': 'Daniel',
        'messages': messageList,
      },
      {
        'id': 'chat1',
        'name': 'Viktor',
        'messages': messageList,
      }
    ])
    const {chatID} = useParams()
    const activeUser = userList.some(chat => chat.id === chatID);
    console.log(activeUser);

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
                {userList?.map((user, id) => {
                return <Link to={`chat${id}`} key={user['id']}>
                        <ListItem>{user.name}</ListItem>
                      </Link>
                })}
            </List>
            </div>
            <div className='chat__main'>
              {(messageList.length > 0) ?
                  <div className="chat__messages">
                    {messageList?.map((item) => {
                      if(item.chatID === chatID) {
                        return <Message key={item['id']} message={item}/>
                      }
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