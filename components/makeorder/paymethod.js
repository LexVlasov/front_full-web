import styles from "./makeorder.module.scss";
import React from 'react';
import Image from 'next/image';

const Paymethod =({
    paymentId,
    setPaymentId,
    order,
    setOrder,
    payment,
})=>{

let paymentviaDelivery = [];

    for (const key in payment){
        if(order[0].delivery_id===3||order[0].delivery_id===2||order[0].delivery_id===1){
            if(key==='1'||key==='3'||key==='5'||key==='6'){
                paymentviaDelivery.push(payment[key]);
            }
        }else if(order[0].delivery_id!==3&&order[0].delivery_id!==2&&order[0].delivery_id!==1){
            if(key==='2'||key==='3'||key==='5'||key==='6'){
                paymentviaDelivery.push(payment[key]);
            }
        }
        
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
            return '/upload/icons/cash.png'
        case 5:
            return '/upload/icons/um.png'
        case 6:
            return '/upload/icons/qiwi.png'
        case 3:
            return '/upload/icons/card.png'
        case 1:
            return '/upload/icons/Russian_Post_logo.png'
    };
};

return(
<>
            <div className={styles.wayorderhead}>Оплата</div>
            <div className={styles.way}>
            { (orderPayment.map((obj,ind)=>(
                    obj.id!==4 ? (
                        <button className={order[0].pay_id===obj.id?styles.buttondeliveractive:styles.buttondeliver} onClick={()=>paymentType(obj)} key={ind}>
                    <div  className={styles.deliverybox}>
                        
                        <Image width={800} height={800} alt={obj.id === 3?'Банковской картой':obj.name} src={LogoPayments(obj.id)} className={styles.deliveryimg}/>
                        
                        <div className={styles.divdescript}>
                            <div className={styles.namedelivery}>{obj.id === 3?'Банковской картой':obj.name}</div>
                            <div className={styles.descriptpayment}><span>Скидка: </span><span className={obj.sale==0?'':styles.discountpay}> {obj.sale}% </span></div> 
                        </div>
                        
                    </div>
                    </button>
                    ) : ''
                    
                )))}
                </div>
                </>);
};
export default Paymethod;