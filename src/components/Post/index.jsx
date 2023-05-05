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
  viewsCount,
  buysCount,
  children,
  isFullPost,
  isLoading,
  isEditable,
  count,
  setCount,
  price,
  maxPrice
}) => {

  if (isLoading) {
    return <PostSkeleton />;
  }


  
  const addToCart = async ()=> {
    const items ={
      id,
      cnt:5,
      maxPrice,
      sum: 5*parseInt(maxPrice),
    }
    let newVal = [...count];
    let prodIn = newVal.findIndex((p)=> p.id === items.id);
    if(prodIn===-1){
      newVal.push(items);
    } else{
      newVal[prodIn].cnt +=5;
      newVal[prodIn].sum = newVal[prodIn].cnt * parseInt(maxPrice);
      newVal[prodIn].maxPrice = maxPrice;
    }
    setCount(newVal);
  };
  
  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/good/${id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
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
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <Link to={`/good/${id}`}>{title}</Link>}
          </h2>
          <div className={styles.ratingprice}>
                <Rating 
                    name="size-small"
                    value={2.5}
                    size="small"
                    precision={0.5}
                    readOnly 
                  /> 
                  <div className={styles.review}>12 отзывов</div>
          </div>
          <div className={styles.price}>от {price} руб.</div>
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
                  <Link to={`/good/${id}`}>
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

