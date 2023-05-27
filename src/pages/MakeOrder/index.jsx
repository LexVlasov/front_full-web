import React , { useState,useForm } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import styles from "./makeorder.module.scss";
import Image from "../../uploads/mainInfo/logo.png";
import {Link} from 'react-router-dom';
import { TextField } from '@mui/material';
import {Place,Checkout,Customer,Delivery,Paymethod} from './components/index';

export const MakeOrder = ({count}) =>{
    const [city,setCity] = useState();
    const [page,setPage] = useState(1);
    const [order,setOrder] = useState([]);
    const [delivery, setDelivery] = useState(1);
    const [pay, setPay] = useState(0);
    const [fio,setFio] = useState();
    const [email,setEmail] = useState();
    const [address,setAddress] = useState();
    const [phone,setPhone] = useState();
    const [paymentId,setPaymentId] = useState();
    // const [delMeth,setDelMeth] = React.useState(0);
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


    const nextPage = ()=>{
        if(page !==5){
        const oldPage = page + 1;
        setPage(oldPage);
        const newData = {
            shop_id:31,
            address_1:city,
            pay_id:pay,
            delivery_id:delivery,
            name:fio,
            email:email,
            phone:phone,
            paymentId:paymentId,
            address_2:address,
        }
        let newOrder = [];
        newOrder.push(newData);
        setOrder(newOrder)
        }
        
    };
    const backPage = ()=>{
        const oldPage = page - 1;
        setPage(oldPage);
    };

    let flgDisable = false;

    if(page===1){
        flgDisable = !city ? true : false
    } else if(page===3){
        flgDisable = (phone&&address) ? false : true
    };
    console.log(order);
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
    </div>
    );
};