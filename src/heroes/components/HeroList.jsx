import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./"

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="mt-4 grid grid-cols-3 gap-5 justify-center items-center">
            {heroes.map((heroe) =>
                <HeroCard key={heroe.id} {...heroe} />
            )}
        </div>
    )
}
