import React,{useState,useContext} from 'react';
import {FaBars, FaTwitter} from 'react-icons/fa';
import '../App.css';
import {links} from './data';
import { Link } from "react-router-dom";
import {useGlobalContext} from '../context';



const Navbar = () =>{

    const [toggle,setToggle] = useState(false);

    const {page,setPage } = useGlobalContext();

    const control = () =>{

        const test = !toggle
        setToggle(test);
        
    }


    const setName  = (text) =>{

        return setPage(text)

    }


    return(
        <nav className = "navbar">
                <div className = {`${page === 'Home' ? 'nav-header active' : 'nav-header'}`}>
                    <h1 className = "logo">TheShop</h1>
                    
                    <div className ={`${toggle ? 'links-container show-container': 'links-container'}`}>
        
                        <ul className = "links">

                            {links.map((t) =>{

                                const {id,url, text} = t;

                                return(
                                    <Link to={`${url}`} className="btn btn-primary">
                                        <li  key = {id} >
                                            <a onClick = {() => setName(text)} className = {`${page === text ? 'every active' : 'every'}`} >{text}</a>
                                        </li>
                                  </Link>
                                )
                                
                            })}
                        </ul>
                        
                        <button className = "nav-toggle" 
                            >
                                Sign up
                        </button>

                    </div>
                    <button onClick = {() => control()} className = "nav-btn">
                            <FaBars />
                    </button>


       
                </div>
        </nav>
    )

}

export default Navbar;