import { Navigate } from "react-router-dom";
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const childHeroesRoutes = [
    {
        path: "/marvel",
        element: <MarvelPage />
    },
    {
        path: "/dc",
        element: <DCPage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
    },
    {
        path: "/hero/:id",
        element: <HeroPage />,
    },
    {
        path: "/*",
        element: <Navigate to={'/'} />
    },
];
