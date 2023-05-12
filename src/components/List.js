import React from "react";
import {Text,Icon, HStack} from '@chakra-ui/react';
import { CheckIcon } from "../icons/CheckIcon";
export function List({feature}){
    return(
        <HStack as='li' spacing='20px' mt={2}>
            <Icon as={CheckIcon} h={22} w={22}></Icon>
            <Text fontSize='18px' textAlign='left'>{feature}</Text>
        </HStack>
    )
}