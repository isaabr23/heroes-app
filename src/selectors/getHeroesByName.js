import { heroes } from '../data/heroes';

export const getHeroesByName = ( name = '') => {

    // Si no recibimos ninguna nformacion regresara un [] vacio
    if ( name === '') {
        return [];
    }

    // name = name.toLocaleLowerCase(); para que no discrimine si el usuario escribe en mayusculas o minusculas
    name = name.toLocaleLowerCase();

    // Regresara el filtro de hero.superhero incluyendo el name que se recibe por argumento
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) );
}
