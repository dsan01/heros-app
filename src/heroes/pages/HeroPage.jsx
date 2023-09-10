import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons"

export const HeroPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const hero = getHeroById(id)

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to={'/'} />
    }

    return (
        <>
            <div className="grid grid-cols-12 my-5">
                <div className="col-span-4">
                    <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className="rounded-xl shadow-md" />
                </div>
                <div className="col-span-8 px-8 py-4">
                    <h2 className="text-3xl font-semibold"> {hero.superhero} </h2>
                    <div className="mt-4 border p-4 rounded">
                        <p className="mb-1"> <FontAwesomeIcon icon={faBook} className="text-gray-500" /> <span className="font-medium ml-2"> Publicado por: </span> {hero.publisher} </p>
                        <p className="mb-1"> <FontAwesomeIcon icon={faUser}  className="text-gray-500" /> <span className="font-medium ml-2"> Nombre: </span> {hero.alter_ego} </p>
                        <p className="mb-1"> <FontAwesomeIcon icon={faCalendarDays}  className="text-gray-500" /> <span className="font-medium ml-2"> Primera aparición: </span> {hero.first_appearance} </p>
                    </div>
                    <button
                        className="w-max bg-blue-500 px-4 py-2 my-4 rounded-lg text-white cursor-pointer hover:bg-blue-300"
                        onClick={onNavigateBack}
                    >
                        Atras
                    </button>
                </div>
            </div>
        </>
    )
}
