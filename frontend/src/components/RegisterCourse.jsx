import React from "react";
import {Box, Button, Center, FormControl, FormLabel, Heading, Input, VStack} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";


const RegisterCourse = () => {
    let initialValues = {
        name: '',
        description: '',
        retire: ''
    }

    const onSubmit = (values, props) => {
        console.log(values);
        props.resetForm();
    }

    return (
        <Box>
            <VStack>
                <Heading>
                    Register Course
                </Heading>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {() => (
                        <Form>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Field as={Input} type="text" name="name" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Field as={Input} type="text" name="description" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Retire</FormLabel>
                                <Field as={Input} type="date" name="retire" />
                            </FormControl>
                            <Center>
                                <Button
                                    type="submit"
                                    mt="2em"
                                    width="10em"
                                    bg="#2da44e"
                                    color="#ffffff"
                                    _hover={{bg: '#2c974b'}}
                                >
                                    Register
                                </Button>
                            </Center>
                        </Form>
                    )}
                </Formik>
            </VStack>
        </Box>
    )
}

export default RegisterCourse;