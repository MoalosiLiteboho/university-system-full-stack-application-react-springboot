import React from 'react';
import {FormControl, FormLabel, Select} from "@chakra-ui/react";

function MySelectInput({ label, ...props }) {
    return (
        <FormControl>
            <FormLabel
                htmlFor={props.id || props.name}
            >
                {label}
            </FormLabel>
            <Select
                {...props}
            />
        </FormControl>
    );
}

export default MySelectInput;