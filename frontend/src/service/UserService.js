import axios from "axios";

const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
})

export const login = async (credentials) => {
    try {
        return await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/login`,
            credentials
        );
    } catch (exception) {
        throw exception;
    }
}

export const getAllUsers = async () => {
    try {
        return await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/users`,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}

export const registerUser = async (user) => {
    try {
        return await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/user-registration`,
            user,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}

export const registerStudent = async (student) => {
    try {
        return await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/student-registration`,
            student
        );
    }catch (exception) {
        throw exception;
    }
}

export const deleteUser = async (userId) => {
    try {
        return await axios.delete(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/${userId}/delete-user`,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}

export const updateUser = async (userId, user) => {
    try {
        return await axios.put(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/${userId}/update-user`,
            user,
            getAuthConfig()
        );
    }catch (exception) {
        throw exception;
    }
}