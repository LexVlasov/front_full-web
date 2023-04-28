import React from "react";
import Container from '@mui/material/Container';
import styles from "./Footer.module.scss";



export const Footer = ()=>{

    const currentYear = new Date().getFullYear();
    return(
        <div className={styles.root}>
            <Container maxWidth="lg">

                    <div className={styles.text}>
                   {`© 2014-${currentYear} OnePill. Все права защищены`}                   
                    </div>

            </Container>
        </div>
    );
};