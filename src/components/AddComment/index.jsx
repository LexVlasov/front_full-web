import React from "react";

import styles from "./AddComment.module.scss";

import TextField  from "@mui/material/TextField";
import  Avatar  from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { useNavigate, useParams } from "react-router-dom";
import axios from '../../axios.js';

export const Index = () => {
    const backHost = 
    process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
    'http://localhost:4444';
    const {id} = useParams();
    const [text, setText] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);
    const isAuth = useSelector(selectIsAuth);
    const UserData =  useSelector((state)=> state.auth.data);
    const navigate = useNavigate();
    const onSubmit = async () => {
        try{
          setLoading(true);
          const fields = {
            text,
          }
          const {data}= await axios.post(`/posts/${id}/comment`,fields);
          navigate(0);
        }catch(err){
          console.warn(err);
          alert('Error send comment')
        }
      }
    return(
        <>
            {isAuth ? (<div className={styles.root}>
                <Avatar
                    classes={{root:styles.avatar}}
                    src={`${backHost}${UserData.avatarUrl}`}
                    />
                <div className={styles.form}>
                    <TextField
                        label="Написать комментарий"
                        variant="outlined"
                        maxRows={10}
                        multiline
                        fullWidth
                        value={text}
                        onChange={e=>setText(e.target.value)}
                        />
                        <Button onClick={onSubmit} variant="contained">Отправить</Button>
                </div>
            </div>):(null)}
        </>
    );
};