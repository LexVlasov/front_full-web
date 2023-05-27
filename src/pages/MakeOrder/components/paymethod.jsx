import { TextField } from '@mui/material';
import styles from "../makeorder.module.scss";
import axios from "../../../axios";
import React from 'react';
import UM from "../../../uploads/icons/um.png";
import Qiwi from "../../../uploads/icons/qiwi.png";
import Card from "../../../uploads/icons/card.png";
import Cash from "../../../uploads/icons/cash.png";
import RP from "../../../uploads/icons/Russian_Post_logo.png";
export const Paymethod = ({
    paymentId,
    setPaymentId,
    delMeth
}) =>{

    const [payment,setPayment] = React.useState([]);
    const [isLoading,setLoading] = React.useState(true);
    React.useEffect(()=>{
        axios.get('/payment/').then(res=>{
            let newArr = [];
            for (const key in res.data){
                if(delMeth===3||delMeth===2||delMeth===1){
                    if(key==='1'||key==='3'||key==='5'||key==='6'){
                        newArr.push(res.data[key]);
                    }
                }else if(delMeth!==3&&delMeth!==2&&delMeth!==1){
                    if(key==='2'||key==='3'||key==='5'||key==='6'){
                        newArr.push(res.data[key]);
                    }
                }
                
            };
            setPayment(newArr);
            setLoading(false);
          }).catch((err)=>{
            console.warn(err);
            alert('Error in getting delivery method');
          })

    },[]);
    const orderPayment = payment.sort((a, b) => parseInt(a.price) - parseInt(b.price))
    const paymentType = (id) => {
        if(paymentId!==id){
            setPaymentId(id);
        };
    };
    const LogoPayments =(id)=>{
        switch(id){
            case 2:
                return Cash
            case 5:
                return UM
            case 6:
                return Qiwi
            case 3:
                return Card
            case 1:
                return RP
        };
    };

    return(
    <>
                <div className={styles.wayorderhead}>Оплата</div>
                <div className={styles.way}>
                {!isLoading? (orderPayment.map((obj,ind)=>(
                        obj.id!==4 ? (
                            <button className={paymentId===obj.id?styles.buttondeliveractive:styles.buttondeliver} onClick={()=>paymentType(obj.id)}>
                        <div key={ind} className={styles.deliverybox}>
                            
                            <img src={LogoPayments(obj.id)} className={styles.deliveryimg}/>
                            
                            <div className={styles.divdescript}>
                                <div className={styles.namedelivery}>{obj.id === 3?'Банковской картой':obj.name}</div>
                                <div className={styles.descriptpayment}><span>Скидка: </span>{obj.sale}%</div> 
                            </div>
                            
                        </div>
                        </button>
                        ) : ''
                        
                    ))):('')}
                    </div>
                    </>);
};