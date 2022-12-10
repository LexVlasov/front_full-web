import React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComment, fetchPopularPosts, fetchPosts, fetchTags } from '../redux/slices/posts';



export const Home = () => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const dispatch = useDispatch();
  const userData = useSelector((state)=> state.auth.data);
  const [value, setValue] = React.useState(0);
  const [oneValue, setOneValue] = React.useState();
  const {posts,tags,comments,popularPosts} = useSelector((state) => state.posts);

  const isPostsLoading =posts.status==='loading';
  const isTagsLoading =tags.status==='loading';
  const isCommentLoading =comments.status==='loading';
  const isPopularPosts =popularPosts.status==='loading';
  React.useEffect(()=>{
      dispatch(fetchPosts());
      dispatch(fetchTags());
      dispatch(fetchComment());
      dispatch(fetchPopularPosts());
  },[]);
  const handleChange = async(event, newValue)=>{
    try{
      const file = event.target.innerText;
      setValue(newValue);
      setOneValue(file);
    } catch(err){
      console.warn(err);
      alert('Error change')
    }
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  } 
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={value} onChange={handleChange} aria-label="basic tabs example" >
        <Tab label="Новые" {...a11yProps(0)}/>
        <Tab label="Популярные" {...a11yProps(1)} />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
        <TabPanel value={value} index={value} >
          {(isPostsLoading||isPopularPosts?[...Array(5)]:(oneValue!="Новые"?popularPosts:posts).items).map((obj,index) => isPostsLoading||isPopularPosts ? (
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
            />
          ))}
          </TabPanel>
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
  
          <CommentsBlock isLoading={isCommentLoading}
            items={comments.items}
          />
          
        </Grid>
      </Grid>
    </>
  );
};

