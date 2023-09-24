import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {LoginPage} from '../auth/pages/';
import { childHeroesRoutes } from '../heroes/router/childHeroesRoutes';
import { HeroesRoutes } from '../heroes/router/HeroesRoutes';
import { PrivateRouter } from './PrivateRouter';


const router = createBrowserRouter([
    {
        path: "/",
        element:
            (<PrivateRouter>
                <HeroesRoutes />
            </PrivateRouter>),
        children: childHeroesRoutes,
    },
    {
        path: 'login/*',
        element:
            <LoginPage />
    },
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter

