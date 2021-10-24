import React from 'react';
import { InputField } from './InputField';
import { ChatFeed, Message } from 'react-chat-ui';
import { useState } from 'react';
import { NavBar } from './NavBar';
import { Box } from '@chakra-ui/layout';
import { background } from '@chakra-ui/styled-system';

export const Chat = () => {
    const messagesarray = [
        new Message({
          id: 1,
          message: "I'm the recipient! (The person you're talking to)",
        }), // Gray bubble
        new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
      ];
    const[messages, setMessages] = useState<Message[]>(messagesarray);
    return (
        <Box marginLeft="5" marginRight="5" marginTop="3">
            <NavBar></NavBar>
            <ChatFeed
            messages={messagesarray}
            hasInputField={false}
            showSenderName
            bubblesCentered={false}
            bubbleStyles={{
                text: {
                    fontSize: 18,
                    fontFamily: "Verdana",
                    color: "#171923"
                },
                chatbubble: {
                    borderRadius: 7,
                    padding: 15,
                    background: "#EDF2F7",
                },
                userBubble: {
                    background: "#83c5be",
                }
            }}></ChatFeed>
            <InputField></InputField>
        </Box>
    )
}

export default Chat;