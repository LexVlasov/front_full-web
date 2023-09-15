
import React from "react";
import { BuyButton, ItemCart } from "../../components";
import styles from './car.style.module.scss';


export const ShoppingCart = ({count,setCount,setUrl}) =>{

  const totalSum = count ? count.map((obj,i)=> obj.sum):[];
  const totalCnt = count ? count.map((obj,i)=> obj.cnt):[];

    setUrl('cart(Корзина');
    return(
        <div className={styles.rootcartgrid}>

            <div className={count.length === 0 ? styles.maininfoload:styles.maininfo}>
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
            </div>
            <div className={styles.buybuttomgrid}>
                <BuyButton totalSum={totalSum.reduce((a,b)=>a+b,0)} value={totalCnt.reduce((a,b)=>a+b,0)} flgCart={true}/>
            </div>
        </div>
    );
};


