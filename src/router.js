import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ProductList from './displays/productList'
import ViewCart from './displays/viewCart'
import NotFound from './displays/NotFound'

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/cart" component={ViewCart}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)