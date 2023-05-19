import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import styles from "./mainInfo.module.scss";
import Image from "../../uploads/mainInfo/logo.png";
import {Link} from 'react-router-dom';

export const MainInfo = ({count,setCount}) => {
  const currentPath = window.location.pathname;
  console.log((count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0));
    return (
   
      <Box sx={{ flexGrow: 1 }} className={styles.root}>
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} md={6} lg={4} sx={{padding:2}} style={{minHeight:"100%", margin:"0 auto"}}>
              <Link to={'/'}><img src={Image} alt='One Pill' style={{width:"90px",height:"90px", margin:"0 auto", verticalAlign:"middle",display:"inline-block"}}/>
                <div className={styles.name}>
                <div className={styles.head}>One Pill
                </div>
                <div className={styles.subhead}>Все оттенки твоих желаний...</div>
                </div></Link>
          </Grid>
          <Grid item xs={12} md={6} lg={5} sx={{padding:2}} > 
            {currentPath.substring(1)==='checkout'?(''):

            (<><div className={styles.phonenumber}> +7 (495) 999-99-99 
            </div>
            <div className={styles.schedule}>Ежедневно, с 10 до 21-го ч. Звонок бесплатный</div></>)}
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{padding:2}} >
            {currentPath.substring(1)==='checkout'? 
            (<><div className={styles.checksum}>{(count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0)} 
            </div></>)
            : (<><div className={styles.deliver} > Доставляем за 2-3 часа в Москве. 
            </div></>)}
          </Grid>

    </Grid>
</Box>

    )
}