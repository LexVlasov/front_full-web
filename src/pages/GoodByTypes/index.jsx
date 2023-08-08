import React from 'react';
import Grid from '@mui/material/Grid';

import { Post,PostMobile } from "../../components/Post";
import { TypesBlock,DeliveryAdvertise } from '../../components/BlockTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoodsbyType, fetchTypes } from '../../redux/slices/posts';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import styles from "./GoodByType.module.scss";

export const GoodsByType = ({count, setCount,setUrl}) => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const dispatch = useDispatch();
  const {type} = useParams();
  const {allgood,types} = useSelector((state) => state.goods);
  const isTypesLoading =types.status==='loading';
  const isPostsLoading =allgood.status==='loading';

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = [...allgood.items].slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allgood.items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  React.useEffect(()=>{
    dispatch(fetchGoodsbyType(type));
    dispatch(fetchTypes());
  },[dispatch,type]);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.value));
  };
  if(type){
    document.title = `${type} купить в Москве и РФ | ${type} купить недорого | ${type} `;
    setUrl(type+'('+type); 
  }
  let leywords = (isPostsLoading ? [...Array(5)] : allgood.items.map((obj,i)=>obj.ie_search)).reduce((a,b)=> a+ ' '+b,'');

  const hostname = window.location.origin;
  return (
     <Box sx={{ flexGrow: 1 }}>
      <meta name="description" content={`Ищете ${type} в Москве? Посетите интернет-аптеку One Pill! Мы предлагаем высококачественные ${type} по доступным ценам с возможностью доставки в день заказа. При покупке от 3000 рублей скидка на доставку по Москве. Заботьтесь о своем здоровье с One Pill! Все оттенки твоих желаний... +7(800)511-31-02`} />
      <meta name="keywords" content={leywords} />
         <Grid container spacing={2} alignItems="flex-start" >

         <Grid item xs={12} md={3} lg={3} spacing={2}>                
         {(isTypesLoading?[...Array(5)]:types.items).map((obj,index)=> isTypesLoading ? '' :
            (<TypesBlock title={obj.lvl1_type} items={obj.group_type} isLoading={isTypesLoading} key={index} />)
          )}
          <DeliveryAdvertise/>
        </Grid>                    
         <Grid item container xs={12} md={9} lg={9} spacing={4}>
                 
            {(isPostsLoading?[...Array(5)]:currentItems).map((obj,index) => isPostsLoading ? (
                <Post key={index} isLoading={true}/>
              ) : (
              
                <Grid item xs={6} lg={4}> 
                <Post 
                  key={index}
                  id={obj.id}
                  type={obj.info[0].group_type}
                  title={obj.name}
                  imageUrl={obj.info[0].avatarUrl ? `${backHost}${obj.info[0].avatarUrl[0]}`:''} 
                  price={obj.price[(obj.price.length)-1].p}
                  viewsCount={obj.viewsCount}
                  // commentsCount={obj.commentsCount}
                  // tags={obj.tags}
                  // isEditable={userData?._id === obj.user._id}
                  count={count} setCount={setCount}
                  discount={obj.discount}
                  isSale={obj.discount>0}
                  alias={obj.alias}
                  
                />
                </Grid> 
              ))}
              <Grid item container justifyContent="left" alignItems="center" sx={{ mt: 2 ,mb:4}} xs={12} md={12} lg={12} >
              {pageNumbers.length > 1 ? (
            <>
            <button className={styles.butnext} onClick={()=>{let e = currentPage; setCurrentPage(e>1?(e-1):e)}}>&#60; Назад</button>
          {pageNumbers.map((number) => (
            <button key={number} value={number} onClick={handleClick} className={currentPage===number ? styles.activepage : styles.page}>
              {number}
            </button> 
          ))}
          <button className={styles.butnext} onClick={()=>{let e = currentPage; setCurrentPage(e<pageNumbers[pageNumbers.length-1]? (e+1):e)}}> Вперед &#62;</button> </>)    : ''} 
            </Grid>   
            </Grid>   
                    
       </Grid>                        
 </Box>

  );
};



export const GoodsByTypeMobile = ({count, setCount}) => {
  const backHost = 
  process.env.REACT_APP_API_URL
  const dispatch = useDispatch();
  const {type} = useParams();
  const {allgood} = useSelector((state) => state.goods);
  const isPostsLoading =allgood.status==='loading';

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = [...allgood.items].slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allgood.items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  React.useEffect(()=>{
    dispatch(fetchGoodsbyType(type));
  },[dispatch,type]);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.value));
  };




  return (


    <>
            <div className={styles.rootmobile}>                 
            {(isPostsLoading?[...Array(5)]:currentItems).map((obj,index) => isPostsLoading ? (
                <Post key={index} isLoading={true}/>
              ) : (
              

                <PostMobile 
                  key={index}
                  id={obj.id}
                  title={obj.name}
                  type={obj.info[0].group_type}
                  imageUrl={obj.info[0].avatarUrl ? `${backHost}${obj.info[0].avatarUrl[0]}`:''} 
                  price={obj.price[(obj.price.length)-1].p}
                  viewsCount={obj.viewsCount}
                  // commentsCount={obj.commentsCount}
                  // tags={obj.tags}
                  // isEditable={userData?._id === obj.user._id}
                  count={count} setCount={setCount}
                  discount={obj.discount}
                  isSale={obj.discount>0}
                  alias={obj.alias}
                />

              ))}</div> 
              <Grid item container justifyContent="center" alignItems="center" sx={{ mt: 2 ,mb:4}} xs={12} md={12} lg={12} >
              {pageNumbers.length > 1 ? (
            <>
            <button className={styles.butnext} onClick={()=>{let e = currentPage; setCurrentPage(e>1?(e-1):e)}}>&#60; Назад</button>
          {pageNumbers.map((number) => (
            <button key={number} value={number} onClick={handleClick} className={currentPage===number ? styles.activepage : styles.page}>
              {number}
            </button> 
          ))}
          <button className={styles.butnext} onClick={()=>{let e = currentPage; setCurrentPage(e<pageNumbers[pageNumbers.length-1]? (e+1):e)}}> Вперед &#62;</button> </>)    : ''}   
            </Grid>   

            </>
  );
};

