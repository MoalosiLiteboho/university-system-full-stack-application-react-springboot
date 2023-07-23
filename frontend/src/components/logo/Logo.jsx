import React from 'react';
import {Avatar, HStack, Text} from "@chakra-ui/react";

const Logo = ({ closed, ...props }) => {
    return (
        <HStack
            { ...props }
        >
            <Avatar
                size='sm'
                src='src/assets/UniversityLogo.png'
            />
            <HStack spacing={0} >
                <MyLogoText fontWeight='bold' >Moalosi</MyLogoText>
                <MyLogoText >University</MyLogoText>
            </HStack>
        </HStack>
    );
}

const MyLogoText = ({ children, ...props }) => {
    return (
        <Text
            { ...props }
            fontFamily='sans-serif'
            fontSize='1.25em'
        >
            { children }
        </Text>
    );
}

export default Logo;