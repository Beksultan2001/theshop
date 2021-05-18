import React,{useState, useEffect} from 'react';
import '../css/products.css';
import { FiSearch } from 'react-icons/fi';
import { FaSistrix} from 'react-icons/fa';
import {useGlobalContext} from '../context';
import { Link , useParams} from 'react-router-dom';
import Footer from '../components/footer';



const Product = () =>{

    
    const [item, setItem] = useState([]);
    const [sort, setSort] = useState([]);
    const {page,setPage} = useGlobalContext();
    const [all, setAll] = useState([]);
    const [cate,setCate] = useState('All');
    const [search,setSearch] = useState('')

    async function fetchUrl() {

        try {
            
          let newInfo = await fetch(
            `https://course-api.com/react-store-products`
          );
          
          let data = await newInfo.json();
          
          let list = [];

          let listSort = ['All'];

          data.map((t) =>{

            t.boolean = false;

            let test = listSort.some((item) =>{

              return item === t.category

            })

            if(!test){
              listSort.push(t.category);
            }
            
            list.push(t)

          });
          
          setAll(data);

          setSort(listSort)

          setItem(list);

        } catch (error) {
    
        }
    
      }

      const showHover = (id) =>{
        const list = item.map((t) =>{

          if(t.id === id){
            t.boolean = true;
          }
          return t
        })
        setItem(list)
      }

      const hideHover = (id) =>{
        const list = item.map((t) =>{
          if(t.id === id){
            t.boolean = false;
          }
          return t
        })
        setItem(list)

      }

      const sortCate = (t) =>{


        let sort = all.filter(item => {return item.category === t});

        if(t !== 'All'){

          setCate(t)
          setItem(sort)
          
        }else{

          setCate('All')
          setItem(all)

        }
        
      }

      const Search = (e) =>{

        setSearch(e);


        let sort = all.filter(item => {
          
          // let teksery = /`${search}`/i.test(item.name)

          let test  = item.name.indexOf(search.toLowerCase())
          // console.log(test)

          return test !== -1});

        // console.log(sort)
        if(search.length < 1){

          setItem(all);

        }else{

          setItem(sort);

        }
        

      }

      useEffect(() =>{

        setPage('products')

        fetchUrl();

      },[page],search);


    return(

        <main className = "common">
            <div className = "search">
                <input placeholder = "Search..." value = {search} onChange = {(e) => Search(e.target.value)}  />
                {/* <button className = "btn">{< FiSearch />}</button> */}
            </div>
            <div className = "product">
              
                <div className = "product_sort">
                    <h2>Category</h2>

                    {sort.map((t) =>{
                      return (
                        <p onClick = {() => sortCate(t)} className = {`${cate === t ? 'eachCate active' : 'eachCate'}`}>{t}</p>
                      )
                    })}
                    
                </div>
                {

                  item.length < 1 ? (<h1 className = "nosearch">There is no such a thing </h1>) : (
                    <ul className = "product_container">
                    {item.map((t) =>{

                      const {image,name,price,boolean,id} = t;

                      return (
                        <li key = {id} className = 'product_each' >
                            <div className = {`${boolean ? "product_img active" : 'product_img'}`} onMouseOver = {() => showHover(id)} onMouseOut = {() => hideHover(id)}>
                                <img src = {image} />
                                <span className = "hover">
                                <Link  to = {`/${id}`}>
                                  <div className = "circle"><FaSistrix /></div>
                                </Link>
                                </span>
                            </div>
                            <h3 className = "product_info">{name}<span>${price}</span></h3>
                        </li>
                      )
                    })}
                </ul>
                  )

                }
              
            </div>
            {/* <div className = "footer_product">
              <Footer /> 

            </div> */}
        </main>
        
    )

}


export default Product;
