import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

// Recibimos el arbol de history para poder acceder a las opciones del arbol como por ejemplo history.goBack();
export const HeroScreen = ({ history }) => {

    // Usamos el Hook useParams para obtener los parametros del url
    // Destructuramos el params con "heroeId"
    const { heroeId } = useParams();
    // console.log(heroeId);

    const hero =useMemo(() => getHeroById( heroeId ), [ heroeId ]);

    // Validamos que si el usuario escribe algo mas en el url que no exista nos redirecciona a "/"
    if ( !hero ) {
        return <Redirect to="/" />
    }

    // Por si copiamos el url en otra pagina y al regresar nos mande al "/"
    const handleReturn = () => {
        
        if ( history.lenght <= 2) {
            // Si "history.lenght <= 2" nos redireccionara a "/" (historial de navegacion 1 o 2 paginas atras)
            history.push('/');
        } else {
            // Nos permite regresar a la pagina anterior por medio del history de la pagina web y la opcion de goBack
            history.goBack(); 
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../assets/heroes/${ heroeId }.jpg` }
                    alt={ hero.superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />

                <div className="col-8 animate__animated animate__fadeIn">
                    <h3> { hero.superhero } </h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b> Alter ego: </b> { hero.alter_ego } </li>
                        <li className="list-group-item"> <b> Publisher: </b> { hero.publisher } </li>
                        <li className="list-group-item"> <b> First appearance: </b> { hero.first_appearance } </li>
                    </ul>
                </div>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }>
                    Regresar
                </button>
            </div>
        </div>
    )
}
