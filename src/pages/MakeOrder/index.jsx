import React , { useState,useForm } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import styles from "./makeorder.module.scss";
import Image from "../../uploads/mainInfo/logo.png";
import {Link} from 'react-router-dom';
import { TextField } from '@mui/material';
import {Place,Checkout,Customer,Delivery,Paymethod} from './components/index';
import {Auth,ShopId} from "../../credetinals/index.js";
import { useDispatch, useSelector } from 'react-redux';

import {  fetchReturnData } from '../../redux/slices/makeorder';

export const MakeOrder = ({count}) =>{
    const [city,setCity] = useState();
    const [page,setPage] = useState(1);
    const [order,setOrder] = useState([]);
    const [delivery, setDelivery] = useState([0]);
    const [returnData, setReturnData] = useState();
    const [fio,setFio] = useState('');
    const [zip,setZip] = useState(111111);
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState();
    const [phone,setPhone] = useState();
    const [paymentId,setPaymentId] = useState();

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

    const renderSwitch = (page)=>{
        switch(page){
            case 1:
               return( 
                <Place city={city} setCity={setCity}/>
                )
            case 2:
                return( 
                    <Delivery 
                    delMeth={delivery}
                    setDelMeth={setDelivery}/>
                    )
            case 3:
                return( 
                    <Customer 
                    fio={fio}
                    email={email}
                    address={address}
                    phone={phone}
                    setFio={setFio}
                    setEmail={setEmail}
                    setAddress={setAddress}
                    setPhone={setPhone}
                      />
                    )
            case 4:
                return( 
                    <Paymethod
                    paymentId = {paymentId}
                    setPaymentId ={setPaymentId}
                    delMeth={delivery}
                    />
                    )
            case 5:
                return( 
                    <Checkout/>
                    )
            default:
                return ''
        }
    };


    const nextPage = async ()=>{
        if(page !==4){

        const oldPage = page + 1;
        setPage(oldPage);
        const newData = {
            auth:process.env.API_KEY ? process.env.API_KEY : Auth(),
            shop_id:process.env.SHOP_ID ? process.env.SHOP_ID : ShopId(),
            delivery_id:delivery ? delivery[0].id: '',
            pay_id:paymentId,
            product_id:product_id_count,
            quantity:quantity,
            promocode_id:'',
            name:fio,
            phone:phone,
            email:email,
            address_1:city,
            address_2:address,
            zip:zip,
            ip:'0.0.0.0',
        }
        let newOrder = [];
        newOrder.push(newData);
        setOrder(newOrder)
        } else {

            try{
                const data = await dispatch(fetchReturnData(order));
                if(!data.payload){
                  alert('Error in make order!');
                }
                setReturnData(data.payload);
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

    if(page===1){
        flgDisable = !city ? true : false
    } else if(page===3){
        flgDisable = (phone&&address) ? false : true
    };
    
    console.log(returnData);
    return(
    <div>
        <div>
        <Box sx={{ flexGrow: 1 }} className={styles.root}>
            <Grid container spacing={1} direction="row">
            <Grid item xs={12} md={8} sx={{padding:2}} style={{minHeight:"100%", margin:"0 auto"}}>
                <Link to={'/'}><img src={Image} alt='One Pill' style={{width:"90px",height:"90px", margin:"0 auto", verticalAlign:"middle",display:"inline-block"}}/>
                    <div className={styles.name}>
                    <div className={styles.head}>One Pill
                    </div>
                    <div className={styles.subhead}>Все оттенки твоих желаний...</div>
                    </div></Link>
            </Grid>
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
                    <li className={styles.cstepper__item}><h9 className={page===1?styles.numberactive:styles.numberdone}>1</h9><h10>Населенный пункт</h10></li>
                    <li className={styles.cstepper__item} ><h9 className={page ===2 ? styles.numberactive : (page>2 ? styles.numberdone:styles.numbernonactive)}>2</h9><h7>Способ доставки</h7></li>
                    <li className={styles.cstepper__item} ><h9 className={page ===3 ? styles.numberactive : (page>3 ? styles.numberdone:styles.numbernonactive)}>3</h9><h7>Получатель</h7></li>
                    <li className={styles.cstepper__item} ><h9 className={page ===4 ? styles.numberactive : (page>4 ? styles.numberdone:styles.numbernonactive)}>4</h9><h7>Оплата</h7></li>
                    <li className={styles.cstepper__item} ><h9 className={page ===5 ? styles.numberdone:styles.numbernonactive}>5</h9><h7>Заказ оформлен</h7></li>
                </ol>
            </div>
            {renderSwitch(page)}
            
        <div className={styles.buttonall}> 
            <div className={styles.backbutton}>{page!==1 ? <button className={styles.back} onClick={backPage}>Назад</button>:''}</div>
            <div className={styles.nextbutton}><button className={flgDisable ?styles.nextdisabled :styles.next} onClick={nextPage} disabled={flgDisable}>Далее</button></div>
        </div>
        <div className={styles.wayorderhead}>Информация о заказе</div>
        <div className={styles.detailmainorder}>
            <div className={styles.productlist}>
            {count.map((obj,ind)=>(
                <>
            <div className={styles.mainorder}>
                <a href={`/good/${obj.id}`}><img src={`${backHost}${obj.avatar}`} className={styles.imagekda}></img></a>
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
                <div className={styles.descripttotal}>Стоимость доставки:</div> <div 
                className={ (!delivery||delivery[0].free_delivery<(count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0)) ? styles.costdel :styles.costdelcost }>{!delivery ? 'Не выбрано':(delivery[0].free_delivery<(count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0)?'Бесплатно':delivery[0].price)}</div>
              </div>
              <div className={styles.ts}>
                <div className={styles.descripttotal}>Общая скидка: </div><div className={styles.costdel}>0</div>
                </div>
                <div className={styles.ts}>
                <div className={styles.descripttotal}>К оплате: </div> <div className={styles.totalpay}>{(count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0)} </div>
                </div>
              </div>
        </div>
    </div>
    );
};