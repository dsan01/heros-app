import { Outlet } from 'react-router-dom';
import { Navbar } from './ui/components';
import { AuthProvider } from './auth/context';


export const HeroesApp = () => {
    return (
        <>
            <AuthProvider>
                <Navbar />
                <div className='container mx-auto'>
                    <Outlet />
                </div>
            </AuthProvider>
        </>
    )
}
