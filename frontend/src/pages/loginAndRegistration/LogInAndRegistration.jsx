import React, {useState} from "react";
import {
    Heading,
    HStack,
    VStack,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
    Link,
    Text,
    Select
} from '@chakra-ui/react';
import "./LogInAndRegistration.css";

const LogInAndRegistration = () => {
    let [active, setActive] = useState(false);
    let [showPassword, setShowPassword] = useState(false);
    const handleActive = () => setActive(!active);
    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <div className={active ? "body active" : "body" }>
            <div
                className="container"
            >
                <div className="blur-background">
                    <div className="box signIn">
                        <Heading
                            as="h2"
                        >Already have an account?</Heading>
                        <Button
                            className="signIn-button"
                            onClick={handleActive}
                        >
                            sing in
                        </Button>
                    </div>
                    <div className="box signup">
                        <Heading
                            as="h2"
                        >Do not have an account?</Heading>
                        <Button
                            className="signUp-button"
                            onClick={handleActive}
                        >
                            sing up</Button>
                    </div>
                </div>
                <div className={active ? "form-box active" : "form-box"}>
                    <form className="form signIn-form"  method="post">
                        <Box>
                            <VStack>
                                <Heading>
                                    Sign In
                                </Heading>
                                <FormControl
                                    mt="2em"
                                >
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" />
                                </FormControl>
                                <FormControl mt=".5em">
                                    <HStack justify="space-between">
                                        <FormLabel>Password</FormLabel>
                                        <i
                                            className={showPassword ? "uil uil-eye-slash" : "uil uil-eye"}
                                            onClick={handleShowPassword}
                                        ></i>
                                    </HStack>
                                    <Input type={showPassword ? "text" : "password"} />
                                </FormControl>
                                <Center>
                                    <Button
                                        mt="2em"
                                        width="10em"
                                        bg="#2da44e"
                                        color="#ffffff"
                                        _hover={{bg: '#2c974b'}}
                                    >LogIn</Button>
                                </Center>
                                <Center mt="2em">
                                    <Text>Forget password?</Text>
                                    <Link
                                        ml="1em"
                                        href="#"
                                        color="#0969da"
                                    >
                                        Click Here
                                    </Link>
                                </Center>
                            </VStack>
                        </Box>
                    </form>
                    <form className="form signUp-form" action="" method="post">
                        <VStack>
                            <Heading>
                                Sign Up
                            </Heading>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Surname</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Date Of Birth</FormLabel>
                                <Input type="date" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>
                                    Gender
                                </FormLabel>
                                <Select>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="OTHERS">Others</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <HStack justify="space-between">
                                    <FormLabel>Password</FormLabel>
                                    <i
                                        className={showPassword ? "uil uil-eye-slash" : "uil uil-eye"}
                                        onClick={handleShowPassword}
                                    ></i>
                                </HStack>
                                <Input type={showPassword ? "text" : "password"} />
                            </FormControl>
                            <Center>
                                <Button
                                    mt=".8em"
                                    width="10em"
                                    bg="#2da44e"
                                    color="#ffffff"
                                    _hover={{bg: '#2c974b'}}
                                >Registration</Button>
                            </Center>
                        </VStack>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogInAndRegistration;