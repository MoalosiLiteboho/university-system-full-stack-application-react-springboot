import React from "react";
import {Button, Center, Heading, Link, Stack, Text} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import {errorNotification} from "../shared/notification/Notification.js";
import {useAuthentication} from "../context/AuthenticationContext.jsx";
import {useNavigate} from "react-router-dom";
import MyPasswordInput from "../input/MyPassword.jsx";
import MyInput from "../input/MyInput.jsx";

const LogInForm = () => {
    const {login} = useAuthentication();
    let navigate = useNavigate();
    let initialValues = {
        "username": '',
        "password": ''
    }

    const onSubmit = credentials => {
        login(credentials)
            .then(() => {
                console.log("LogIn successfully");
                navigate("/dashboard");
            })
            .catch(err => {
                errorNotification(
                    err.code,
                    err.response.data.message
                );
            })
    }

    return (
        <Stack color='black'>
            <Heading alignSelf='center' >
                SignIn
            </Heading>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        <Field
                            as={ MyInput }
                            label='Email'
                            type='email'
                            name='username'
                            placeholder='email@gmail.com'
                        />
                        <Field
                            as={ MyPasswordInput }
                            label='Password'
                            name='password'
                            placeholder='Enter password here....'
                        />
                        <Center>
                            <Button
                                type='submit'
                                marginTop='2em'
                                width='10em'
                                backgroundColor='#2da44e'
                                color='#ffffff'
                                _hover={{ backgroundColor: '#2c974b'}}
                            >
                                LogIn
                            </Button>
                        </Center>
                        <Center marginTop='2em' >
                            <Text>Forget password?</Text>
                            <Link
                                marginLeft='1em'
                                href='#'
                                color='#0969da'
                            >
                                Click Here
                            </Link>
                        </Center>
                    </Form>
                )}
            </Formik>
        </Stack>
    );
}

export default LogInForm;