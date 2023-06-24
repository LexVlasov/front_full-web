import React, { useState } from "react";
import {Link} from 'react-router-dom';
import styles from "./Header.module.scss";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import { logout } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GppGoodIcon from '@mui/icons-material/GppGood';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CallIcon from '@mui/icons-material/Call';
import { Grid } from "@mui/material";
import { fetchTypes } from "../../redux/slices/posts";

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
    const [menu,setMenu] = useState(1);
    const dispatch = useDispatch();
    const {types} = useSelector((state)=>state.goods);
    const isTypesLoading = types.status === 'loading';
    React.useEffect(()=>{
        dispatch(fetchTypes());
    },[]);
    const ClickMenu = () =>{
        if(menu === 1){
            setMenu(2);
        }else {
            setMenu(1);
        }
    }
    console.log(types);
    return (
        <>
        <div className={styles.rootmobile}>
            {menu === 1 ?
                <button className={styles.iconmobile} onClick={ClickMenu}>&#9776;</button>
            : <button className={styles.iconmobile} onClick={ClickMenu}>&#10006;</button>
            }
            <span className={styles.textheadmobile}><b>One Pill</b></span>
        </div>
        {menu ===2 ? 
            <ul>
                {(!isTypesLoading ? types.items:[...Array(5)]).map((obj,ind)=>(
                    (!isTypesLoading ? 
                        <li className={styles.limobile} key={ind}>{obj.lvl1_type}</li>
                        : '')
                ))}
            </ul>
        :''}
        </>
    );
};