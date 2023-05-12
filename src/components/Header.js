import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react';

function Header(){
    return(
        <Box bg='purple.500' color='white' pb={230} pt={100} >
            <Heading as='h1' size='3xl' pt={1.5} fontWeight='extrabold'>Simple pricing for your business</Heading>
            <Text pt={8} fontSize='2xl' fontWeight='bold'>Plans that are carefully crafted to suit your business.</Text>
        </Box>
    )
}

export default Header;