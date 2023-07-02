
import { Grid } from "@mui/material";
import React from "react";
import { BuyButton, ItemCart,ItemCartMobile, BuyButtonMobile } from "../../components";
import styles from './car.style.module.scss';


export const ShoppingCart = ({count,setCount,setUrl}) =>{

  const totalSum = count ? count.map((obj,i)=> obj.sum):[];
  const totalCnt = count ? count.map((obj,i)=> obj.cnt):[];

    setUrl('cart(Корзина');
    return(
        <div style={{height:"100%"}}>
        <Grid container spacing={2}>
            <Grid item lg={8.5} className={count.length === 0 ? styles.maininfoload:styles.maininfo}>
            {(count.length > 0 ?
                
                (count.map((ob,i)=> 

                <ItemCart 
                    key={i} 
                    id = {ob.id}
                    avatarUrl = {ob.avatar}
                    count ={ob.cnt}
                    name = {ob.name}
                    type = {ob.type}
                    price={ob.price}
                    setCount={setCount}
                    totalCart={count}
                    step_q={parseInt(ob.step_q)}
                    min_q={parseInt(ob.min_q)}
                    />

                 )
                )  
                : <div className={styles.emptycart}>В корзине пока что пусто....</div>)}
            </Grid>
            <Grid item lg={3}>
                <BuyButton totalSum={totalSum.reduce((a,b)=>a+b,0)} value={totalCnt.reduce((a,b)=>a+b,0)} flgCart={true}/>
            </Grid>
        </Grid>
        </div>
    );
};



export const ShoppingCartMobile = ({count,setCount}) =>{

    const totalSum = count ? count.map((obj,i)=> obj.sum):[];
    const totalCnt = count ? count.map((obj,i)=> obj.cnt):[];
  

      return(
       <>

              <div className={count.length === 0 ? styles.maininfoload:styles.maininfo}>
              {(count.length > 0 ?
                  
                  (count.map((ob,i)=> 
  
                  <ItemCartMobile 
                      key={i} 
                      id = {ob.id}
                      avatarUrl = {ob.avatar}
                      count ={ob.cnt}
                      name = {ob.name}
                      type = {ob.type}
                      price={ob.price}
                      setCount={setCount}
                      totalCart={count}
                      step_q={parseInt(ob.step_q)}
                      min_q={parseInt(ob.min_q)}
                      />
  
                   )
                  )  
                  : <div className={styles.emptycart}>В корзине пока что пусто....</div>)}
              </div>
              <div>
                  <BuyButtonMobile totalSum={totalSum.reduce((a,b)=>a+b,0)} value={totalCnt.reduce((a,b)=>a+b,0)} flgCart={true}/>


          </div>
          </>
      );
  };