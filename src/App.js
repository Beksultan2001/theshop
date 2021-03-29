import React from 'react';
import Home from './pages/Home';
import Navbar from './components/navbar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from './pages/products';
import Service from './pages/services';
import Contact from './pages/contactus';



const App = () =>{


    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path = '/'>
                    <Home />
                </Route>
                <Route path = "/products">
                    <Product />
                </Route>
                <Route path = "/service">
                    <Service />
                </Route>
                <Route path = "/contactus">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    )

}

export default App;