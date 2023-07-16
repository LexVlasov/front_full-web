import React, { useState } from "react";
import { fetchTypes } from '../redux/slices/posts';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import  Grid  from "@mui/material/Grid";
import { TypesBlock } from "../components/BlockTypes";
import styles from "./header.module.scss";


export const Questions = ({setUrl}) =>{
    const {types} = useSelector((state) => state.goods);
    const dispatch = useDispatch();
    const isTagsLoading =types.status==='loading';
    const [question,setQuestion]=useState([]);
    React.useEffect(()=>{
        dispatch(fetchTypes());   
    },[dispatch]);
    const onClickQ =(n)=>{
        let newQ = [...question];
        // let e = newQ.find(e=>e)
        if(newQ.includes(n)){
            newQ = newQ.filter(e=>e!==n)
        } else{
            newQ.push(n)
        }
        setQuestion(newQ);
        
    }
    setUrl('about(Доставка')
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
            <h3 style={{marginBottom:"30px",fontWeight:"700"}} >Вопросы и ответы</h3>
            <p className={styles.question} onClick={()=>onClickQ(1)}>Почему в России запретили "Сеалекс" и "Али Капс" ?</p>
            <div hidden={!(question.includes(1))} style={{marginLeft:"20px",paddingLeft:"10px", borderLeft:"1px solid #316bb1",fontStyle:"italic"}}>
                <p>Дорогие друзья!</p>
                <p>Наверняка Вы не раз видели на прилавках аптек, 
                    рядом с оригинальной Виагрой и Сиалисом, коробочки с надписью "Сеалекс Форте" и "Али Капс". Или известная реклама по TV: "Сеалекс! Делай как я!"</p>
                <p>Производители данных Биологически Активных Добавок позиционировали свою продукцию как якобы безвредный и действенный продукт.</p>
                <p>В качестве маркетингового хода два данных БАДа противопоставлялись рецептурным лекарственным препаратам - Виагре, Сиалису и Левитре.</p>
                <p>Производители "Сеалекса" и "Али Капс" заявляли о травяном составе: женьшень, йохимбе, крапива, горянка и т.д. И говорилось о том, что данный состав ничем не хуже, 
                    а даже лучше проверенных временем компонентов лекарственных препаратов для повышения потенции: силденафила, тадалафила, варденафила.</p>
                <p>На деле же, экстракты женьшеня и ему подобных, не способны дать и 10% результата, которого позволяют добиться силденафил и тадалафил.</p>
                <p>А теперь внимание! Истинный состав "Сеалекса" и "Али Капс":</p>
                <ul>
                    <li><a href="http://tass.ru/obschestvo/3262619">http://tass.ru/obschestvo/3262619</a></li>
                    <li><a href="http://www.ng.ru/ideas/2016-03-02/5_sealeks.html">http://www.ng.ru/ideas/2016-03-02/5_sealeks.html</a></li>
                    <li><a href="https://news.mail.ru/economics/25688715/?frommail=1">https://news.mail.ru/economics/25688715/?frommail=1</a></li>
                </ul>
            </div>
            <p className={styles.question} onClick={()=>onClickQ(2)}>Что такое «дженерик» ?</p>
            <div hidden={!(question.includes(2))} style={{marginLeft:"20px",paddingLeft:"10px", borderLeft:"1px solid #316bb1",fontStyle:"italic"}}>
                <p>Компаниям «авторам» препарата приходится вкладывать огромные средства в разработку лекарственных препаратов и рекламу. Эти затраты, разумеется, включены в стоимость конечного продукта. Кроме того, монополизируя какой-либо сегмент рынка, компании взвинчивают цены и получают сверхприбыли, наживаясь на проблемах людей.</p>
                <p>Дженерик – это полный аналог брендового препарата с добавлением витаминно-минерального комплекса и созвучным названием. Такие препараты полностью повторяют качественные характеристики брендовых продуктов, при этом не нарушают авторские права и патенты изобретателей. Дженерики доступны по весьма низким ценам, зачастую в 8-10 раз дешевле оригинала.</p>
                <p>Компании-родоначальники брендовых препаратов всеми силами стараются вести борьбу с дженериками, дабы сохранять свои сверхприбыли. Однако тенденция перехода от монополии к рынку совершенной конкуренции, благодаря индийским производителям, набирает обороты, и все замечательные свойства препаратов для повышения потенции теперь доступны Вам в нашем магазине по выгодно низким ценам!</p>
            </div>
            <p className={styles.question} onClick={()=>onClickQ(3)}>Чем дженерик отличается от брендового препарата?</p>
            <div hidden={!(question.includes(3))} style={{marginLeft:"20px",paddingLeft:"10px", borderLeft:"1px solid #316bb1",fontStyle:"italic"}}>
                <p>Во избежание нарушения патента компании-изобретателя, в состав дженерика зачастую вводят полезные витаминно-минеральные комплексы. Таким образом, исходный состав дженерика будет отличаться от запатентованной формулы брендового препарата и авторские права не будут нарушены. Кроме того, дженерик обладает слегка видоизмененным, но созвучным названием.</p>
            </div>
            </div>
          </Grid>            
       </Grid>
                      
      </Box>
        
    )
};