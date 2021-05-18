import React, {useState,useEffect} from 'react';
import Home from './pages/Home';
import Navbar from './components/navbar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from './pages/products';
import About from './pages/about';
import Contact from './pages/contactus';
import Each from './pages/each';
import Footer from './components/footer';
import Basket from './pages/basket';
import Auth from './pages/auth';
import Last from './pages/last';




const App = () =>{



    return (
        <div clasName = "App">
        
                <Router>
                    <Navbar />
                      <Switch>
                          <Route exact path = '/'>
                              <Home />
                          </Route>
                          
                          <Route exact path = "/products">
                              <Product />
                          </Route>
                          <Route exact path = "/about">
                              <About />
                          </Route>
                          <Route exact path = "/last">
                              <Last/>
                          </Route>
                          <Route exact path = "/basket" >
                              <Basket />
                          </Route>
                          <Route exact path = "/auth">
                              <Auth/>
                          </Route>
                          <Route  exact path = "/:id" >
                              <Each />
                          </Route >
                          
      
                      </Switch>

                    <Footer />
                    

            </Router>
            

        </div>
    )

}

export default App;