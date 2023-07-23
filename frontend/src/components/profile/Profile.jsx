import React from "react";
import {Avatar, Box, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Text, VStack} from "@chakra-ui/react";
import {FiChevronDown} from "react-icons/fi";
import {useAuthentication} from "../context/AuthenticationContext.jsx";

const Profile = () => {
    const {logOut, user} = useAuthentication();

    return (
        <Flex alignItems='center' >
            <Menu>
                <MenuButton
                    py={2}
                    transition='all 0.3s'
                    _focus={{boxShadow: 'none'}}>
                    <HStack>
                        <Avatar
                            size='sm'
                            src=''
                        />
                        <VStack
                            display={{ base: 'none', md: 'flex' }}
                            alignItems='flex-start'
                            spacing='1px'
                            marginLeft='1'>
                            <Text fontSize='sm' >
                                { user ?.username }
                            </Text>
                            {user ?.roles.map((role, id) => (
                                <Text
                                    key={id}
                                    fontSize='xs'
                                    color='gray.300'
                                >
                                    {role}
                                </Text>
                            ))}
                        </VStack>
                        <Box display={{base: 'none', md: 'flex'}}>
                            <FiChevronDown />
                        </Box>
                    </HStack>
                </MenuButton>
                <MenuList
                    backgroundColor='#ffffff33'
                    backdropFilter='blur(15px)'
                    WebkitBackdropFilter='blur(15px)'
                    borderRadius='1em'
                    border='none'
                >
                    <MenuItem
                        backgroundColor='transparent'
                        onClick={ logOut }
                    >
                        SignOut
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
}

export default Profile;