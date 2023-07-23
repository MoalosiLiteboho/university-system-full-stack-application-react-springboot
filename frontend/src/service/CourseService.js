import axios from "axios";

const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
})

export const getAllCourses = async () => {
    try {
        return await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/courses`,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}

export const getAllInstructorCourses = async () => {
    try {
        return await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/courses/instructor-courses`,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}

export const registerCourse = async (course) => {
    try {
        return await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/courses/register-course`,
            course,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}

export const updateCourse = async (id, course) => {
    try {
        return await axios.put(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/courses/${id}/update-course`,
            course,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}

export const deleteCourse = async (id) => {
    try {
        return await axios.delete(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/courses/${id}/delete-course`,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}
