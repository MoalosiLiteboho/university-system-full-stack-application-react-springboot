import {Form, Formik} from "formik";
import {FileInput, SelectInput, TextInput} from "../FormConpornents.jsx";
import {Button, Center} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {getAllInstructorCourses} from "../../service/CourseService.js";
import jwtDecode from "jwt-decode";
import {errorNotification, successNotification} from "../shared/notification/Notification.js";
import {uploadMaterial} from "./MaterialService.js";

export const AddCourseMaterial = ({onSuccess}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getAllInstructorCourses((jwtDecode(localStorage.getItem("access_token")))['scopes'][0])
            .then(res => {
                setCourses(res.data);
            })
            .catch(err => {
                errorNotification(
                    err.code,
                    err.response.data.message
                );
            });
    });

    let initialValues = {
        "instructorId": (jwtDecode(localStorage.getItem("access_token")))['scopes'][0],
        "tittle": '',
        "courseId": '',
        "file": ''
    };
    const onSubmit = (material) => {
        uploadMaterial(material)
            .then(res => {
                successNotification(
                    "Course material added.",
                    `${material.tittle} was successfully added.`
                );
                onSuccess(res.headers["authorization"]);
            })
            .catch(err => {
                console.log(err);
                errorNotification(
                    err.code,
                    err.response.data.message
                );
            })
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {() => (
                <Form>
                    <TextInput
                        label="Tittle"
                        type="text"
                        name="tittle"
                        placeholder="Announcement tittle"
                    />
                    <SelectInput label={"Courses"} name={"courseId"} >
                        <option color="#000000" value="">Select Course</option>
                        {courses.map(course => (
                            <option color="#000000" value={course.id}>{course.name}</option>
                        ))}
                    </SelectInput>
                    <FileInput
                        label="Material File"
                        name="file"
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

