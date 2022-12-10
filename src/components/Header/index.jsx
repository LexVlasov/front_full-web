import React from "react";
import {Link} from 'react-router-dom';
import styles from "./Header.module.scss";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";

export const Header =()=>{
    const isAuth = useSelector(selectIsAuth);
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
                <div className={styles.inner}>
                    <Link className={styles.logo} to="/">
                        <div>PROFIT & LOSS</div>
                    </Link>
                    <div className={styles.buttons}>
                        {isAuth ? (
                            <>
                                <Link to="/add-post" className={styles.newpost}>
                                    <div>Написать статью</div>
                                </Link>
                                <Button onClick={onClickLogout} className={styles.newpost}>Выйти</Button>
                            </>
                        ):(
                            <>
                                <Link to="/login">
                                    <Button  className={styles.newpost}>Войти</Button>
                                </Link>
                                <Link to="/register">
                                    <Button  className={styles.newpost}>Создать аккаунт</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};