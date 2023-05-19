import React from 'react';
import Grid from '@mui/material/Grid';

import { Post } from "../../components/Post";
import { TypesBlock } from '../../components/BlockTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoodsbyType, fetchTypes } from '../../redux/slices/posts';
import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
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
  const [itemsPerPage, setItemsPerPage] = React.useState(12);

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
  },[]);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.value));
  };

  setUrl(type+'('+type);
  console.log(allgood);
  return (
     <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2} alignItems="flex-start" >

         <Grid item xs={12} md={3} lg={3} spacing={2}>                
         {(isTypesLoading?[...Array(5)]:types.items).map((obj,index)=> isTypesLoading ? '' :
            (<TypesBlock title={obj.lvl1_type} items={obj.group_type} isLoading={isTypesLoading} key={index} />)
          )}
        </Grid>                    
         <Grid item container xs={12} md={9} lg={9} spacing={4}>
         <Grid item container justifyContent="center" alignItems="center" sx={{ mt: 2 }} xs={12} md={12} lg={12}>
          {pageNumbers.map((number) => (
            <button key={number} value={number} onClick={handleClick} className={currentPage===number ? styles.activepage : styles.page}>
            {number}
          </button> 
          ))}      
            </Grid>                  
            {(isPostsLoading?[...Array(5)]:currentItems).map((obj,index) => isPostsLoading ? (
                <Post key={index} isLoading={true}/>
              ) : (
              
                <Grid item xs={6} lg={4}> 
                <Post 
                  key={index}
                  id={obj._id}
                  title={obj.name}
                  imageUrl={obj.info[0].avatarUrl ? `${backHost}${obj.info[0].avatarUrl[0]}`:''} 
                  price={obj.price[(obj.price.length)-1].p}
                  viewsCount={obj.viewsCount}
                  // commentsCount={obj.commentsCount}
                  // tags={obj.tags}
                  // isEditable={userData?._id === obj.user._id}
                  count={count} setCount={setCount}
                />
                </Grid> 
              ))}
              <Grid item container justifyContent="center" alignItems="center" sx={{ mt: 2 ,mb:4}} xs={12} md={12} lg={12} >
          {pageNumbers.map((number) => (
            <button key={number} value={number} onClick={handleClick} className={currentPage===number ? styles.activepage : styles.page}>
              {number}
            </button> 
          ))}      
            </Grid>   
            </Grid>   
                    
       </Grid>                        
 </Box>

  );
};