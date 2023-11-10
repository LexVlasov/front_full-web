import styles from "./makeorder.module.scss";
import { TextField } from '@mui/material';
import {useState } from 'react';

const Place =({order,setOrder,count})=>{
    const [move,setMove] = useState(order.length===0?0:2);
    
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

    const Move = (e) =>{
        
        if(!e){
            setMove(1);
        } else{
            setMove(2);
        }
    };
    const [discookie,setDiscookie] = useState();
    const uploadCity = (e) =>{
        let newOrder = [];
        const newData = {
            auth:process.env.NEXT_PUBLIC_API_KEY,
            shop_id:31 ,
            delivery_id:'',
            pay_id:'',
            discount:discookie==='TG2023'||discookie==='OP2023'?5:0,
            product_id:product_id_count,
            quantity:quantity,
            promocode_id:'',
            name:'',
            phone:'',
            email:'',
            address_1:e,
            address_2:'',
            zip:'',
            ip:'0.0.0.0',
        };
        newOrder.push(newData);
        setOrder(newOrder)
    }
    
    return(
    <>
                <div className={styles.wayorderhead}>Населенный пункт</div>
                <div className={styles.way}>
               <TextField 
                        className={styles.city} 
                        size="small" 
                        label="Населенный пункт"
                        helperText={order.lenght===0 ? "Необходимо указать населенный пункт":"Например: Москва"}
                        onChange={e=>{uploadCity(e.target.value)}}
                        color={move===0?"":(move===1?"error":"success")}
                        onBlur={e=>Move(e.target.value)}
                        focused={move!==0?true:false}
                        value={order.length >0 ?order[0].address_1:''}
                    />
                    
                    </div>
                    <div className={styles.wayorderhead}>Промокод</div>
                    <div className={styles.way}>
                        <TextField 
                                    className={styles.city} 
                                    size="small" 
                                    label="Промокод"
                                    helperText={"Укажите промокод"}
                                    onChange={e=>{setDiscookie(e.target.value)}}
                                    color={discookie!=='TG2023'&&discookie!=='OP2023'?"error":"success"}
                                    // onBlur={e=>Move(e.target.value)}
                                    focused={discookie?true:false}
                                    value={discookie}
                                />
                    
                    </div>
                    </>);
};
export default Place;