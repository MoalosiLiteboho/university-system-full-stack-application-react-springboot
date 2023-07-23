import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createStandaloneToast} from "@chakra-ui/toast";
import './index.css'
import LogInAndRegistration from "./components/loginAndRegistration/LogInAndRegistration.jsx";
import Home from "./pages/home/Home.jsx"
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import AuthenticationProvider from "./components/context/AuthenticationContext.jsx";
import {Users} from "./components/user/Users.jsx";
import Material from "./components/materials/Material.jsx";
import ProtectedRoute from "./components/shared/security/ProtectedRoute.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import AdminEnrollments from "./components/enrollment/AdminEnrollments.jsx";
import AnnouncementPage from "./pages/AnnouncementPage.jsx";

const { ToastContainer } = createStandaloneToast();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login-and-student-registration",
        element: <LogInAndRegistration />
    },
    {
        path: "/dashboard",
        element:
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
    },
    {
        path: "/courses",
        element:
            <ProtectedRoute>
                <CoursePage />
            </ProtectedRoute>
    },
    {
        path: "/users",
        element:
            <ProtectedRoute>
                <Users />
            </ProtectedRoute>
    },
    {
        path: "/announcements",
        element:
            <ProtectedRoute>
                <AnnouncementPage />
            </ProtectedRoute>
    },
    {
        path: "/course-materials",
        element:
            <ProtectedRoute>
                <Material />
            </ProtectedRoute>
    },
    {
        path: "/enrollments",
        element:
            <ProtectedRoute>
                <AdminEnrollments />
            </ProtectedRoute>
    }
]);

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <ChakraProvider>
                <AuthenticationProvider>
                    <RouterProvider router={router} />
                </AuthenticationProvider>
                <ToastContainer />
            </ChakraProvider>
        </React.StrictMode>
    );
