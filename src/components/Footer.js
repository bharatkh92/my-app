import React from "react";
import {Flex, Text, Icon, HStack } from '@chakra-ui/react';
import { Guarantee } from "../icons/Guarnatee";
import { Setup } from "../icons/Setup";
import { PayOnce } from "../icons/PayOnce";

export function Footer(){
    return(
        <Flex direction={['column','column','row']} spacing={10} w='906px' mx='auto' mt={10} fontWeight="bold">
            <HStack spacing={5} px={10} m={[2,4,6]}>
                <Icon as={Guarantee}></Icon>
                <Text>30 days money back Guarantee</Text>
            </HStack>
            <HStack spacing={5} px={10} m={[2,4,6]}>
                <Icon  as={Setup}></Icon>
                <Text>No setup fees 100% hassle-free</Text>
            </HStack>
            <HStack spacing={5} px={10} m={[2,4,6]}>
                <Icon as={PayOnce}></Icon>
                <Text>No monthly subscription Pay once and for all</Text>
            </HStack>

        </Flex>
    )
}