import React from "react";
import { Text, Button, Box, Heading, Stack, Flex } from '@chakra-ui/react';
import { List } from "./List";


function Middle(){
    const features = ['International calling and messaging API', 'Additional phone numbers', 'Automated messages via Zapier', '24/7 support and consulting'];
    const FeatureList = features.map((feature,index) => <List key={index} feature={feature}></List>);
    return(
        <Box bg='white' m='auto' maxW='990px' mt='-200' borderRadius={8} textAlign='center' boxShadow='lg' overflow='hidden'>
            <Flex spacing={8} direction={['column','column','row']}>
                <Box bg="gray.200" p={14}>
                    <Text fontSize={24} fontWeight='extrabold'>Premium Pro</Text>
                    <Heading as='h1' fontSize={60} mt={8}>$329</Heading>
                    <Text fontSize={18} fontWeight={500} mt={4}>Billed just once</Text>
                    <Button colorScheme="purple" w={282} mt={6}>Get Started</Button>
                </Box>
                <Box bg='white' p={14}>
                    <Stack as='ul' spacing='20px'> 
                        <Text fontSize='18px' textAlign='left'>Access these features when you get this pricing package for your business</Text>
                        {FeatureList}
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}

export default Middle;