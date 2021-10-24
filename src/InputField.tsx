import { Box, Center, Input, InputRightElement } from "@chakra-ui/react"
import { InputGroup, Button } from "@chakra-ui/react"

export const InputField = () => {
    return (
        <Box className="fixed-bottom" marginBottom="5" marginLeft="5" marginRight="5">
        <Center>
            <InputGroup size="md">
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