import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context"
import { PrivateRouter } from "../../src/router/PrivateRouter"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en el PrivateRoute', () => {


    test('Debe de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn()
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'David'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRouter>
                        <h1>Ruta privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta privada')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalled()
    })

})