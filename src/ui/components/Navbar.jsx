import { Link, NavLink, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {

    const navigate = useNavigate()

    const onLogout = () => {
        navigate("/login", {
            replace: true
        })
    }

    return (
        <nav className="relative flex w-full flex-nowrap items-center justify-between bg-green-300 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700  lg:flex-wrap lg:justify-start lg:py-4"
            data-te-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="ml-2">
                    <Link className="text-2xl  text-green-600 font-bangers" to="/"> Heroes app </Link>
                </div>
                <div className="!visible hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto">
                    <ul className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row" data-te-navbar-nav-ref>
                        <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
                            <NavLink
                                className={({ isActive }) =>
                                    `p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none  lg:px-2 [&.active]:text-black/90 ${isActive ? 'active underline' : ''}`
                                }
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>
                        </li>
                        <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1">
                            <NavLink
                                className={({ isActive }) =>
                                    `p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none  lg:px-2 [&.active]:text-black/90 ${isActive ? 'active underline' : ''}`
                                }
                                to="/dc">
                                DC
                            </NavLink>
                        </li>
                        <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1">
                            <NavLink
                                className={({ isActive }) =>
                                    `p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none  lg:px-2 [&.active]:text-black/90 ${isActive ? 'active underline' : ''}`
                                }
                                to="/search">
                                Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="mb-4 p-2 lg:mb-0 lg:pl-0 lg:pr-1 flex justify-end">
                    <button
                        className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none  lg:px-2 [&.active]:text-black/90"
                        onClick={onLogout}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="pr-2" /> Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}
