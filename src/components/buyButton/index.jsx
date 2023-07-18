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
    

    const [cp,setCp] = React.useState(window.location.pathname);
    let nameCnt = 0;
    if(catValue>=10 && catValue<=19){
        nameCnt = cp.substring(1)!=='cart'?'таблеток':'препаратов';
    }else if(catValue%10 > 1 && catValue%10 <5){
        nameCnt = cp.substring(1)!=='cart'?'таблетки':'препарата';
    } else if (catValue%10>=5||catValue%10===0) {
        nameCnt = cp.substring(1)!=='cart'?'таблеток':'препаратов';
    } else {
        nameCnt = cp.substring(1)!=='cart'?'таблетка':'препарат';
    } ;

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
    addToCart,
    catValue,
    am
}) =>{
    
    const [cp,setCp] = React.useState(window.location.pathname);
    let nameCnt = cp.substring(1)!=='cart'?'таблеток':'препаратов';
    if(catValue > 1 && catValue <5){
        nameCnt = cp.substring(1)!=='cart'?'таблетки':'препарата';
    } else if (catValue>=5) {
        nameCnt = cp.substring(1)!=='cart'?'таблеток':'препаратов';
    } else{
        nameCnt = cp.substring(1)!=='cart'?'таблетка':'препарат';
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
        {cp.substring(1)!=='cart'?
        <TableCell className={styles.infoabcartmobile}> В корзине уже {catValue} {nameCnt} этого препарата</TableCell> 
        :
        <TableCell className={styles.infoabcartmobile}> В корзине {am?am.length:0} {nameCnt}</TableCell> 
        }</div>}
        <>
             <button className={styles.buttonbuy} onClick={addToCart}><ShoppingCart sx={{mr:1,color:"#fff"}}/>В КОРЗИНУ</button>
            <a href="/checkout"><button className={styles.oneclick}><CreditScoreIcon sx={{mr:1,color:"#fff"}} />ОФОРМИТЬ</button></a>
            
        </>
        </div>
        </>
    );
};