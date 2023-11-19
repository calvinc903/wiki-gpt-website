import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './components/LandingPage/landingPage.jsx';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import App from "./App.jsx";
import Nav from "./components/Navbar/Nav";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history.jsx";
import CommunityPage from './components/Community/communityPage';
import Prompt from './components/Prompt/Prompt'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth0ProviderWithHistory><LandingPage></LandingPage></Auth0ProviderWithHistory>
    },
    {
        path: "/prompt",
        element:
            <Auth0ProviderWithHistory>
                <ChakraProvider>
                    <Nav />
                    <Prompt />
                </ChakraProvider>
            </Auth0ProviderWithHistory>,
    },
    {
        path: "/test",
        element: <Auth0ProviderWithHistory>
            <Nav />
            <App />
        </Auth0ProviderWithHistory>
    },
    {
        path: "/community",
        element: <Auth0ProviderWithHistory>
            <Nav />
            <CommunityPage />
        </Auth0ProviderWithHistory>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <Auth0ProviderWithHistory>
                <Nav />
                <App />
            </Auth0ProviderWithHistory>
        </RouterProvider>
    </React.StrictMode>,
)
