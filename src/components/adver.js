import React,{useState,useEffect} from 'react';
import '../App.css';
import { FaSistrix} from 'react-icons/fa';



const Adver = () =>{

    const [item, setItem] = useState([]);

    async function fetchUrl() {

        try {
            
          let newInfo = await fetch(
            `https://course-api.com/react-store-products`
          );
    
          let data = await newInfo.json();
            
          let list = [];
          
          for(let i = 3; i<6;i++){

              data[i].boolean = false;

              list.push(data[i])
          }

          setItem(list)
          console.log(list)

        } catch (error) {
    
        }
    
      }

      useEffect(() =>{

        fetchUrl();

      },[]);

      const control = (id) =>{
        const newCollect = item.map((t) =>{

          if(t.id === id){
            t.boolean = true
          }
          return t

        })
        setItem(newCollect)

      }

      const control2 = (id) =>{
        const newCollect = item.map((t) =>{

          if(t.id === id){
            t.boolean = false
          }
          return t
        })
        setItem(newCollect)
      }

    
    return(

        <div className = "Adver">
            <h1>Featured Products</h1>
            <span className = "line"></span>
            <div className = "Adver_container">
                {item.map((t) =>{

                    const {image,name,price,boolean,id} = t;

                    return (
                        <li key = {id} className = "Adver_each" onMouseOver = {() => control(id)} onMouseOut = {() => control2(id)}>
                            <div className = {`${boolean ? 'Adver_img show-hover': 'Adver_img'}`}>
                                <img src = {image}></img>
                                <span className = "hover"><div className = "circle"><FaSistrix /></div></span>
                            </div>
                            <h3 className = "Adver_info">{name}<span>${price}</span></h3>
                        </li>
                    )
                })}

            </div>
            <button className = "main_btn Adver_btn">all products</button>
            
        </div>
    )

}

export default Adver;



