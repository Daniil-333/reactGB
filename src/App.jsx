import { useEffect, useState } from 'react';
import { Form } from './components/Form/Form';
import { Message } from './components/Message/Message';


export const App = () => {

  const [messageList, setMessageList] = useState([])

  console.log(messageList);

  return (
    <div className="App">
      <h1>Messages</h1>
      <Form handleMessageList={setMessageList} />

      <div>
        {messageList.map((item, idx) => {
          <div key={idx}>
            <Message message={item}/>
          </div>
        })}
      </div>
    </div>
  );
}