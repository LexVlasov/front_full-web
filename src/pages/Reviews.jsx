import React from "react";
import { fetchTypes } from '../redux/slices/posts';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import  Grid  from "@mui/material/Grid";
import { TypesBlock,DeliveryAdvertise } from "../components/BlockTypes";



export const Reviews = ({setUrl}) =>{
    const {types} = useSelector((state) => state.goods);
    const dispatch = useDispatch();
    const isTagsLoading =types.status==='loading';
    const imgArray = [
        process.env.REACT_APP_API_URL + '/uploads/certificates/CENFORCE-150-centurion.jpg',
        process.env.REACT_APP_API_URL + '/uploads/certificates/CENFORCE-200-Centurion.jpg',
        process.env.REACT_APP_API_URL + '/uploads/certificates/CENFORCE-FM-centurion.jpg',
        process.env.REACT_APP_API_URL + '/uploads/certificates/CENFORCE-SOFT-100-centurion.jpg',
        process.env.REACT_APP_API_URL + '/uploads/certificates/Tadalista-20-t-cenforce.jpg',
        process.env.REACT_APP_API_URL + '/uploads/certificates/VIDALISTA-5-centurion.jpg',
        process.env.REACT_APP_API_URL + '/uploads/certificates/VIDALISTA-20-centurion.jpg',
        process.env.REACT_APP_API_URL + '/uploads/certificates/VIDALISTA-40-centurion.jpg',
        process.env.REACT_APP_API_URL + '/uploads/certificates/VIDALISTA-PROFESSIONAL-cenforce.jpg',
        process.env.REACT_APP_API_URL + '/uploads/certificates/VILITRA-10-centurion.jpg',
        process.env.REACT_APP_API_URL + '/uploads/certificates/VILITRA-20-Centurion.jpg',
        process.env.REACT_APP_API_URL + '/uploads/certificates/VILITRA-40-centurion.jpg',
    ];
    const cntImg = [1,2,3,4];
    React.useEffect(()=>{
        dispatch(fetchTypes());   
    },[dispatch]);

    setUrl('reviews(Отзывы')
    return(
        <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={1} alignItems="flex-start">
          <Grid item xs={12} md={3} lg={3} spacing={2} >
          {(isTagsLoading?[...Array(5)]:types.items).map((obj,index)=> isTagsLoading ? '' :
            (<TypesBlock title={obj.lvl1_type} items={obj.group_type} isLoading={isTagsLoading} key={index} />)
          )}
          <DeliveryAdvertise/>
          </Grid> 
          <Grid item container xs={12} md={9} lg={9} >
            <div style={{marginLeft:"30px", width:"100%"}}>
            <h2 style={{marginBottom:"30px",fontWeight:"700"}}>Сертификаты</h2>
            {cntImg.map((obj,i)=>(
                <div key={i}>
                <img src={imgArray[obj*0]} style={{width:"250px",height:"310px",margin:"10px 10px 10px 10px"}} alt={imgArray[obj*0].split('/')[5].split('.')[0]}/>
                <img src={imgArray[obj*1]} style={{width:"250px",height:"320px",margin:"10px 10px 10px 10px"}} alt={imgArray[obj*1].split('/')[5].split('.')[0]}/> 
                <img src={imgArray[obj*2]} style={{width:"250px",height:"320px",margin:"10px 10px 10px 10px"}} alt={imgArray[obj*2].split('/')[5].split('.')[0]}/> 
                </div>
            ))}
            
            </div>
          </Grid>            
       </Grid>
                      
      </Box>
        
    )
};