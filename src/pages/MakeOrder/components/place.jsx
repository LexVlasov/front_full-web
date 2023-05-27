import {useState } from 'react';
import { TextField } from '@mui/material';
import styles from "../makeorder.module.scss";

export const Place = ({city,setCity}) =>{
    const [move,setMove] = useState(!city?0:2);
    
    const Move = (e) =>{
        
        if(!e){
            setMove(1);
        } else{
            setMove(2);
        }
    };
    return(
    <>
                <div className={styles.wayorderhead}>Населенный пункт</div>
                <div className={styles.way}>
               <TextField 
                        className={styles.city} 
                        size="small" 
                        label="Населенный пункт"
                        helperText={!city ? "Необходимо указать населенный пункт":"Например: Москва"}
                        onChange={e=>setCity(e.target.value)}
                        color={move===0?"":(move===1?"error":"success")}
                        onBlur={e=>Move(e.target.value)}
                        focused={move!==0?true:false}
                        value={city}
                    />
                    </div>
                    </>);
};