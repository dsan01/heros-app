import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import {DCPage, HeroPage, MarvelPage, SearchPage} from '../heroes/pages/';
import {LoginPage} from '../auth/pages/';
import {HeroesApp} from '../HeroesApp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HeroesApp />,
        children: [
            {
                path: 'marvel',
                element: <MarvelPage />
            },
            {
                path: 'dc',
                element: <DCPage />,
            },
            {
                path: 'search',
                element: <SearchPage />,
            },
            {
                path: 'hero/:id',
                element: <HeroPage />,
            }
        ],
    },
    {
        path: 'login',
        element:  <LoginPage />
    },
    {
        path: '*',
        element: <Navigate to={'/'} />
    }
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter

