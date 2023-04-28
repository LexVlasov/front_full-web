import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import styles from './Login.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchRegister, selectIsAuth } from '../../redux/slices/auth';
import { useForm } from 'react-hook-form';
import { Navigate, useParams } from 'react-router-dom';
import axios from '../../axios.js';

export const Registration = () => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const [avatarUrl, setImageUrl] = React.useState('');
  const inputAvatarRef = React.useRef(null);


  
  
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState:{errors,isValid},} = useForm({
      defaultValues:{
        fullName:'Ivan Ivanov',
        email:'test@test.ru',
        password:'1234',
        avatarUrl:avatarUrl,
      },
      mode:'onChange',
  });
  
  const handleChangeFile = async(event) => {
    try{
      const formData = new FormData();
       const file = event.target.files[0];
      formData.append('image',file);
      const {data} = await axios.post('/avatar',formData);
      setImageUrl(data.url);
      ;
    } catch(err){
      console.warn(err);
      alert('Error upload image')
    }
  };
  const onSubmit = async (values) =>{
    try{
      const data = await dispatch(fetchRegister(values));
         if(!data.payload){
        alert('Error in registration!');
      }
      if('token' in data.payload){
        window.localStorage.setItem('token',data.payload.token);
      } else{
        alert('Ошибка в сохранении токена')
      }
      
    }catch(err){
      console.warn(err);
      alert('Error create account')
    }

    // const data = await dispatch(fetchRegister(values));
    // if(!data.payload){
    //   alert('Erroe in auth!');
    // }
    // if('token' in data.payload){
    //   window.localStorage.setItem('token',data.payload.token);
    // }
  };
 
  
  if(isAuth){
    return <Navigate to="/"/>;
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.avatar}>
        <Button 
        onClick={()=>inputAvatarRef.current.click()} 
        sx={{ width: 100, height: 100 }}
        >
        <input 
        ref={inputAvatarRef}     
        type="file" 
        onChange={handleChangeFile} 
        {...setValue('avatarUrl',avatarUrl)} 
        hidden       
         />
          {avatarUrl ? <img className={styles.imgborder} 
          src={`${backHost}${avatarUrl}`}
          alt="Uploaded"  width= '100' height= '100' /> 
          :<Avatar sx={{ width: 100, height: 100 }}/>}
          
        </Button> 
      </div>
      
      <TextField 
      className={styles.field} 
      label="Полное имя" 
      error={Boolean(errors.fullName?.message)}
      helperText={errors.fullName?.message}
      {...register('fullName',{required:'Enter Full Name'})}
      fullWidth />
      <TextField 
      className={styles.field} 
      label="E-Mail" 
      error={Boolean(errors.email?.message)}
      helperText={errors.email?.message}
      type='email'
      {...register('email',{required:'Enter email'})}
      fullWidth />
      <TextField 
      className={styles.field} 
      label="Пароль"
      error={Boolean(errors.password?.message)}
      helperText={errors.password?.message}
      type='password'
      {...register('password',{required:'Enter password'})} 
      fullWidth />
      <Button disabled={!isValid} type='submit' size="large" variant="contained" fullWidth >
        Зарегистрироваться
      </Button>
      </form>
    </Paper>
  );
};