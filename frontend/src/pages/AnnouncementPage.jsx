import React from 'react';
import {useAuthentication} from "../components/context/AuthenticationContext.jsx";
import InstructorAnnouncements from "../components/announcement/InstructorAnnouncements.jsx";
import StudentAnnouncements from "../components/announcement/StudentAnnouncements.jsx";

const AnnouncementPage = () => {
    const {user} = useAuthentication();

    if(user ?.roles[0] === "INSTRUCTOR")
        return (
            <InstructorAnnouncements />
        );

    if(user ?.roles[0] === "STUDENT")
        return (
            <StudentAnnouncements />
        );
}

export default AnnouncementPage;