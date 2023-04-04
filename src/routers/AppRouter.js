import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

    // Extraemos el user del useContext (video 191)
    const { user } = useContext( AuthContext );
    // console.log(user);

    return (
        // Creamos el Router
        <Router>
            <div>
                {/* Creamos los diferentes caminos */}
                <Switch>
                    {/* Creamos las diferentes rutas */}
                    {/* nos redirecciona al componente "LoginScreen" cuando el url es exactamente "/login" y ya este logueado */}
                    <PublicRoute 
                        exact
                        path="/login"
                        component={ LoginScreen }
                        isAuthenticated={ user.logged }
                    />               

                    {/* Tiene proteccion de rutas, si el usuario no se ha logueado no carga ninguna ruta (si copiamos y pegamos por el url)
                        y si ya estamos autenticados  nos redirecciona al componente "DashboardRoutes" cuando el url empieza con "/" (nos deja ingresar a la app) 
                        y si ya estamos loguados y nos salimos del buscador y volvemos a abrir otra pagina y pegamos el url la app recordara que ya estamos logueados
                    */}
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes }
                        isAuthenticated={ user.logged } />  
                </Switch>
            </div>
        </Router>
    )
}
