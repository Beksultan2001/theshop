import React,{useEffect} from 'react';
import {useGlobalContext} from '../context';
import styled from 'styled-components';



const Item = styled.div`

    // height: 100vh;
    width: 100%;

    // @media(max-width: 500px){

    //     height: 0;

    // }

`;




const About = () =>{

    const {setPage} = useGlobalContext();


    useEffect(() =>{

        setPage('about')

    },[]);

    return (
        <Item>

            <div className = "each">
                    <p>Home / About</p>
                </div>
                <div className = "eachContainer">
                    <div className = "about_main">
                        <div className = "image">
                            <img src = "https://vistapointe.net/images/shop-2.jpg" />
                        </div>
                        <article className = "about_info">
                            <h1 className = "about_title">The<span>Shop </span></h1>
                            <span className = "line lineAbout"></span>

                            <p className = "subTitle">

                                The Project was created by Beksultan.kz and by using React router and React hooks, for backend used Ajax, MySQL and PHP 7.4
                                <br></br>
                                Purpose of the Project is to develop technical skills

                                

                            </p>
                        </article>
                    </div>
                </div>

        </Item>
        
    )

}

export default About;