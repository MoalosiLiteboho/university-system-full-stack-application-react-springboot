import React from 'react';
import MenuButton from "./MenuButton.jsx";
import Profile from "../profile/Profile.jsx";
import {Flex} from "@chakra-ui/react";

const MenuTopBar = ({ handleOnClickMenuIcon }) => {
    return (
        <Flex
            as='top'
            width='full'
            height='4em'
            alignItems='center'
            justifyContent='space-between'
            backgroundColor='whiteAlpha.200'
            backdropFilter='blur(15px)'
            WebkitBackdropFilter='blur(15px)'
            borderLeft='1px solid white'
            padding='0 0.8em'
        >
            <MenuButton
                onClickAction={ handleOnClickMenuIcon }
            />
            <Profile/>
        </Flex>
    );
}

export default MenuTopBar;