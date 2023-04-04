import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

// Usamos las props en el argumento del componente Inspeccionar/Components/LoginScreen/history/push
export const LoginScreen = ({ history }) => {

    // Extraemos el dispatch
    const { dispatch } = useContext( AuthContext );

    // Al tocar el boton nos redirecciona a '/'
    const handleLogin = () => {

        // obtenemos lo que esta guardado en el localStorage (UltimaPagina) de PrivateRoure.js 
        // pero si es la primera vez que navega el usuario o borraron el localStorage lo redireccionara a '/'
        const paginaAnte = localStorage.getItem('UltimaPagina') || '/';
        
        dispatch({
            type: types.login,
            payload: {
                Administrador: 'Isaac'
            }
        })

        // Reemplaza en la history que no paso por el login cuando y cuando ya le dimos click nos regresa a la ultima pagina que habiamos visitado
        history.replace( paginaAnte );
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
