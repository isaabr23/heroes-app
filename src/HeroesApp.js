import React, { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

    // init solo revisara el LocalStorage para ver si tenemos el objeto (user) para evaluar ese LocalStorage
    // y si existe lo va a retornar y si no ( || ) retorna un objeto en falso ** este es el estado inicial
    const init = () => {
        return JSON.parse( localStorage.getItem( 'user' ) ) || { logged: false }; 
    }

export const HeroesApp = () => {
                                        // El init pasa su estado al objeto vacio {} (initialState)
    const [ user, dispatch] = useReducer( authReducer , {}, init)

    // Con el useEffect hacemos que cuando nos autentificamos y se refrezca la pagina no se pierda el usuario (name)
    // 'user' es como mi ejemplo de 'pandora' asi se llama la 'caja' del localStorage
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify( user ));
    }, [user])

        return (
    // user y dispatch es lo que voy a distribuir en AuthContext, significa que yo puedo usar "user" y "dispatch" en toda la aplicacion 
            <AuthContext.Provider value={{ user, dispatch }}>

                <AppRouter />
                
            </AuthContext.Provider>
        )
}