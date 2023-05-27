import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import styles from './Account.module.scss';

import { Post } from '../../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchPostbyUser, fetchUser } from '../../redux/slices/posts';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';

export const Account = () => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const {id} = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state)=> state.auth.data);
  const {posts,user} = useSelector((state) => state.posts);

  const isPostsLoading = posts.status==='loading';
  const isUserloading = user.status==='loading';
  React.useEffect(()=>{
      dispatch(fetchPostbyUser(id));
      dispatch(fetchUser(id));
  },[]);

  return (
    <Container sx={{ pl:10, pt:5 }} >
      <Grid container spacing={4} >
        <Grid xs={4} sx={{pl:2}}>
          <div>
          {(!isUserloading && user.items.avatarUrl )  ? <img className={styles.imgborder} 
          src={`${backHost}${user.items.avatarUrl}`}
          alt="Uploaded"  width= '300' height= '300' /> 
          :<Avatar sx={{ width: 300, height: 300 }}/>}
          </div> 
        </Grid>
        <Grid container xs={8}  spacing={2}>
          
          <Grid xs={12} >
            <div>
              <Box aria-labelledby="category-b" sx={{ fontSize: '24px', textTransform: 'uppercase',  textAlign: 'left' }} >
              {!isUserloading ? user.items.fullName : '' }
              </Box>
              <Box  aria-labelledby="category-b" sx={{  textTransform: 'lowercase', textAlign: 'left' }}>
              {!isUserloading ? user.items.email : ''}
              </Box>
            </div>
          </Grid>
          
       
        </Grid>

        <Grid xs={12} md={12} lg={12} sx={{pl:10,pt:10}} item>
      
          {(isPostsLoading?[...Array(5)]:posts.items).map((obj,index) => isPostsLoading ? (
            <Post key={index} isLoading={true}/>
          ) : (
            <Post
              id={obj._id}
              title={obj.title}
              imageUrl={obj.imageUrl ? `${backHost}${obj.imageUrl}`:''}
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.viewsCount}
              commentsCount={obj.commentsCount}
              tags={obj.tags}
              isEditable={userData?._id === obj.user._id}
              key={index}
            />
          ))}
        </Grid>
      </Grid>

    </Container>
  );
}