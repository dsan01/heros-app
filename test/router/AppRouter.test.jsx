import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import { AppRouter } from "./AppRouter"

describe('Pruebas en el <AppRouter> ', () => {

    test('Debe de mostrar el Login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        };

        const router = createMemoryRouter(AppRouter, {
            initialEntries: ["/marvel", "/login"],
            initialIndex: 1,
        });


        render(
            <AuthContext.Provider value={contextValue}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Login').length).toBe(2)
    })
})