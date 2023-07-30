import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import { TypesBlock, DeliveryAdvertise } from '../../components/BlockTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypes,fetchPopular,fetchSale } from '../../redux/slices/posts';
import { Box } from '@mui/system';
import {Popular, Sales,PopularM,SalesM,PostByType,Reviews} from '../../components';
import axios from "../../axios";


export const Home = ({count,setCount,setUrl}) => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const dispatch = useDispatch();
  
  const {allgood,types,sale} = useSelector((state) => state.goods);
  const [viagra,setViagra] = useState();
  const [sialis,setSialis] = useState();
  const [levitra,setLevitra] = useState();
  const isPostsLoading =allgood.status==='loading';
  const isTagsLoading =types.status==='loading';
  const isSaleLoading =sale.status==='loading';
  React.useEffect(()=>{
    dispatch(fetchPopular());
    dispatch(fetchTypes());
    dispatch(fetchSale());
    axios.get(`/types/Аналоги%20Виагры`).then(({data})=>{
      setViagra(data)
    }).catch(err =>{
      console.warn(err);
      alert('Error get post')
    })
    axios.get(`/types/Аналоги%20Сиалиса`).then(({data})=>{
      setSialis(data)
    }).catch(err =>{
      console.warn(err);
      alert('Error get post')
    })
    axios.get(`/types/Аналоги%20Левитры`).then(({data})=>{
      setLevitra(data)
    }).catch(err =>{
      console.warn(err);
      alert('Error get post')
    })
   },[dispatch]);
   setUrl(null);

  return (

    <Box >
      <Grid container spacing={1} alignItems="flex-start">
       <Grid item xs={12} md={3} lg={3}>
          {(isTagsLoading?[...Array(5)]:types.items).map((obj,index)=> isTagsLoading ? '' :
            (<TypesBlock title={obj.lvl1_type} items={obj.group_type} isLoading={isTagsLoading} key={index} />
            )
          )}
          <DeliveryAdvertise/>
        </Grid>                    
        <Grid item container xs={12} md={9} lg={9} style={{paddingLeft:"20px"}}>
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
              <PostByType
              isPostsLoading={viagra?false:true} 
              allgood={viagra} 
              backHost={backHost}
              count={count}
              setCount={setCount}
              name={'Дженерики Виагры'}
              />

              <PostByType
              isPostsLoading={sialis?false:true} 
              allgood={sialis} 
              backHost={backHost}
              count={count}
              setCount={setCount}
              name={'Дженерики Сиалиса'}
              />
              <PostByType
              isPostsLoading={levitra?false:true} 
              allgood={levitra} 
              backHost={backHost}
              count={count}
              setCount={setCount}
              name={'Дженерики Левитры'}
              />
              <Reviews/>
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
  
  const {allgood,sale} = useSelector((state) => state.goods);
  const isPostsLoading =allgood.status==='loading';
  const isSaleLoading =sale.status==='loading';
  React.useEffect(()=>{
    dispatch(fetchPopular());
    dispatch(fetchSale());
   },[dispatch]);
   
  return (


                    
        <div >
            <PopularM
              isPostsLoading={isPostsLoading} 
              allgood={allgood} 
              backHost={backHost}
              count={count}
              setCount={setCount}/> 
              <SalesM 
              isPostsLoading={isSaleLoading} 
              allgood={sale} 
              backHost={backHost}
              count={count}
              setCount={setCount}/>
    
            </div> 
              

  );
};