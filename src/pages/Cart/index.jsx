
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
  const prcieByCnt = (obj,cnt) =>{
  var priceNow = obj.priceForOne[0][3];
  for (var i = 0; i < obj.priceForOne.length;i++){
    if(parseInt(obj.priceForOne[i][0])<=cnt && parseInt(obj.priceForOne[i][2])>=cnt){
      if(i === 0){
        priceNow = obj.priceForOne[i][(obj.priceForOne[i].length-1)];
      }
       else {
        priceNow = obj.priceForOne[i][(obj.priceForOne[i].length-2)];
      }
    }else if (parseInt(obj.priceForOne[i][0])<=cnt && i === (obj.priceForOne.length-1)){
      priceNow = obj.priceForOne[i][1];
    };
  };
  return priceNow;
};
setUrl('cart(Корзина');
    return(
        <div style={{height:"100%"}}>
        <Grid container spacing={2}>
            <Grid item lg={8.5} className={styles.maininfo}>
            {(count.length > 0 ? (isPostsLoading?[...Array(1)]:allgood.items).map((obj,index)=>isPostsLoading ? (
                <><div class={styles.ldsroller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                
                <div className={styles.loadcart}>загружаю товары</div> </>
              ) : (
                
                (count.map((ob,i)=> ob.id === obj.infoGood[0]._id?

                <ItemCart 
                    key={index} 
                    id = {obj.infoGood[0]._id}
                    avatarUrl = {obj.avatarUrl[0]}
                    count ={ob.cnt}
                    name = {obj.name}
                    type = {obj.type}
                    price={obj.infoGood[0].priceForOne}
                    setCount={setCount}
                    totalCart={count}
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