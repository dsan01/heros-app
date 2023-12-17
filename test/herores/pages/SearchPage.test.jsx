import { SearchPage } from "../../../src/heroes/pages/SearchPage"

const { render, screen, fireEvent } = require("@testing-library/react")
const { MemoryRouter, useSearchParams } = require("react-router-dom")


const mockedSetSearchParams = jest.fn();

jest.mock("react-router-dom", ()=>({
    ...jest.requireActual("react-router-dom"),
    useSearchParams: ()=>[jest.requireActual("react-router-dom").useSearchParams()[0], mockedSetSearchParams ],
}))

describe('Pruebas en <SearchPage>', () => {


    beforeEach(() => jest.clearAllMocks())


    test('Debe de mostrarse correctamente con valores con defecto', () => {
        
        const {container} =render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar a batman y el input con el valor de querystring', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')
        expect(img.src).toContain('dc-batman')
    })

    test('Debe de mostar un error si no se encuentra el heroe', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert-danger')
        expect(alert).not.toBeNull()
    })

    test('Debe llamar la funcion con los parametros', () => {
        

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        
        fireEvent.change(input, {target: {name:'searchtext', value: 'superman'}})
        
        const form = screen.getByRole('form')

        fireEvent.submit(form)

        expect( mockedSetSearchParams ).toHaveBeenCalled(); 
        expect( mockedSetSearchParams ).toHaveBeenCalledWith({q:'superman'})
    })
})