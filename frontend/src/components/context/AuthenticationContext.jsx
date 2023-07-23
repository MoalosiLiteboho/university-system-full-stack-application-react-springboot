import {createContext, useContext, useEffect, useState} from "react";
import {login as performLogin} from "../../service/UserService.js";
import jwtDecode from "jwt-decode";

const AuthenticationContext = createContext({});

const AuthenticationProvider = ({ children }) => {
    let [user, setUser] = useState(null);

    const setUserFromToken = () => {
        let token = localStorage.getItem("access_token");

        if (token) {
            token = jwtDecode(token);
            setUser({
                username: token["sub"],
                roles: token["scopes"]
            })
        }
    }

    useEffect(() => {
        setUserFromToken()
    }, [])


    const login = async (credentials) => {
        return new Promise((resolve, reject) => {
            performLogin(credentials).then(res => {
                let jwtToken = res.headers["authorization"];
                localStorage.setItem("access_token", jwtToken);

                let decodedToken = jwtDecode(jwtToken);
                console.log(decodedToken);
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }

    const logOut = () => {
        localStorage.removeItem("access_token")
        setUser(null);
    }

    const isUserAuthenticated = () => {
        let token = localStorage.getItem("access_token");

        if (!token)
            return false;

        let { exp: expiration } = jwtDecode(token);
        if (Date.now() > expiration * 1000) {
            logOut()
            return false;
        }
        return true;
    }

    return (
        <AuthenticationContext.Provider value={{
            user,
            login,
            logOut,
            isUserAuthenticated,
            setUserFromToken
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export const useAuthentication = () => useContext(AuthenticationContext);
export default AuthenticationProvider;