import { useSearchParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";


export const SearchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    
    const q = searchParams.get('q') ?? '';
    
    const heroes = getHeroesByName(q)
    
    const { searchtext, onInputChange } = useForm({
        searchtext: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault()
        console.log('holi')
        setSearchParams({q: searchtext});
    }

    return (
        <>
            <div className="grid grid-cols-12 my-5">
                <h1 className="text-3xl font-semibold col-span-12"> Buscar un heroe </h1>
                <div className="col-span-5 px-4">
                    <h4 className="text-xl py-4 font-medium">Busqueda</h4>
                    <form onSubmit={onSearchSubmit} aria-label="form">
                        <input
                            type="text"
                            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Busca un superheroe"
                            name="searchtext"
                            autoComplete="off"
                            value={searchtext}
                            onChange={onInputChange}
                        />
                        <button
                            className="w-max bg-blue-500 px-4 py-2 my-4 rounded-lg text-white cursor-pointer hover:bg-blue-300"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-span-7 px-4">
                    <h4 className="text-xl py-4 font-medium">Resultados</h4>
                    {
                        (q === '') ? 
                            <div className="grid grid-cols-1 justify-items-center w-full flex-col bg-slate-100 p-4 rounded">
                                <img src="/assets/searching.svg" alt="" className="w-1/4 mb-3" />
                                <p className="text-center">Realiza una busqueda</p>
                            </div> : (heroes.length === 0) && 
                            <div aria-label="alert-danger"  className="grid grid-cols-1 justify-items-center w-full flex-col bg-red-100 p-4 rounded">
                                <img src="/assets/we-got-a-problem.svg" alt="" className="w-1/4 mb-3" />
                                <p className="text-center">No hay resultados para { q }</p>
                            </div>
                    }
                    {
                        heroes.map(hero => (
                            <HeroCard  key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
