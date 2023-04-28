import React from "react";



import { fetchTypes } from '../redux/slices/posts';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import  Grid  from "@mui/material/Grid";
import { TypesBlock } from "../components/BlockTypes";


export const Contact = ({setUrl}) =>{
    const {types} = useSelector((state) => state.goods);
    const dispatch = useDispatch();
    const isTagsLoading =types.status==='loading';

    React.useEffect(()=>{
        dispatch(fetchTypes());   
    },[]);
    setUrl('contact(Контакты')
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
            <h1 style={{marginBottom:"30px"}}>Контакты</h1>

          <p> Специалисты компании One Pill всегда рады проконсультировать Вас по любому интересующему вопросу.
                </p>
                <p>
                Для нас самым важным является предоставление каждому нашему клиенту только качественыне препараты по самым низким ценам и в самые короткие сроки. One Pill - одна из не многих компаний, предоставляющая лучшие аналоги виагры (сиалис, левитра и т.д.).
                </p> <p>
                Компания One Pill основана в 2017 году. За это время наши услуги и продукты оценили более 10 000 клиентов.
                </p><p>
                Для One Pill ценен каждый покупатель. Присоединяйтесь к числу наших постоянных клиентов. Вы приятно удивитесь высокому уровню обслуживания и выгодным ценам: <a href="/">перейти в каталог препаратов для потенции</a>
          </p>
          </div>
          </Grid>            
       </Grid>
                      
      </Box>
        
    )
};