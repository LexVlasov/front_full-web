import React, { useState } from "react";
import {Link} from 'react-router-dom';
import styles from "./Header.module.scss";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from "react-redux";
import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GppGoodIcon from '@mui/icons-material/GppGood';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CallIcon from '@mui/icons-material/Call';
import { fetchTypes } from "../../redux/slices/posts";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export const Header = ()=>{
    return (
        <div className={styles.root}>
            <Container maxWidth="lg" minWidth="xs">

                    <div className={styles.buttons}>
                      
                            <>
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


export const HeaderMobile = ({count})=>{
    const [menu,setMenu] = useState(1);
    const dispatch = useDispatch();
    const {types} = useSelector((state)=>state.goods);
    const isTypesLoading = types.status === 'loaded';
    const [group,setGroup] = useState(1);

    React.useEffect(()=>{
        dispatch(fetchTypes());
    },[dispatch]);
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
        <>
        <div className={styles.rootmobile}>
            {menu === 1 ?
                <button className={styles.iconmobile} onClick={ClickMenu}>&#9776;</button>
            : <button className={styles.iconmobile} onClick={ClickMenu}>&#10006;</button>
            }
            <Link to='/'><span className={styles.textheadmobile}><b>One Pill</b></span></Link>
            <Link to='/cart'><span><ShoppingCart className={styles.cart}/> <span className={styles.countitems}><b>{count.length}</b></span> </span></Link>
        </div> 
        <div>
        {menu === 2 ? 
            <ul className={styles.ulmobile}>
                {(isTypesLoading ? types.items:[...Array(5)]).map((obj,ind)=>(
                    (isTypesLoading ? 
                        (
                            group === 1 ? <li className={styles.limobile} key={ind} onClick={()=>ChooseType(obj.lvl1_type)}>{obj.lvl1_type}</li>
                        :
                          (group===obj.lvl1_type?
                            obj.group_type.map((gr,i)=>(<li className={styles.limobile} key={i}>
                                <Link to={`/types/${gr}`} onClick={LinkTo}>
                                    <button className={styles.typemobilet}>{gr}</button>
                                    </Link>
                            </li>)) : '')
                        )
                        : ''
                        )
                ))}
            </ul>
        :''}
        </div>
        </>
    );
};