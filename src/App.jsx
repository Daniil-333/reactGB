import { useState } from 'react';
import { Message } from './components/Message/Message';

export const App = () => {

  const message = 'Message from App component'

  return (
    <div className="App">
      <Message message={message} />
    </div>
  );
}