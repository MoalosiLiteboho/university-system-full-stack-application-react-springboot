import {login as performLogin} from "../../service/UserService.js";
import jwtDecode from "jwt-decode";

export const login = async (usernameAndPassword) => {
    return new Promise((resolve, reject) => {
        performLogin(usernameAndPassword).then(res => {
            const jwtToken = res.headers["authorization"];
            localStorage.setItem("access_token", jwtToken);
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })

}

export const logOut = () => {
    localStorage.removeItem("access_token")
}

const isUserAuthenticated = () => {
    let token = localStorage.getItem("access_token");
    if (!token) return false;

    let { exp: expiration } = jwtDecode(token);
    if (Date.now() > expiration * 1000) {
        logOut()
        return false;
    }
    return true;
}