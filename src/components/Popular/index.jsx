import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Post,PostMobile } from '../Post';
import { useTheme } from '@mui/material/styles';
import styles from './popular.module.scss';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MobileStepper from '@mui/material/MobileStepper'; 

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
        <h4 className={styles.h4}>Популярное</h4>
        <a className={styles.atext} href="/popular">Каталог препаратов</a>
        </div>
        {(isPostsLoading?[...Array(3)]:sortallGoods).map((obj,index) => 
        isPostsLoading ? (
            <div className={styles.populargrid}> 
              <Post key={index} isLoading={true}/>
              </div>  
             ) : 
            (
              
              <div className={styles.populargrid}> 
              <Post 
                key={index}
                id={obj.id}
                title={obj.name}
                type={obj.info[0].group_type}
                imageUrl={obj.info[0].avatarUrl[0] ? `${backHost}${obj.info[0].avatarUrl[0]}`:''} 
                price={obj.price[obj.price.length-1].p}
                viewsCount={obj.viewsCount}
                count={count} setCount={setCount}
                maxPrice={obj.price[0].p}
                buysCount={obj.bougthCount}
                discount={obj.discount}
                isSale={obj.discount>0}
                alias={obj.alias}
              />
              </div> 
            ))}

        </>
    )
};



export const PostByType =({
  isPostsLoading,
    allgood,
    backHost,
    count,
    setCount,
    name,

})=>{
  const sortallGoods = (isPostsLoading ? [...Array(5)]:[...allgood]).sort((a, b) => parseInt(b.bougthCount) - parseInt(a.bougthCount)).slice(0,3);

    return(
        <>
        
        <div className={styles.head}>
        <h4 className={styles.h4}>{name}</h4>
        <a className={styles.atext} href={`/Аналоги%20${name.split(' ')[1]}`}>Каталог препаратов</a>
        </div>
        {(isPostsLoading?[...Array(5)]:sortallGoods).map((obj,index) => isPostsLoading ? (
            <Grid item xs={12} lg={4} >  
              <Post key={index} isLoading={true}/>
              </Grid> 
            ) : (
              
              <Grid item xs={12} lg={4}> 
              <Post 
                key={index}
                id={obj.id}
                title={obj.name}
                type={obj.info[0].group_type}
                imageUrl={obj.info[0].avatarUrl[0] ? `${backHost}${obj.info[0].avatarUrl[0]}`:''} 
                price={obj.price[obj.price.length-1].p}
                viewsCount={obj.viewsCount}
                count={count} setCount={setCount}
                maxPrice={obj.price[0].p}
                buysCount={obj.bougthCount}
                discount={obj.discount}
                isSale={obj.discount>0}
                alias={obj.alias}
              />
              </Grid> 
            ))}

        </>
    )
};