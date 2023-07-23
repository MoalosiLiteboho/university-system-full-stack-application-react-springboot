import React, {useState} from 'react';
import {FormControl, FormLabel, HStack, IconButton, Input} from "@chakra-ui/react";
import {FiEye, FiEyeOff} from "react-icons/fi";

const MyPasswordInput = ({ label, ...props }) => {
    let [hide, setHide] = useState(true);
    const handleShowPassword = () => setHide(!hide);

    return (
        <FormControl>
            <HStack justify="space-between">
                <FormLabel>Password</FormLabel>
                <IconButton
                    aria-label=''
                    icon={ hide ? <FiEye /> : <FiEyeOff /> }
                    onClick={handleShowPassword}
                    backgroundColor='transparent'
                    fontSize='1.3em'
                    _hover={{ backgroundColor: 'transparent' }}
                />
            </HStack>
            <Input
                {...props}
                type={hide ? 'password' : 'text'}
            />
        </FormControl>
    );
}

export default MyPasswordInput;
