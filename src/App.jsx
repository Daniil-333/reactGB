import { useEffect, useState } from 'react';
import { Form } from './components/Form/Form';
import { Message } from './components/Message/Message';

export const App = () => {

  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    console.log('message is sent');
  }, [messageList])

  return (
    <div className="App">
      <h1>Messages</h1>
      <Form setMessageList={setMessageList} />


      {messageList.map((item, idx) => {
          return <div className="chat__messages" key={idx}>
            <Message message={item}/>
          </div>
        })}
    </div>
  );
}