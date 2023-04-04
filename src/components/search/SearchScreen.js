import React, { useMemo } from 'react';
import queryString from 'query-string'; // Lo exportamos de la pagina "npm install query-string" para facilitar la recoleccion de los datos /search?q=batman como string
import { useForm } from '../../Hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router'; // Para facilitar la localizacion de "q" en el url y usar el dato en nuestro programa
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    // descargamos la libreria "npm install query-string" para utilizar el "useLocation"
    const location = useLocation();
    // console.log(location.search);

    // si "q" no existe (nada en la caja de buscar) nos dara un string vacio y si existe tendremos en consola lo que esta en el url ** si el usuario actualiza no se borrara la informacion del url
    const { q = ''} = queryString.parse( location.search );
    // console.log(q);

    
    // El "q" es lo que le pasaremos como valor inicial al searchText 
    const [ formValues, handleInputChange ] = useForm({ 
        searchText: q
    });
    
    // Asi extraemos el "searchText" del formValues de arriba
    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName( searchText ), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        
        // Nos coloca ?q=${ searchText } en el URL ejemplo: /search?q=batman
        history.push(`?q=${ searchText }`)
    }

    return (

        <div>
            <h1>Search Screen </h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Find your Hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                
                </div>

                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    {
                        ( q === '' ) &&  
                        <div className="alert alert-info"> 
                                Search a hero
                        </div>
                    }
                    
                    {
                        ( q !== '' && heroesFiltered.length === 0 ) 
                        &&  
                        <div className="alert alert-danger"> 
                            There is no a hero with { q }
                        </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }   
                                { ...hero }
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}
