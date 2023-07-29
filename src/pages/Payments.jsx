import React from "react";
import { fetchTypes } from '../redux/slices/posts';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import  Grid  from "@mui/material/Grid";
import { TypesBlock,DeliveryAdvertise } from "../components/BlockTypes";



export const Payments = ({setUrl}) =>{
    const {types} = useSelector((state) => state.goods);
    const dispatch = useDispatch();
    const isTagsLoading =types.status==='loading';

    React.useEffect(()=>{
        dispatch(fetchTypes());   
    },[dispatch]);

    setUrl('paymentinfo(Оплата')
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
            <h3 style={{marginBottom:"30px",fontWeight:"700"}}>Оплата</h3>

        <p>
        Мы предоставляем скидку <b style={{color:"rgb(255, 0, 0)"}}>5%</b> на все способы онлайн оплаты! Таким образом, деньги сразу поступают в оборот и могут использоваться в целях улучшения сервисов и расширения ассортимента продуктов.
        </p>
        <table style={{marginTop:"30px", width:"80%"}}>
            <tr>
            <th style={{width:"100%",backgroundColor:"#316ab1",color:"#fff",height:"30px",verticalAlign:"middle", paddingLeft:"10px"}} colspan="2"><b>Банковские карты</b></th>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Скидка за выбор</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}><b>5%</b></td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Комиссия</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>0%</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Службы доставки</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Все</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Примечание</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Доступный и безопасный способ оплаты за товары и услуги через интернет. Оплата происходит с банковской карты.  </td>
            </tr>
        </table>
        <table style={{marginTop:"30px", width:"80%"}}>
            <tr>
            <th style={{width:"100%",backgroundColor:"#316ab1",color:"#fff",height:"30px",verticalAlign:"middle", paddingLeft:"10px"}} colspan="2"><b>Qiwi кошелек</b></th>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Скидка за выбор</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}><b>5%</b></td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Комиссия</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>0%</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Службы доставки</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Все</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Примечание</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>У нас идентифицированный кошелёк в Qiwi – это дополнительно увеличивает надёжность платежа. </td>
            </tr>
        </table>
        <table style={{marginTop:"30px", width:"80%"}}>
            <tr>
            <th style={{width:"100%",backgroundColor:"#316ab1",color:"#fff",height:"30px",verticalAlign:"middle", paddingLeft:"10px"}} colspan="2"><b>Яндекс.Деньги</b></th>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Скидка за выбор</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}><b>5%</b></td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Комиссия</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>0%</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Службы доставки</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Все</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Примечание</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>У нас идентифицированный кошелёк в Яндекс деньгах – это дополнительно увеличивает надёжность платежа.</td>
            </tr>
        </table>
        <table style={{marginTop:"30px", width:"80%"}}>
            <tr>
            <th style={{width:"100%",backgroundColor:"#316ab1",color:"#fff",height:"30px",verticalAlign:"middle", paddingLeft:"10px"}} colspan="2"><b>Наложенный платёж на почте</b></th>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Скидка за выбор</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>нет</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Комиссия</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>4-9% (в зависимости от стоимости заказа, рассчитывается автоматически)</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Службы доставки</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Почта России, EMS Экспресс доставка</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Примечание</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Наложенный платёж — это способ расчетов, при котором посылка выдаётся получателю после её оплаты в почтовом отделении во время получения.</td>
            </tr>
        </table>
        <table style={{marginTop:"30px", width:"80%"}}>
            <tr>
            <th style={{width:"100%",backgroundColor:"#316ab1",color:"#fff",height:"30px",verticalAlign:"middle", paddingLeft:"10px"}} colspan="2"><b>Наличными курьеру One Pill</b></th>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Скидка за выбор</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>нет</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Комиссия</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>0%</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Службы доставки</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Курьерская служба One Pill</td>
            </tr>
            <tr>
                <td style={{width:"30%", borderBottom:"1px solid #aaa", height:"40px", paddingLeft:"10px"}}><b>Примечание</b></td>
                <td style={{width:"70%", borderBottom:"1px solid #aaa", height:"40px", color:"#555"}}>Оплата наличными курьеру происходит в момент доставки товаров. Данный способо подходит тем, то первый раз покупает у нас.</td>
            </tr>
        </table>
            </div>
          </Grid>            
       </Grid>
                      
      </Box>
        
    )
};