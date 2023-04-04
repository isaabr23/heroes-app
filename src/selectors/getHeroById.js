import { heroes } from "../data/heroes";

// Recibe el "id" y retorna todos los id de los heroes (BD) ** los busca por medio del find
export const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id );
    
}
