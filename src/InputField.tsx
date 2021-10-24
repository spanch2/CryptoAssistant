import { Box, Center, Input, InputRightElement } from "@chakra-ui/react"
import { InputGroup, Button } from "@chakra-ui/react"

export const InputField = () => {
    return (
        <Box style={{position: "absolute",
            bottom: "0"}}>
        <Center>
            <InputGroup size="md" width="97.5%">
                <Input 
                pr="4.5rem" 
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm">
                        Send
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Center>
        </Box>
    )
}