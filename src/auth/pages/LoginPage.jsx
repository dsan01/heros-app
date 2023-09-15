import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

export const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => {
    
    login('David Sanchez')
    
    navigate("/marvel", {
      replace: true
    });
}

  return (
    <div className='container mt-5 mx-auto'>
      <h1 className='text-2xl'> Login</h1>
      <hr className='my-4' />

      <button
        className='w-max bg-blue-500 px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-blue-300'
        onClick={ onLogin }
      > 
        Login
      </button>

    </div>
  )
}
