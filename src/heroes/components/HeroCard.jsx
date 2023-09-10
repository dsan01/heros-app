import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const imagePath = `assets/heroes/${id}.jpg`;

    return (
        <Link to={`/hero/${id}`}>
            <div className="flex flex-col border rounded-md shadow h-96 hover:-translate-y-1 transition ease-in-out delay-150 " >
                <div className="h-1/2 overflow-hidden grow">
                    <img className="object-none  w-full rounded-t-md object-center" src={imagePath} alt={superhero} />
                </div>
                <div className="p-4">
                    <h5 className="text-center text-lg font-semibold mb-3"> {superhero} </h5>
                    <p className="mb-1"> <FontAwesomeIcon icon={faBook} className="text-gray-500" /> <span className="font-medium ml-2"> Publicado por: </span> {publisher} </p>
                    <p className="mb-1"> <FontAwesomeIcon icon={faUser}  className="text-gray-500" /> <span className="font-medium ml-2"> Nombre: </span> {alter_ego} </p>
                    <p className="mb-1"> <FontAwesomeIcon icon={faCalendarDays}  className="text-gray-500" /> <span className="font-medium ml-2"> Primera aparición: </span> {first_appearance} </p>
                </div>
            </div>
        </Link>
    )
}
