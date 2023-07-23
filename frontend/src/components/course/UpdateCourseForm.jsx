import {updateCourse} from "../../service/CourseService.js";
import {errorNotification, successNotification} from "../../service/notification.js";
import {Form, Formik} from "formik";
import {TextInput} from "../FormConpornents.jsx";
import {Button, Center} from "@chakra-ui/react";
import React from "react";

const UpdateCourseForm = ({ id, initialValues, onSuccess }) => {
    let onSubmit = (course) => {
        updateCourse(id, course).then(res => {
            successNotification(
                "Course updated",
                `${course.name} was successfully updated.`
            );
            onSuccess(res.headers["authorization"]);
        }).catch(err => {
            errorNotification(
                err.code,
                err.response.data.message
            );
        });
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
                            Update
                        </Button>
                    </Center>
                </Form>
            )}
        </Formik>
    );
}

export default UpdateCourseForm;