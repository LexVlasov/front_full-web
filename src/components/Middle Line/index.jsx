import React from "react";
import {Link} from 'react-router-dom';
import styles from "./Middle.module.scss";

import { Badge, createTheme, Grid, IconButton, ThemeProvider } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export const Middle = ({count})=>{
    
    const theme = createTheme({
        palette:{
          primary:{
            main:"#2b91a7" //2b91a7
          }
        }
      })

    return (
        <div className={styles.root}>
            <div className={styles.cartroot}>


                            <Grid item xs={12} md={6} lg={3} style={{textAlign:"right"}} > 
                                <IconButton aria-label="cart"  className={styles.cart} >
                                <ThemeProvider theme={theme}>
                                <Badge style={{color:"#316ab1"}} >
                                <Link to="/cart/" > 
                                    <ShoppingCart className={styles.cstyle}/>
                                    <div className={styles.info}>Препаратов: <div className={styles.cnt}>{(count ? count.map((obj,i)=> obj.id):[]).length}</div>  На сумму: <div className={styles.sum}>{(count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0)}</div></div>
                                    </Link>
                                </Badge>
                                </ThemeProvider>
                                </IconButton>
                            </Grid>
                       

                            </div>
        </div>
    );
};