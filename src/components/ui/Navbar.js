import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    // Extraemos el user del AuthContext del archivo AuthContext.js
    const { user: { Administrador }, dispatch } = useContext( AuthContext );
    // console.log(Administrador);

    // UseHistory nos regresa el history del arbol accediendo mas facil en este caso a **action, block, createHref, go, goBack, goForward, length, listen, location, push, replace
    // En este caso queremos acceder a "replace" para poder usar el handleLogout

    const history = useHistory();

    // Al oprimir el boton llamamos al dispatch que borra el types.login y el user
    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-700 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        {/* Extraemos el nombre del usuario */}
                        { Administrador }
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}