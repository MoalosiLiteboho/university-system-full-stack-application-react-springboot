import React, {useState} from "react";
import {Box, Button, Flex, Heading, HStack} from '@chakra-ui/react';
import LogInForm from "./LogInForm.jsx";
import NavigationLinks from "../shared/navigation/NavigationLinks.js";
import HomeNavigationBar from "../shared/navigation/HomeNavigationBar.jsx";
import {StudentRegistrationForm} from "../user/UserForm.jsx";

const LogInAndRegistration = () => {
    let [active, setActive] = useState(false);
    const handleActive = () => setActive(!active);

    return (
        <HomeNavigationBar
            links={NavigationLinks("home")}
            backgroundImage={'login.jpg'}
        >
            <Flex
                justifyContent='center'
                alignItems='center'
                height='full'
                transition='.5s'
            >
                <Box
                    position='relative'
                    width='800px'
                    height='500px'
                    margin='20px'
                >
                    <HStack
                        position='absolute'
                        top='40px'
                        width='full'
                        height='420px'
                        spacing={0}
                        backgroundColor='#ffffff33'
                        backdropFilter='blur(15px)'
                        boxShadow='0 5px 45px #00000026'
                    >
                        <Flex
                            position='relative'
                            width='50%'
                            height='full'
                            justifyContent='center'
                            alignItems='center'
                            flexDirection='column'
                        >
                            <MyHeading>Already have an account?</MyHeading>
                            <MyButton onClickAction={ handleActive }>
                                SignIn
                            </MyButton>
                        </Flex>
                        <Flex
                            position='relative'
                            width='50%'
                            height='100%'
                            justifyContent='center'
                            alignItems='center'
                            flexDirection='column'
                        >
                            <MyHeading>Do not have an account?</MyHeading>
                            <MyButton onClickAction={ handleActive }>
                                SignUp
                            </MyButton>
                        </Flex>
                    </HStack>
                    <Flex
                        position='absolute'
                        left={ active ? '50%' : '0' }
                        width='50%'
                        height='full'
                        backgroundColor='white'
                        zIndex='1000'
                        justifyContent='center'
                        alignItems='center'
                        boxShadow='0 5px 45px rgba(0, 0, 0, #00000026)'
                        transition='0.5s ease'
                        overflow='hidden'
                    >
                        <MyFormBox left={ active ? '-30em' : '0' } >
                            <LogInForm />
                        </MyFormBox>
                        <MyFormBox left={ active ? '0' : '30em' } >
                            <StudentRegistrationForm />
                        </MyFormBox>
                    </Flex>
                </Box>
            </Flex>
        </HomeNavigationBar>
    );
}

const MyFormBox = ({ children, ...props }) => {
    return (
        <Box
            { ...props }
            position='absolute'
            width='100%'
            padding='50px'
            transition='0.5s'
            transitionDelay='0.5s'
        >
            { children }
        </Box>
    );
}

const MyHeading = ({ children }) => {
    return (
        <Heading
            color='white'
            fontSize='2em'
            fontWeight='500'
            marginBottom='1em'
        >
            { children }
        </Heading>
    );
}

const MyButton = ({ onClickAction, children }) => {
    return (
        <Button
            cursor='pointer'
            padding='.6em'
            borderRadius='2em'
            backgroundColor='transparent'
            fontSize='1.5em'
            fontWeight='500'
            border='2px solid #ffffff'
            color='white'
            _hover={{ color: 'green' }}
            onClick={ onClickAction }
        >
            { children }
        </Button>
    );
}

export default LogInAndRegistration;
