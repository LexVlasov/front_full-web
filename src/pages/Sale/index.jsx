import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Post,PostMobile } from '../../components/Post';
import styles from './sale.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, fetchTypes } from '../../redux/slices/posts';
import { Box } from '@mui/material';
import { TypesBlock,DeliveryAdvertise } from '../../components/BlockTypes';

export const Sale = ({
    count,
    setCount,
    setUrl,
})=>{

    const backHost = 
     process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
    'http://localhost:4444';
    const dispatch = useDispatch();
    const {allgood,types} = useSelector((state) => state.goods);
    const isTypesLoading =types.status==='loading';
    const isPostsLoading =allgood.status==='loading';
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 12;
    

    const sortallGoods = (isPostsLoading ? Array(5): [...allgood.items]).sort((a, b) => parseInt(b.buysCount) - parseInt(a.buysCount)).slice(0,12);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = [...sortallGoods].slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortallGoods.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  React.useEffect(()=>{
    dispatch(fetchGoods());
    dispatch(fetchTypes());
  },[dispatch]);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.value));
  };
    setUrl('sale(Распродажа');
    return(
        <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2} alignItems="flex-start" >

         <Grid item xs={12} md={3} lg={3} spacing={2} alignItems="flex-start">                
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
                  title={obj.name}
                  imageUrl={obj.info[0].avatarUrl ? `${backHost}${obj.info[0].avatarUrl[0]}`:''} 
                  price={obj.price[(obj.price.length)-1].p}
                  viewsCount={obj.viewsCount}
                  count={count} setCount={setCount}
                  maxPrice={obj.price[0].p}
                  alias={obj.alias}
                  discount={obj.discount}
                isSale={obj.discount>0}
                />
                </Grid> 
              ))}
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
            </Grid>   
                    
       </Grid>                        
 </Box>

    )
};

export const SaleM = ({
  count,
  setCount,
})=>{

  const backHost = 
   process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const dispatch = useDispatch();
  const {allgood} = useSelector((state) => state.goods);
  const isPostsLoading =allgood.status==='loading';
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12;
  

  const sortallGoods = (isPostsLoading ? Array(5): [...allgood.items]).sort((a, b) => parseInt(b.buysCount) - parseInt(a.buysCount)).slice(0,12);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = [...sortallGoods].slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];
for (let i = 1; i <= Math.ceil(sortallGoods.length / itemsPerPage); i++) {
  pageNumbers.push(i);
}

React.useEffect(()=>{
  dispatch(fetchGoods());

},[dispatch]);

const handleClick = (event) => {
  setCurrentPage(Number(event.target.value));
};

  return(
      <>
                  
        <Grid item container justifyContent="center" alignItems="center" sx={{ mt: 2 ,mb:4}} xs={12} md={12} lg={12}>    
          </Grid><div>                  
          {(isPostsLoading?[...Array(5)]:currentItems).map((obj,index) => isPostsLoading ? (
              <Post key={index} isLoading={true}/>
            ) : (
            
              <Grid item xs={6} lg={4}> 
              <PostMobile 
                key={index}
                id={obj.id}
                title={obj.name}
                imageUrl={obj.info[0].avatarUrl ? `${backHost}${obj.info[0].avatarUrl[0]}`:''} 
                price={obj.price[(obj.price.length)-1].p}
                viewsCount={obj.viewsCount}
                count={count} setCount={setCount}
                maxPrice={obj.price[0].p}
                alias={obj.alias}
                discount={obj.discount}
                isSale={obj.discount>0}
              />
              </Grid> 
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
  )
}