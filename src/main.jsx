import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Nav from "./components/Navbar/Nav";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <Nav />
            <App />
        </RouterProvider>
    </React.StrictMode>,
)
