import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import { TypesBlock } from '../../components/BlockTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, fetchTypes,fetchPopular,fetchSale } from '../../redux/slices/posts';
import { Box } from '@mui/system';
import {Popular, Sales,PopularM,SalesM} from '../../components';
import styles from "./home.module.scss"


export const Home = ({count,setCount,setUrl}) => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const dispatch = useDispatch();
  
  const {allgood,types,sale} = useSelector((state) => state.goods);
  const isPostsLoading =allgood.status==='loading';
  const isTagsLoading =types.status==='loading';
  const isSaleLoading =sale.status==='loading';
  React.useEffect(()=>{
    dispatch(fetchPopular());
    dispatch(fetchTypes());
    dispatch(fetchSale());
   },[]);
  
   setUrl(null);
   console.log(sale);
  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} alignItems="flex-start">
       <Grid item xs={12} md={3} lg={3} spacing={2}>
          {(isTagsLoading?[...Array(5)]:types.items).map((obj,index)=> isTagsLoading ? '' :
            (<TypesBlock title={obj.lvl1_type} items={obj.group_type} isLoading={isTagsLoading} key={index} />)
          )}
        </Grid>                    
        <Grid item container xs={12} md={9} lg={9} spacing={4} style={{paddingLeft:"20px"}}>
            <Popular
              isPostsLoading={isPostsLoading} 
              allgood={allgood} 
              backHost={backHost}
              count={count}
              setCount={setCount}/> 
              <Sales 
              isPostsLoading={isSaleLoading} 
              allgood={sale} 
              backHost={backHost}
              count={count}
              setCount={setCount}/>
    
            </Grid> 
              
                           
      </Grid>                        
</Box>
  );
};


export const HomeMob = ({count,setCount}) => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const dispatch = useDispatch();
  
  const {allgood} = useSelector((state) => state.goods);
  const isPostsLoading =allgood.status==='loading';
  React.useEffect(()=>{
    dispatch(fetchGoods());  
   },[]);
   
  return (


                    
        <div >
            <PopularM
              isPostsLoading={isPostsLoading} 
              allgood={allgood} 
              backHost={backHost}
              count={count}
              setCount={setCount}/> 
              <SalesM 
              isPostsLoading={isPostsLoading} 
              allgood={allgood} 
              backHost={backHost}
              count={count}
              setCount={setCount}/>
    
            </div> 
              

  );
};