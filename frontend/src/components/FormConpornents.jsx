import React, {useState} from "react";
import {useField} from "formik";
import {FormControl, FormLabel, HStack, IconButton, Input, Select} from "@chakra-ui/react";
import {FiEye, FiEyeOff} from "react-icons/fi";

export const TextInput = ({label, ...props}) => {
    const [field] = useField(props);
    return (
        <FormControl>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <Input {...field} {...props} />
        </FormControl>
    );
}

export const SelectInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <FormControl>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <Select {...field} {...props} />
        </FormControl>
    );
};

export const PasswordInput = ({label, ...props}) => {
    let [showPassword, setShowPassword] = useState(false);
    let [field] = useField(props);
    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <FormControl>
            <HStack justify="space-between">
                <FormLabel>Password</FormLabel>
                <IconButton
                    aria-label=''
                    icon={ showPassword ? <FiEyeOff /> : <FiEye /> }
                    onClick={handleShowPassword}
                    backgroundColor='transparent'
                    fontSize='1.3em'
                    _hover={{ backgroundColor: 'transparent' }}
                />
            </HStack>
            <Input
                {...field}
                {...props}
                type={showPassword ? "text" : "password"}
            />
        </FormControl>
    )
}

export const FileInput = ({label, ...props}) => {
    const [field] = useField(props);
    return (
        <FormControl>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <Input
                className="file-input"
                height={'4em'}
                borderRadius={'.5em'}
                {...field}
                {...props}
                type="file"
            />
        </FormControl>
    )
}