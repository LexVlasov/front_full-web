import styles from "./OneClicl.module.scss";
import React from "react";
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import { fetchOneClick } from "../../redux/slices/makeorder";

export const OneClick = ({
    oneClick
    ,setOneClick
}) => {
  const {id} = useParams();
  const [name,setName] = React.useState();
  const [phoneNumber,setPhoneNumber] = React.useState();
  const [call,setCall] =React.useState('0');
  const dispatch = useDispatch();
  const [message,setMessage] = React.useState(`Хочу купить ${id}`);
  
  const handleNameChange =(e)=>{
    setName(e.target.value);
  };

  const handlePhoneNumberChange =(e)=>{
    setPhoneNumber(e.target.value);
  };

  const handleMessageChange =(e)=>{
    setMessage(e.target.value);
  };

  const handleSubmit= async (e)=>{
    try{
      e.preventDefault();
      let newOneClick = [];
      const newData = {
        auth:process.env.REACT_APP_API_KEY ,
        shop_id:31 ,
        phone:phoneNumber,
        name:name,
        message:message,
      };
      newOneClick.push(newData);
      const data = await dispatch(fetchOneClick(newOneClick));
      if(!data.payload){
        alert('Error in make order!');
      }else{
        setCall(data.payload);
      }
    }catch(err){
      console.warn(err);
      alert('Не удалось заказать звонок')
    }
    
  }
    return (
        <div className={oneClick===0?styles.popupdisable:styles.popup}>
            <button className={styles.x} onClick={()=>setOneClick(0)}>X</button>
            <h3 className={styles.htitle}>Заказать в 1 клик</h3>
            <p className={styles.ptext}>Мы сами свяжемся с Вами для уточнения деталей и состава заказа в течение 10-15-и минут. 100%-ная конфиденциальность данных!</p>
            <form className={styles.forminput} onSubmit={handleSubmit}>
            <div className={styles.input_group}>
                <input type="text" id="nameoneclick" className={styles.input_group_input} name="input" value={name} onChange={handleNameChange} required/>
                <label for="nameoneclick" className={styles.input_group_label}>Укажите имя</label>
            </div>
            <div className={styles.input_group}><input type="tel" id="phoneoneclick" className={styles.input_group_input} name="input" value={phoneNumber} onChange={handlePhoneNumberChange} required/> <label for="phoneoneclick" className={styles.input_group_label}>+74951234567</label> </div>
            <div className={styles.input_group}>
                <input type="text" id="messageoneclick" className={styles.input_group_input} name="input" value={message} onChange={handleMessageChange} required/>
                <label for="messageoneclick" className={styles.input_group_label}>Доп. информация</label>
            </div>
            <p className={styles.txtcall}>Нажимая на «Заказать звонок», вы подтверждаете, что ознакомились с <a href="/terms">Пользовательским соглашением</a></p>
            <button className={styles.submit} type="submit">Заказать звонок</button>
            </form>
        </div>
    )
}