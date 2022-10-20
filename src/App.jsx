import { useEffect, useRef, useState } from 'react';
import { Form } from './components/Form/Form';
import { Message } from './components/Message/Message';

export const App = () => {
  const isFirstRender = useRef(true);
  const [messageList, setMessageList] = useState([])

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

      <h1>Messages</h1>
      <Form setMessageList={setMessageList} />

      {(messageList.length > 0) ? 
        <div className="chat__messages">
          {messageList?.map((item) => {
            return <Message key={item['id']} message={item}/>
          })}
        </div> :
        <p>Нет сообщений</p>
      }


    </div>
  );
}