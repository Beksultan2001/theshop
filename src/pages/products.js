import React from 'react';
import '../css/products.css';
import { FiSearch } from 'react-icons/fi';


const Product = () =>{



    return(

        <main className = "common">
            <div className = "search">
                <input placeholder = "Search..." />
                {/* <button className = "btn">{< FiSearch />}</button> */}
            </div>
        </main>
        
    )

}


export default Product;
