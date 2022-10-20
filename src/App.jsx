import { useEffect, useRef, useState } from 'react';
import { Form } from './components/Form/Form';
import { Message } from './components/Message/Message';
import {List, ListItem} from '@mui/material';



export const App = () => {
  const isFirstRender = useRef(true);
  const [messageList, setMessageList] = useState([])
  const [userList, setUserList] = useState([
    {
      'id': 1,
      'name': 'Daniel',
    }
  ])

  useEffect(() => {
    if (!isFirstRender.current) {
      console.log('message is sent');
    }
  }, [messageList])

  useEffect(() => {
    isFirstRender.current = false;
  }, [messageList])


  return (
    <div className="App">
      <header className='App__header'>
        <h1 className='App__title'>React project (v.18)</h1>
      </header>

      <div className='chat'>
        <div className='chat__persons'>
          <List>
            {userList?.map((user) => {
              return <ListItem 
                key={user['id']}
              >{user.name}</ListItem>
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

    </div>
  );
}