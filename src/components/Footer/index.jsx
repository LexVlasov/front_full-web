import React from "react";
import styles from "./Footer.module.scss";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Image from "../../uploads/mainInfo/logo.png";
import {Link} from 'react-router-dom';


export const Footer = ({types,isTypesLoading,menu,setMenu,group,setGroup})=>{

    const currentYear = new Date().getFullYear();
    const [headerId, setHeaderId] = React.useState();

    const ClickMenu = () =>{
        if(menu === 1){
            setMenu(2);
        }else {
            setMenu(1);
            setGroup(1);
        }
    };

    React.useEffect(() => {
        const id = document.getElementById("header").id;
        if (id) {setHeaderId(id)};
      }, [headerId]);
      
    return(
        <div className={styles.root}>
            <div className={styles.iconsmenu}>

                <button className={styles.catalog} onClick={ClickMenu}>
                    
                <a href={`#${headerId}`}>
                <LocalMallRoundedIcon alt="Каталог"/>
                </a>
                <div style={{height:"12px",fontSize:"12px",color:"#fff",lineHeight:"12px"}}>Каталог</div>
                </button>
                <Link to="/" className={styles.iconop}>
                <img src={Image} alt="OnePill"/>
                </Link>
                <button className={styles.catalog} onClick={()=>{}}>
                <Link to="/cart">
                <ShoppingCart/>
                </Link>
                <div style={{height:"12px",fontSize:"12px",color:"#fff",lineHeight:"12px"}}>Корзина</div>
                </button>
                
            </div>
            <div className={styles.divtextcookie}>
            <span  className={styles.text}>


                   {`© 2014-${currentYear} OnePill. Все права защищены`}                   


            </span>
            </div>
        </div>
    );
};