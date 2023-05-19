import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import styles from "./makeorder.module.scss";
import Image from "../../uploads/mainInfo/logo.png";
import {Link} from 'react-router-dom';

export const MakeOrder = ({count}) =>{
    
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
                    <li className={styles.cstepper__item}><h7>Населенный пункт</h7></li>
                    <li className={styles.cstepper__item}><h7>Способ доставки</h7></li>
                    <li className={styles.cstepper__item}><h7>Получатель</h7></li>
                    <li className={styles.cstepper__item}><h7>Оплата</h7></li>
                    <li className={styles.cstepper__item}><h7>Заказ оформлен</h7></li>
                </ol>
            </div>
            <div className={styles.wayorder} styles={{width:"19%",}}><p>Населенный пункт</p></div>
            <div className={styles.wayorder} styles={{width:"18%"}}><p>Способ доставки</p></div>
            <div className={styles.wayorder} styles={{width:"15%"}}><p>Получатель</p></div>
            <div className={styles.wayorder} styles={{width:"15%"}}><p>Оплата</p></div>
            <div className={styles.wayorder} styles={{width:"18%"}}><p>Заказ оформлен</p></div>
        <div className={styles.wayorderhead}>Населенный пункт</div>
        <div className={styles.wayorderhead}>Информация о заказе</div>
    </div>
    );
};