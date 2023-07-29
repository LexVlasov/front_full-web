import React from "react";
import { fetchTypes } from '../redux/slices/posts';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import  Grid  from "@mui/material/Grid";
import { TypesBlock,DeliveryAdvertise } from "../components/BlockTypes";
import Post1 from "../uploads/deliverypost/packaging_1.jpg";
import Post2 from "../uploads/deliverypost/packaging_3.jpg";
import Post3 from "../uploads/deliverypost/packaging_4.jpg";


export const Delivery = ({setUrl}) =>{
    const {types} = useSelector((state) => state.goods);
    const dispatch = useDispatch();
    const isTagsLoading =types.status==='loading';

    React.useEffect(()=>{
        dispatch(fetchTypes());   
    },[dispatch]);

    setUrl('deliveryinfo(Доставка')
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
            <h3 style={{marginBottom:"30px",fontWeight:"700"}}>100% анонимная доставка</h3>

        <ul style={{marginBottom:"20px"}}>
            <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>Нейтральная упаковка без опознавательных знаков</span></li>
            <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>Посылка отправляется персонально от сотрудника компании</span></li>
            <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>Сотрудники служб доставки не имеют информации о содержании почтовой бандероли</span></li>
        </ul>
        <table style={{marginTop:"30px", width:"80%"}}>
            <tr>
            <th style={{width:"100%",backgroundColor:"#316ab1",color:"#fff",height:"30px",verticalAlign:"middle", paddingLeft:"10px"}} colspan="2"><b>Почта России: 1 класс</b></th>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Регион</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Вся Россия</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Стоимость</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>350 руб.</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Сроки</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>~6-10 дней</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Реальное ФИО</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Обязательно (сотрудники не знают о содержании посылки)</td>
            </tr>
        </table>
        <table style={{marginTop:"50px", width:"80%"}}>
            <tr>
            <th style={{width:"100%",backgroundColor:"#316ab1",color:"#fff",height:"30px",verticalAlign:"middle", paddingLeft:"10px"}} colspan="2"><b>
                        Курьерская доставка по Москве</b></th>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>По городу</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>350 руб. (от 3000 руб. бесплатно)</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>За МКАД к метро</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>350 руб. (от 3000 руб. бесплатно)</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}} rowspan="3"><b>За МКАД на дом</b></td>
                <td style={{width:"70%", height:"40px", color:"#555"}}>До 5 км от МКАД - 550 р.</td>
            </tr>
            <tr>
                <td style={{width:"70%", height:"40px", color:"#555"}}>До 10 км от МКАД - 800 р.</td>
            </tr>
            <tr>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Свыше 10 км от МКАД - 20 р/км, лимит до 30 км от МКАД.</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Сроки</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>В день заказа </td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Реальное ФИО</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Не обязательно</td>
            </tr>
        </table>
        <table style={{marginTop:"50px", width:"80%"}}>
            <tr>
            <th style={{width:"100%",backgroundColor:"#316ab1",color:"#fff",height:"30px",verticalAlign:"middle", paddingLeft:"10px"}} colspan="2"><b>Экспресс-доставка EMS Russian Post</b></th>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Регион</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Вся Россия</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Стоимость</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>	700р.</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Сроки</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>~2-5 дней</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Реальное ФИО</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Обязательно (сотрудники не знают о содержании посылки) </td>
            </tr>

        </table>

        <h3 style={{marginTop:"30px",fontWeight:"700"}}>Наша упаковка</h3>
            <table style={{width:"80%",marginTop:"30px"}}>
                <tr style={{textAlign:"center"}}>
                    <td ><b>1. Сбор заказа</b></td>
                    <td><b>2. Защитное покрытие</b></td>
                    <td><b>3. Бандероль</b></td>
                </tr>
                <tr>
                    <td><img src={Post1} style={{width:"100%", height:"100px"}} alt="Сбор заказа One Pill"/></td>
                    <td><img src={Post2} style={{width:"100%", height:"100px"}} alt="Зашитное покрытие One Pill"/></td>
                    <td><img src={Post3} style={{width:"100%", height:"100px"}} alt="Бандероль One Pill"/></td>
                </tr>   

            </table>
            </div>
          </Grid>            
       </Grid>
                      
      </Box>
        
    )
};