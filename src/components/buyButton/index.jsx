import ShoppingCart from "@mui/icons-material/ShoppingCart"
import { TableCell } from "@mui/material"
import styles from "./buybutton.module.scss"
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import React from "react";
import AutorenewIcon from '@mui/icons-material/Autorenew';

export const BuyButton = ({
    totalSum,
    value,
    flgCart,
    addToCart,
    catValue
}) =>{
    

    let nameCnt = 'таблетка';
    if(catValue >1 && catValue <5){
        nameCnt = 'таблетки'
    } else if (catValue>=5) {
        nameCnt = 'таблеток'
    } 

    return(
        <>
        <div className={styles.maininfo}>
        <div className={styles.totaltitle}>Итого:</div>
        <div className={styles.infototal}>
          <div className={styles.pricetotal}>{totalSum}</div>
          <div className={styles.undertotal}>за {value} табл.</div>
        </div>
        {
        <TableCell className={styles.infoabcart}> В корзине уже {catValue} {nameCnt} этого препарата</TableCell>
        }
        {flgCart 
        ? 
        (<>
            <button className={styles.buttonbuy} onClick={addToCart}><AutorenewIcon sx={{mr:1,color:"#fff"}}/>ОБНОВИТЬ</button>
            <a href="/checkout"><button className={styles.oneclick}><CreditScoreIcon sx={{mr:1,color:"#fff"}} />ОФОРМИТЬ</button></a>
            
        </>
        )
         :
        (<><button className={styles.buttonbuy} onClick={addToCart}><ShoppingCart sx={{mr:1,color:"#fff"}}/>В КОРЗИНУ</button>
        <button className={styles.oneclick}>Купить в 1 клик</button> </>)
        }
        </div>
        </>
    );
};


export const BuyButtonMobile = ({
    totalSum,
    value,
    flgCart,
    addToCart,
    catValue
}) =>{
    

    let nameCnt = 'таблеток';
    if(catValue > 1 && catValue <5){
        nameCnt = 'таблетки'
    } else if (catValue>=5) {
        nameCnt = 'таблеток'
    } 

    return(
        <>
        <div className={styles.maininfomobile}>
        <div className={styles.totaltitlemob}>Итого:</div>
        <div className={styles.infototalmob}>
          <div className={styles.pricetotalmobile}><b>{totalSum}</b></div>
          <div className={styles.undertotalmobile}>за {value} табл.</div>
        </div>
        
        {<div className={styles.divtablecell}>
        <TableCell className={styles.infoabcartmobile}> В корзине уже {catValue} {nameCnt} этого препарата</TableCell> </div>
        }
        {/* {flgCart 
        ? 
        ( */}
        <>
             <button className={styles.buttonbuy} onClick={addToCart}><ShoppingCart sx={{mr:1,color:"#fff"}}/>В КОРЗИНУ</button>
            <a href="/checkout"><button className={styles.oneclick}><CreditScoreIcon sx={{mr:1,color:"#fff"}} />ОФОРМИТЬ</button></a>
            
        </>
        {/* )
         :
        (<><button className={styles.buttonbuy} onClick={addToCart}><AutorenewIcon sx={{mr:1,color:"#fff"}}/>ОБНОВИТЬ</button>
        <button className={styles.oneclick}>Купить в 1 клик</button> </>)
        } */}
        </div>
        </>
    );
};