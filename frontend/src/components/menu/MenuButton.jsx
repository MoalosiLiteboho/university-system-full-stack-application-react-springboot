import React from 'react';
import {IconButton} from "@chakra-ui/react";
import {FiMenu} from "react-icons/fi";

const MenuButton = ({ onClickAction }) => {
    return (
        <IconButton
            icon={ <FiMenu/> }
            variant='ghost'
            color='white'
            fontSize='1.5em'
            _hover={{ backgroundColor: 'transparent' }}
            onClick={ onClickAction }
        />
    );
}

export default MenuButton;