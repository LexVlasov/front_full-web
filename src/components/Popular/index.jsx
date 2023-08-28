import React from "react";
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
            <div className={styles.populargrid}> 
              <Post key={index} isLoading={true}/>
              </div> 
            ) : (
              
              <div className={styles.populargrid}> 
              <Post 
                key={index}
                id={obj.id}s
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