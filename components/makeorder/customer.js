import styles from "./makeorder.module.scss";
import {useState } from 'react';
import { TextField } from '@mui/material';

const Customer =({
    order,
    setOrder
    })=>{
        const [move1,setMove1] = useState(order[0].address_2.length===0?0:2);
        const [move2,setMove2] = useState(order[0].phone.length===0?0:2);
    
        
        const Move1  = (e)=>{
            if(!e||(!e?'':e).length<10){
                setMove1(1);
            } else{
                setMove1(2);
            };
        };
    
        const Move2 = (e)=>{
            if(!e||(!e?'':e).length<10){
                setMove2(1);
            } else{
                setMove2(2);
            };
        };
    
        const setFio = (e)=>{
            let newOrder = [...order];
            newOrder[0].name = e;
            setOrder(newOrder);
        };
    
        const setPhone = (e)=>{
            let newOrder = [...order];
            newOrder[0].phone = e;
            setOrder(newOrder);
        };
    
        const setEmail = (e)=>{
            let newOrder = [...order];
            newOrder[0].email = e;
            setOrder(newOrder);
        };
    
        const setAddress = (e)=>{
            let newOrder = [...order];
            newOrder[0].address_2 = e;
            setOrder(newOrder);
        };
    
        const setZip = (e)=>{
            let newOrder = [...order];
            newOrder[0].zip = e;
            setOrder(newOrder);
        };
    
        return(
        <>
                    <div className={styles.wayorderhead}>Данные получателя</div>
                    <div style={{marginTop:"20px"}}>100%-ая конфиденциальность! Службы доставки не знают о содержании посылки. Утечка исключена.
    
    </div>
                    <div className={styles.customerdiv}>
                        <div className={styles.selfingo}>
                        <h3 style={{fontWeight:"700"}}>Личная информация</h3>
                        <TextField 
                            label="Имя"
                            className={styles.customerfield}
                            value={order[0].name}
                            onChange={e=>setFio(e.target.value)}
                            helperText="Ваше ФИО"
                            size="small" />
                            <TextField
                            label="Контактный телефон*"
                            className={styles.customerfield}
                            onBlur={e=>Move2(e.target.value)}
                            focused={move2!==0?true:false}
                            color={move2===0?"":(move2===1?"error":"success")}
                            value={order[0].phone}
                            onChange={e=>setPhone(e.target.value)}
                            helperText={(order[0].phone.length<10) ? "Это поле необходимо заполнить в формате 4951234567":"74991234567"}
                            size="small" />
                            <TextField
                            label="E-mail"
                            className={styles.customerfield}
                            value={order[0].email}
                            onChange={e=>setEmail(e.target.value)}
                            helperText="example@mail.ru"
                            size="small" />
                        </div>
                        <div className={styles.selfingo}>
                        <h3 style={{fontWeight:"700"}}>Адрес доставки</h3>
                            <TextField
                                label="Улица, дом (квартира)*"
                                className={styles.customerfieldadd}
                                helperText={"Можно указать 'До востребования'"}
                                onBlur={e=>Move1(e.target.value)}
                                focused={move1!==0?true:false}
                                color={move1===0?"":(move1===1?"error":"success")}
                                value={order[0].address_2}
                                onChange={e=>setAddress(e.target.value)}
                                size="small" />
                            {order[0].delivery_id===1||order[0].delivery_id===2||order[0].delivery_id===3 ?
                            (<TextField
                                label="Индекс*"
                                className={styles.customerfieldadd}
                                helperText={"Индекс места получения"}
                                value={order[0].zip}
                                onChange={e=>setZip(e.target.value)}
                                size="small" /> ) : ''   
                            }
                               
                        </div>
                            
                        </div>
                        </>);
};
export default Customer;