import React from 'react';
import {Form, Formik} from "formik";
import {Button, Center} from "@chakra-ui/react";
import {registerCourse} from "../../service/CourseService.js";
import {errorNotification, successNotification} from "../../service/notification.js";
import {TextInput} from "../FormConpornents.jsx";

const RegisterCourseForm = ({ onSuccess }) => {
    let initialValues = {
        "name": '',
        "description": '',
        "retire": ''
    };

    let onSubmit = (course) => {
        registerCourse(course).then(res => {
            successNotification(
                "Course registered",
                `${course.name} was successfully registered.`
            );
            onSuccess(res.headers["authorization"]);
        }).catch(err => {
            errorNotification(
                err.code,
                err.response.data.message
            );
        })
    };

    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={ onSubmit }
        >
            {() => (
                <Form>
                    <TextInput
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Course Name"
                    />
                    <TextInput
                        label="Description"
                        type="text"
                        name="description"
                        placeholder="Course Description"
                    />
                    <TextInput
                        label="Course Retire"
                        type="date"
                        name="retire"
                    />
                    <Center>
                        <Button
                            type="submit"
                            mt="2em"
                            width="10em"
                            bg="#2da44e"
                            color="#ffffff"
                            _hover={{bg: '#2c974b'}}
                        >
                            Add
                        </Button>
                    </Center>
                </Form>
            )}
        </Formik>
    );
}

export default RegisterCourseForm;