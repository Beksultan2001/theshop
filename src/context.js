import React,{ useState, useContext, Children } from 'react';


const AppContext = React.createContext();



const AppProvider = ({ children }) => {


    const [ page,setPage ] = useState('Home');
    const [basket, setBasket] = useState([])
    const [shipping,setShipping] = useState(232);
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUser] = useState('');
    const [parol, setParol] = useState('');
    const [email,setEmail] = useState('');
    const [nameUser,setNameUser] = useState('');
    const [sum, setSum] = useState(0);


    return (

        <AppContext.Provider value = {{sum, setSum, page,setPage,basket,setBasket,shipping,isLogin,setIsLogin,username,setUser,parol,setParol, email,setEmail,nameUser,setNameUser}}>
            {children}
        </AppContext.Provider>

    )


}


export const useGlobalContext = () => {

    return useContext(AppContext)
    
  }
  
  export { AppContext, AppProvider }
  