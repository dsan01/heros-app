import { Outlet } from 'react-router-dom';
import { Navbar } from './ui/components';


export const HeroesApp = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <Outlet />
            </div>
        </>
    )
}
