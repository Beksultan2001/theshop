import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context';
import Ajax from 'react';


const Section = styled.section`

    display: flex;
    height: 100vh;
    justify-content: center;
    padding: 4rem;
    background-color: rgba(0,0,0, 0.1);

    form{
        border-radius: 20px;
        padding: 2.5rem 1.5rem;
        width: 21rem;
        background-color: #FFFFFF;
    }
    .section_title{

        margin: 3.5rem 0;
        text-align: center;
        letter-spacing: 0.1rem;
        &_img{
            
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            background: #588CCF;
            border-radius: 100%;
            width: 70px;
            height: 70px;
            font-size: 2rem;
            color: white;
        }
        p{
            font-size: 1.2rem;
            margin-top: 1rem;
        }

    }
    .message{
        color: red;
        letter-spacing: 1px;
        text-align: center;
        margin-bottom: 1rem;
    }

    .log{
        letter-spacing: 1px;
        text-align: center;
        font-size: 20px;
        text-decoration: underline;
        cursor: pointer;
        color: #588CCF;
    }

    .toggle{

        margin-top: 1.5rem;
        display: block;
        text-align: end;
        letter-spacing: 0.5px;
        cursor: pointer;
        color: #099c89;
    }

    .toggle:hover{
        color: green;
    }
    .isLogin{
        display: none;
    }


`

const Fieldset = styled.fieldset`

    border: 0.2px solid #099c89;
    width: 100%;
    padding: 0.2rem 1rem;
    margin-bottom: 2rem;
    &:hover{
        border: 1.5px solid blue;
    }
    legend{
        font-size: 13px;
        margin-left: 0.3rem;
        letter-spacing: 1px;

    }
    input:hover,input:focus, input:active{
        background-color: inherit;
    }
    input{
        margin: 0;
        width: 100%;
        height: 100%;
        border: none;
        background-color: inherit;
    }


    input:focus{
        outline: none;
    }
   
`;

const Button = styled.button`
    margin-top: 0.5rem;
    color: white;
    font-size: 17px;
    padding: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    background-color: #5ED5A2;
    border: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
`
const Auth = () =>{


    const {page,setPage,isLogin, setIsLogin,username,setUser,parol,setParol, email,setEmail,nameUser, setNameUser} = useGlobalContext();
    const [signin,setSignIn] = useState(true);
    const [message,setMessage ] = useState('');


    const  register = (e) =>{

        e.preventDefault();

        const request = new XMLHttpRequest();

        request.onload = () =>{

            const respond = JSON.parse(request.responseText);

            if(respond.test === true){

                setNameUser(username);
                setIsLogin(true);
                setUser('');
                setParol('');
                setEmail('');

            }else{

                setMessage(respond.messages);
    
                setTimeout(() =>{
                    setMessage('');
                },3000)

            }

        }

        if(signin){

            const requestData = `username=${username}&islogin=signin&parol=${parol}`;

            request.open('post','https://check.beksultan.kz/index.php');
            request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            request.send(requestData);


        }else{

            const requestData = `username=${username}&islogin=signup&email=${email}&parol=${parol}`;

            request.open('post','https://check.beksultan.kz/index.php');
            request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            request.send(requestData)

        }
        
        
    }

    const logout = () =>{

        
        setNameUser('');
        setIsLogin(false);
    }

    useEffect(() => {

        setPage('Auth');

        
    }, [])

    return(

        <Section className = "section">

            <div>

                <div className = "section_title">

                    {isLogin ? (
                        <>
                            <div className = "section_title_img">
                                {nameUser[0]}
                            </div>
                            <p>
                            {nameUser}, Good to see you here! 
                            </p>
                        </>
                    ): 
                        <>
                         <h1>Login</h1>
                        <span className = "line"></span>
                        </>
                    }
                </div>

                {isLogin ? (

                    <p className = "log" onClick = {logout}>Log out</p>

                ): (

                <form onSubmit={register}>
                    <p className = "message">{message}</p>
                    {signin ? (
                        <>
                        <Fieldset>
                            <legend className = "legend">Name</legend>
                            <input onChange = {(e) => setUser(e.target.value)} value = {username} name = "name"  required/>
                        </Fieldset>
                        <Fieldset>
                            <legend className = "legend">Password</legend>
                            <input onChange = {(e) => setParol(e.target.value)} value = {parol}  name = "password" required/>
                        </Fieldset>
                        </>
                    ): (
                        <>
                            <Fieldset>
                                <legend className = "legend">Name</legend>
                                <input onChange = {(e) => setUser(e.target.value)} value = {username} name = "name"  required/>
                            </Fieldset>
                            <Fieldset>
                                <legend className = "legend">Password</legend>
                                <input onChange = {(e) => setParol(e.target.value)} value = {parol}  name = "password" required/>
                            </Fieldset>
                            <Fieldset>
                            <legend className = "legend">Email</legend>
                            <input  onChange = {(e) => setEmail(e.target.value)} value = {email} name = "email" type = "email" required/>
                            </Fieldset>
                        </>
                    )}
        
                        <Button type = "submit">{signin ? 'Sign in': 'Sign up'}</Button>
                        <p onClick = {() => setSignIn(!signin)} className = "toggle">{signin ? 'Sign up' : 'Sign in'}</p>
                </form>
                

                )}


            </div>
        </Section>

    )

};

export default Auth;