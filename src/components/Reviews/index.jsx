import styles from "./reciews.module.scss";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from "../../redux/slices/posts";

import { Rating} from '@mui/material';

export const Reviews = ()=>{

    const [review,setReview] = React.useState(0);

    const {comments} = useSelector((state) => state.goods);
    const isCommentsLoading =comments.status==='loading';
    const dispatch = useDispatch();
    const backHost =   process.env.REACT_APP_API_URL;
    React.useEffect(()=>{
        dispatch(fetchComments());},[dispatch]);

    let cntReview = isCommentsLoading ? 0 : comments.items.length-1;

    const clickButton =(e)=>{
         if (review + e === -1){
            setReview(cntReview);
         } else if (review + e>cntReview ){
            setReview(0);
         } else {
            setReview(review+e)
         }
    };

    return(
        <>
        {isCommentsLoading ? '' :
        <div className={styles.root}>
            <div className={styles.h2}>Отзывы</div>
            <div className={styles.review}>
            <button onClick={()=>clickButton(1)}>&#10096;</button>
            
            <div className={styles.reviews_block}>
                <img src={`${backHost}${comments.items[review].infoofgoods[0].avatarUrl[0]}`} alt={comments.items[review].name}/>
                <div>
                    <h3>{comments.items[review].name}</h3>
                    <p>{comments.items[review].comments[0].text}</p>
                    <p>
                    <Rating
                        name="size-small"
                        value={comments.items[review].comments[0].rating}
                        size="small"
                        precision={0.5}
                        readOnly 
                        id="rating"
                    />
                    </p>
                    <h5>{comments.items[review].comments[0].user[0].split(' ')[0]}</h5>
                </div>
            </div>
            <button onClick={()=>clickButton(-1)}>&#10097;</button>
            </div>
        </div>
        }
        </>
    )
};