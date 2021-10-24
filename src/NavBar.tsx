import { Center, Heading, Box } from "@chakra-ui/layout";
import { Container, Navbar } from "react-bootstrap";

export const NavBar = () => {
    return (
        <Box className="fixed-top" bg="white">
            <Heading as="h2" size="xl" marginLeft="5" marginTop="3" marginBottom="5">
            CryptoAssistant
            </Heading>
      </Box>
    )
}