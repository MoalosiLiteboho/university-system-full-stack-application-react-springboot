import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInAndRegistration from "./pages/loginAndRegistration/LogInAndRegistration.jsx";
import Home from "./pages/home/Home.jsx"
import Dashboard from "./pages/dashboard/Dashboard.jsx";

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
        element: <Dashboard />
    }
]);

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        </React.StrictMode>
    );
