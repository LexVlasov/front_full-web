import Header from "./header/header";
import Footer from "./footer";
import UnderHeader from "./underheader/underheader";
import Dropdown from './dropdown/dropdown';
import Prefooter from "./prefooter/prefooter";
import React, { createContext, useContext, useState,useEffect } from 'react';
import Path from "./path/path";
import axios from "./axios";

const StateContext = createContext();

const Layout = ({children }) =>{
    const [count, updateCount] = useState([]);
    const [windowWidth, setWindowWidth] = useState(100);
    
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };
    const backHost = process.env.NEXT_PUBLIC_API_URL;

    const setCount = (newCount) => {
        updateCount(newCount);
        localStorage.setItem('count', JSON.stringify(newCount));
      };

    useEffect(() => {
      updateWindowWidth();
        if(typeof window !== 'undefined'){
            const storedCount = localStorage.getItem('count');
        if (storedCount) {
            updateCount(JSON.parse(storedCount));
        }
        window.addEventListener('resize', updateWindowWidth);
    
        // Удаление слушателя события при размонтировании компонента
        return () => {
          window.removeEventListener('resize', updateWindowWidth);
        };
        }
      }, [windowWidth]);

    return(
        <>
        <StateContext.Provider value={{ count, setCount, backHost,windowWidth}}>
          <header>
        <Header/>
        <UnderHeader/>
        </header>
        {windowWidth>=1000&&<Dropdown/>}
        <Path/>
        <main>
        {children}
        </main>
        <footer>
        <Prefooter/>
        <Footer/>
        </footer>
        </StateContext.Provider>
        </>
    )
}

export default Layout;

export const useAppState = () => {
    return useContext(StateContext);
  };

