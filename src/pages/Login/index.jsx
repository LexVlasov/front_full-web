import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import styles from "./Login.module.scss";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState:{errors,isValid},} = useForm({
      defaultValues:{
        email:'example@ex.com',
        password:'12345'
      },
      mode:'onChange',
  });

  const onSubmit = async (values) =>{
    const data = await dispatch(fetchAuth(values));
    if(!data.payload){
      alert('Erroe in auth!');
    }
    if('token' in data.payload){
      window.localStorage.setItem('token',data.payload.token);
    } else{
      alert('Ошибка в сохранении токена')
    }
  }
  
  // React.useEffect();

  if(isAuth){
    return <Navigate to="/"/>;
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={styles.field}
        label="E-Mail"
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        type='email'
        {...register('email',{required:'Enter email'})}
        fullWidth
      />
      <TextField className={styles.field} 
      label="Пароль" 
      error={Boolean(errors.password?.message)}
      helperText={errors.password?.message}
      type='password'
      {...register('password',{required:'Enter password'})}
      fullWidth />
      <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
        Войти
      </Button>
      </form>
    </Paper>
  );
};