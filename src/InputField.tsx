import { Box, Center, Input, InputRightElement } from "@chakra-ui/react"
import { InputGroup, Button } from "@chakra-ui/react"
import { useState } from "react";

interface InputFieldProps {
    submit: any
}
export const InputField = (props: InputFieldProps) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault()
        props.submit(message)
        setMessage('')
    }
    return (
        <Box className="fixed-bottom" marginBottom="5" marginLeft="5" marginRight="5" style={{height:"30px"}}>
        <Center>
            <form onSubmit={handleSubmit} style={{width:"100%"}}>
            <InputGroup size="md">
                <Input 
                pr="4.5rem" 
                onChange={event => setMessage(event.target.value)}
                value={message}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" type="submit">
                        Send
                    </Button>
                </InputRightElement>
            </InputGroup>
            </form>
            
        </Center>
        </Box>
    )
}