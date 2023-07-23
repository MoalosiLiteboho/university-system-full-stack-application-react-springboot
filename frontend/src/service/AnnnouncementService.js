import axios from "axios";

const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
})

export const getInstructorAnnouncements = async () => {
    try {
        return await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/announcements/instructor-announcements`,
            getAuthConfig()
        );
    } catch (exception) {
        throw exception;
    }
}

export const getStudentAnnouncements = async () => {
    try {
        return await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/announcements/student-announcements`,
            getAuthConfig()
        );
    } catch (exception) {
        throw exception;
    }
}

export const addAnnouncement = async (announcement) => {
    try {
        return await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/announcements/add-announcement`,
            announcement,
            getAuthConfig()
        );
    } catch (exception) {
        throw exception;
    }
}

export const deleteAnnouncementId = async (announcementId) => {
    try {
        return await axios.delete(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/announcements/${announcementId}/announcement-deletion`,
            getAuthConfig()
        );
    } catch (exception) {
        throw exception;
    }
}