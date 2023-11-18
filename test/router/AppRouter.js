import { HeroesApp } from "../../src/HeroesApp";
import { LoginPage } from "../../src/auth/pages";
import { childHeroesRoutes } from "../../src/heroes/router/childHeroesRoutes";
import { PrivateRouter } from "../../src/router/PrivateRouter";

export const AppRouter = [
    {
        path: "/login",
        element: (
            <LoginPage />
        ),
    },
    {
        path: "/",
        element: (
            <PrivateRouter>
                <HeroesApp />
            </PrivateRouter>
        ),
        children: childHeroesRoutes,
    },
];