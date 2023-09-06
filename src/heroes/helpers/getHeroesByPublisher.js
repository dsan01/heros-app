import { heroes } from '../data/heroes'

export const getHeroesByPublisher = (publisher) => {
    
    const validPublisehrs = ['Marvel Comics', 'DC Comics']

    if (!validPublisehrs.includes(publisher)) {
        throw new Error(`${publisher} no es un publicante valido`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher)
}