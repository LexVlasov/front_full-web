import React from "react";

import styles from "./underMiddle.module.scss";
import Container from '@mui/material/Container';
import {  Grid,  } from "@mui/material";

export const UnderMiddle = ({count, url})=>{
    
    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                            <>
                            <Grid item xs={12} md={6} lg={6}  className={styles.main}>
                                <a href="/" className={styles.maina}>Главная</a><span className={styles.arrow}>{">"}</span>
                                {(url ? url :'').split('|').map((element)=>(
                                    url ? (<><a href={`/${element.split('(')[0]}`} className={styles.maina}>{element.split('(')[1]}</a><span className={styles.arrow}>{">"}</span></>) : ''
                                ))}

                            </Grid>
                            </>
                       


            </Container>
        </div>
    );
};