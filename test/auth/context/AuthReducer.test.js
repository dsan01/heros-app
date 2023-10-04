import { authReducer } from "../../../src/auth/context/"
import { types } from "../../../src/auth/types/types"


describe('Pruebas en el authContext', () => {
    

    test('Debe de retornar es estado por defecto', () => {
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false }) 
    })

    test('Debe de llamar el user y establecer el usuario logueado', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'David',
                id: '123'
            }
        }
        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({ 
            logged: true,
            user: action.payload
        }) 
    })

    test('Dede de hacer Logout y borrar el name y el logged debe ser false', () => {
        
        const state ={ 
            logged: true,
            user: {
                name: 'David',
                id: '123'
            }
        }

        const action = {
            type: types.logout
        }

        const Newstate = authReducer(state, action)
        console.log(Newstate)
        expect(Newstate).toEqual({ 
            logged: false
        }) 
    })
})