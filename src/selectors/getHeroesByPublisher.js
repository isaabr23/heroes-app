import { heroes } from "../data/heroes";

import React from 'react';

// Recibe el publisher de la BD
export const getHeroesByPublisher = ( publisher ) => {

    // Si el usuario escribe un publisher que no es aceptado se lanza un error
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    // Si const validPublishers no existe (!validPublishers.includes) 'DC Comics', 'Marvel Comics' enviara un nuevo error
    if (!validPublishers.includes( publisher )) {
        throw new Error(`Publisher "${ publisher }" no es correcto`)
    }

    // Retorna el filtro de los heroes por publisher "DC Comics" o "Marvel"
    return heroes.filter( hero => hero.publisher === publisher );
    
}
