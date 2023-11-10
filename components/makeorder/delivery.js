import styles from "./makeorder.module.scss";
import React from 'react';
import Image from 'next/image';
const Delivery =({
    order,
    setOrder,
    setDelivery,
    delivery
})=>{


    
    const deliveryType = (obj) => {
        let delArr =[...order];
        let newDelivery = [];
        if(order[0].delivery_id!==obj.id){
            delArr[0].delivery_id = obj.id
            newDelivery.push({
                id:obj.id,
                price:obj.price,
                free_delivery:obj.free_delivery_system,
                name:obj.name+' '+(obj.name.includes('Курьер') ? ' OnePill' : '')
            })
            setDelivery(newDelivery);
            setOrder(delArr);

        };
    };
    const orderDelivery = [...delivery].sort((a, b) => parseInt(a.place) - parseInt(b.place))

    return(
    <>
                <div className={styles.wayorderhead}>Способ доставки</div>
                <div className={styles.way}>
                { (orderDelivery.map((obj,ind)=>(
                        <button className={order[0].delivery_id===obj.id?styles.buttondeliveractive:styles.buttondeliver} onClick={()=>deliveryType(obj)} key={ind}>
                        <div  className={styles.deliverybox}>
                            
                            <Image width={800} height={800} alt={obj.name} src={obj.name.includes('Почт') ? '/upload/icons/Russian_Post_logo.png' :(obj.name.includes('Курьер') ? '/upload/logo.webp' : '/upload/icons/ems.png')} className={styles.deliveryimg}/>
                            
                            <div className={styles.divdescript}>
                                <div className={styles.namedelivery}>{obj.name} {(obj.name.includes('Курьер') ? ' OnePill' : '')}</div>
                                <div className={styles.descript}><span>Стоимость: </span>{obj.price}</div> 
                            </div>
                            
                        </div>
                        </button>
                    )))}
                    </div>
                    </>);
};
export default Delivery;