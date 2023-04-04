import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

// Recibe la destructuracion del arreglo heroes para extraer publisher (BD)
export const HeroList = ({ publisher }) => {

    // recibe el "publisher" de la BD
    // Solo se renderiza cuando [publisher] es cambiado
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);
    

    // Retorna una lista ordenada por medio de un map que barre el arreglo de heroes cada uno tiene la llave de su ID
    // y despues muestra el nombre del heroe (hero.superhero) y muestra en la pantalla todo el barrido 
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
           {
               heroes.map( hero => (
                    <HeroCard key={ hero.id }
                       { ...hero }
                    />
               ))
           } 
        </div>
    )
}

