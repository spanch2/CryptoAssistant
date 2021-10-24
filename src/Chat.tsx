import React, {useState} from 'react';
import { ChatFeed, Message } from 'react-chat-ui';

export const Chat = () => {
    const[messages, setMessages] = useState<Message[]>([]);
    //const[is_typing, setTyping] = useState(Boolean);
    //setTyping(true);
    
    const is_typing = false;
    const messagesarray = [
        new Message({
          id: 1,
          message: "I'm the recipient! (The person you're talking to)",
        }), // Gray bubble
        new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
      ];
      //setMessages(messagesarray)
    return (
        
            <ChatFeed
        messages={messagesarray} // Array: list of message objects
        isTyping={is_typing} // Boolean: is the recipient typing
        hasInputField={false} // Boolean: use our input, or use your own
        showSenderName // show the name of the user who sent the message
        bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
        // JSON: Custom bubble styles
        bubbleStyles={
            {
            text: {
                fontSize: 30
            },
            chatbubble: {
                borderRadius: 70,
                padding: 40
            }
            }
        }
        />
    )
}

export default Chat;