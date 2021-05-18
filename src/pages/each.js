import React,{useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import '../css/each.css';
import {useGlobalContext} from '../context';


const Each = () =>{

    const {id} = useParams();
    const { setPage , basket , setBasket } = useGlobalContext();
    const [mainImg,setMainImg] = useState([])
    const [each, setEach] = useState([]);
    const [listImg, setListImg] = useState([])
    const [color, setColor] = useState([]);
    const [active, setActive] = useState('');
    const [count, setCount] = useState(1);

    async function fetchUrl() {

        try {
            
          let newInfo = await fetch(
            `https://course-api.com/react-store-single-product?id=${id}`
          );
          let data = await newInfo.json();
          setPage('products');         
          setColor(data.colors)
          setMainImg(data.images[0].url);
          setActive(data.colors[0])  
          setEach(data);
          setListImg(data.images);

        } catch (error) {
        }

      }
    
      useEffect(()=>{

        fetchUrl();

      },[]);

      const plus = () =>{

        let t  = count + 1;
        setCount(t);
      }

      const minus = () =>{
        let t;
        if(count < 1){
          t = 0
        }else{
          t = count - 1;
          setCount(t);
        }
      }

      const Basket = (t) =>{

        let figureOut = basket.some((index) =>{
            return index.id === t
        });

        each['count'] = count;
        each['newColor'] = active;

        
        if(figureOut){
          
          const newBasket = basket.filter(eve=>{

            return eve.id !== t

          });
          newBasket.push(each)
          setBasket(newBasket);

        }else{
          let newList = [...basket];
          newList.push(each);
          setBasket(newList)

        }

      }
      

    return (

        <div>
            <div className = "each">
                <p>Home / Products / {each.name}</p>
            </div>
            <div className = "eachContainer">
                <button className = 'backEach'>
                    <Link className = "back_text" to = "/products">
                      BACK TO  PRODUCTS
                    </Link>
                </button>
              <div className = "each_main">
                  <div className = "each_main_filedImg">
                    <div className = "each_main_Image">
                      <img src={mainImg} />
                    </div>
                    <ul className = "each_main_smallImages">
                      {listImg.map((t,i) =>{

                        const {id, url} = t;
                          
                          return <li onClick = {() => setMainImg(url)}  key = {id} className = {`${mainImg === url ? 'each_main_smallImg active' : 'each_main_smallImg'}`}>
                            <img src = {url} />
                          </li>

                        })}
                    </ul>
                  </div>
                  <div className = "each_main_info">
                    <h1>{each.name}</h1>
                    <h2 className = "each_main_info_price">$ {(each.price / 1000).toFixed(2)}</h2>
                    <span className = "each_main_info_descr">{each.description}</span> 
                    <ul className = "list_info">
                      <li> <b>Category:</b> <span>{each.category}</span></li>
                      <li className = "company"><b>Company: </b> <span>{each.company}</span></li>
                    </ul>
                    <span className = "line2" />
                    <div className = "listColor">
                      <b>Colors: </b> {color.map((t) =>{

                        return (
                          <li onClick = {() => setActive(t)} style = {{backgroundColor: `${t}`}} > {active === t && <span>&#10003;</span> }</li>
                        )
                      })}
                    </div>
                    <div className = "calculate">

                      <button className = "minus" onClick = {() => minus() 
                      }>-</button>
                      <span>{count}</span>
                      <button className = "plus" onClick = {() => plus()}>+</button>

                    </div>
                    
                      <button onClick = {() => Basket(id)} className = "backEach back2">{`${basket.some((index) =>{
                      return index.id === each.id}) ? 'UPDATE': 'ADD TO CART'}`}</button>
                  </div>
              </div>
            </div>
        </div>
    )


}

export default Each;

