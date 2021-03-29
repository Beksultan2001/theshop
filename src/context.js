import React,{ useState, useContext, Children } from 'react';


const AppContext = React.createContext();


const AppProvider = ({ children }) => {


    const [ page,setPage ] = useState('Home');


    return (

        <AppContext.Provider value = {{page,setPage}}>
            {children}
        </AppContext.Provider>

    )


}


export const useGlobalContext = () => {

    return useContext(AppContext)
    
  }
  
  export { AppContext, AppProvider }
  