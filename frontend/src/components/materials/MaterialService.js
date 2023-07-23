import axios from "axios";

const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
});

export const uploadMaterial = async (material) => {
    try {
        return await axios.post(
            `http://localhost:5000/api/v1/course-materials/add-material`,
            material,
            {
                'Content-Type' : 'multipart/form-data'
            }
        );
    }catch (exception) {
        throw exception;
    }
}