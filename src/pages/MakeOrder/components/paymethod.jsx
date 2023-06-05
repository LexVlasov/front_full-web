import { TextField } from '@mui/material';
import styles from "../makeorder.module.scss";
import axios from "../../../axios";
import React from 'react';
import UM from "../../../uploads/icons/um.png";
import Qiwi from "../../../uploads/icons/qiwi.png";
import Card from "../../../uploads/icons/card.png";
import Cash from "../../../uploads/icons/cash.png";
import RP from "../../../uploads/icons/Russian_Post_logo.png";
import { useDispatch,useSelector } from 'react-redux';
import {fetchPayment} from "../../../redux/slices/payment";


export const Paymethod = ({
    paymentId,
    setPaymentId,
    order,
    setOrder
}) =>{
    const dispatch = useDispatch();
    const {payment} = useSelector((state) => state.payment);
    const isPaymentLoading =payment.status==='loading';

    React.useEffect(()=>{
            dispatch(fetchPayment());
    },[]);
    let paymentviaDelivery = [];
    if (!isPaymentLoading){
        for (const key in payment.items){
            if(order[0].delivery_id===3||order[0].delivery_id===2||order[0].delivery_id===1){
                if(key==='1'||key==='3'||key==='5'||key==='6'){
                    paymentviaDelivery.push(payment.items[key]);
                }
            }else if(order[0].delivery_id!==3&&order[0].delivery_id!==2&&order[0].delivery_id!==1){
                if(key==='2'||key==='3'||key==='5'||key==='6'){
                    paymentviaDelivery.push(payment.items[key]);
                }
            }
            
        };
    };
    
    const orderPayment = paymentviaDelivery.sort((a, b) => parseInt(a.id) - parseInt(b.id))
    const paymentType = (obj) => {
        let payemntMethod = [];
        let newOrder=[...order];
        if(order[0].pay_id.length===0){
            payemntMethod.push(
                {
                    id:obj.id,
                    name:obj.name
                }
            )
            newOrder[0].pay_id = obj.id;
            setPaymentId(payemntMethod);
            setOrder(newOrder);
        }
        else if(order[0].pay_id!==obj.id){

            payemntMethod.push(
                {
                    id:obj.id,
                    name:obj.name
                }
            )
            newOrder[0].pay_id = obj.id;
            setPaymentId(payemntMethod);
            setOrder(newOrder);
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
                {!isPaymentLoading? (orderPayment.map((obj,ind)=>(
                        obj.id!==4 ? (
                            <button className={order[0].pay_id===obj.id?styles.buttondeliveractive:styles.buttondeliver} onClick={()=>paymentType(obj)}>
                        <div key={ind} className={styles.deliverybox}>
                            
                            <img src={LogoPayments(obj.id)} className={styles.deliveryimg}/>
                            
                            <div className={styles.divdescript}>
                                <div className={styles.namedelivery}>{obj.id === 3?'Банковской картой':obj.name}</div>
                                <div className={styles.descriptpayment}><span>Скидка: </span><span className={obj.sale==0?'':styles.discountpay}> {obj.sale}% </span></div> 
                            </div>
                            
                        </div>
                        </button>
                        ) : ''
                        
                    ))):('')}
                    </div>
                    </>);
};