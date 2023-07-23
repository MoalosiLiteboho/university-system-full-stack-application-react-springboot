import React from 'react';
import {useAuthentication} from "../components/context/AuthenticationContext.jsx";
import AdminCourses from "../components/course/AdminCourses.jsx";
import InstructorCourses from "../components/course/InstructorCourses.jsx";
import StudentCourses from "../components/course/StudentCourses.jsx";

const CoursePage = () => {
    const {user} = useAuthentication();

    if(user ?.roles[0] === "ADMIN")
        return (
            <AdminCourses />
        );

    if(user ?.roles[0] === "INSTRUCTOR")
        return (
            <InstructorCourses />
        );

    if(user ?.roles[0] === "STUDENT")
        return (
            <StudentCourses />
        );
}

export default CoursePage;