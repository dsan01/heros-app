import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {DCPage, MarvelPage} from '../heroes/pages/';
import {LoginPage} from '../auth/pages/';
import {HeroesApp} from '../HeroesApp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HeroesApp />,
        children: [
            {
                path: '/marvel',
                element: <MarvelPage />
            },
            {
                path: '/dc',
                element: <DCPage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            }
        ],
    }
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter

