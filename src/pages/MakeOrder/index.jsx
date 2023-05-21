import React , { useState,useForm } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import styles from "./makeorder.module.scss";
import Image from "../../uploads/mainInfo/logo.png";
import {Link} from 'react-router-dom';
import { TextField } from '@mui/material';

export const MakeOrder = ({count}) =>{
    const [city,setCity] = useState();
    console.log(city);
    return(
    <div>
        <div>
        <Box sx={{ flexGrow: 1 }} className={styles.root}>
            <Grid container spacing={1} direction="row">
            <Grid item xs={12} md={8} sx={{padding:2}} style={{minHeight:"100%", margin:"0 auto"}}>
                <Link to={'/'}><img src={Image} alt='One Pill' style={{width:"90px",height:"90px", margin:"0 auto", verticalAlign:"middle",display:"inline-block"}}/>
                    <div className={styles.name}>
                    <div className={styles.head}>One Pill
                    </div>
                    <div className={styles.subhead}>Все оттенки твоих желаний...</div>
                    </div></Link>
            </Grid>
            <Grid item xs={12} md={4} sx={{padding:2}} >
                    <div>
                        <div className={styles.checksum}>Итого: {(count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0)} 
                        </div>

                    </div>
            </Grid>
            </Grid>
        </Box>
        </div>       
        <div className={styles.wayorderhead}>Оформление заказа</div>
            <div className={styles.wrapper}>
                <ol className={styles.cstepper}>
                    <li className={styles.cstepper__item}><h9 className={styles.numberdone}>1</h9><h10>Населенный пункт</h10></li>
                    <li className={styles.cstepper__item} ><h9 className={styles.numberdone}>2</h9><h7>Способ доставки</h7></li>
                    <li className={styles.cstepper__item} ><h9 className={styles.numberactive}>3</h9><h7>Получатель</h7></li>
                    <li className={styles.cstepper__item} ><h9 className={styles.numbernonactive}>4</h9><h7>Оплата</h7></li>
                    <li className={styles.cstepper__item} ><h9 className={styles.numbernonactive}>5</h9><h7>Заказ оформлен</h7></li>
                </ol>
            </div>

        <div className={styles.wayorderhead}>Населенный пункт</div>
        <div className={styles.way}>

            <TextField 
                className={styles.city} 
                size="small" 
                label="Населенный пункт"
                helperText={!city ? "Необходимо указать населенный пункт":"Например: Москва"}
                onChange={e=>setCity(e.target.value)}
                color={!city?"error":""}
                // focused={!city?true:false}
            />
        </div>
        <div>
            <button>Далее</button>
        </div>
        <div className={styles.wayorderhead}>Информация о заказе</div>
    </div>
    );
};