import axios from "axios";

const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
})

export const getAllStudentEnrollments = async () => {
    try {
        return await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/enrollments/course-enrollment-by-student`,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}

export const enrollInACourse = async (enrollmentRequest) => {
    try {
        return await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/enrollments/course-enrollment`,
            enrollmentRequest,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}

export const unEnrollInACourse = async (enrollmentId) => {
    try {
        return await axios.delete(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/enrollments/${enrollmentId}/course-un-enrollment`,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}

export const getAllEnrollments = async () => {
    try {
        return await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/enrollments`,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}


