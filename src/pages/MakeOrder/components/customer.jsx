import { TextField } from '@mui/material';
import styles from "../makeorder.module.scss";
import {useState } from 'react';

export const Customer = ({
    fio,
    email,
    address,
    phone,
    setFio,
    setEmail,
    setAddress,
    setPhone,
    }) =>{
    
    const [move1,setMove1] = useState(!address?0:2);
    const [move2,setMove2] = useState(!phone?0:2);
    
    const Move1  = (e)=>{
        if(!e){
            setMove1(1);
        } else{
            setMove1(2);
        };
    };

    const Move2 = (e)=>{
        if(!e){
            setMove2(1);
        } else{
            setMove2(2);
        };
    };



    return(
    <>
                <div className={styles.wayorderhead}>Данные получателя</div>
                <div style={{marginTop:"20px"}}>100%-ная конфиденциальность! Службы доставки не знают о содержании посылки. Утечка исключена.

</div>
                <div className={styles.customerdiv}>
                    <div className={styles.selfingo}>
                    <h6 style={{fontWeight:"700"}}>Лична информация</h6>
                    <TextField 
                        label="Имя"
                        className={styles.customerfield}
                        value={fio}
                        onChange={e=>setFio(e.target.value)}
                        helperText="Ваше ФИО"
                        size="small" />
                        <TextField
                        label="Контактный телефон*"
                        className={styles.customerfield}
                        onBlur={e=>Move2(e.target.value)}
                        focused={move2!==0?true:false}
                        color={move2===0?"":(move2===1?"error":"success")}
                        value={phone}
                        onChange={e=>setPhone(e.target.value)}
                        helperText={!phone ? "Это поле необходимо заполнить":"74991234567"}
                        size="small" />
                        <TextField
                        label="E-mail"
                        className={styles.customerfield}
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        helperText="example@mail.ru"
                        size="small" />
                    </div>
                    <div className={styles.selfingo}>
                    <h6 style={{fontWeight:"700",paddingLeft:"5%"}}>Адрес доставки</h6>
                        <TextField
                            label="Улица, дом (квартира)*"
                            className={styles.customerfieldadd}
                            onBlur={e=>Move1(e.target.value)}
                            focused={move1!==0?true:false}
                            color={move1===0?"":(move1===1?"error":"success")}
                            value={address}
                            onChange={e=>setAddress(e.target.value)}
                            size="small" />
                    </div>
                        
                    </div>
                    </>);
};