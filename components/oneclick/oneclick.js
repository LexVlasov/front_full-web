import styles from "./oneclick.module.scss";
import {useState} from 'react';
import axios from "../axios";
import Image from 'next/image';
import Link from "next/link";
const OneClick = () =>{

    const [name,setName] = useState();
  const [phoneNumber,setPhoneNumber] = useState();

  const [call,setCall] =useState('0');

  const handleNameChange =(e)=>{
    setName(e.target.value);
  }

  const handlePhoneNumberChange =(e)=>{
    setPhoneNumber(e.target.value);
  };

  const handleSubmit= async (e)=>{
    try{
      e.preventDefault();
      let newOneClick = [];
      const newData = {
        auth:process.env.NEXT_PUBLIC_API_KEY ,
        shop_id:31 ,
        phone:phoneNumber,
        name:name,
        message:'',
      };
      newOneClick.push(newData);
      const data = await axios.post('/oneclick',newOneClick);;
      if(!data.data){
        alert('Error in make order!');
      }else{
        setCall(data.data);
      }
    }catch(err){
      console.warn(err);
      alert('Не удалось заказать звонок')
    }
    
  }

    return(

            <div className={styles.root}>   
            
            <div className={styles.firstdiv}>
            <div className={styles.quest}><b>Остались вопросы?</b></div>
            <div className={styles.txtmanager}>Оставьте заявку и наш менеджер свяжется с Вами!</div>

            <form className={styles.forminput} onSubmit={handleSubmit}>
            <div className={styles.input_group}>
                <input type="text" id="name" className={styles.input_group_input} name="input" value={name} onChange={handleNameChange} required/>
                <label htmlFor="name" className={styles.input_group_label}>Укажите имя</label>
            </div>
            <div className={styles.input_group}><input type="tel" id="phone" className={styles.input_group_input} name="input" value={phoneNumber} onChange={handlePhoneNumberChange} required/> <label htmlFor="phone" className={styles.input_group_label}>Номер телефона</label> </div>
            
            <button className={styles.submit} type="submit">Заказать звонок</button>
            <div className={styles.txtcall}>Нажимая на «Заказать звонок», вы подтверждаете, что ознакомились с <Link href="/terms">Пользовательским соглашением</Link></div>
            </form>

            
            </div>
            <Image width={800} height={800} src = '/oneclick.webp' className={styles.seconddiv} alt='oneclick'/>
            </div>

    )
};

export default OneClick;