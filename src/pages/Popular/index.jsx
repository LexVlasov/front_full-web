import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Post } from '../../components/Post';
import styles from './populargoods.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, fetchTypes } from '../../redux/slices/posts';
import { Box } from '@mui/material';
import { TypesBlock } from '../../components/BlockTypes';

export const PopularGoods = ({
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
    const [itemsPerPage, setItemsPerPage] = React.useState(12);
    

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
  },[]);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.value));
  };
    setUrl('popular(Популярное');



    return(
        <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2} alignItems="flex-start" >

         <Grid item xs={12} md={3} lg={3} spacing={2} alignItems="flex-start">                
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
                  id={obj.infoGood[0]._id}
                  title={obj.name}
                  imageUrl={obj.avatarUrl ? `${backHost}${obj.avatarUrl[0]}`:''} 
                  price={obj.infoGood[0].priceForOne[(obj.infoGood[0].priceForOne.length)-1][1]}
                  viewsCount={obj.infoGood[0].viewsCount}
                  count={count} setCount={setCount}
                  maxPrice={obj.infoGood[0].priceForOne[0][3]}
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

    )
}