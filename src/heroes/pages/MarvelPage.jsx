import { HeroList } from "../components"

export const MarvelPage = () => {
    return (
        <>
            <h2 className='text-3xl font-bangers my-4 text-red-600'>Marvel Comics</h2>
            <hr />
            <HeroList publisher={'Marvel Comics'} />
        </>
    )
}
