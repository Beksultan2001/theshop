import React from 'react';
import Navbar from './navbar';
import '../pages/Home';
import { Link } from "react-router-dom";






const Main = () =>{


    return(

        <div className = "main"> 
            <div className = "main_info">
                <h1 className = "title">Stop buying. Start renting.</h1>
                <h3 className = "subtitle">High quality furniture rendals available in N.Y.C.</h3>
                <Link to = "/products">
                    <button className = "main_btn">
                        Shop Furniture
                    </button>
                </Link>
            </div>

        </div>
    )


}

export default Main;