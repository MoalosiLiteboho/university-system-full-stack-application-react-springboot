import React, {useEffect, useState} from 'react';
import {Form, Formik} from "formik";
import {Button, Center} from "@chakra-ui/react";
import {SelectInput} from "../FormConpornents.jsx";
import {getAllCourses} from "../../service/CourseService.js";
import {errorNotification, successNotification} from "../../service/notification.js";
import {enrollInACourse} from "../../service/EnrollmentService.js";

const CourseEnrollmentForm = ({ onSuccess }) => {
    let [courses, setCourses] = useState([]);
    let initialValues = {
        'courseId': 0
    };

    const fetchCourses = () => {
        getAllCourses().then(res => {
            setCourses(res.data);
        }).catch(err => {
            errorNotification(
                err.code,
                err.response.data.message
            );
        });
    }

    useEffect(() => {
        fetchCourses();
    }, []);

    const onSubmit = data => {
        enrollInACourse(data).then(res => {
            successNotification(
                "Course Enrolled",
                `Course of id [${ data['courseId'] }] was enrolled successfully.`
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
                    <SelectInput
                        label='Available Courses'
                        name='courseId'
                    >
                        <option value="">Select Course</option>
                        {courses.map(course => (
                            <option value={ course['id'] } >
                                {course['name']} ( {course['description']} )
                            </option>
                        ))}
                    </SelectInput>
                    <Center>
                        <Button
                            type="submit"
                            mt="2em"
                            width="10em"
                            bg="#2da44e"
                            color="#ffffff"
                            _hover={{ backgroundColor: '#2c974b' }}
                        >
                            Enroll
                        </Button>
                    </Center>
                </Form>
            )}
        </Formik>
    );
}

export default CourseEnrollmentForm;