import React from "react";
import {useParams} from 'react-router-dom';
import styles from "./fullInfo.module.scss"
import { Post } from "../../components/Post";
import axios from "../../axios";
import { fetchTypes } from '../../redux/slices/posts';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import  Grid  from "@mui/material/Grid";
import { TypesBlock } from "../../components/BlockTypes";
import {InfoOfGood} from "./infoOfGood";

export const FullPost = ({count,setCount, setUrl}) => {

  const {types} = useSelector((state) => state.goods);
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const [data,setData] = React.useState();
  
  const [isLoading,setLoading] = React.useState(true);
  const {id} = useParams();
  const dispatch = useDispatch();
  const isTagsLoading =types.status==='loading';
  
  React.useEffect(()=>{
    axios.get(`/good/${id}`).then(res=>{
      setData(res.data);
      setLoading(false);
      dispatch(fetchTypes());   
    }).catch((err)=>{
      console.warn(err);
      alert('Error in getting post');
    })
  },[]);
  
  if(data)
  {setUrl('types/'+data.good.group_type+'('+data.good.group_type + '|' + 'good/'+id +'('+data.good.name);}
  if(isLoading){
    return <Post isLoading={isLoading} isFullPost/>;
  }
 

  return (


    <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={1} alignItems="flex-start">
          <Grid item xs={12} md={3} lg={3} spacing={2} >
          {(isTagsLoading?[...Array(5)]:types.items).map((obj,index)=> isTagsLoading ? '' :
            (<TypesBlock title={obj.lvl1_type} items={obj.group_type} isLoading={isTagsLoading} key={index} />)
          )}
  
          </Grid> 
          <Grid item container xs={12} md={9} lg={9} className={styles.root}>
          <InfoOfGood 
            data={data}
            count={count}
            setCount={setCount}
            backHost={backHost}
          />
          </Grid>            
       </Grid>
                      
      </Box>
      

  );
};

