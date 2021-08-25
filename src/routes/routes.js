import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../page/home/Home.jsx'
import Sobre from '../page/sobre/Sobre.jsx'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Home} path={'/'} exact ></Route>
                <Route component={Sobre} path={'/sobre/:id'} exact ></Route>
            </Switch>
        </BrowserRouter>
    )
}