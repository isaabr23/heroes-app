import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { DcScreen } from '../components/dc/DcScreen';

import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            {/* Mostramos la barra solo en el "DashboardRoutes" en "LoginScreen" no*/}
            <Navbar />

            <div className="container mt-3">
                <Switch>
                    {/* Muestra "MarvelScreen" cuando el url es exactamente "/marvel" */}
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    {/* Muestra "HeroScreen" cuando el url es exactamente "/hero/:heroeId" es el que nos muesra el "Mas..." de cada heroe */}
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    {/* Muestra "DcScreen" cuando el url es exactamente "/dc" */}
                    <Route exact path="/dc" component={ DcScreen } />

                    <Route exact path="/search" component={ SearchScreen } />

                    {/* Redirecciona a "/marvel" cuando el url es diferente a cualquier Route del Switch */}
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>

    )
}
