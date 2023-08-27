import React, {useState, useEffect} from 'react';
import { Rating, Button} from '@mui/material';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './Post.module.scss';
import { PostSkeleton } from './Skeleton';
import axios from "../../axios";



export const Post = ({
  id,
  title,
  imageUrl,
  user,
  discount,
  viewsCount,
  buysCount,
  children,
  isLoading,
  alias,
  price,
  maxPrice,
  metacontent,
  isSale,
  altText,
  isFullPost,
  type
}) => {
  const [rating,setRating] = useState();


    useEffect(()=>{
        if(id){
          axios.get(`/comment/${alias===0?id:alias}`).then(({data})=>{
            setRating(data);
          }).catch(err =>{
            console.warn(err);
            alert('Error get post')
          })
        }    
    },[id]);
   
  const cntMarks = rating?rating.length:0;  
  const avgMark = (rating?rating.map((obj,i)=>obj.rating):[...Array(3)]).reduce((a,b)=>a+b,0)/(cntMarks>0?cntMarks:1);

  if (isLoading) {
    return <PostSkeleton />;
  }

  let nameCnt = 0;
    if((cntMarks>=10 && cntMarks<=19)||cntMarks%10>=5||cntMarks%10===0){
        nameCnt = 'отзывов';
    }else if(cntMarks%10 > 1 && cntMarks%10 <5){
        nameCnt = 'отзыва';
    }  else {
        nameCnt = 'отзыв';
    } ;
  
  return (

    <div className={styles.root}>
      {isSale && (
        <div className={styles.editButtons}>

            -{discount}%

        </div>
      )}
      {isSale && (
        <div className={styles.oldprice}>

             от {price} руб.

        </div>
      )}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className={styles.wrapper}>
        <div className={styles.indention}>
          <meta name="keywords" content={`${metacontent} купить, москва, санкт-петербург, волгоград`}></meta>
          <h2 className={styles.title}>
            { <Link to={`/${type}/${title}`} >{title}</Link>}
          </h2>
          <div className={styles.ratingprice}>
                <Rating 
                    name="size-small"
                    value={avgMark}
                    size="small"
                    precision={0.5}
                    readOnly 
                  /> 
                  <div className={styles.review}>{cntMarks} {nameCnt}</div>
          </div>
          <div className={isSale? styles.pricesale : styles.price }>от {isSale?Math.ceil(price*((100-discount)/100)):price} руб.</div>
          {children && <div className={styles.content}>{children}</div>}
          <div className={styles.postDetails}>
                  <ul className={styles.postDetails}>
                    <li>
                      <EyeIcon />
                      <span>{viewsCount}</span>
                    </li>
                    <li>
                      <ShoppingCartOutlinedIcon />
                      <span>{buysCount}</span>
                    </li>
                  </ul>
                  <Link to={`/${type}/${title}`}>
                  <Button 
                    className={styles.buy} 
                    // onClick={addToCart} 
                    variant="contained" 
                    endIcon={<ShoppingCartIcon  fontSize="small"/>}>
                    <div className={styles.buytext}>Купить</div> 
                  </Button>
                  </Link>

          </div>
        </div>
      </div>
    </div>

  );
};




export const PostMobile = ({
  id,
  title,
  imageUrl,
  user,
  discount,
  viewsCount,
  buysCount,
  children,
  isFullPost,
  isLoading,
  isEditable,
  count,
  setCount,
  price,
  maxPrice,
  metacontent,
  isSale,
  type
}) => {

  if (isLoading) {
    return <PostSkeleton />;
  }

  
  return (
    <div className={clsx(styles.rootmobile, { [styles.rootFull]: isFullPost })}>
      {isSale && (
        <div className={styles.editButtons}>

            -{discount}%

        </div>
      )}
      {isSale && (
        <div className={styles.oldprice}>

             от {price} руб.

        </div>
      )}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className={styles.wrapper}>
        <div className={styles.indention}>
        <meta name="keywords" content={`${metacontent} купить, москва, санкт-петербург, волгоград`}></meta>
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <Link to={`/${type}/${title}`} >{title}</Link>}
          </h2>
          <div className={styles.ratingprice}>
                <Rating 
                    name="size-small"
                    value={5}
                    size="small"
                    precision={0.5}
                    readOnly 
                  /> 
                  <div className={styles.review}>12 отзывов</div>
          </div>
          <div className={isSale? styles.pricesale : styles.price }>от {isSale?Math.ceil(price*((100-discount)/100)):price} руб.</div>
          {children && <div className={styles.content}>{children}</div>}
          <div className={styles.postDetails}>
                  <ul className={styles.postDetails}>
                    <li>
                      <EyeIcon />
                      <span>{viewsCount}</span>
                    </li>
                    <li>
                      <ShoppingCartOutlinedIcon />
                      <span>{buysCount}</span>
                    </li>
                  </ul>
                  <Link to={`/${type}/${title}`}>
                  <Button 
                    className={styles.buy} 
                    // onClick={addToCart} 
                    variant="contained" 
                    endIcon={<ShoppingCartIcon  fontSize="small"/>}>
                    <div className={styles.buytext}>Купить</div> 
                  </Button>
                  </Link>

          </div>
        </div>
      </div>
    </div>

  );
};



