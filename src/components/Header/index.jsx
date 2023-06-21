import React from "react";
import {Link} from 'react-router-dom';
import styles from "./Header.module.scss";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import { logout } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";
import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GppGoodIcon from '@mui/icons-material/GppGood';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CallIcon from '@mui/icons-material/Call';
import { Grid } from "@mui/material";

export const Header = ()=>{

    const dispatch = useDispatch();
    const onClickLogout = () =>{
        if(window.confirm('Are you sure want to logout?')){
            dispatch(logout());
            window.localStorage.removeItem('token');
        }
        
    };



    return (
        <div className={styles.root}>
            <Container maxWidth="lg">

                    <div className={styles.buttons}>
                      
                            <>
                                <Link to="/about" >
                                    <Button className={styles.newpost}> <InfoIcon className={styles.icon}/> О нас</Button>
                                </Link>
                                <Button className={styles.newpost}><LocalShippingIcon className={styles.icon}/>Доставка</Button>
                                <Link to="/login">
                                    <Button  className={styles.newpost}><PaymentIcon className={styles.icon}/>Оплата</Button>
                                </Link>
                                <Link to="/register">
                                    <Button  className={styles.newpost}> <HistoryIcon className={styles.icon}/>Возврат</Button>
                                </Link>
                                <Link to="/register">
                                    <Button  className={styles.newpost}><QuestionMarkIcon className={styles.icon}/>Вопросы</Button>
                                </Link>
                                <Link to="/register">
                                    <Button  className={styles.newpost}><GppGoodIcon className={styles.icon}/>Сертификаты</Button>
                                </Link>
                                <Link to="/register">
                                    <Button  className={styles.newpost}><RateReviewIcon className={styles.icon}/>Отзывы</Button>
                                </Link>
                                <Link to="/contact">
                                    <Button  className={styles.newpost}><CallIcon className={styles.icon}/>Контакты</Button>
                                </Link>

                            </>
                       
                    </div>

            </Container>
        </div>
    );
};


export const HeaderMobile = ()=>{

    const dispatch = useDispatch();
    const onClickLogout = () =>{
        if(window.confirm('Are you sure want to logout?')){
            dispatch(logout());
            window.localStorage.removeItem('token');
        }
        
    };



    return (
        <div className={styles.rootmobile}>

        </div>
    );
};