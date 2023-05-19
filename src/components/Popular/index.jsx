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
  const sortallGoods = [...allgood.items].sort((a, b) => parseInt(b.bougthCount) - parseInt(a.bougthCount)).slice(0,3);

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
                id={obj._id}
                title={obj.name}
                imageUrl={obj.info[0].avatarUrl[0] ? `${backHost}${obj.info[0].avatarUrl[0]}`:''} 
                price={obj.price[sortallGoods[0].price.length-1].p}
                viewsCount={obj.viewsCount}
                count={count} setCount={setCount}
                maxPrice={obj.price[0].p}
                buysCount={obj.bougthCount}
              />
              </Grid> 
            ))}

        </>
    )
}