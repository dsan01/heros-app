const { render, screen, fireEvent } = require("@testing-library/react")
const { AuthContext } = require("../../../src/auth/context/AuthContext")
const { MemoryRouter, useNavigate } = require("react-router-dom")
const { Navbar } = require("../../../src/ui/components/Navbar")

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en el navbar', () => {
    
    const ContextValue = {
        logged: true,
        user: {
            name: 'David',
        },
        logout: jest.fn()
    }

    

    beforeEach(() => jest.clearAllMocks())

    test('Debe de mostrar el nombre del usuario', () => {
        
        render(
            <AuthContext.Provider value={ContextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('David')).toBeTruthy()
    })

    test('Debe de llamar el logout y navigate cuando se hace click en el boton Logout', () => {
        
        render(
            <AuthContext.Provider value={ContextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button')
        fireEvent.click(logoutBtn)

        expect(ContextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {'replace': true})
    })
})