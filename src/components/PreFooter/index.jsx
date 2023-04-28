import React from "react";
import Container from '@mui/material/Container';
import styles from "./PreFooter.module.scss";



export const PreFooter = ()=>{

    const currentYear = new Date().getFullYear();
    return(
        <div className={styles.root}>
            {/* <Container maxWidth="lg">
                <div className={styles.container}>
                    <div className={styles.text}>
                   {`© 2014-${currentYear} OnePill. Все права защищены`}                   
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </Container> */}
        </div>
    );
};