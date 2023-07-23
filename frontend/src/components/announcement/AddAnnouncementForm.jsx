import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {Button, Center} from "@chakra-ui/react";
import {getAllInstructorCourses} from "../../service/CourseService.js";
import {errorNotification, successNotification} from "../shared/notification/Notification.js";
import {addAnnouncement} from "../../service/AnnnouncementService.js";
import MyInput from "../input/MyInput.jsx";
import MySelectInput from "../input/MySelectInput.jsx";

const AddAnnouncementForm = ({ onSuccess }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getAllInstructorCourses().then(res => {
            setCourses(res.data);
        }).catch(err => {
            errorNotification(
                err.code,
                err.response.data.message
            );
        });
    });

    let initialValues = {
        "tittle": '',
        "announcement": '',
        "courseId": 0
    };

    const onSubmit = announcement => {
        addAnnouncement(announcement).then(res => {
            successNotification(
                "Announcement added.",
                `${announcement.tittle} was successfully added.`
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
                    <Field
                        as={ MyInput }
                        label='Tittle'
                        type='text'
                        name='tittle'
                        placeholder='Announcement tittle'
                    />
                    <Field
                        as={ MyInput }
                        label='Announcement'
                        type='text'
                        name='announcement'
                        placeholder='Type announcement here....'
                    />
                    <Field
                        as={ MySelectInput }
                        label='Courses'
                        name='courseId'
                    >
                        <option value="">Select Course</option>
                        {courses.map(course => (
                            <option value={ course['id'] } >
                                {course['name']} ( {course['description']} )
                            </option>
                        ))}
                    </Field>
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

export default AddAnnouncementForm;