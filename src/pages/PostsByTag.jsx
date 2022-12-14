import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

// import axios from '../axios';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComment, fetchTags } from '../redux/slices/posts';
import { useParams } from 'react-router-dom';
import axios from "../axios";

export const PostsByTag = () => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const dispatch = useDispatch();
  const {tag} = useParams();
  const userData = useSelector((state)=> state.auth.data);
  const [data,setData] = React.useState();
  const [isLoading,setLoading] = React.useState(true);
  const {posts,tags,comments} = useSelector((state) => state.posts);
  const isTagsLoading =tags.status==='loading';
  const isCommentLoading =comments.status==='loading';

  console.log(backHost);
  React.useEffect(()=>{
    dispatch(fetchTags());
    axios.get(`/tags/${tag}`).then(res=>{
      setData(res.data);
      setLoading(false);
      dispatch(fetchComment());
    }).catch((err)=>{
      console.warn(err);
      alert('Error in getting post');
    })
  },[]);



  return (
    
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isLoading?[...Array(5)]:data).map((obj,index) => isLoading ? (
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
              isEditable={userData?._id === obj.user}
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
          <CommentsBlock
            items={comments.items}
            isLoading={isCommentLoading}
          />
        </Grid>
      </Grid>
    </>
  );
};