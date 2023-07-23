import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuthentication} from "../../context/AuthenticationContext.jsx";

const ProtectedRoute = ({ children }) => {

    const { isUserAuthenticated } = useAuthentication()
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserAuthenticated()) {
            navigate("/")
        }
    })

    return isUserAuthenticated() ? children : "";
}

export default ProtectedRoute;