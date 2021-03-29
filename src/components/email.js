import React from 'react';
import './content.css';



const Email = () =>{



    return(
        <section className = "Email">
            <h1>Join our newsletter and get 20% off</h1>
            <div className = "Email_info">
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</div>
                <form>
                    <input placeholder = "Enter Email"/>
                    <button className = "btn">Subscribe</button>
                </form>
            </div>
        </section>
    )
     
}

export default Email;