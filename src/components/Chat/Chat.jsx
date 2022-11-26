import { Message } from '../Message/Message';


export const Chat = ({chat}) => {

    const messages = chat.messages;

    return <div id={chat.id}>
                <h6>{chat.name}</h6>
                { messages.map((msg,i) => <Message key={i} text={msg}/>) }
            </div>
}