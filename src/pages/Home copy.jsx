import React from 'react';
import Tabs from '@mui/material/Tabs';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

// import axios from '../axios';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComment, fetchPosts, fetchTags } from '../redux/slices/posts';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const Home = () => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const dispatch = useDispatch();
  const userData = useSelector((state)=> state.auth.data);
  const [value, setValue] = React.useState('1');
  const {posts,tags,comments} = useSelector((state) => state.posts);

  const isPostsLoading =posts.status==='loading';
  const isTagsLoading =tags.status==='loading';
  const isCommentLoading =comments.status==='loading';
  console.log(value);
  React.useEffect(()=>{
      dispatch(fetchPosts());
      dispatch(fetchTags());
      dispatch(fetchComment());
  },[]);
  const handleChange = async(event, newValue)=>{
    try{
      const formData = new FormData();
      const file = event.target.innerText;
      setValue(newValue);
      
    } catch(err){
      console.warn(err);
      alert('Error change')
    }
  };
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={value} onChange={handleChange} aria-label="basic tabs example" >
        <Tab label="Новые" value={1}/>
        <Tab label="Популярные" value={2} />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
        <TabPanel value={value} >
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
            />
          ))}
          </TabPanel>
          <TabPanel value={value} ></TabPanel>
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

