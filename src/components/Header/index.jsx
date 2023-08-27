import React from "react";
import {Link} from 'react-router-dom';
import styles from "./Header.module.scss";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';

import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CallIcon from '@mui/icons-material/Call';
import { TypesBlockMbile } from "../BlockTypes";

export const Header = ({types,isTypesLoading,menu,setMenu,group,setGroup})=>{
    

    const ChooseType = (lvl1)=>{
        if(group!==lvl1){
            setGroup(lvl1);
        }
    };
    const ClickMenu = () =>{
        if(menu === 1){
            setMenu(2);
        }else {
            setMenu(1);
            setGroup(1);
        }
    };

    const LinkTo = () =>{
        setMenu(1);
        setGroup(1);
    };
    
    return (
        <div className={styles.root} >
            <div className={styles.rootmobile}>
            {menu === 1 ?
                <button className={styles.iconmobile} onClick={ClickMenu}>&#9776;</button>
            : <button className={styles.iconmobile} onClick={ClickMenu}>&#10006;</button>
            }
            <Link className={styles.onepill} to='/'><span ><b>One Pill</b></span></Link>
            </div>
            <Container maxWidth="lg" minWidth="xs" className={styles.buttons}>
           

                                <Link to="/about" >
                                    <Button className={styles.newpost}> <InfoIcon className={styles.icon}/> О нас</Button>
                                </Link>
                                <Link to="/deliveryinfo">
                                <Button className={styles.newpost}><LocalShippingIcon className={styles.icon}/>Доставка</Button>
                                </Link>
                                <Link to="/paymentinfo">
                                    <Button  className={styles.newpost}><PaymentIcon className={styles.icon}/>Оплата</Button>
                                </Link>
                                <Link to="/refund">
                                    <Button  className={styles.newpost}> <HistoryIcon className={styles.icon}/>Возврат</Button>
                                </Link>
                                <Link to="/questions">
                                    <Button  className={styles.newpost}><QuestionMarkIcon className={styles.icon}/>Вопросы</Button>
                                </Link>
                                <Link to="/certificates">
                                    <Button  className={styles.newpost}><GppGoodIcon className={styles.icon}/>Сертификаты</Button>
                                </Link>
                                <Link to="/contact">
                                    <Button  className={styles.newpost}><CallIcon className={styles.icon}/>Контакты</Button>
                                </Link>


            </Container>
            <TypesBlockMbile 
                menu={menu}
                types={isTypesLoading ? types.items:[...Array(5)]}
                isTypesLoading={isTypesLoading}
                group={group}
                ChooseType={ChooseType}
                LinkTo={LinkTo}
                />

        </div>
    );
};

