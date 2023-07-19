import React from "react";
import { fetchTypes } from '../redux/slices/posts';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import  Grid  from "@mui/material/Grid";
import { TypesBlock } from "../components/BlockTypes";


export const Refund = ({setUrl}) =>{
    const {types} = useSelector((state) => state.goods);
    const dispatch = useDispatch();
    const isTagsLoading =types.status==='loading';

    React.useEffect(()=>{
        dispatch(fetchTypes());   
    },[]);
    setUrl('refund(Возврат')
    return(
        <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={1} alignItems="flex-start">
          <Grid item xs={12} md={3} lg={3} spacing={2} >
          {(isTagsLoading?[...Array(5)]:types.items).map((obj,index)=> isTagsLoading ? '' :
            (<TypesBlock title={obj.lvl1_type} items={obj.group_type} isLoading={isTagsLoading} key={index} />)
          )}
  
          </Grid> 
          <Grid item container xs={12} md={9} lg={9} >
            <div style={{marginLeft:"30px", width:"100%"}}>
            <h3 style={{marginBottom:"30px",fontWeight:"700"}}>Возврат</h3>

          <p> У нас действует беспрецедентная акция. Начиная с 01.11.2018 и по настоящее время вы можете совершить возврат любых препарат (в т.ч. надлежащего качества).
                </p>
                <p style={{marginLeft:"20px",paddingLeft:"20px", borderLeft:"2px solid #316ab1", opacity:"80%"}}>
                <i>Возврат стоит расценивать как уникальную услугу One Pill, т.к. согласно Постановление Правительства РФ от 19.01.1998 № 55 лекарственные средства надлежащего качества обязательному возврату не подлежат.</i>
                </p>
        <h3 style={{marginBottom:"30px",fontWeight:"700"}}>Условия возврата</h3> 
        <h4 style={{marginBottom:"20px",fontWeight:"700"}}>Общие</h4> 
        <ul style={{marginBottom:"20px"}}>
            <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>стоимость доставки ложится на клиента и возврату не подлежит;</span></li>
            <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>у позиций, которые продаются поштучно, возврат также осуществляется поштучно;</span></li>
            <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>препараты, которые продаются только целыми упаковками, возвращаются тоже целыми упаковками;</span></li>
        </ul>
        <h4 style={{marginBottom:"30px",fontWeight:"700"}}>Возврат препаратов надлежащего качества:</h4>
        <ul style={{marginBottom:"20px"}}>
            <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>можете воспользоваться возвратом в течение 3х месяцев с момента покупки;</span></li>
            <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>но не позднее, чем за полгода до истечения срока годности;</span></li>
        </ul>
        <h4 style={{marginBottom:"30px",fontWeight:"700"}}>Брака:</h4>
        <ul style={{marginBottom:"20px"}}>
            <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>можете воспользоваться возвратом не позднее, чем за полгода до истечения срока годности;</span></li>
        </ul>
        <p style={{opacity:"70%"}}>
        * срок годности в среднем 2 года с момента покупки. Точные сроки годности смотрите в карточках препаратов.
        </p>
          </div>
          </Grid>            
       </Grid>
                      
      </Box>
        
    )
};