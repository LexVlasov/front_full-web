
import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BuyButton, ItemCart } from "../../components";
import { fetchGoods } from "../../redux/slices/posts";
import styles from './car.style.module.scss';


export const ShoppingCart = ({count,setCount,setUrl}) =>{
    const dispatch = useDispatch();
    const {allgood} = useSelector((state)=>state.goods);
    const isPostsLoading =allgood.status==='loading';
    React.useEffect(()=>{
        dispatch(fetchGoods());
    },[]);
  const totalSum = count ? count.map((obj,i)=> obj.sum):[];
  const totalCnt = count ? count.map((obj,i)=> obj.cnt):[];
    console.log();
setUrl('cart(Корзина');
    return(
        <div style={{height:"100%"}}>
        <Grid container spacing={2}>
            <Grid item lg={8.5} className={isPostsLoading ? styles.maininfoload:styles.maininfo}>
            {(count.length > 0 ? (isPostsLoading?[...Array(1)]:allgood.items).map((obj,index)=>isPostsLoading ? (
                <><div class={styles.ldsroller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                
                <div className={styles.loadcart}>загружаю товары</div> </>
              ) : (
                
                (count.map((ob,i)=> ob.id === obj._id?

                <ItemCart 
                    key={index} 
                    id = {obj._id}
                    avatarUrl = {obj.info[0].avatarUrl[0]}
                    count ={ob.cnt}
                    name = {obj.name}
                    type = {obj.info[0].type}
                    price={obj.price}
                    setCount={setCount}
                    totalCart={count}
                    step_q={parseInt(obj.step_q)}
                    min_q={parseInt(obj.min_q)}
                    />
                                     
                 : null)
                )  )
            ): <div className={styles.emptycart}>В корзине пока что пусто....</div>)}
            </Grid>
            <Grid item lg={3}>
                <BuyButton totalSum={totalSum.reduce((a,b)=>a+b,0)} value={totalCnt.reduce((a,b)=>a+b,0)} flgCart={true}/>
            </Grid>
        </Grid>
        </div>
    );
};