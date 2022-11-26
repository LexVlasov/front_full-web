import React from "react";
import {useParams} from 'react-router-dom';
import ReactMakdown from 'react-markdown';


import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
import axios from "../axios";
import { fetchCommentByPost } from '../redux/slices/posts';
import { useDispatch, useSelector } from "react-redux";

export const FullPost = () => {

  const {comments} = useSelector((state) => state.posts);
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const [data,setData] = React.useState();
  const [isLoading,setLoading] = React.useState(true);
  const {id} = useParams();
  const dispatch = useDispatch();
  const isCommentLoading =comments.status==='loading';
  React.useEffect(()=>{
    axios.get(`/posts/${id}`).then(res=>{
      setData(res.data);
      setLoading(false);
      dispatch(fetchCommentByPost(id));
    }).catch((err)=>{
      console.warn(err);
      alert('Error in getting post');
    })
  },[]);
  
  if(isLoading){
    return <Post isLoading={isLoading} isFullPost/>;
  }

  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `${backHost}${data.imageUrl}` : ''}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={data.commentsCount}
        tags={data.tags}
        isFullPost
      >
        <ReactMakdown children={data.text}/> 
        
      </Post>
      <CommentsBlock
        items={comments.items}
        isLoading={isCommentLoading}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};