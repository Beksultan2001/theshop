import React,{useState,useEffect} from 'react';
import { useGlobalContext } from '../context';
import './basket.css';
import { Link } from "react-router-dom";
import {AiOutlineRest} from 'react-icons/ai'


const Basket = () =>{

    const {sum,setSum,basket,setPage,setBasket,shipping, isLogin} = useGlobalContext();

    const both = (action,id) =>{


        const total = basket.reduce((total,cartItem)=>{

            const {count,price} = cartItem;
    
            total.totalItems += count * price;

            return total;

        },{totalItems: 0})

        setSum(total.totalItems)


        if(action === "minus"){

            basket.map((t) =>{
                if (t.id === id){
                    if(t.count > 1){
                        t.count = t.count - 1;
                        let filters = basket.filter((item) =>{
                            return item.id !== item;
                        });
                        filters.push(t);
                        setPage(filters);
                    }
                }
            });

        }else if (action === "plus"){

            basket.map((t) =>{

                if (t.id === id){
                    if(t.count < 20){
                        t.count = t.count + 1;
                        let filters = basket.filter((item) =>{
                            return item.id !== item;
                        });
                        filters.push(t);
                        setPage(filters)
                    }
                }
                
            })
        }
    }

    const remove = (id) =>{

        let filter = basket.filter((t) =>{

            return t.id !== id;

        });

        setBasket(filter);

    };


    useEffect(() =>{

    
        setPage('basket');


    });


    if(basket.length !== 0){

        return (
        
            <section>
                <div className = "each">
                    <p >Home / Products / Basket</p>
                </div>
                
                <ul className = "category">
                    <li>
                        Item
                    </li>
                    <li>
                        Price
                    </li>
                    <li>
                        Quanity
                    </li>
                    <li>
                        Subtotal
                    </li>
                </ul>
                <hr />

            <ul className = "basketList">
                    {basket.map((t) =>{
    
                        const {images, count, newColor, price,name,id} = t;
                    
                        return(
                            <li className = "basket_each secondEach">
                                <div className = "basket_info">
                                    <div className = "basket_image">
                                        <img src = {images[0].url} />
                                    </div>
                                    <div className = "basket_both">
                                        <p className = "basket_name">{name}</p>
                                        <span className = "basket_color">
                                            <b>color :</b> <span style = {{backgroundColor: newColor}}></span>
                                        </span>
                                    </div>
                                </div>
                                <p className = "basket_price">${(price / 1000).toFixed(2)}</p>
                                <div className = "basket_quan">
                                    <button onClick = {() => both('minus',id)}>-</button>
                                    <span >{count}</span>
                                    <button onClick = {() => both('plus',id)}>+</button>
                                </div>
                                <p className = "basket_price">${((price / 1000)*count).toFixed(2)}</p>
                                <div className = "basket_delete" onClick = {() => remove(id)}>
                                        < AiOutlineRest />
                                </div>
                            </li>
                        )
    
                    })}
    
                </ul>
                 
                <hr className = "lastline" />
                <main className = "basket_buttons">
                    <Link to = "/products">
                        <button className = "backEach continue">
                            Continue Shopping
                        </button>
                    </Link>
                    <button onClick = {() => setBasket([])} className = "backEach clear">
                        Clear Shopping Cart
                    </button>
                </main>
    
                <main className = "add">        
                    <div className = "basket_total">
                        <span className = "total_subtotal">
                            Subtotal: <h4>${
                                (sum / 1000).toFixed(2)
                            }</h4>
                        </span>
                        <span className = "total_shipping">
                            Shipping Free : <h5>${shipping}</h5>
                        </span>
                        <hr />
                        <span className = "total_sum">
                            Order Total: <h3>${(sum - shipping)}</h3>
                        </span>
                        <Link to = {`${isLogin ? '/last' : '/auth'}`}>
                            <button className = "backEach btnBuy">
                                    Buy
                            </button>
                        </Link>

                    </div>
                </main>
                
                
            </section>
    
        )

    }else{

        return (
        
            <section className = "item">
                <div className = "each">
                    <p>Home / Products / Basket</p>
                </div>
                <ul className = "category">
                    <li>
                        Item
                    </li>
                    <li>
                        Price
                    </li>
                    <li>
                        Quanity
                    </li>
                    <li>
                        Subtotal
                    </li>
                </ul>
                <hr />
                <ul className = "basketList">
                    {basket.map((t) =>{
    
                        const {images, count, newColor, price,name,id} = t;
    
                        return(
                            <li className = "basket_each">
                                <div className = "basket_info">
                                    <div className = "basket_image">
                                        <img src = {images[0].url} />
                                    </div>
                                    <div className = "basket_both">
                                        <p className = "basket_name">{name}</p>
                                        <span className = "basket_color">
                                            <b>color :</b> <span style = {{backgroundColor: newColor}}></span>
                                        </span>
                                    </div>
                                </div>
                                <p className = "basket_price">${(price / 1000).toFixed(2)}</p>
                                <div className = "basket_quan">
                                    <button onClick = {() => both('minus',id)}>-</button>
                                    <span >{count}</span>
                                    <button onClick = {() => both('plus',id)}>+</button>
                                </div>
                                <p className = "basket_price">${((price / 1000)*count).toFixed(2)}</p>
                                <button className = "basket_delete" onClick = {() => remove(id)}>
                                        < AiOutlineRest />
                                </button>
                            </li>
                        )
    
                    })}
    
                </ul>

                <main className = "nobasket">
                    <div>
                        <h3>Here is not thing</h3>
                        <Link to = "/products">
                            <button className = "main_btn bas_btn">
                                Make Shop
                            </button>
                        </Link>
                    </div>
                </main>
                                 
            </section>
    
        )
    }
 

    

}

export default Basket;