import React from 'react';
import './content.css'
import {AiFillSafetyCertificate,AiFillSketchCircle,AiFillCodeSandboxCircle} from 'react-icons/ai';
import {base as data} from './data';



const Content = () =>{

    
    return (
        <div className = "Content">

            <header><h2>Custom Furniture Built Only For You</h2><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
            </span></header>
    
            <ul className = "list">
                {data.map((t) =>{

                    const {id,text,icon,title} = t;

                    return (

                        <li className = "each" key = {id}>
                            <div>
                                {icon}
                            </div>
                            <h2>{title}</h2>
                            <p>
                                {text}
                            </p>
                        </li>

                    )

                })}
            </ul>
        </div>
    )

}

export default Content;