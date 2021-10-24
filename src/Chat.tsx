import React, { useEffect, useRef } from 'react';
import { InputField } from './InputField';
import { ChatFeed, Message } from 'react-chat-ui';
import { useState } from 'react';
import { NavBar } from './NavBar';
import { Box } from '@chakra-ui/layout';
import parseInput from './backend/parseInput'

export const Chat = () => {
    const messagesarray = [
        new Message({
          id: 1,
          message: "Ask me about current cryptocurrency prices!",
        })
      ];
    const[messages, setMessages] = useState<Message[]>(messagesarray);

    const messagesEndRef = useRef<null | HTMLElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
      }, [messages]);
      
    const updateMessages = (newMessage: string) => {     
        if (newMessage.replace(/\s/g, '').length){
            setMessages(messages => [...messages, 
                new Message({
                    id: 0,
                    message: newMessage
                })
            ])
        }
        parseInput(newMessage).then((data) => {
            setMessages(messages => [...messages, 
                new Message({
                    id: 1,
                    message: data
                })
            ])
        })
        console.log(messages)
    }

    return (
        <Box marginLeft="5" marginRight="5" marginTop="3">
            <NavBar></NavBar>
            <Box style={{paddingBottom:"50px", paddingTop:"55px"}}>
            <ChatFeed
            messages={messages}
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
            <div ref={messagesEndRef as React.RefObject<HTMLDivElement>} />
            </Box>
            <InputField submit={updateMessages}></InputField>
        </Box>
    )
}

export default Chat;