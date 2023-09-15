import React , { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import styles from "./makeorder.module.scss";
import Image from "../../uploads/mainInfo/logo.png";
import {Link} from 'react-router-dom';
import {Place,Checkout,Customer,Delivery,Paymethod,DeliveryM} from './components/index';
import { useDispatch } from 'react-redux';

import {  fetchReturnData } from '../../redux/slices/makeorder';

export const MakeOrder = ({count,setCount,setCurrentPath}) =>{
    const [page,setPage] = useState(1);
    const [order,setOrder] = useState([]);
    const [delivery, setDelivery] = useState([0]);
    const [returnData, setReturnData] = useState();
    const [paymentId,setPaymentId] = useState();
    const [newCount,setNewCount] = useState();
    const [sumTotal,setSumTotal] = useState();


    const dispatch = useDispatch();
    const backHost = 
    process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
    'http://localhost:4444';
    let product_id_count = '';
    let quantity = '';
    count.map((obj,ind)=>{
    if(ind===0){
        quantity= quantity+obj.cnt;
        product_id_count=product_id_count+obj.product_id;
    }else{
        quantity= quantity+':'+obj.cnt;
        product_id_count=product_id_count+':'+obj.product_id;
    }});
    
    const discount = order.length>0?(order[0].pay_id===5||order[0].pay_id===6||order[0].pay_id===3||order[0].discount>0?0.05:0):0;
    let totalSum = (count ? count.map((obj,i)=> Math.round(obj.maxPrice*(1-discount)*obj.cnt)):[]).reduce((a,b)=>a+b,0);

    if(delivery[0]!==0){
        if(totalSum>delivery[0].free_delivery&&(delivery[0].id!==5&&delivery[0].id!==4)){
            totalSum = totalSum + delivery[0].price;
        } 
        
    }
  
    
    const nextPage = async ()=>{
        if(page !==4){

        const oldPage = page + 1;
        setPage(oldPage);
        } else {

            try{
                const data = await dispatch(fetchReturnData(order));
                if(!data.payload){
                  alert('Error in make order!');
                }
                setReturnData(data.payload);
                const oldPage = page + 1;
                setPage(oldPage);
                setSumTotal(totalSum);
                setNewCount(count);
                setCount([]);
                window.open(data.payload.pay_link,'_blank');
                document.cookie =  `promo=`
              }catch(err){
                console.warn(err);
                alert('Error create order')
              }
        }
        
    };

    const backPage = async ()=>{
        const oldPage = page - 1;
        setPage(oldPage);
    };

    let flgDisable = false;
    console.log(order)
    if(page===1){
        flgDisable = order.length===0? true:(order[0].address_1.length===0? true : false)
    } else if(page===3){
        flgDisable = (order[0].phone.length>0&&order[0].address_2.length>0) ? false : true
    };
    
    const MakeOrderButton = ((page)=>{
        if (page===5){
            return(
                <Link to='/' ><button className={styles.returninshop} onClick={()=>setCurrentPath('/')}>Вернутся в магазин</button></Link>
            );
        }
        else{
            return(
                <button className={flgDisable ?styles.nextdisabled :styles.next} onClick={nextPage} disabled={flgDisable}>Далее</button>
                );
        }
    });

    const renderSwitch = (page)=>{
        switch(page){
            case 1:
               return( 
                <Place 
                order={order} 
                setOrder={setOrder}
                count={count}/>
                )
            case 2:
                return( 
                    <Delivery 
                    order={order} 
                    setOrder={setOrder}
                    setDelivery={setDelivery}
                    />
                    )
            case 3:
                return( 
                    <Customer 
                    order={order} 
                    setOrder={setOrder}
                      />
                    )
            case 4:
                return( 
                    <Paymethod
                    paymentId = {paymentId}
                    setPaymentId ={setPaymentId}
                    order={order} 
                    setOrder={setOrder}
                    />
                    )
            case 5:
                return( 
                    <Checkout
                    order={order}
                    delivery={delivery}
                    returnData={returnData}
                    paymentId = {paymentId}
                    totalSum = {sumTotal}
                    newCount={newCount}
                    />
                    )
            default:
                return ''
        }
    };
    return(
    <div>
        <div>
        <Box sx={{ flexGrow: 1 }} className={styles.root}>
            <Grid container spacing={1} direction="row">
            <div className={styles.headergrid}>
                <Link to={'/'} onClick={()=>setCurrentPath('/')}><img src={Image} alt='One Pill' style={{width:"90px",height:"90px", margin:"0 auto", verticalAlign:"middle",display:"inline-block"}} />
                    <div className={styles.name}>
                    <div className={styles.head}>One Pill
                    </div>
                    <div className={styles.subhead}>Все оттенки твоих желаний...</div>
                    </div></Link>
            </div>
            <Grid item xs={12} md={4} sx={{padding:2}} >
                    <div>
                        <div className={styles.checksum}>Итого: {(count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0)} 
                        </div>

                    </div>
            </Grid>
            </Grid>
        </Box>
        </div>       
        <div className={styles.wayorderhead}>Оформление заказа</div>
            <div className={styles.wrapper}>
                <ol className={styles.cstepper}>
                    <li className={styles.cstepper__item}><h9 className={page===1?styles.numberactive:styles.numberdone}>1</h9><h10 className={styles.h7mobile}>Населенный пункт</h10></li>
                    <li className={styles.cstepper__item} ><h9 className={page ===2 ? styles.numberactive : (page>2 ? styles.numberdone:styles.numbernonactive)}>2</h9><h7 className={styles.h7mobile}>Способ доставки</h7></li>
                    <li className={styles.cstepper__item} ><h9 className={page ===3 ? styles.numberactive : (page>3 ? styles.numberdone:styles.numbernonactive)}>3</h9><h7 className={styles.h7mobile}>Получатель</h7></li>
                    <li className={styles.cstepper__item} ><h9 className={page ===4 ? styles.numberactive : (page>4 ? styles.numberdone:styles.numbernonactive)}>4</h9><h7 className={styles.h7mobile}>Оплата</h7></li>
                    <li className={styles.cstepper__item} ><h9 className={page ===5 ? styles.numberdone:styles.numbernonactive}>5</h9><h7 className={styles.h7mobile}>Заказ оформлен</h7></li>
                </ol>
            </div>
            {renderSwitch(page)}
            
        <div className={styles.buttonall}> 
            <div className={styles.backbutton}>{page!==1&&page!==5 ? <button className={styles.back} onClick={backPage}>Назад</button>:''}</div>
             <div className={styles.nextbutton}>{MakeOrderButton(page)}</div>
        </div>
        {page!==5?
        (
            <>
            <div className={styles.wayorderhead}>Информация о заказе</div>
        <div className={styles.detailmainorder}>
            <div className={styles.productlist}>
            {count.map((obj,ind)=>(
                <>
            <div className={styles.mainorder}>
                <a href={`/good/${obj.name}`}><img src={`${backHost}${obj.avatar}`} className={styles.imagekda} alt='img'></img></a>
                <div className={styles.infoorder}><h7 className={styles.nameorder}>{obj.name}</h7></div>
                <div className={styles.priceorder}>
                    <div className={styles.priceorder}>
                        <div className={styles.totalpriceorder}>{obj.sum}</div>
                        <div className={styles.calculorder}>{obj.cnt}шт. х {obj.maxPrice}</div>
                    </div>
                </div>
                
              </div>

              </>
            ))}
            </div>
            <div className={styles.totalsumcnt}> 
              <div className={styles.ts}>
                <div className={styles.descripttotal}>Доставка:</div> <div 
                className={ delivery[0]===0||(delivery[0].free_delivery<(count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0)&&(delivery[0].id===5||delivery[0].id===4)) ? styles.costdel :styles.costdelcost }>{delivery[0]===0 ? '-':(delivery[0].free_delivery<(count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0)&&(delivery[0].id===5||delivery[0].id===4)?'Бесплатно':delivery[0].price)}</div>
              </div>
              <div className={styles.ts}>
                <div className={styles.descripttotal}>Скидка: </div><div className={discount ===0 ?styles.costdel:styles.costdelcost}>{(count ? count.map((obj,i)=> Math.round(obj.maxPrice*(discount)*obj.cnt)):[]).reduce((a,b)=>a+b,0)}</div>
                </div>
                <div className={styles.ts}>
                <div className={styles.descripttotal}>К оплате: </div> <div className={styles.totalpay}>{totalSum} </div>
                </div>
              </div>
        </div></>
        )
        : ''    
    }
        
    </div>
    );
    
};

