import { Button,TextField } from '@mui/material';
import styles from "../makeorder.module.scss";
import React from 'react';
import axios from "../../../axios";
import Ems from "../../../uploads/icons/ems.png";
import RP from "../../../uploads/icons/Russian_Post_logo.png";
import Logo from "../../../uploads/mainInfo/logo.png";


export const Delivery = ({
    delMeth,
    setDelMeth
}) =>{

    const [delivery,setDelivery] = React.useState([]);
    const [isLoading,setLoading] = React.useState(true);
    const sortData = (id)=>{
        switch(id){
            case 1:
                return 5
            case 2:
                return 6
            case 3:
                return 7
            case 4:
                return 1
            case 5:
                return 2
            case 6:
                return 3
            case 7:
                return 4
        };
    };
    React.useEffect(()=>{
        axios.get('/delivery/').then(res=>{
            let newArr = [];
            for (const key in res.data){
                let resdata = res.data[key];
                resdata.place = sortData(resdata.id);
                newArr.push(resdata);
            };
            setDelivery(newArr);
            setLoading(false);
          }).catch((err)=>{
            console.warn(err);
            alert('Error in getting delivery method');
          })

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
    const orderDelivery = delivery.sort((a, b) => parseInt(a.place) - parseInt(b.place))

    return(
    <>
                <div className={styles.wayorderhead}>Способ доставки</div>
                <div className={styles.way}>
                {!isLoading? (orderDelivery.map((obj,ind)=>(
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