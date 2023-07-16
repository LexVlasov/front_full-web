import React from 'react';
import { Rating,IconButton, Button} from '@mui/material';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './Post.module.scss';
// import { UserInfo } from '../UserInfo';
import { PostSkeleton } from './Skeleton';




export const Post = ({
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
  altText
}) => {

  if (isLoading) {
    return <PostSkeleton />;
  }


  

  
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
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <Link to={`/good/${title}`} >{title}</Link>}
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
                  <Link to={`/good/${title}`}>
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
  isSale
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
            {isFullPost ? title : <Link to={`/good/${title}`} >{title}</Link>}
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
                  <Link to={`/good/${title}`}>
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



