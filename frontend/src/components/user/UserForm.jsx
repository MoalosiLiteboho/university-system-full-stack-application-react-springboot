import React from "react";
import {Button, Center, Heading, Stack} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import {registerStudent, registerUser, updateUser} from "../../service/UserService.js";
import {errorNotification, successNotification} from "../../service/notification.js";
import {SelectInput, TextInput} from "../FormConpornents.jsx";
import MyInput from "../input/MyInput.jsx";
import MyPasswordInput from "../input/MyPassword.jsx";
import MySelectInput from "../input/MySelectInput.jsx";

export const UserRegistrationForm = ({ onSuccess }) => {
    let initialValues = {
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        email: '',
        gender: '',
        roles: ''
    }

    const onSubmit = user => {
        registerUser(user).then(res => {
            successNotification(
                "User Registered",
                `${user.firstname} ${user.lastname} was registered successfully.`
            );
            onSuccess(res.headers["authorization"]);
        }).catch(err => {
            errorNotification(
                err.code,
                err.response.data.message
            )
        })
    }

    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={ onSubmit }
        >
            {() => (
                <Form>
                    <Field
                        as={ MyInput }
                        label='First Name'
                        name='firstname'
                        type={"text"}
                    />
                    <TextInput
                        label={"Last Name"}
                        name={"lastname"}
                        type={"text"}
                    />
                    <TextInput
                        label={"Date Of Birth"}
                        name={"dateOfBirth"}
                        type={"date"}
                    />
                    <SelectInput label={"Gender"} name={"gender"} >
                        <option value="">Select gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </SelectInput>
                    <TextInput
                        label={"Email"}
                        name={"email"}
                        type={"email"}
                    />
                    <SelectInput label={"Authority"} name={"roles"} >
                        <option value="">Select authority</option>
                        <option value="ADMIN">Admin</option>
                        <option value="INSTRUCTOR">Instructor</option>
                        <option value="STUDENT">Student</option>
                    </SelectInput>
                    <Center>
                        <Button
                            type="submit"
                            mt=".8em"
                            width="10em"
                            bg="#2da44e"
                            color="#ffffff"
                            _hover={{bg: '#2c974b'}}
                        >
                            Registration
                        </Button>
                    </Center>
                </Form>
            )}
        </Formik>
    );
}


export const StudentRegistrationForm = () => {
    let initialValues = {
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        email: '',
        gender: '',
        password: ''
    }

    const onSubmit = student => {
        registerStudent(student)
            .then(res => {
                console.log(res);
                successNotification(
                    "Student Registered",
                    `${student.firstname} ${student.lastname} was registered successfully.`
                );
            }).catch(err => {
                console.log(err);
                errorNotification(
                    err.code,
                    err.response.data.message
                )
            })
    }
    return (
        <Stack color='#000000' >
            <Heading alignSelf='center' >
                Student Registration
            </Heading>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        <Field
                            as={ MyInput }
                            label='First Name'
                            name='firstname'
                            type='text'
                        />
                        <Field
                            as={ MyInput }
                            label='Last Name'
                            name='lastname'
                            type='text'
                        />
                        <Field
                            as={ MyInput }
                            label='Date Of Birth'
                            name='dateOfBirth'
                            type='date'
                        />
                        <Field
                            as={ MyInput }
                            label='Email'
                            name='email'
                            type='email'
                        />
                        <Field
                            as={ MySelectInput }
                            label='Gender'
                            name='gender'
                        >
                            <option value="">Select gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                        </Field>
                        <Field
                            as={ MyPasswordInput }
                            label='Password'
                            name='password'
                        />
                        <Center>
                            <Button
                                type='submit'
                                marginTop='.8em'
                                width='10em'
                                backgroundColor='#2da44e'
                                color='#ffffff'
                                _hover={{ backgroundColor: '#2c974b' }}
                            >
                                Registration
                            </Button>
                        </Center>
                    </Form>
                )}
            </Formik>
        </Stack>
    );
}

export const UserUpdateForm = ({ id, initialValues, onSuccess }) => {
    const onSubmit = user => {
        updateUser(id, user).then(res => {
            successNotification(
                "User Updated",
                `${user.firstname} ${user.lastname} was updated successfully.`
            );
            onSuccess(res.headers["authorization"]);
        }).catch(err => {
            errorNotification(
                err.code,
                err.response.data.message
            );
        })
    }

    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={ onSubmit }
        >
            {() => (
                <Form>
                    <TextInput
                        label={"First Name"}
                        name={"firstname"}
                        type={"text"}
                    />
                    <TextInput
                        label={"Last Name"}
                        name={"lastname"}
                        type={"text"}
                    />
                    <TextInput
                        label={"Date Of Birth"}
                        name={"dateOfBirth"}
                        type={"date"}
                    />
                    <SelectInput label={"Gender"} name={"gender"} >
                        <option value="">Select gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </SelectInput>
                    <TextInput
                        label={"Email"}
                        name={"email"}
                        type={"email"}
                    />
                    <Center>
                        <Button
                            type="submit"
                            mt=".8em"
                            width="10em"
                            bg="#2da44e"
                            color="#ffffff"
                            _hover={{bg: '#2c974b'}}
                        >
                            Update
                        </Button>
                    </Center>
                </Form>
            )}
        </Formik>
    );
}
