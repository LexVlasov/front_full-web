import styles from "../makeorder.module.scss";
import React from 'react';
import Ems from "../../../uploads/icons/ems.png";
import RP from "../../../uploads/icons/Russian_Post_logo.png";
import Logo from "../../../uploads/mainInfo/logo.png";
import {fetchDelivery} from "../../../redux/slices/delivery";
import { useDispatch,useSelector } from 'react-redux';


export const Delivery = ({
    delMeth,
    setDelMeth
}) =>{
    const dispatch = useDispatch();
    const {delivery} = useSelector((state) => state.delivery);
    const isDeliveryLoading =delivery.status==='loading';
    
    React.useEffect(()=>{

          dispatch(fetchDelivery());
    },[]);
    
    const deliveryType = (obj) => {
        let delArr =[];
        if(delMeth[0].id!==obj.id){
            delArr.push({
                id:obj.id,
                price:obj.price,
                free_delivery:obj.free_delivery_system,
            })
            setDelMeth(delArr);
        };
    };
    const orderDelivery = isDeliveryLoading ? '' : [...delivery.items].sort((a, b) => parseInt(a.place) - parseInt(b.place))

    return(
    <>
                <div className={styles.wayorderhead}>Способ доставки</div>
                <div className={styles.way}>
                {!isDeliveryLoading? (orderDelivery.map((obj,ind)=>(
                        <button className={delMeth[0].id===obj.id?styles.buttondeliveractive:styles.buttondeliver} onClick={()=>deliveryType(obj)}>
                        <div key={ind} className={styles.deliverybox}>
                            
                            <img src={obj.name.includes('Почт') ? RP :(obj.name.includes('Курьер') ? Logo : Ems)} className={styles.deliveryimg}/>
                            
                            <div className={styles.divdescript}>
                                <div className={styles.namedelivery}>{obj.name} {(obj.name.includes('Курьер') ? ' OnePill' : '')}</div>
                                <div className={styles.descript}><span>Стоимость: </span>{obj.price}</div> 
                            </div>
                            
                        </div>
                        </button>
                    ))):('')}
                    </div>
                    </>);
};