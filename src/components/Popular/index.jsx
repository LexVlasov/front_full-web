import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Post } from '../Post';
import styles from './popular.module.scss';

export const Popular = ({
    isPostsLoading,
    allgood,
    backHost,
    count,
    setCount,
})=>{
  const sortallGoods = [...allgood.items].sort((a, b) => parseInt(b.infoGood[0].buysCount) - parseInt(a.infoGood[0].buysCount)).slice(0,3);
    return(
        <>

        <div className={styles.head}>
        <h4>Популярное</h4>
        <a className={styles.atext} href="/popular">Каталог препаратов</a>
        </div>
        {(isPostsLoading?[...Array(5)]:sortallGoods).map((obj,index) => isPostsLoading ? (
            <Grid item xs={6} lg={4} >  
              <Post key={index} isLoading={true}/>
              </Grid> 
            ) : (
              
              <Grid item xs={6} lg={4}> 
              <Post 
                key={index}
                id={obj.infoGood[0]._id}
                title={obj.name}
                imageUrl={obj.avatarUrl[0] ? `${backHost}${obj.avatarUrl[0]}`:''} 
                price={obj.infoGood[0].priceForOne[(obj.infoGood[0].priceForOne.length)-1][1]}
                viewsCount={obj.infoGood[0].viewsCount}
                count={count} setCount={setCount}
                maxPrice={obj.infoGood[0].priceForOne[0][3]}
                buysCount={obj.infoGood[0].buysCount}
              />
              </Grid> 
            ))}

        </>
    )
}