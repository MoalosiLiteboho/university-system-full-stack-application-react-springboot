import React from 'react';
import {FormControl, FormLabel, Input} from "@chakra-ui/react";

function MyInput({ label, ...props }) {
    return (
        <FormControl>
            <FormLabel htmlFor={props.id || props.name} >
                {label}
            </FormLabel>
            <Input
                {...props}
            />
        </FormControl>
    );
}

export default MyInput;