import {
    FiBookOpen,
    FiCode,
    FiCodepen,
    FiHeart,
    FiHome,
    FiInbox,
    FiInfo,
    FiLogIn,
    FiPhone,
    FiUsers
} from "react-icons/fi";
import jwtDecode from "jwt-decode";

const NavigationLinks = name => {
    if(name === "home") {
        return [
            {name: 'Home', route: '/', icon: FiHome},
            {name: 'About Us', route: '/about-us', icon: FiInfo},
            {name: 'Contact Us', route: '/contact-us', icon: FiPhone},
            {name: 'SignIn', route: '/login-and-student-registration', icon: FiLogIn}
        ];
    } else if (name === "dashboard") {
        if ((jwtDecode(localStorage.getItem("access_token")))['scopes'][0] === "ADMIN") {
            return [
                {name: 'Home', route: '/dashboard', icon: FiHome},
                {name: 'Courses', route: '/courses', icon: FiBookOpen},
                {name: 'Users', route: '/users', icon: FiUsers},
                {name: 'Enrollments', route: '/enrollments', icon: FiCodepen},
                {name: 'Submissions', route: '/appointments', icon: FiInfo},
                {name: 'Grades', route: '/appointments', icon: FiInfo},
            ];
        } else if((jwtDecode(localStorage.getItem("access_token")))['scopes'][0] === "INSTRUCTOR") {
            return [
                {name: 'Home', route: '/dashboard', icon: FiHome},
                {name: 'Courses', route: '/courses', icon: FiBookOpen},
                {name: 'Materials', route: '/course-materials', icon: FiCode},
                {name: 'Assignments', route: '/appointments', icon: FiCodepen},
                {name: 'Grades', route: '/appointments', icon: FiInfo},
                {name: 'Feedback', route: '/appointments', icon: FiInfo},
                {name: 'Announcements', route: '/announcements', icon: FiInfo},
            ];
        } else if((jwtDecode(localStorage.getItem("access_token")))['scopes'][0] === "STUDENT") {
            return [
                {name: 'Home', route: '/dashboard', icon: FiHome},
                {name: 'My Courses', route: '/courses', icon: FiHeart},
                {name: 'Materials', route: '/appointments', icon: FiBookOpen},
                {name: 'Assignments', route: '/services', icon: FiInfo},
                {name: 'My Grades', route: '/services', icon: FiInfo},
                {name: 'Announcements', route: '/announcements', icon: FiInfo},
                {name: 'Student Feedback', route: '/services', icon: FiInbox},
            ]
        }
        else return [];
    } else {
        return [];
    }
}

export default NavigationLinks;
